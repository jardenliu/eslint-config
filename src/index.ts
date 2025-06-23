import EslintTs, {
    InfiniteDepthConfigWithExtends,
    parser,
} from "typescript-eslint";
import Gloabls from "globals";
import ImportRules from "./import.rule";
import JsRule from "./js.rule";
import TsRule from "./ts.rule";

const config = [
    {
        files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
        ignores: ["node_models"],
        languageOptions: {
            parser,
            parserOptions: {
                sourceType: "module",
                parser: {
                    ts: parser,
                    js: parser,
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
    ...JsRule,
    ...TsRule,
] satisfies InfiniteDepthConfigWithExtends[];

export default EslintTs.config(...config);
