import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';
import { Invoice } from '../interfaces';
import { v4 as uuid } from 'uuid';
import { InvoiceDetailDto } from '../dto/invoice-detail.dto';

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
          quantity: 6,
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
          quantity: 1,
        },
        {
          id: uuid(),
          name: 'Salchichón',
          price: 17000,
          brand: 'Ranchera',
          quantity: 2,
        },
        {
          id: uuid(),
          name: 'Pan Tajado',
          price: 12000,
          brand: 'Artesano',
          quantity: 1,
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
          quantity: 12,
        },
      ],
    },
  ];
  create(createInvoiceDto: CreateInvoiceDto) {
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
    let existedInvoice = this.findOne(id);
    this.invoices = this.invoices.map((invoice) => {
      if (invoice.id === id) {
        existedInvoice.updatedAt = new Date().getTime();
        existedInvoice = { ...existedInvoice, ...updateInvoiceDto };
        return existedInvoice;
      }
      return invoice;
    });
    return existedInvoice;
  }

  remove(id: string) {
    this.invoices = this.invoices.filter((invoice) => invoice.id !== id);
  }
}
