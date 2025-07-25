import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
providedIn:'root'
})
export class subjectservice{
    todos=[
        'task 1',
        'task 2',
        'task 3',
        'task 4',
        'task 5',
        'task 6',

    ]

todoList = new Subject();
constructor(){
    this.showToDos();
}
showToDos(){this.todoList.next(this.todos);}

AddTodos(val:any){
    this.todos.push(val);
}


}