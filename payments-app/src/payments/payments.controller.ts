import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment-dto';
import { ApiResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';

@Controller('payments')
export class PaymentsController {

    constructor(private readonly paymentsService: PaymentsService) {}

    @Post('/')
    @ApiCreatedResponse({})
    @ApiBadRequestResponse({})
    create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }
}
