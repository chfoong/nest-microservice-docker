import { ApiModelProperty } from '@nestjs/swagger';
import { Customer } from './customer';
import { Item } from './item';
import { IsNotEmpty, ValidateNested, IsNumber, IsString, IsPositive, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class Order {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly _id: string;

    @ApiModelProperty()
    @ValidateNested()
    @IsNotEmpty()
    @Type(() => Customer)
    readonly customer: Customer;

    @ApiModelProperty({ type: [Item], isArray: true, example: [ { id: 1, name: 'Sample Book', price: 10.00 } ] })
    @ValidateNested({ each: true })
    @IsNotEmpty()
    @IsArray()
    @Type(() => Item)
    readonly items: Item[];

    @ApiModelProperty()
    @IsString()
    readonly status: string;

    @ApiModelProperty({ example: 10.00 })
    @IsNumber()
    @IsPositive()
    readonly total: number;

}
