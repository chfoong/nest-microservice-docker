import { Injectable } from '@nestjs/common';
import { ConfigurationService } from 'src/common/configuration/configuration/configuration.service';
import { Configuration } from 'src/common/configuration/configuration/configuration.enum';

@Injectable()
export class AuthService {
    private readonly bearer: string;


    constructor(private readonly configurationService: ConfigurationService) {
        this.bearer = configurationService.get(Configuration.TRUSTED_CLIENT_BEARER);
    }

    validateToken(token: string): boolean {
        if (token === this.bearer) {
            return true;
        } else {
            return false;
        }
    }
}
