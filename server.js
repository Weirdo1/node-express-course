const express = require('express');
const app = express();

app.listen(8000,function(){
	console.log("正在监听8000端口。。。")
})

const mockUserData = [
	{
		name :'mack', 
		
	},
	{
		name :'jecks', 
		
	}
];
app.get('/user',function(req,res){
	res.json({
		success:true,
		message:"success",
		users:mockUserData
	})
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})