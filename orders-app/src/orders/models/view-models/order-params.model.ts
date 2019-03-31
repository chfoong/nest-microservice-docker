import { ApiModelProperty } from '@nestjs/swagger';
import { ItemParams } from '../../../items/models/view-models/item-params.model';

export class OrderParams {
    @ApiModelProperty({ type: [ItemParams], isArray: true, example: [ { id: '5ca0b9551ae0e77457e6a4bc' } ] })
    items?: ItemParams[];
}
