import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { user as userModel, userDocument } from './user.schema';
import { Iuser, IuserInfo } from '@avans-nx-workshop/shared/api';
import { CreateuserDto, UpdateuserDto } from '@avans-nx-workshop/backend/dto';

@Injectable()
export class userService {
    private readonly logger: Logger = new Logger(userService.name);

    constructor(
        @InjectModel(userModel.name) private userModel: Model<userDocument>
    ) {}

    async findAll(): Promise<IuserInfo[]> {
        this.logger.log(`Finding all items`);
        const items = await this.userModel.find();
        return items;
    }

    async findOne(_id: string): Promise<Iuser | null> {
        this.logger.log(`finding user with id ${_id}`);
        const item = await this.userModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async findOneByEmail(email: string): Promise<IuserInfo | null> {
        this.logger.log(`Finding user by email ${email}`);
        const item = this.userModel
            .findOne({ emailAddress: email })
            .select('-password')
            .exec();
        return item;
    }

    async create(user: CreateuserDto): Promise<IuserInfo> {
        this.logger.log(`Create user ${user.name}`);
        const createdItem = this.userModel.create(user);
        return createdItem;
    }

    async update(_id: string, user: UpdateuserDto): Promise<IuserInfo | null> {
        this.logger.log(`Update user ${user.name}`);
        return this.userModel.findByIdAndUpdate({ _id }, user);
    }
}
