import { InstanceType, ModelType, prop } from 'typegoose';
import { BaseModel, schemaOptions } from 'src/common/base/base.model';

export class User extends BaseModel<User> {
    @prop({ required: [true, 'User Name is required'] })
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

    static get model(): ModelType<User> {
        return new User().getModelForClass(User, { schemaOptions });
    }

    static get modelName(): string {
        return this.model.modelName;
    }

    static createModel(): InstanceType<User> {
        return new this.model();
    }
}

export const UserModel = new User().getModelForClass(User, { schemaOptions })
