import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx,cjs,mjs}'], // cjs aur mjs bhi add kiya
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // Default module rakho
      globals: {
        ...globals.browser,
        ...globals.node, // Node globals add kiye config files ke liye
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      
      // STOPSC: Faltu code pakadne ke rules
      'no-unused-vars': 'error',          // Koi variable faltu nahi hona chahiye
      'no-console': 'warn',               // Console logs warning denge
      'no-undef': 'error',                // Bina define kiya variable error dega
      'prefer-const': 'error',            // Jo change nahi ho raha wo 'const' hona chahiye
    },
  },
]