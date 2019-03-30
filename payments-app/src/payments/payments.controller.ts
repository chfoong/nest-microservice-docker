import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment-dto';
import { ApiResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('payments')
@ApiUseTags('payments')
@ApiBearerAuth()
export class PaymentsController {

    constructor(private readonly paymentsService: PaymentsService) {}

    @Post('/')
    @UseGuards(AuthGuard('bearer'))
    @ApiCreatedResponse({})
    @ApiBadRequestResponse({})
    create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }
}
