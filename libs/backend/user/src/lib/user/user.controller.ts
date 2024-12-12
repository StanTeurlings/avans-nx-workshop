import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';
import { userService } from './user.service';
import { IUserInfo, IUser } from '@avans-nx-workshop/shared/api';
import { CreateuserDto, UpdateuserDto } from '@avans-nx-workshop/backend/dto';
import { userExistGuard } from './user-exists.guard';
import { AuthGuard } from '@avans-nx-workshop/backend/auth';

@Controller('user')
export class userController {
    constructor(private readonly userService: userService) {}

    @Get()
    async findAll(): Promise<IUserInfo[]> {
        return this.userService.findAll();
    }

    // this method should precede the general getOne method, otherwise it never matches
    // @Get('self')
    // async getSelf(@InjectToken() token: Token): Promise<IUser> {
    //     const result = await this.userService.getOne(token.id);
    //     return result;
    // }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IUser | null> {
        return this.userService.findOne(id);
    }

    @Post('')
    @UseGuards(userExistGuard, AuthGuard)
    create(@Body() user: CreateuserDto): Promise<IUserInfo> {
        return this.userService.create(user);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() user: UpdateuserDto
    ): Promise<IUserInfo | null> {
        return this.userService.update(id, user);
    }
}
