module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        /* 마지막 쉼표에 관한 규칙을 수정했습니다.
        하지만 이 파일은 JSON 파일이므로, 마지막 쉼표를 허용하는 이 파일에는 마지막 쉼표를 쓸 수 없습니다.*/
        "comma-dangle": [ 2,
        "always- multiline" ],
        "indent": [ 
            2,
            4 
        ],
    }
};
