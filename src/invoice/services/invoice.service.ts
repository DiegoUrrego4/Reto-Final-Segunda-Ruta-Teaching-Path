import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, Invoice, InvoiceToUpdate } from '../interfaces';
import { v4 as uuid } from 'uuid';
import { FormaPago } from '../helpers/forma-pago.enum';
import { CreateInvoiceDto } from '../dtos/create-invoice.dto';

@Injectable()
export class InvoiceService {
  private products: Product[] = [
    {
      id: uuid(),
      invoiceId: uuid(),
      nombre: 'Leche',
      marca: 'Parmalat',
      valor: 5000,
    },
    {
      id: uuid(),
      invoiceId: uuid(),
      nombre: 'Café',
      marca: 'Sello Rojo',
      valor: 7300,
    },
    {
      id: uuid(),
      invoiceId: uuid(),
      nombre: 'Salchichas',
      marca: 'Ranchera',
      valor: 12500,
    },
  ];

  private productsDos: Product[] = [
    {
      id: uuid(),
      invoiceId: uuid(),
      nombre: 'Queso',
      marca: 'Colanta',
      valor: 8200,
    },
    {
      id: uuid(),
      invoiceId: uuid(),
      nombre: 'Pan Tajado',
      marca: 'Artesano',
      valor: 15000,
    },
  ];

  private invoices: Invoice[] = [
    {
      id: uuid(),
      nit: '87645378',
      customerId: uuid(),
      fecha: new Date().toString(),
      formaPago: FormaPago.tarjetaDebito,
      productos: this.products.length,
      total: 24800,
    },
    {
      id: uuid(),
      nit: '123456789',
      customerId: uuid(),
      fecha: new Date().toString(),
      formaPago: FormaPago.efectivo,
      productos: this.productsDos.length,
      total: 23200,
    },
  ];

  findAll() {
    return this.invoices;
  }

  findOneById(id: string): Invoice {
    const customer = this.invoices.find((invoice) => invoice.id === id);
    if (!customer)
      throw new NotFoundException(`No existe una factura con id:${id}`);
    return customer;
  }

  create(createInvoiceDto: CreateInvoiceDto): Invoice {
    const newInvoice: Invoice = {
      id: uuid(),
      ...createInvoiceDto,
    };
    this.invoices.push(newInvoice);
    return newInvoice;
  }

  updateDBCustomer(id: string, invoiceToUpdate: InvoiceToUpdate): Invoice {
    let existedInvoice = this.findOneById(id);

    this.invoices = this.invoices.map((invoice) => {
      if (invoice.id === id) {
        existedInvoice = { ...existedInvoice, ...invoiceToUpdate, id };
        return existedInvoice;
      }
      return invoice;
    });
    return existedInvoice;
  }

  update(id: string, createInvoiceDto: CreateInvoiceDto): Invoice {
    return this.updateDBCustomer(id, createInvoiceDto);
  }

  // partiallyUpdate(id: string, updateCustomerDto: UpdateCustomerDto): Invoice {
  //   return this.updateDBCustomer(id, updateCustomerDto);
  // }

  delete(id: string): void {
    this.findOneById(id);
    this.invoices = this.invoices.filter((user) => user.id !== id);
  }
}
