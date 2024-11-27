import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';
import { AdopterService } from './adopter.service';
import { IAdopterInfo, IAdopter } from '@avans-nx-workshop/shared/api';
import { CreateAdopterDto, UpdateAdopterDto } from '@avans-nx-workshop/backend/dto';
import { AdopterExistGuard } from './adopter-exists.guard';

@Controller('adopter')
export class AdopterController {
    constructor(private readonly AdopterService: AdopterService) {}

    @Get()
    async findAll(): Promise<IAdopterInfo[]> {
        return this.AdopterService.findAll();
    }

    // this method should precede the general getOne method, otherwise it never matches
    // @Get('self')
    // async getSelf(@InjectToken() token: Token): Promise<IAdopter> {
    //     const result = await this.AdopterService.getOne(token.id);
    //     return result;
    // }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IAdopter | null> {
        return this.AdopterService.findOne(id);
    }

    @Post('')
    @UseGuards(AdopterExistGuard)
    create(@Body() Adopter: CreateAdopterDto): Promise<IAdopterInfo> {
        return this.AdopterService.create(Adopter);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() Adopter: UpdateAdopterDto
    ): Promise<IAdopterInfo | null> {
        return this.AdopterService.update(id, Adopter);
    }
}
