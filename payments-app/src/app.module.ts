import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { AuthService } from './common/auth/auth/auth.service';
import { ConfigurationService } from './common/configuration/configuration/configuration.service';
import { AuthModule } from './common/auth/auth/auth.module';

@Module({
  imports: [PaymentsModule, AuthModule],
  providers: [AuthService, ConfigurationService],
})
export class AppModule {}
