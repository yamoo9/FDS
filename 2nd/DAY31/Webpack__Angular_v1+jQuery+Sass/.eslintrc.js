/*! .eslintrc.js © yamoo9.net, 2016 */
'use strict';

module.exports = {
    "env": {
        "node"    : true,
        "browser" : true,
        "es6"     : true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": 0,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": 0,
        // "linebreak-style": [
        //     "error",
        //     "unix" // 윈도우즈 사용자는 "windows" 설정
        // ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parserOptions": {
      "sourceType": "module"
    }
};