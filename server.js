const express=require('express');
const path=require('path');
const app=express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

const port=8000;

let task_obj=[];

app.get('/todolist',(req,res)=>{
        res.render('views',{task_obj});
})
    
    
app.post('/todolist',(req,res)=>{
        console.log(req.body);
        const task=req.body.task;
        task_obj.push(task);
        console.log(task_obj);
        res.redirect('/todolist');

})

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})


app.get('/remove-task/:task', (req, res) => {
  console.log(req.params.task)
  task_obj = task_obj.filter(task => {
          return task !== req.params.task
  })
  res.redirect('/todolist')
})