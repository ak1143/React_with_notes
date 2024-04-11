import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState={
    todos:[
        {
            id:1,
            text:'todo msg'
        }
    ]
}

export const TodoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter((todos)=>   
            todos.id !== action.payload )
        }
    }
});

export const {addTodo,removeTodo} =TodoSlice.actions

export default TodoSlice.reducer