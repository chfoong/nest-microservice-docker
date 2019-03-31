import { Global, Module } from '@nestjs/common';
import { MapperService } from './mapper/mapper/mapper.service';
import { ConfigurationService } from './configuration/configuration/configuration.service';

@Global()
@Module({
    providers: [ConfigurationService, MapperService],
    exports: [ConfigurationService, MapperService],
})

export class CommonModule {}
