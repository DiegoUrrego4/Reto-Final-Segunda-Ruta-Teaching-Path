import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';
import { Invoice } from '../interfaces';
import { v4 as uuid } from 'uuid';

@Injectable()
export class InvoiceService {
  private invoices: Invoice[] = [
    {
      id: uuid(),
      customerId: uuid(),
      generateAt: new Date().getTime(),
      nit: '123456789',
      products: [
        {
          id: uuid(),
          name: 'Leche',
          price: 5300,
          brand: 'Parmalat',
        },
      ],
    },
    {
      id: uuid(),
      customerId: uuid(),
      generateAt: new Date().getTime(),
      nit: '987654321',
      products: [
        {
          id: uuid(),
          name: 'Café',
          price: 8100,
          brand: 'Sello Rojo',
        },
        {
          id: uuid(),
          name: 'Salchichón',
          price: 17000,
          brand: 'Ranchera',
        },
        {
          id: uuid(),
          name: 'Pan Tajado',
          price: 12000,
          brand: 'Artesano',
        },
      ],
    },
    {
      id: uuid(),
      customerId: uuid(),
      generateAt: new Date().getTime(),
      nit: '192837456',
      products: [
        {
          id: uuid(),
          name: 'Gaseosa',
          price: 8000,
          brand: 'Coca Cola',
        },
      ],
    },
  ];
  create(createInvoiceDto: CreateInvoiceDto) {
    // const { nit, customerId, products } = createInvoiceDto;
    const invoice: Invoice = {
      id: uuid(),
      generateAt: new Date().getTime(),
      ...createInvoiceDto,
    };
    this.invoices.push(invoice);
    return invoice;
  }

  findAll() {
    return this.invoices;
  }

  findOne(id: string) {
    const invoice = this.invoices.find((invoice) => invoice.id === id);
    if (!invoice)
      throw new NotFoundException(`No se encontró una factura con id: ${id}`);
    return invoice;
  }

  update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: string) {
    return `This action removes a #${id} invoice`;
  }
}
