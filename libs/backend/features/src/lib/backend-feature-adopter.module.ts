import { Module } from "@nestjs/common";
import { AdopterController } from "./adopter/adopter.controller";
import { AdopterService } from "./adopter/adopter.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Adopter, AdopterSchema } from "./adopter/adopter.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Adopter.name, schema: AdopterSchema }
        ])
    ],
    controllers: [AdopterController],
    providers: [AdopterService],
    exports: [AdopterService]
})
export class BackendFeatureAdopterModule {}