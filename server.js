const express = require('express');
const app = express();

app.listen(8000,function(){
	console.log("server is running")
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