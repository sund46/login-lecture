"use strict";

const home = (request,response) => {
    response.render("home/index");
};

const login = (request,response) => {
    response.render("home/login");
};

// 객체에 키만 입력하는 경우 키와 같은 값을 자동으로 넣어줌
module.exports = {
    home,
    login
};