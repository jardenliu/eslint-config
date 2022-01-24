module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: {
            js: "@typescript-eslint/parser",
            ts: "@typescript-eslint/parser",
            "<template>": "espree",
        },
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/recommended",
    ],
    rules: {
        "@typescript-eslint/indent": [
            2,
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
    env: {
        browser: true,
        node: true,
        es6: true,
    },
};
