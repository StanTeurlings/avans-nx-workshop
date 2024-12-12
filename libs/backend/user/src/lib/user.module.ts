import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from './user/user.schema';
import { userService } from './user/user.service';
import { userController } from './user/user.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: user.name, schema: userSchema }]),
        JwtModule.register({
            secret: process.env['JWT_SECRET'] || 'secretstring',
            signOptions: { expiresIn: '12 days' }
        })
    ],
    providers: [userService],
    controllers: [userController],
    exports: [userService]
})
export class UsersModule {}
