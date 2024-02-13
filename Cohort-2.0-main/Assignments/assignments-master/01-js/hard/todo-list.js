/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/


class Todo{

  constructor() {
    this.todoList = [];
  }
  clear(){
    this.todoList=[];
}



//- get(indexOfTodo): returns todo at given index
get(indexOfTodo){
  if(indexOfTodo<this.todoList.length)
    {return this.todoList[indexOfTodo]};
    return null;
}


//- getAll: returns all todos
getAll(){
    return this.todoList;
}


//- update(index, updatedTodo): update todo at given index
update(index, updatedTodo){
  if(index<this.todoList.length)
  {this.todoList[index]=updatedTodo};
}

//add(todo): adds todo to list of todos
add(todoItem) {
    this.todoList.push(todoItem);
 }
//remove(indexOfTodo): remove todo from list of todos
remove(indexOfTodo){
if(indexOfTodo < this.todoList.length)
    {this.todoList.splice(indexOfTodo,1);}


}
}
 
  //clear: deletes all todos
  
module.exports = Todo;
