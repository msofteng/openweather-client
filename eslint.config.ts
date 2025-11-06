import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      semi: ['error', 'never'], // ❌ sem ponto e vírgula
      quotes: ['error', 'single'], // ✅ aspas simples
      'comma-dangle': ['error', 'never'], // ❌ sem vírgula no final
      'eol-last': ['error', 'never'], // ❌ sem quebra de linha final
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      'indent': ['error', 2]
    },
    ignores: [
      'dist',
      'src/entities/*.ts'
    ]
  }
])