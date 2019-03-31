import { Injectable } from '@nestjs/common';
import 'automapper-ts/dist/automapper';

@Injectable()
export class MapperService {
    mapper: AutoMapperJs.AutoMapper;

    constructor() {
        this.mapper = automapper;
        this.initializeMapper();
    }

    private initializeMapper(): void {
        this.mapper.initialize(MapperService.configure);
    }

    private static configure(config: AutoMapperJs.IConfiguration): void {
        config.createMap('Order', 'OrderVm');
    }
}