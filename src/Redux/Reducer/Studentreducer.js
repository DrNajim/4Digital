import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getList=createAsyncThunk("ListStudents/getList", async ()=>{
    return axios.get("http://localhost:9000/ListStudents")
    .then(res=>{return res.data}) 
    .catch(err=>console.log(err))
})
export const remove=createAsyncThunk("ListStudents/remove", async (item)=>{
    return axios.delete('http://localhost:9000/remove', item)
    .then(res=>{return res.data})
    .catch(err=>console.log(err))
})
export const add=createAsyncThunk("ListStudents/add", async (item)=>{
    return axios.post("http://localhost:9000/add", item)
    .then(res=>{return res.data})
    .catch(err=>console.log(err))
})
const StudentSlice = createSlice({
    name : "Tasks",
    initialState : {
        tasks :[],
        status:"",
        erreur:"",
    },
    reducers:{
    },
extraReducers: (builder)=>
builder.addCase(getList.fulfilled, (state, action)=>{
    state.tasks=action.payload
    state.status="Accepted"
})
.addCase(getList.rejected, (state, action)=>{
    state.erreur=action.payload
    state.status="Rejected"
})
.addCase(getList.pending, (state, action)=>{
    state.status="Pending"})

.addCase(remove.fulfilled, (state, action)=>{
    state.tasks=action.payload
    state.status="Accepted"
})
.addCase(remove.rejected, (state, action)=>{
    state.erreur=action.payload
    state.status="Rejected"
})
.addCase(remove.pending, (state, action)=>{
    state.status="Pending"
})  
.addCase(add.fulfilled, (state, action)=>{
    state.tasks=action.payload
    state.status="Accepted"
})
.addCase(add.rejected, (state, action)=>{
    state.erreur=action.payload
    state.status="Rejected"
})
.addCase(add.pending, (state, action)=>{
    state.status="Pending"
}) 
})

export const {setadd, removeElement, setstat }= StudentSlice.actions
export default StudentSlice.reducer

