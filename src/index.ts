import EslintTs, { InfiniteDepthConfigWithExtends } from "typescript-eslint";
import Gloabls from "globals";
import ImportRules from "./import.rule";
import JsRules from "./js.rule";
import tsRules from "./ts.rule";

const config = [
    {
        files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
        ignores: ["node_models"],
        languageOptions: {
            parser: EslintTs.parser,
            parserOptions: {
                sourceType: "module",
                parser: {
                    ts: EslintTs.parser,
                    js: EslintTs.parser,
                },
            },
            ecmaVersion: "latest",
            globals: {
                ...Gloabls.node,
                ...Gloabls.es2015,
                ...Gloabls.browser,
                ...Gloabls.commonjs,
                ...Gloabls.es2020,
            },
        },
    },
    ...ImportRules,
    ...JsRules,
    ...tsRules,
] satisfies InfiniteDepthConfigWithExtends[];

// 添加类型注释以解决推断类型不可移植的问题，需根据实际情况替换 `InferredConfigType` 为正确类型
export type InferredConfigType = ReturnType<typeof EslintTs.config>;
const eslintConfig: InferredConfigType = EslintTs.config(...config);

export default eslintConfig;
