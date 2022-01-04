const client = require('./client');

let todo = {
    id : '2',
    title : 'Hello hi',
    iscompleted : true
}

client.update(todo,(error,todo) => {
    if(!error){
        console.log('Note is updated successfully',todo)
    }
    else{
        console.error(error)
    }
}) 