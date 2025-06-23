import EslintTs, { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
const tsRules: InfiniteDepthConfigWithExtends[] = [
    ...EslintTs.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            'no-extra-semi': 'warn',
            'space-before-function-paren': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    }
]
export default tsRules
