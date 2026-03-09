import {defineConfig} from 'eslint/config';
import configs from '@namorzyny/eslint-config';
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        ...tseslint.configs.base,
        ...configs.stylistic.base,
        ...configs.stylistic.common,
        files: ['**/*.ts'],
    },
]);
