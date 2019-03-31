import { BaseModel, schemaOptions } from 'src/common/base/base.model';
import { InstanceType, ModelType, prop } from 'typegoose';
import { Customer } from './customer.model';
import { OrderStatus } from './order-status.enum';
import { Item } from './item.model';

export class Order extends BaseModel<Order> {
    @prop()
    customer: Customer;

    @prop()
    items: Item[];

    @prop({ enum: OrderStatus, default: OrderStatus.Created })
    status: OrderStatus;

    @prop({ required: [true, 'Total is required']})
    total: number;

    static get model(): ModelType<Order> {
        return new Order().getModelForClass(Order, { schemaOptions });
    }

    static get modelName(): string {
        return this.model.modelName;
    }

    static createModel(): InstanceType<Order> {
        return new this.model();
    }
}

export const OrderModel = new Order().getModelForClass(Order, { schemaOptions })
