import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { user, userSchema,  UsersModule } from '@avans-nx-workshop/backend/user';
import { AuthService } from './auth/auth.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'user', schema: userSchema }]),
        forwardRef(() => UsersModule),
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
