import { Module } from '@nestjs/common';
import { HttpStrategy } from './http.strategy';
import { AuthService } from './auth.service';
import { ConfigurationService } from 'src/common/configuration/configuration/configuration.service';

@Module({
    providers: [AuthService, HttpStrategy, ConfigurationService],
})
export class AuthModule {}
