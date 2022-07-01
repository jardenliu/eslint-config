module.exports = {
    parserOptions: {
        sourceType: 'module',
        parser: {
            ts: '@typescript-eslint/parser',
            js: '@typescript-eslint/parser',
        },
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-extra-semi': 'warn',
        '@typescript-eslint/space-before-function-paren': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                ignoredNodes: ['FunctionExpression > .params[decorators.length > 0]', 'FunctionExpression > .params > :matches(Decorator, :not(:first-child))', 'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'],
            }
        ],
        'no-alert': 'error',
        'no-prototype-builtins': 'off',
        'no-debugger': 'warn',
        'prefer-const': 'off',
        'no-console': 'off',
        'no-useless-escape': 'off',
        'prefer-spread': 'off',
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true,
            }
        ],
        'semi': ['error', 'never'], // 禁止用双引号
        'key-spacing': [
            'warn',
            {
                'beforeColon': false,
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
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 0,
            }
        ],
        'arrow-body-style': 'off',
        'comma-dangle': [
            'warn',
            {
                'arrays': 'never',
                'objects': 'always-multiline',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never',
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
                'ObjectExpression': {
                    'multiline': true,
                    'minProperties': 1,
                },
                'ObjectPattern': {
                    'multiline': true,
                },
                'ImportDeclaration': 'never',
                'ExportDeclaration': {
                    'multiline': true,
                    'minProperties': 3,
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
                'before': false,
                'after': true,
            }
        ],
        'space-unary-ops': 'error',
        'space-infix-ops': 'error',
        'no-var': 'error',
        'no-unused-vars': 'warn',

    },
    env: {
        'node': true,
        'es6': true,
        'es2017': true,
        'browser': true,
    },
}