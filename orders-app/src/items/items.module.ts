import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Item } from 'src/items/models/item.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Item.modelName, schema: Item.model.schema }])],
  providers: [ItemsService],
})
export class ItemsModule {}
