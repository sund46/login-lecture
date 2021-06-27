//ECMA SCRIPT 5 버전에 있는 새로운 기능. 예외를 발생시키고, 정확하게 고려되지 않은 기등들은 비활성화 시켜 상대적으로 안전하지 않은 액션이 발생하는 것을 방지한다.
"use strict"; 

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

// 서버가 죽지 않을 때 ps -a 후 실행되고 있는 PID 를 KILL 명령어를 통해 삭제 KILLALL