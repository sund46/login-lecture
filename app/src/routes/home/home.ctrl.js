"use strict";

const output = {
    home: (request,response) => {
        response.render("home/index");
    },
    login: (request,response) => {
        response.render("home/login");
    },
};

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.", 
        })
    },
};

// 객체에 키만 입력하는 경우 키와 같은 값을 자동으로 넣어줌
module.exports = { 
    output,
    process,
};  