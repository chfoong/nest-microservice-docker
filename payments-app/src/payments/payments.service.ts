import { Injectable, BadRequestException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment-dto';

@Injectable()
export class PaymentsService {

    create(createPaymentDto: CreatePaymentDto): string {
        const sum = createPaymentDto.order.items.reduce((total, item) => {
            return total + item.price;
         }, 0);
        if (sum !== createPaymentDto.order.total) {
            throw new BadRequestException('Payment Total untally with Items');
        } else if (Math.random() < 0.3) {
            throw new BadRequestException('Payment Request Rejected');
        } else {
            return;
        }
    }
}
