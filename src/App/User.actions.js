import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
    "userData/fetchUserData",
    async () => {
      try {
        const response = await fetch("http://localhost:3001");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        const { user } = data;
        if (user) {
          return user;
        } else {
          throw new Error("User data is incomplete or missing");
        }
      } catch (error) {
        throw new Error("Error occurred while fetching user data: " + error.message);
      }
    }
  );
  
  export const addUserData = createAsyncThunk(
    "userData/addUserData",
    async (data) => {
      try {
        const url = `http://localhost:3001/add`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        await fetch(url, options)
      } catch (error) {
        throw new Error(error.message)
      }
    }
  )
  
  export const deleteUserData=createAsyncThunk(
    "userData/deleteUserData",
    async (id) => {
        try {
          const url = `http://localhost:3001/${id}`;
          const options = {
            method: 'DELETE',
          };
          await fetch(url, options)
          return id
        } catch (error) {
          throw new Error(error.message)
        }
      }
  )
  
  export const updateUserData=createAsyncThunk(
    "userData/updateUserData",
    async(data) => {
      const{_id}=data 
      try{
        const url = `http://localhost:3001/${_id}`;
        const options={
          method:"PATCH",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(data) 
          }
          const response=await fetch(url,options)
          return response.json()
      }catch(error){
        throw new Error(error.message)
      }
    }
  )
  
  