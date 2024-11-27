import { Module } from '@nestjs/common';
import { MealController } from './meal/meal.controller';
import { MealService } from './meal/meal.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Adopter as AdopterModel, AdopterSchema } from '@avans-nx-workshop/backend/adopter';
import { Meal as MealModel, MealSchema } from './meal/meal.schema';
import { AuthModule } from '@avans-nx-workshop/backend/auth';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: MealModel.name, schema: MealSchema },
            { name: AdopterModel.name, schema: AdopterSchema }
        ]),
        JwtModule,
        AuthModule
    ],
    controllers: [MealController],
    providers: [MealService],
    exports: [MealService]
})
export class BackendFeaturesMealModule {}
