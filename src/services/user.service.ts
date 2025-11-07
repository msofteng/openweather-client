import User from '@models/user'

/**
 * Serviço do usuário
 */
const userService = {
  /**
   * Lista todos os usuários do sistema
   * 
   * @param {string | undefined} nome nome do usuário (opcional)
   * @returns {Promise<User[]>} uma lista de usuários (se tiver o nome de busca)
   * @returns {Promise<{message: string}>} uma mensagem de erro (se não tiver o nome de busca)
   */
  listarUsuarios: async (nome?: string) => {
    return new Promise<User[]>((resolve, reject) => {
      setTimeout(() => {
        if (!nome) {
          reject('Nome não informado')
        } else {
          resolve([
            { id: 1, nome: 'João' },
            { id: 2, nome: 'Maria' },
            { id: 3, nome: 'José' },
            { id: 4, nome: 'Ana' },
            { id: 5, nome: 'Pedro' },
            { id: 6, nome: 'Marta' },
            { id: 7, nome: 'Carlos' },
            { id: 8, nome: 'Sofia' },
            { id: 9, nome: 'Rui' },
            { id: 10, nome: 'Inês' }
          ].filter((user) => user.nome.includes(nome ?? '')))
        }
      }, 3000)
    })
  }
}

export default userService