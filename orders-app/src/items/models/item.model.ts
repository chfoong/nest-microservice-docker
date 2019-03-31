import { InstanceType, ModelType, prop } from 'typegoose';
import { BaseModel, schemaOptions } from 'src/common/base/base.model';

export class Item extends BaseModel<Item> {
    @prop({ required: [true, 'Item Name is required'] })
    name: string;

    @prop({ required: [true, 'Price is required']})
    price: number;

    static get model(): ModelType<Item> {
        return new Item().getModelForClass(Item, { schemaOptions });
    }

    static get modelName(): string {
        return this.model.modelName;
    }

    static createModel(): InstanceType<Item> {
        return new this.model();
    }
}

export const ItemModel = new Item().getModelForClass(Item, { schemaOptions })
