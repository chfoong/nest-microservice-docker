import { ApiModelProperty } from '@nestjs/swagger';
import { Customer } from './customer';
import { Item } from './item';
import { IsNotEmpty, ValidateNested, IsNumber, IsString, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class Order {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @ApiModelProperty()
    @ValidateNested()
    @IsNotEmpty()
    @Type(() => Customer)
    readonly customer: Customer;

    @ApiModelProperty({ type: [Item], isArray: true, example: [ { id: 1, name: 'Sample Book', price: 10.00 } ] })
    @ValidateNested({ each: true })
    @IsNotEmpty()
    @Type(() => Item)
    readonly items: Item[];

    @ApiModelProperty()
    @IsString()
    readonly status: string;

    @ApiModelProperty()
    @IsNumber()
    @IsPositive()
    readonly total: number;

}
