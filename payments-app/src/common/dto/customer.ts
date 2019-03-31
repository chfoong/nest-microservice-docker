import { ApiModelProperty } from '@nestjs/swagger';

export class Customer {
    @ApiModelProperty()
    readonly _id: string;

    @ApiModelProperty()
    readonly name: string;
}