import { Module } from '@nestjs/common';
import { userController } from './user/user.controller';
import { userService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from './user/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: user.name, schema: userSchema }
        ])
    ],
    controllers: [userController],
    providers: [userService],
    exports: [userService]
})
export class usersModule {}
