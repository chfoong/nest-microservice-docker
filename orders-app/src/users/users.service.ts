import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { BaseService } from 'src/common/base/base.service';
import { MapperService } from 'src/common/mapper/mapper/mapper.service';
import { User } from 'src/users/models/user.model';

@Injectable()
export class UsersService extends BaseService<User> {
    constructor(
        @InjectModel(User.modelName) private readonly _userModel: ModelType<User>,
        private readonly _mapperService: MapperService,
    ) {
        super();
        this._model = _userModel;
        this._mapper = _mapperService.mapper;
    }
}