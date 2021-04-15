import { DBConfig } from 'ngx-indexed-db'

export const DB_CONFIG: DBConfig = {
  name: 'TranslationsDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'translations',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'source', keypath: 'source', options: { unique: false } },
        { name: 'target', keypath: 'target', options: { unique: false } },
        { name: 'text', keypath: 'text', options: { unique: false } },
        { name: 'translatedText', keypath: 'translatedText', options: { unique: false } }
      ]
    }
  ]
}
