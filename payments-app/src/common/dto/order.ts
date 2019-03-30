import { ApiModelProperty } from '@nestjs/swagger';
import { Customer } from './customer';
import { Item } from './item';

export class Order {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly customer: Customer;

    @ApiModelProperty({ type: [Item], isArray: true, example: [ { id: 1, name: 'Sample Book', price: 10.00 } ] })
    readonly items: Item[];

    @ApiModelProperty()
    readonly status: string;

    @ApiModelProperty()
    readonly total: number;

}
