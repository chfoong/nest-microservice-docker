import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class BaseModelVm {
    @ApiModelPropertyOptional({ type: String, format: 'date-time '})
    createdAt?: Date;

    @ApiModelPropertyOptional({ type: String, format: 'date-time '})
    updatedAt?: Date;

    @ApiModelPropertyOptional()
    id?: string;
}
