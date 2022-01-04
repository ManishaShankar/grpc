const client = require('./client');

let todo = {
<<<<<<< HEAD
    id : '2',
    title : 'Hello hi',
    iscompleted : true
=======
    id : '1',
    title : 'Hello World',
    iscompleted : false
>>>>>>> 0545dcfba8a45cbc70f2be4fc3071109856c2964
}

client.update(todo,(error,todo) => {
    if(!error){
        console.log('Note is updated successfully',todo)
    }
    else{
        console.error(error)
    }
}) 