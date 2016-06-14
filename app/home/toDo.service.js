/*global Firebase */
 
export default class toDoService
{
    constructor($firebaseArray)
    {
         this.firebaseArray = $firebaseArray;
         this.ref = new Firebase("https://fenos-angular.firebaseio.com/");
         this.items = $firebaseArray(this.ref);
    }
     
    getAll()
    {
        console.log("items " + this.items.length);
        return this.items;
    }
     
    add(value)
    {
        console.log(value);
        this.items.$add({
            'user': value.user,
            'title': value.title,
            'completed': value.completed
        }); 
    }
    edit(value)
    {
        console.log("edit");
        this.items.$save(value);
    }
    
    remove(ref)
    {
        console.log("remove");
        this.items.$remove(ref);
    }
};