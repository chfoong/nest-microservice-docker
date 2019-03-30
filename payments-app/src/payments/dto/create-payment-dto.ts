import { ApiModelProperty } from '@nestjs/swagger';
import { Order } from '../../common/dto/order';

export class CreatePaymentDto {
    @ApiModelProperty()
    readonly order: Order;
}