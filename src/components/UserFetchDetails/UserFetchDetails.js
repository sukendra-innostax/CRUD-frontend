import React, { useEffect } from "react";
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../App/User.actions";
import UserFetchDataItem from "../UserFetchDataItem/UserFetchDataItem";



const UserFetchDetails = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.Data.fetchedData);
  console.log("🚀 ~ UserFetchDetails ~ userData:", userData)
  
  const setSppiner=useSelector((state)=>state.Data.setSppiner);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);




  return (
    <div className="min-h-screen bg-gray-300 p-10  justify-content items-center w-auto flex flex-col">
      {setSppiner ? (
        <UserFetchDataItem data={userData} />
      ) : (
        <ReactLoading type="spin" color="#175D8A" className="mr-2 text-center" height={32} width={32} />
      )}
    </div>
  );
};

export default UserFetchDetails;
