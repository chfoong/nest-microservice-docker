import { InstanceType, ModelType, prop } from 'typegoose';
import { BaseModel, schemaOptions } from 'src/common/base/base.model';

export class Customer extends BaseModel<Customer> {
    @prop({ required: [true, 'Customer Name is required'] })
    name: string;

    @prop()
    permanentStubBearer: string;

    @prop()
    ccNumber: string;

    @prop()
    ccName: string;

    @prop()
    ccExpiry: string;

    @prop()
    ccCvc: string;

    static get model(): ModelType<Customer> {
        return new Customer().getModelForClass(Customer, { schemaOptions });
    }

    static get modelName(): string {
        return this.model.modelName;
    }

    static createModel(): InstanceType<Customer> {
        return new this.model();
    }
}
