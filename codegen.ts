import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.epess.org/v1/graphql',
  documents: ['src/**/*.ts?(x)'],
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
        addInferredTypes: true,
      },
      plugins: [],
    },
  },
}

export default config
