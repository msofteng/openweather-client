import dataSource from '@configs/data-source'
import Previsao from '@entities/previsao'
import Pagination from '@interfaces/pagination'

const previsaoRepository = dataSource.getRepository(Previsao).extend({
  cadastrarPrevisao(previsao: Previsao) {
    return this.save(previsao)
  },

  excluirPrevisao(previsao: Previsao) {
    return this.delete(previsao)
  },

  async listarPrevisoes(previsao?: Partial<Previsao>, pagination?: Partial<Pagination>) {
    const page = pagination?.page ?? 1
    const qtd = pagination?.qtd ?? await this.countBy(previsao ?? {})

    return this.find({
      where: previsao ?? {},
      skip: (page - 1) * qtd,
      take: qtd,
      relations: {
        cidade: true
      }
    })
  },

  listarPrevisao(previsao: Partial<Previsao>) {
    return this.findOne({
      where: previsao
    })
  }
})

export default previsaoRepository