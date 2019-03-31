import { Module } from '@nestjs/common';
import { HttpStrategy } from './http.strategy';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [UsersModule],
    providers: [AuthService, HttpStrategy, UsersService],
})
export class AuthModule {}
