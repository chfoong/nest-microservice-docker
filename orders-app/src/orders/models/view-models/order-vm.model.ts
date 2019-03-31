import { BaseModelVm } from 'src/common/base/base.models.vm';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../../../users/models/user.model';
import { OrderStatus } from '../order-status.enum';
import { Item } from '../../../items/models/item.model';

export class OrderVm extends BaseModelVm {
    @ApiModelProperty() customer: User;
    @ApiModelProperty() items: Item[];
    @ApiModelProperty({ enum: OrderStatus }) status: OrderStatus;
    @ApiModelProperty() total: number;
}
