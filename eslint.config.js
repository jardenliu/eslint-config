import { defineConfig, globalIgnores } from 'eslint/config'

import config from './lib/index.js'
export default defineConfig([...config, globalIgnores(['**/lib/*'])])