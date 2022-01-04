const grpc = require("grpc")
const uuid = require("uuid").v1;

const todoproto = grpc.load("todo.proto");
const server = new grpc.Server()

let todos = [
    { id : '1',title : 'Todo 1',iscompleted : false }
];

server.addService(todoproto.TodoService.service,{
    list: (_, callback) => {
        callback(null, todos)
    },
    insert: (call, callback) => {
        let todo = call.request
        console.log(call.request);
        todo.id = uuid()
        todos.push(todo)
        callback(null, todo)
    
    },

})

server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
console.log("server is running at http://127.0.0.1:50051");

server.start(); 