import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { SchemaOptions } from 'mongoose';
import { Typegoose, prop, pre, ModelType } from 'typegoose';

export abstract class BaseModel<T> extends Typegoose {
    @prop()
    @ApiModelPropertyOptional({ type: String, format: 'date-time '})
    createdAt: Date;

    @prop()
    @ApiModelPropertyOptional({ type: String, format: 'date-time '})
    updatedAt: Date;

    @prop()
    @ApiModelPropertyOptional()
    id: string;

}

export const schemaOptions: SchemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true,
        getters: true,
    },
};
