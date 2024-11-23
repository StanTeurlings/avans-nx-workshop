import { HttpException, Injectable, Logger } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Adopter as AdopterModel, AdopterDocument } from "./adopter.schema";
import { IAdopter, IAdopterInfo } from "@avans-nx-workshop/shared/api";
import { CreateAdopterDto, UpdateAdopterDto } from "@avans-nx-workshop/backend/dto";

@Injectable()
export class AdopterService {
    private readonly logger: Logger = new Logger(AdopterService.name);

    constructor(
        @InjectModel(AdopterModel.name) private adopterModel: Model<AdopterDocument>
    ) {}

    async findAll(): Promise<IAdopterInfo[]> {
        this.logger.log(`Finding all items`);
        const items = await this.adopterModel.find();
        return items;
    }

    async findOne(_id: string): Promise<IAdopter | null> {
        this.logger.log(`finding adopter with id ${_id}`);
        const item = await this.adopterModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async create(adopter: CreateAdopterDto): Promise<IAdopterInfo> {
        this.logger.log(`Create adopter ${adopter.firstName}`);
        const createdItem = this.adopterModel.create(adopter);
        return createdItem;
    }

    async update(_id: string, adopter: UpdateAdopterDto): Promise<IAdopterInfo | null> {
        this.logger.log(`Update adopter ${adopter.firstName}`);
        return this.adopterModel.findByIdAndUpdate({ _id }, adopter);
    }

    async delete(_id: string): Promise<IAdopterInfo | null> {
        this.logger.log(`Delete adopter with id ${_id}`);
        return this.adopterModel.findByIdAndDelete({ _id });
    }
}