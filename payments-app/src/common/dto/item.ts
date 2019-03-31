import { ApiModelProperty } from '@nestjs/swagger';

export class Item {
    @ApiModelProperty()
    readonly _id: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly price: number;
}