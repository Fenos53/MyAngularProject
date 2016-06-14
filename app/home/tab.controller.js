/*Global firebase*/
export default class TabController{
    constructor($scope,$stateParams,$firebaseObject, ToDoService){
        this.user = $stateParams.user;
        this.ToDoService = ToDoService;
        this.userFilter = {};
        this.editingToDo = null;
        this.todos = ToDoService.getAll();
        this.todos.$watch(this.setStatictics.bind(this));
        this.todos.$loaded().then(this.setStatictics.bind(this));
        this.userAll = 0;
        this.userCompleted = 0;
        this.userInCompleted = 0;
        
        
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
    
    onChangeTab(userTab)
    {
        if(userTab == 'all')
        {
            this.userFilter = {};
        }
        else
        {
            this.userFilter = {user: this.user};
        }
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
    
    clearAllCompleted()
    {
        for(var i=0;i<this.todos.length;i++)
        {
            if(this.canProcessElement(this.todos[i]) && this.todos[i].completed == true)
            {
                this.removeTodo(this.todos[i]);
            }
        }
    }
 
    canProcessElement(toDo)
    {
        return toDo.user == this.user;
    }
    
    markAll(isChecked)
    {
        for(var i=0;i<this.todos.length;i++)
        {
            if(this.canProcessElement(this.todos[i]))
            {
                this.todos[i].completed = isChecked;
                this.doneEditing(this.todos[i]);
            }
        }
    }
    
    setStatictics()
    {
        this.userAll = 0;
        this.userCompleted = 0;

        for(var i=0;i<this.todos.length;i++)
        {
            if(this.user == this.todos[i].user)
            {
                this.userAll = this.userAll + 1;
                if(this.todos[i].completed)
                {
                    this.userCompleted = this.userCompleted + 1;
                    this.userInCompleted = this.userAll - this.userCompleted;
                }
            }
            this.userInCompleted = this.userAll - this.userCompleted;
        }
    }
}