module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier',
        "prettier/react",
        "prettier/standard",
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:react/recommended",
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
    parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      tsx:  true,  // Allows for the parsing of TSX
    },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_"
          }
        ],
        // Errors
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        // Warnings
        "react-hooks/exhaustive-deps": 1,
        // Allowed
        "no-console": ["error", { allow: ["warn", "error"] }],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/consistent-type-assertions": 0,
        "react/prop-types": 0,
        "react/no-unescaped-entities": 0,
        "react/display-name": 0,
        "require-jsdoc": [2, {
          "require": {
              "FunctionDeclaration": true,
              "MethodDefinition": true,
              "ClassDeclaration": true,
              "ArrowFunctionExpression": true,
          }
      }],
        /**
         *
         *  Temporary disabled; to be removed gradually.
         *
         **/
        "react/no-find-dom-node": 0
      },
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    plugins: [
        "@typescript-eslint", 
        "prettier",
        "react-hooks"
    ]
  };