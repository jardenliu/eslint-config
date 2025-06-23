import EslintTs, {
    InfiniteDepthConfigWithExtends,
    parser,
} from "typescript-eslint";
export default [
    ...EslintTs.configs.recommended,
    {
        rules: {
            "@typescript-eslint/type-annotation-spacing": [
                "error",
                {
                    before: false,
                    after: true,
                    overrides: {
                        arrow: {
                            before: true,
                            after: true,
                        },
                    },
                },
            ],
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/ban-types": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-this-alias": "off",
            "@typescript-eslint/no-extra-semi": "warn",
            "@typescript-eslint/space-before-function-paren": "warn",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/indent": [
                "error",
                4,
                {
                    ignoredNodes: [
                        "FunctionExpression > .params[decorators.length > 0]",
                        "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                        "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
                    ],
                },
            ],
        },
    },
] satisfies InfiniteDepthConfigWithExtends[];
