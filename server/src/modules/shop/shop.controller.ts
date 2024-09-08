import { Controller } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller({
  path: 'shop',
})
export class ShopController {
  constructor(private readonly shopService: ShopService) {}
}
