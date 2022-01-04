const client = require('./client')

let newTodo = {
    title : 'New todo is inserted',
    iscompleted : true
 }

 client.insert(newTodo,(error,todo) => {
    if(!error){
        console.log('New Todo inserted successfully');
     }
    else{
        console.error(error);
    }
}) 