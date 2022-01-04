const client = require('./client');

client.delete({ id : '1' },(error,_) => {
    if(!error){
        console.log('Todo is deleted Successfully')
    }
    else{
        console.error(error)
    }

}) 