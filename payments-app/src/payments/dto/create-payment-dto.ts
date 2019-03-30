import { ApiModelProperty } from '@nestjs/swagger';
import { Order } from '../../common/dto/order';
import { ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePaymentDto {
    @ApiModelProperty()
    @ValidateNested()
    @IsNotEmpty()
    @Type(() => Order)
    readonly order: Order;
}