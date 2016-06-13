export default class TabController{
    constructor($scope,$stateParams){
         this.todos = [];
          this.user = $stateParams.user
         this.userText = '';
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
     
      editTodo(todo)
     {
         todo.editing = !todo.editing;
         this.originalToDo = todo;
     }
     
     doneEditing(todo)
     {
         todo.editing = !todo.editing;
     }
 
     removeTodo(toDo)
     {
         var index = this.todos.indexOf(toDo);
         this.todos.splice(index,1);
    }
} 