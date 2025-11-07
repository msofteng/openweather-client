import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Previsao from '@entities/previsao'

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

  @OneToMany(
    () => Previsao,
    (previsao) => previsao.cidade,
    {
      cascade: true
    }
  )
  previsoes: Previsao[]

  constructor(
    id: number,
    nome: string,
    pais: string,
    local: string,
    tipo: string,
    osmUrl: string,
    previsoes: Previsao[],
    estado?: string
  ) {
    this.id = id
    this.nome = nome
    this.pais = pais
    this.local = local
    this.tipo = tipo
    this.osmUrl = osmUrl
    this.previsoes = previsoes
    this.estado = estado
  }
}