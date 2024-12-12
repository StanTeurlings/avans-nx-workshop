import { Injectable, Logger } from '@nestjs/common';
import {
    ConflictException,
    UnauthorizedException
} from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import {
    user as userModel,
    userDocument
} from '@avans-nx-workshop/backend/user';
import { JwtService } from '@nestjs/jwt';
import { IUserCredentials, IUserIdentity } from '@avans-nx-workshop/shared/api';
import { CreateuserDto } from '@avans-nx-workshop/backend/dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    //
    private readonly logger = new Logger(AuthService.name);

    constructor(
        @InjectModel('user') private userModel: Model<userDocument>,
        private jwtService: JwtService
    ) {}

    async validateuser(credentials: IUserCredentials): Promise<any> {
        this.logger.log('validateuser');
        const user = await this.userModel.findOne({
            emailAddress: credentials.emailAddress
        });
        if (user && user.password === credentials.password) {
            return user;
        }
        return null;
    }

    async login(credentials: IUserCredentials): Promise<IUserIdentity> {
        this.logger.log('login ' + credentials.emailAddress);
        return await this.userModel
            .findOne({
                emailAddress: credentials.emailAddress
            })
            .select('+password')
            .exec()
            .then((user) => {
                if (user && user.password === credentials.password) {
                    const payload = {
                        user_id: user._id
                    };
                    return {
                        _id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        emailAddress: user.emailAddress,
                        profileImgUrl: user.profileImgUrl,
                        userRole: user.userRole,
                        token: this.jwtService.sign(payload)
                    };
                } else {
                    const errMsg = 'Email not found or password invalid';
                    this.logger.debug(errMsg);
                    throw new UnauthorizedException(errMsg);
                }
            })
            .catch((error) => {
                return error;
            });
    }

    async register(user: CreateuserDto): Promise<IUserIdentity> {
        this.logger.log(`Register user ${user.name}`);
        if (await this.userModel.findOne({ emailAddress: user.emailAddress })) {
            this.logger.debug('user exists');
            throw new ConflictException('user already exist');
        }
        this.logger.debug('user not found, creating');
        const createdItem = await this.userModel.create(user);
        return createdItem;
    }
}
