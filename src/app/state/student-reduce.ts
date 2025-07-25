
import { createReducer } from "@ngrx/store";
import{StudentRecords} from "./student-records.model"


export const initState:ReadonlyArray<StudentRecords> = 
[{
    name:"Romesh",
    city:"Vizag ",
    phonenumber:"8600590094",
}];

export const studentReducer= createReducer(initState)