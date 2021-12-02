const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());



const mockUserData = [
  { 
    name: "mack", 
		
  },
  {
    name: "jecks", 
		
  },
];
app.get("/user", function (req, res) {
  res.json({
    success: true,
    message: "success",
    users: mockUserData,
  });
});

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

app.post("login", function (req, res) {
  const userName = req.body.username;
  const password = req.body.password;
  const mockUserName = "bbb";
  const mockPassword = "111";
  
  if(userName === mockUserName && password === mockPassword ) {
    res.json({
      success: true,
      message: "match",
      token: "111",
    });
  }else{
    res.json({
      success: false,
      message: "do not match",
    });
  }
});

app.listen(8000, function () {
  console.log("正在监听8000端口。。。");
});