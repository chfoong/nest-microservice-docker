import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private readonly _usersService: UsersService) {}

    async validateToken(token: string) {
        return this._usersService.findOne({ permanent_stub_bearer: token });
    }
}
