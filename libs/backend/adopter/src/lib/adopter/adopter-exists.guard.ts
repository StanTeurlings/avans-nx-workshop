import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Adopter } from './adopter.schema';
import { Observable } from 'rxjs';

@Injectable()
export class AdopterExistGuard implements CanActivate {
    constructor(@InjectModel('Adopter') private readonly adopterModel: Model<Adopter>) {}

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const adopter = context.switchToHttp().getRequest().body;
        return !!this.adopterModel.findOne({ firstName: adopter.firstName });
    }
}
