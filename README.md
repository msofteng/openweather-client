### openweather-client

#### Instruções

- Fazer o download (clone) deste repositório em seu computador
- Criar um arquivo chamado ".env.development" na raiz do projeto clonado e colar o seguinte conteúdo abaixo:
  ```env
  PORT=3000
  NODE_ENV=development
  
  DB_TYPE=sqlite
  DB_URL=./data/openweather.sqlite
  DB_SYNCHRONIZE=true
  ```

  > Essas são as variáveis que serão usadas no Docker no ambiente de "desenvolvimento"
  
- Com o Docker instalado, construir o container dessa API com o Docker Compose

  - Abrir o terminal e executar o seguinte comando

    ```sh
    docker-compose up -d # utilizar os argumentos --build --force-recreate se quiser construí-lo novamente
    ```

- Acessar o playground (Swagger) em: http://localhost:3000/docs
