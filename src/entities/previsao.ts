import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Cidade from '@entities/cidade'

@Entity()
export default class Previsao {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  descricao: string

  @Column({ name: 'dt_previsao' })
  dtPrevisao: string

  @Column()
  temperatura: string

  @Column()
  pressao: string

  @Column()
  umidade: string

  @Column()
  nebulosidade: string

  @Column()
  vento: string

  @Column()
  chuva: string

  @Column({ name: 'img_url' })
  imgUrl: string

  @ManyToOne(() => Cidade, (cidade) => cidade.previsoes)
  @JoinColumn({ name: "cidade_id" })
  cidade: Cidade

  constructor(
    id: number,
    descricao: string,
    dtPrevisao: string,
    temperatura: string,
    pressao: string,
    umidade: string,
    nebulosidade: string,
    vento: string,
    chuva: string,
    imgUrl: string,
    cidade: Cidade
  ) {
    this.id = id
    this.descricao = descricao
    this.dtPrevisao = dtPrevisao
    this.temperatura = temperatura
    this.pressao = pressao
    this.umidade = umidade
    this.nebulosidade = nebulosidade
    this.vento = vento
    this.chuva = chuva
    this.imgUrl = imgUrl
    this.cidade = cidade
  }
}