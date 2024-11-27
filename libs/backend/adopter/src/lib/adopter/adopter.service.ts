import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Adopter as AdopterModel, AdopterDocument } from './adopter.schema';
import { IAdopter, IAdopterInfo } from '@avans-nx-workshop/shared/api';
import { CreateAdopterDto, UpdateAdopterDto } from '@avans-nx-workshop/backend/dto';

@Injectable()
export class AdopterService {
    private readonly logger: Logger = new Logger(AdopterService.name);

    constructor(
        @InjectModel(AdopterModel.name) private AdopterModel: Model<AdopterDocument>
    ) {}

    async findAll(): Promise<IAdopterInfo[]> {
        this.logger.log(`Finding all items`);
        const items = await this.AdopterModel.find();
        return items;
    }

    async findOne(_id: string): Promise<IAdopter | null> {
        this.logger.log(`finding Adopter with id ${_id}`);
        const item = await this.AdopterModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async findOneByEmail(email: string): Promise<IAdopterInfo | null> {
        this.logger.log(`Finding Adopter by email ${email}`);
        const item = this.AdopterModel
            .findOne({ emailAddress: email })
            .select('-password')
            .exec();
        return item;
    }

    async create(Adopter: CreateAdopterDto): Promise<IAdopterInfo> {
        this.logger.log(`Create Adopter ${Adopter.firstName}`);
        const createdItem = this.AdopterModel.create(Adopter);
        return createdItem;
    }

    async update(_id: string, Adopter: UpdateAdopterDto): Promise<IAdopterInfo | null> {
        this.logger.log(`Update Adopter ${Adopter.firstName}`);
        return this.AdopterModel.findByIdAndUpdate({ _id }, Adopter);
    }
}
