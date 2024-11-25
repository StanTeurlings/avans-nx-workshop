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
    constructor(private readonly adopterService: AdopterService) {}

    @Get()
    async findAll(): Promise<IAdopterInfo[]> {
        return this.adopterService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IAdopter | null> {
        return this.adopterService.findOne(id);
    }

    @Post('')
    @UseGuards(AdopterExistGuard)
    create(@Body() adopter: CreateAdopterDto): Promise<IAdopterInfo> {
        return this.adopterService.create(adopter);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() adopter: UpdateAdopterDto
    ): Promise<IAdopterInfo | null> {
        return this.adopterService.update(id, adopter);
    }

    @Get('self')
    async getSelf(@Param('id') id: string): Promise<IAdopter | null> {
        return this.adopterService.findOne(id);
    }
}