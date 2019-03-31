import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { BaseService } from 'src/common/base/base.service';
import { Order, OrderModel } from './models/order.model';
import { MapperService } from 'src/common/mapper/mapper/mapper.service';
import { OrderParams } from './models/view-models/order-params.model';
import { Item } from './models/item.model';

@Injectable()
export class OrdersService extends BaseService<Order> {
    constructor(
        @InjectModel(Order.modelName) private readonly _orderModel: ModelType<Order>,
        private readonly _mapperService: MapperService,
    ) {
        super();
        this._model = _orderModel;
        this._mapper = _mapperService.mapper;
    }

    async createOrder(user: string, items: Item[]): Promise<Order> {
        const newOrder = new OrderModel();

        newOrder.items = items;
        newOrder.total = items.reduce((total, item) => {
            return total + item.price;
        }, 0);

        try {
            const result = await this.create(newOrder);
            return result.toJSON() as Order;
        } catch (e) {
            throw new InternalServerErrorException(e);
        }
    }
}
