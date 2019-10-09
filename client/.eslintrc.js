module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:@typescript-eslint/recommended', 
        'prettier',
        "prettier/react",
        "prettier/standard",
        'prettier/@typescript-eslint',
        "plugin:react/recommended",
        'plugin:prettier/recommended',
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
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/exhaustive-deps": 1,
        "no-console": ["error", { allow: ["warn", "error"] }],
        "@typescript-eslint/no-explicit-any": ["warn"],
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
        "react/no-find-dom-node": 0
      },
    settings:  {
      react:  {
        version:  'detect',
      },
    },
    plugins: [
        "@typescript-eslint", 
        "prettier",
        "react-hooks"
    ]
  };