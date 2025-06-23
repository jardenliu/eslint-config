import EslintJs from '@eslint/js'
import { InfiniteDepthConfigWithExtends } from 'typescript-eslint'

export default [
    EslintJs.configs.recommended,
    {
        rules: {
            'func-call-spacing': ['warn', 'never'],
            'space-in-parens': ['warn', 'never'],

            'no-alert': 'error',
            'no-prototype-builtins': 'off',
            'no-debugger': 'warn',
            'prefer-const': 'off',
            'no-console': 'off',
            'no-useless-escape': 'off',
            'prefer-spread': 'off',
            quotes: [
                'error',
                'single',
                {
                    allowTemplateLiterals: true,
                }
            ],
            semi: ['error', 'never'], // 禁止用双引号
            'key-spacing': [
                'warn',
                {
                    beforeColon: false,
                }
            ],
            'space-before-blocks': 'warn',
            'no-trailing-spaces': 'warn',
            'array-bracket-spacing': ['warn', 'never'],
            'space-before-function-paren': 'warn',
            'no-multi-spaces': 'warn',
            'object-curly-spacing': ['warn', 'always'],
            'no-irregular-whitespace': 'warn',
            'no-multiple-empty-lines': [
                'warn',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 0,
                }
            ],
            'arrow-body-style': 'off',
            'comma-dangle': [
                'warn',
                {
                    arrays: 'never',
                    objects: 'always-multiline',
                    imports: 'never',
                    exports: 'never',
                    functions: 'never',
                }
            ],
            'block-spacing': 'warn',
            'arrow-parens': ['error', 'always'],
            'arrow-spacing': 'warn',
            'no-empty-function': 'off',
            'array-bracket-newline': [
                'error',
                {
                    multiline: true,
                }
            ],
            'object-curly-newline': [
                'error',
                {
                    ObjectExpression: {
                        multiline: true,
                        minProperties: 1,
                    },
                    ObjectPattern: {
                        multiline: true,
                    },
                    ImportDeclaration: 'never',
                    ExportDeclaration: {
                        multiline: true,
                        minProperties: 3,
                    },
                }
            ],
            'array-element-newline': [
                'error',
                {
                    multiline: true,
                }
            ],
            'object-property-newline': 'error',
            'comma-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                }
            ],
            'space-unary-ops': 'error',
            'space-infix-ops': 'error',
            'no-var': 'error',
            'no-unused-vars': [
                1,
                {
                    argsIgnorePattern: '^_',
                }
            ],
            indent: [
                'error',
                4,
                {
                    ignoredNodes: ['FunctionExpression > .params[decorators.length > 0]', 'FunctionExpression > .params > :matches(Decorator, :not(:first-child))', 'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'],
                }
            ],
        },
    }
] satisfies InfiniteDepthConfigWithExtends[]
