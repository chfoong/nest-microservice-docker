import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/users/models/user.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.modelName, schema: User.model.schema }])],
  providers: [UsersService],
})
export class UsersModule {}
