import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Cidade {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column({ nullable: true })
  estado?: string

  @Column()
  pais: string

  @Column()
  local: string

  @Column()
  tipo: string

  @Column({ name: 'osm_url' })
  osmUrl: string

  constructor(
    id: number,
    nome: string,
    pais: string,
    local: string,
    tipo: string,
    osmUrl: string,
    estado?: string
  ) {
    this.id = id
    this.nome = nome
    this.pais = pais
    this.local = local
    this.tipo = tipo
    this.osmUrl = osmUrl
    this.estado = estado
  }
}