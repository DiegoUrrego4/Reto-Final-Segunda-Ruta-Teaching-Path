import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { Customer } from '../interfaces/customer.interface';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.findAll();
  }

  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return this.customerService.findOneById(id);
  }

  @Post()
  createUser(@Body() createCustomerDto: CreateCustomerDto): Customer {
    return this.customerService.create(createCustomerDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() createCustomerDto: CreateCustomerDto,
  ): Customer {
    return this.customerService.update(id, createCustomerDto);
  }

  @Patch(':id')
  partiallyUpdateUser(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Customer {
    return this.customerService.partiallyUpdate(id, updateCustomerDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.customerService.delete(id);
  }
}
