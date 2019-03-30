import { ApiModelProperty } from '@nestjs/swagger';

export class Item {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly price: number;
}