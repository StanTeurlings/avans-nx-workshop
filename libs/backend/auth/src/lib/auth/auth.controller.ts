import {
    Controller,
    Request,
    Post,
    UseGuards,
    Logger,
    Body
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../decorators/decorators';
import {
    IAdopterCredentials,
    IAdopterIdentity,
    IAdopterRegistration
} from '@avans-nx-workshop/shared/api';
import { CreateAdopterDto } from '@avans-nx-workshop/backend/dto';
import { AdopterExistGuard } from '@avans-nx-workshop/backend/adopter';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private authService: AuthService) {}

    @Public()
    @Post('login')
    async login(@Body() credentials: IAdopterCredentials): Promise<IAdopterIdentity> {
        this.logger.log('Login');
        return await this.authService.login(credentials);
    }

    @Public()
    @UseGuards(AdopterExistGuard)
    @Post('register')
    async register(@Body() Adopter: CreateAdopterDto): Promise<IAdopterIdentity> {
        this.logger.log('Register');
        return await this.authService.register(Adopter);
    }
}
