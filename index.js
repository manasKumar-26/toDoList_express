const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
const todo=require('./models/todo');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');
//to save a new todo
app.post('/save',(req,res)=>{
    todo.create({
        task:req.body.task,
        type:req.body.type,
        date:req.body.date,
    });
    return res.redirect('back');
   
});
//to delete a todo
app.get('/delete',(req,res)=>{
    let id=req.query.delid;
    console.log(id);
    todo.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log(err);
        }
        return res.redirect('back');
    })
})
//go to home page
app.get('/',(req,res)=>{
    todo.find({},(err,data)=>{
        if(err){
            console.log(err);
        }
        res.render('home',{
            todo:data,
        });
    });
});
app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log('server up at port',port);
    return;
})
