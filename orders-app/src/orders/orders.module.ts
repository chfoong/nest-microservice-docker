import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './models/order.model';
import { ItemsModule } from 'src/items/items.module';
import { ItemsService } from 'src/items/items.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.modelName, schema: Order.model.schema }]), ItemsModule],
  controllers: [OrdersController],
  providers: [OrdersService, ItemsService],
})
export class OrdersModule {}
