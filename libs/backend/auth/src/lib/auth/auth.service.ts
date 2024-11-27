import { Injectable, Logger } from '@nestjs/common';
import {
    ConflictException,
    UnauthorizedException
} from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import {
    Adopter as AdopterModel,
    AdopterDocument
} from '@avans-nx-workshop/backend/adopter';
import { JwtService } from '@nestjs/jwt';
import { IAdopterCredentials, IAdopterIdentity } from '@avans-nx-workshop/shared/api';
import { CreateAdopterDto } from '@avans-nx-workshop/backend/dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    //
    private readonly logger = new Logger(AuthService.name);

    constructor(
        @InjectModel(AdopterModel.name) private adopterModel: Model<AdopterDocument>,
        private jwtService: JwtService
    ) {}

    async validateAdopter(credentials: IAdopterCredentials): Promise<any> {
        this.logger.log('validateAdopter');
        const adopter = await this.adopterModel.findOne({
            emailAddress: credentials.emailAddress
        });
        if (adopter && adopter.password === credentials.password) {
            return adopter;
        }
        return null;
    }

    async login(credentials: IAdopterCredentials): Promise<IAdopterIdentity> {
        this.logger.log('login ' + credentials.emailAddress);
        return await this.adopterModel
            .findOne({
                emailAddress: credentials.emailAddress
            })
            .select('+password')
            .exec()
            .then((adopter) => {
                if (adopter && adopter.password === credentials.password) {
                    const payload = {
                        adopter_id: adopter._id
                    };
                    return {
                        _id: adopter._id,
                        firstName: adopter.firstName,
                        lastName: adopter.lastName,
                        emailAddress: adopter.emailAddress,
                        profileImgUrl: adopter.profileImgUrl,
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

    async register(adopter: CreateAdopterDto): Promise<IAdopterIdentity> {
        this.logger.log(`Register adopter ${adopter.firstName}`);
        if (await this.adopterModel.findOne({ emailAddress: adopter.emailAddress })) {
            this.logger.debug('adopter exists');
            throw new ConflictException('adopter already exist');
        }
        this.logger.debug('adopter not found, creating');
        const createdItem = await this.adopterModel.create(adopter);
        return createdItem;
    }
}
