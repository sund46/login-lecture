"use strict";

const User = require("../../models/User");

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
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

// 객체에 키만 입력하는 경우 키와 같은 값을 자동으로 넣어줌
module.exports = { 
    output,
    process,
};  