import { createSlice} from "@reduxjs/toolkit";
import { fetchUserData,addUserData,deleteUserData,updateUserData } from "./User.actions";

export const DataSlice = createSlice({
  name: "Data",
  initialState: {
    setEditing: false,
    setSppiner:false,
    editData: [],
    fetchedData: [],
    status: "idle",
    error: null
  },

  reducers: {
    editing: (state, action) => {
      state.editData = action.payload
      state.setEditing = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fetchedData = action.payload;
        state.setSppiner=true
      });
    builder.addCase(addUserData.fulfilled, (state) => {
        state.status="Success"; 
    });
    builder.addCase(deleteUserData.fulfilled,(state,action)=>{
      state.status="success";
      const filteredData=state.fetchedData.filter(item=>item._id!==action.payload)
      state.fetchedData=filteredData
      console.log(filteredData)
    });
    builder.addCase(updateUserData.fulfilled,(state,action)=>{
        state.status="success";
        console.log(action.payload)
        state.setEditing=false
    })
  }
})

export const {updating,editing, errorMessage, setTab } = DataSlice.actions

export default DataSlice.reducer