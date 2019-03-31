import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationService } from './common/configuration/configuration/configuration.service';
import { Configuration } from './common/configuration/configuration/configuration.enum';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [CommonModule, MongooseModule.forRootAsync({
    imports: [CommonModule],
    useFactory: async (_configService: ConfigurationService) => ({
      uri: _configService.get(Configuration.MONGO_URI),
    }),
    inject: [ConfigurationService],
  }), OrdersModule, ItemsModule],
})
export class AppModule {}
