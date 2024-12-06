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
    IuserCredentials,
    IuserIdentity,
    IuserRegistration
} from '@avans-nx-workshop/shared/api';
import { CreateuserDto } from '@avans-nx-workshop/backend/dto';
import { userExistGuard } from '@avans-nx-workshop/backend/user';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private authService: AuthService) {}

    @Public()
    @Post('login')
    async login(@Body() credentials: IuserCredentials): Promise<IuserIdentity> {
        this.logger.log('Login');
        return await this.authService.login(credentials);
    }

    @Public()
    @UseGuards(userExistGuard)
    @Post('register')
    async register(@Body() user: CreateuserDto): Promise<IuserIdentity> {
        this.logger.log('Register');
        return await this.authService.register(user);
    }
}
