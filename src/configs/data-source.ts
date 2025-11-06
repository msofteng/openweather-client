import { DataSource } from 'typeorm'
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions'
import { SpannerConnectionOptions } from 'typeorm/driver/spanner/SpannerConnectionOptions'

import config from '@configs/env'

const dataSource = new DataSource({
  type: config.dbType,
  database: config.dbUrl,
  synchronize: config.dbSynchronize,
  entities: [
    './src/entities/*.ts'
  ]
} as BaseDataSourceOptions & SpannerConnectionOptions)

export default dataSource