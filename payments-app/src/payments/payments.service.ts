import { Injectable, BadRequestException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment-dto';

@Injectable()
export class PaymentsService {

    create(createPaymentDto: CreatePaymentDto): string {
        if (Math.random() >= 0.3) {
            return;
        } else {
            throw new BadRequestException('Payment Request Rejected');
        }
    }
}
