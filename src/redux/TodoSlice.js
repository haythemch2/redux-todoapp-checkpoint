import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todolist',
  initialState: {
    todolist:[{
        id:Math.random(),
        description:'task description test lorem',
        isDone:false
    },
    {
        id:Math.random(),
        description:'task description test2 lorem',
        isDone:false
    },
    {
      id:Math.random(),
      description:'task description test3 lorem',
      isDone:true
  },]
  },
  reducers: {
    addTask: (state,action) => {
      state.todolist.push(action.payload)
    },
    deleteTask: (state,action) => {
       state.todolist =state.todolist.filter(el=>el.id!==action.payload.id)
      },
    doneTask: (state,action) => {
      const item = state.todolist.findIndex(el=>el.id===action.payload.id);
      state.todolist[item].isDone=action.payload.isDone;
    },
    editTask: (state,action) => {
      const item = state.todolist.findIndex(el=>el.id===action.payload.id);
      state.todolist[item].description=action.payload.description;
      }
}
})

export const {addTask, deleteTask, doneTask, editTask } = todoSlice.actions

export default todoSlice.reducer
// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // // Still pass action objects to `dispatch`, but they're created for us
// // store.dispatch(incremented())
// // // {value: 1}
// // store.dispatch(incremented())
// // // {value: 2}
// // store.dispatch(decremented())
// // // {value: 1}