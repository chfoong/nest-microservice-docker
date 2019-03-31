import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { BaseService } from 'src/common/base/base.service';
import { MapperService } from 'src/common/mapper/mapper/mapper.service';
import { Item } from 'src/orders/models/item.model';

@Injectable()
export class ItemsService extends BaseService<Item> {
    constructor(
        @InjectModel(Item.modelName) private readonly _itemModel: ModelType<Item>,
        private readonly _mapperService: MapperService,
    ) {
        super();
        this._model = _itemModel;
        this._mapper = _mapperService.mapper;
    }
}
