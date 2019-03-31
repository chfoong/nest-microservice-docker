import { ApiModelProperty } from '@nestjs/swagger';
import { Item } from '../item.model';

export class ItemParams {
    @ApiModelProperty()
    id?: string;
}
