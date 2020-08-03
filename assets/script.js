let add=document.getElementById('add');
let view=document.getElementById('view');
let c=document.getElementById('close');
let c1=document.getElementById('close1');
let cb=document.querySelectorAll('input[type="checkbox"]');
let count=0;
// to display add a new to do menu
add.addEventListener('click',(e)=>{
    e.stopPropagation();
    document.getElementById('addtask').style.display='block';
});
//to view exsisting to do menu
view.addEventListener('click',(e)=>{
    e.stopPropagation();
    document.getElementById('viewtask').style.display='block';
});
//to hide the add to do menu i.e close button
c.addEventListener('click',(e)=>{
    e.stopPropagation();
    document.getElementById('addtask').style.display='none';
});
// to hide view menu
c1.addEventListener('click',(e)=>{
    e.stopPropagation();
    document.getElementById('viewtask').style.display='none';
});
//to do check and uncheck through line= through property
for(let i=0;i<cb.length;i++){
   cb[i].addEventListener('click',()=>{
        let id=cb[i].getAttribute('data-myid')
    
        if(cb[i].checked){           
            document.getElementById(id).classList.add('marginclass');
            count++;
        }
        else{
            document.getElementById(id).classList.remove('marginclass');
            count--;
        }
        document.getElementById('demo').innerText=count;
   })
}