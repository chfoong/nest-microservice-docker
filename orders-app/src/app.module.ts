import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationService } from './common/configuration/configuration/configuration.service';
import { Configuration } from './common/configuration/configuration/configuration.enum';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './common/auth/auth/auth.module';
import { AuthService } from './common/auth/auth/auth.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [CommonModule, AuthModule, MongooseModule.forRootAsync({
    imports: [CommonModule],
    useFactory: async (_configService: ConfigurationService) => ({
      uri: _configService.get(Configuration.MONGO_URI),
    }),
    inject: [ConfigurationService],
  }), OrdersModule, ItemsModule, UsersModule],
  providers: [AuthService, UsersService]
})
export class AppModule {}
