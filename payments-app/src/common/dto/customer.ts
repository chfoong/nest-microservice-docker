import { ApiModelProperty } from '@nestjs/swagger';

export class Customer {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly name: string;
}