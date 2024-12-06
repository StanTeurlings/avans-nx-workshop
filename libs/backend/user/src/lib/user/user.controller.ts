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
import { IuserInfo, Iuser } from '@avans-nx-workshop/shared/api';
import { CreateuserDto, UpdateuserDto } from '@avans-nx-workshop/backend/dto';
import { userExistGuard } from './user-exists.guard';

@Controller('user')
export class userController {
    constructor(private readonly userService: userService) {}

    @Get()
    async findAll(): Promise<IuserInfo[]> {
        return this.userService.findAll();
    }

    // this method should precede the general getOne method, otherwise it never matches
    // @Get('self')
    // async getSelf(@InjectToken() token: Token): Promise<Iuser> {
    //     const result = await this.userService.getOne(token.id);
    //     return result;
    // }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Iuser | null> {
        return this.userService.findOne(id);
    }

    @Post('')
    @UseGuards(userExistGuard)
    create(@Body() user: CreateuserDto): Promise<IuserInfo> {
        return this.userService.create(user);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() user: UpdateuserDto
    ): Promise<IuserInfo | null> {
        return this.userService.update(id, user);
    }
}
