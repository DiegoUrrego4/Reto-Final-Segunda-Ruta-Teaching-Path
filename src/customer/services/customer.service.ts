import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { Customer, CustomerToUpdate } from '../interfaces';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: uuid(),
      nombres: 'Mario',
      apellidos: 'Benitez Orjuela',
      dni: '34526754',
      telefono: '3001234567',
      correo: 'marioBe@mail.com',
    },
    {
      id: uuid(),
      nombres: 'Diana Carolina',
      apellidos: 'Hérnandez',
      dni: '765437890',
      telefono: '3111234567',
      correo: 'dHernan@mail.com',
    },
    {
      id: uuid(),
      nombres: 'Mathew',
      apellidos: 'Martins',
      dni: '1110123123',
      telefono: '3121234567',
      correo: 'm&m@mail.com',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOneById(id: string): Customer {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer)
      throw new NotFoundException(`No existe un cliente con id:${id}`);
    return customer;
  }

  create(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: uuid(),
      ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  updateDBCustomer(id: string, customerToUpdate: CustomerToUpdate): Customer {
    let existedCustomer = this.findOneById(id);

    this.customers = this.customers.map((customer) => {
      if (customer.id === id) {
        existedCustomer = { ...existedCustomer, ...customerToUpdate, id };
        return existedCustomer;
      }
      return customer;
    });
    return existedCustomer;
  }

  update(id: string, createCustomerDto: CreateCustomerDto): Customer {
    return this.updateDBCustomer(id, createCustomerDto);
  }

  partiallyUpdate(id: string, updateCustomerDto: UpdateCustomerDto): Customer {
    return this.updateDBCustomer(id, updateCustomerDto);
  }

  delete(id: string): void {
    this.findOneById(id);
    this.customers = this.customers.filter((user) => user.id !== id);
  }
}
