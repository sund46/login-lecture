"use strict";

const UserStorage = require("../../models/UserStorage")

const output = {
    home: (request,response) => {
        response.render("home/index");
    },
    login: (request,response) => {
        response.render("home/login");
    },
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;

        // const userStorage = new UserStorage();

        const users = UserStorage.getUsers("id","psword");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }
        
        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

// 객체에 키만 입력하는 경우 키와 같은 값을 자동으로 넣어줌
module.exports = { 
    output,
    process,
};  