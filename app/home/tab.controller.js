/*Global firebase*/
export default class TabController{
    constructor($scope,$stateParams,$firebaseObject, ToDoService){
        this.user = $stateParams.user;
        this.ToDoService = ToDoService;
    }
    
     
    addTodo()
    {
      this.ToDoService.add({
      user: this.user,
      title: this.userText,
      completed:false
      
       
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
 				{ completed: false } : (status === 'completed') ?
 				{ completed: true } : {};
    }
    editTodo(todo)
    {
         this.editingToDo = todo;
    }
     
    doneEditing(todo)
    {
        this.editingToDo = null;
        this.ToDoService.edit(todo);
    }
 
    removeTodo(toDo)
    {
        this.ToDoService.remove(toDo);
    }
}