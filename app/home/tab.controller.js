export default class TabController{
    constructor($scope,$stateParams){
         this.todos = [];
         this.user = $stateParams.user;
         this.todos.push({
             value:{
                 user: "anna",
                 title: "test",
                 completed:false
             },
             editing: false
         });
     }
     
     addTodo()
     {
         this.todos.push({
             value:{
                 user: this.user,
                 title: this.userText,
                 completed:false
             },
             editing: false
         });
     }
     
     onUser()
     {
         this.selectedTab = 'user';
     }
     
     onAll()
     {
         this.selectedTab = 'all';
     }
     
     onChangeStatus(status)
     {
         this.statusFilter = (status === 'active') ?
 				{ value:{completed: false }} : (status === 'completed') ?
 				{ value:{completed: true }} : {};
     }
      editTodo(todo)
     {
         todo.editing = !todo.editing;
         this.originalToDo = todo;
     }
     
     doneEditing(todo)
     {
          todo.editing = false;
 +        console.log(todo.editing);
     }
 
     removeTodo(toDo)
     {
         var index = this.todos.indexOf(toDo);
         this.todos.splice(index,1);
    }
} 