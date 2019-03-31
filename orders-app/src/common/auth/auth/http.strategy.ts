import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()

export class HttpStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    validate(token: string) {
        const result = this.authService.validateToken(token);
        if (!result) {
            throw new UnauthorizedException();
        }
        return result;
    }
}
