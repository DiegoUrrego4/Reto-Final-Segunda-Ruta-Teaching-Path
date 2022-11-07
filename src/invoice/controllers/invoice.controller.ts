import { Controller, Get, Param } from '@nestjs/common';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  getInvoices() {
    return this.invoiceService.findAll();
  }
  @Get(':id')
  getInvoice(@Param('id') id: string) {
    return this.invoiceService.findOneById(id);
  }

  //   @Post()
  //   createUser(@Body() createCustomerDto: CreateCustomerDto): Customer {
  //     return this.customerService.create(createCustomerDto);
  //   }

  //   @Put(':id')
  //   updateUser(
  //     @Param('id') id: string,
  //     @Body() createCustomerDto: CreateCustomerDto,
  //   ): Customer {
  //     return this.customerService.update(id, createCustomerDto);
  //   }

  //   @Patch(':id')
  //   partiallyUpdateUser(
  //     @Param('id') id: string,
  //     @Body() updateCustomerDto: UpdateCustomerDto,
  //   ): Customer {
  //     return this.customerService.partiallyUpdate(id, updateCustomerDto);
  //   }

  //   @Delete(':id')
  //   deleteUser(@Param('id') id: string): void {
  //     this.customerService.delete(id);
  //   }
}
