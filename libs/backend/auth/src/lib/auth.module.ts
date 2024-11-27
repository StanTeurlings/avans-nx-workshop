import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { Adopter, AdopterSchema, AdoptersModule } from '@avans-nx-workshop/backend/adopter';
import { AuthService } from './auth/auth.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Adopter.name, schema: AdopterSchema }]),
        AdoptersModule,
        JwtModule.register({
            secret: process.env['JWT_SECRET'] || 'secretstring',
            signOptions: { expiresIn: '12 days' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}
