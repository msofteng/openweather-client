import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Cidade {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  constructor(id: number, nome: string) {
    this.id = id
    this.nome = nome
  }
}