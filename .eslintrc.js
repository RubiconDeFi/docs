module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        //"plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:mdx/recommended'
    ],
    
    "overrides": [
      {
        files: '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:import/typescript',
          'prettier'
        ],
        plugins: ['import', 'unicorn'],
        rules: {
          'prefer-object-has-own': 'error',
          'logical-assignment-operators': [
            'error',
            'always',
            { enforceForIfStatements: true }
          ],
          '@typescript-eslint/prefer-optional-chain': 'error',
          'no-else-return': ['error', { allowElseIf: false }],
          'no-lonely-if': 'error',
          'prefer-destructuring': [
            'error',
            { VariableDeclarator: { object: true } }
          ],
          'import/no-duplicates': 'error',
          'no-negated-condition': 'off',
          'unicorn/no-negated-condition': 'error',
          'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
          'object-shorthand': ['error', 'always'],
          // todo: enable
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-non-null-assertion': 'off',
          '@typescript-eslint/no-var-requires': 'off',
          '@typescript-eslint/ban-ts-comment': 'off'
        }
      },
        {
            files: '{pages}/**',
            excludedFiles: ['*.md', '*.mdx'],
            extends: [
              'plugin:mdx/recommended',
            //  'plugin:react/recommended',
              'plugin:react/jsx-runtime',
              'plugin:react-hooks/recommended',
              'plugin:@next/next/recommended'
            ],
            rules: {
             'react/prop-types': 'off',
              "no-unused-expressions": "off",
              'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
              'react-hooks/exhaustive-deps': 'error',
              'react/self-closing-comp': 'error',
              'no-restricted-syntax': [
                'error',
                {
                  // ❌ useMemo(…, [])
                  selector:
                    'CallExpression[callee.name=useMemo][arguments.1.type=ArrayExpression][arguments.1.elements.length=0]',
                  message:
                    "`useMemo` with an empty dependency array can't provide a stable reference, use `useRef` instead."
                },
                {
                  // ❌ z.object(…)
                  selector:
                    'MemberExpression[object.name=z] > .property[name=object]',
                  message: 'Use z.strictObject is more safe.'
                }
              ],
              'react/jsx-filename-extension': [
                'error',
                { extensions: ['.tsx', '.jsx'], allow: 'as-needed' }
              ],
              'react/jsx-curly-brace-presence': 'error',
              'react/jsx-boolean-value': 'error'
              
            },
            settings: {
              react: { version: 'detect' }
            }
          },
    ],
    //"parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": "error"
    }
}
