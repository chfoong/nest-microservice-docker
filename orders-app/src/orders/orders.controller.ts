import { Body, Controller, Get, Param, HttpException, HttpStatus, Post, UseGuards, Req } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth, ApiOkResponse, ApiCreatedResponse, ApiBadRequestResponse, ApiOperation } from '@nestjs/swagger';
import { Order } from './models/order.model';
import { OrdersService } from './orders.service';
import { OrderVm } from './models/view-models/order-vm.model';
import { GetOperationId } from 'src/common/helpers/get-operation-id.helper';
import { OrderParams } from './models/view-models/order-params.model';
import { ItemsService } from 'src/items/items.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('orders')
@ApiUseTags(Order.modelName)
@ApiBearerAuth()
export class OrdersController {
    constructor(private readonly _ordersService: OrdersService,
                private readonly _itemsService: ItemsService
    ) {}

    @Post()
    @UseGuards(AuthGuard('bearer'))
    @ApiCreatedResponse({ type: OrderVm })
    @ApiBadRequestResponse({})
    @ApiOperation(GetOperationId(Order.modelName, 'Create'))
    async create(@Req() req, @Body() params: OrderParams): Promise<OrderVm> {
        try {
            const { items } = params;
            const ItemsArray = await Promise.all(
                items.map((item) => {
                    return this._itemsService.findById(item.id);
                }),
            );

            const newOrder = await this._ordersService.createOrder(req.user, ItemsArray);
            return this._ordersService.map<OrderVm>(newOrder);
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    @ApiOkResponse({ type: OrderVm })
    @ApiBadRequestResponse({})
    @ApiOperation(GetOperationId(Order.modelName, 'Get'))
    async get(@Param('id') id: string): Promise<OrderVm> {
        try {
            const order = await this._ordersService.findById(id);
            return this._ordersService.map<OrderVm>(order.toJSON());
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
