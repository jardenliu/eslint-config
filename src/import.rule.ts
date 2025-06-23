import ImportPlugin from 'eslint-plugin-import'
import { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
export default [
    ImportPlugin.flatConfigs.recommended,
    {
        rules: {
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                }
            ],
            'import/no-named-as-default': 'off',
            'import/named': 'off',
            'import/no-unresolved': 'off',
        },
    }
] satisfies InfiniteDepthConfigWithExtends[]
