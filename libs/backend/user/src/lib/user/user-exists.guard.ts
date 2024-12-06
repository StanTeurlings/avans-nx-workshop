import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './user.schema';
import { Observable } from 'rxjs';

@Injectable()
export class userExistGuard implements CanActivate {
    constructor(@InjectModel('user') private readonly userModel: Model<user>) {}

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const user = context.switchToHttp().getRequest().body;
        return !!this.userModel.findOne({ name: user.name });
    }
}
