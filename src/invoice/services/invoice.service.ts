import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { UpdateInvoiceDto } from '../dto/update-invoice.dto';
import { Invoice } from '../entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoiceService {
  private readonly logger = new Logger('InvoiceService');
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    try {
      // Acá creo el objeto factura
      const invoice = this.invoiceRepository.create({
        ...createInvoiceDto,
        generateAt: new Date().getTime(),
      });
      this.invoiceRepository.save(invoice);
      return invoice;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.invoiceRepository.find({});
  }

  async findOne(id: string) {
    const invoice = await this.invoiceRepository.findOneBy({ id });
    if (!invoice)
      throw new NotFoundException(`No se encontró una factura con id: ${id}`);
    return invoice;
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.invoiceRepository.preload({
      id,
      updatedAt: new Date().getTime(),
      ...updateInvoiceDto,
    });
    if (!invoice)
      throw new NotFoundException(`Product with id: ${id} not found`);
    try {
      await this.invoiceRepository.save(invoice);
      return invoice;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const invoice = await this.findOne(id);
    await this.invoiceRepository.delete(invoice);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error. Check server logs',
    );
  }
}
