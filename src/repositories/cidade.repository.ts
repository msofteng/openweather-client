import dataSource from '@configs/data-source'
import Cidade from '@entities/cidade'
import Pagination from '@interfaces/pagination'

const cidadeRepository = dataSource.getRepository('cidade').extend({
  cadastrarCidade(cidade: Cidade) {
    return this.save(cidade)
  },

  excluirCidade(cidade: Cidade) {
    return this.delete(cidade)
  },

  async listarCidades(cidade?: Partial<Cidade>, pagination?: Partial<Pagination>) {
    const page = pagination?.page ?? 1
    const qtd = pagination?.qtd ?? await this.countBy(cidade ?? {})

    return this.find({
      where: cidade ?? {},
      skip: (page - 1) * qtd,
      take: qtd
    })
  },

  listarCidade(cidade: Partial<Cidade>) {
    return this.findOne({
      where: cidade
    })
  }
})

export default cidadeRepository