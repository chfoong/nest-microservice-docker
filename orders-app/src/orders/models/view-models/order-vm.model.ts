import { BaseModelVm } from 'src/common/base/base.models.vm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Customer } from '../customer.model';
import { OrderStatus } from '../order-status.enum';
import { Item } from '../item.model';

export class OrderVm extends BaseModelVm {
    @ApiModelProperty() customer: Customer;
    @ApiModelProperty() items: Item[];
    @ApiModelProperty({ enum: OrderStatus }) status: OrderStatus;
    @ApiModelProperty() total: number;
}
