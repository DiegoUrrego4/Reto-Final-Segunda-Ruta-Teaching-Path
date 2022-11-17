import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', {
    default: uuid(),
  })
  customerId?: string;

  @Column('text')
  storeName: string;

  @Column('float', {
    default: 0,
  })
  generateAt: number;

  @Column('text')
  nit: string;

  @Column('float', {
    default: 0,
  })
  updatedAt?: number;

  //   products: InvoiceDetail[];
}
