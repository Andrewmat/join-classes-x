module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "plugins": [
        "jest"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};