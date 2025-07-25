import { createSelector } from "@ngrx/store";
import { StudentRecords } from "./student-records.model";

export interface AppState{
    studentRecords:StudentRecords[]
}
export const selectFeature= (state:AppState)=>state.studentRecords;
export const selectAll= createSelector(selectFeature,(state:StudentRecords[]) =>state)
