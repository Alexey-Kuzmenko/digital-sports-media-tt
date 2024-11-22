import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    ...vueTsEslintConfig(),
    {
        rules: {
            semi: 'off',
            'no-console': 'warn',
            'no-alert': 'error',
            quotes: ['warn', 'single'],
            'max-len': ['warn', {
                'code': 120,
                'ignoreComments': true,
                'ignoreRegExpLiterals': true,
            }],

        }
    },
]