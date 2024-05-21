import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData, fetchUserData, updateUserData } from '../../App/User.actions';
import * as Yup from "yup"


const Formik = () => {
    const dispatch = useDispatch();
    const editData = useSelector(state => state.Data.editData)
    const isEditing = useSelector(state => state.Data.setEditing)
    const [userData, setUserData] = useState({
        name: "",
        age: "",
        gender: ""
    });

    useEffect(() => {
        if (isEditing) {
            setUserData(editData);
        }
    }, [isEditing, editData]);

    const validations = Yup.object({
        name: Yup.string().required("Name is required"),
        age: Yup.number().required("Age is required").positive("Age must be positive").integer("Age must be an integer"),
        gender: Yup.string().required("Gender is required")
    });


    const formik = useFormik({
        initialValues: userData,
        validationSchema: validations,
        onSubmit: (values, { resetForm }) => {
            if (isEditing) {
                updateDetails(values)
            } else {
                addDetails(values)
            }
            resetForm();
        },
        enableReinitialize: true
    })

    const updateDetails = (values) => {
        dispatch(updateUserData(values));
        dispatch(fetchUserData())
        setUserData({ name: " ", age: " ", gender: " " })
        alert("Updated Successfully");
    }



    const addDetails = (values) => {
        dispatch(addUserData(values));
        dispatch(fetchUserData())
        alert("Added Successfully");
    };


    return (
        <div className='bg-gray-300 h-auto min-h-screen p-10 flex justify-content flex-col items-center w-auto'>
            <form onSubmit={formik.handleSubmit}>
                <div className='m-5 flex justify-arround font-serif flex-col'>
                    <h3 className='text-xl py-2'>Name</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder='Name...'
                        className='px-2 rounded-md h-10 w-80'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.name &&
                    <div className='text-red-600 pl-5'>{formik.errors.name}</div>
                }

                <div className='m-5 flex justify-arround flex-col'>
                    <h3 className='text-xl font-serif py-2'>Age</h3>
                    <input
                        type="number"
                        name="age"
                        placeholder='Age...'
                        className='px-2 rounded-md h-10 w-80'
                        value={formik.values.age}
                        onChange={formik.handleChange}
                    />
                </div>
                {formik.errors.age && <div className='text-red-600 pl-5'>{formik.errors.age}</div>}
                <div className='m-5 flex justify-arround flex-col'>
                    <h3 className='text-xl py-2 font-serif'>Gender</h3>
                    <select className='px-2 rounded-md h-10 w-80' name="gender" value={formik.values.gender} onChange={formik.handleChange}>'
                        <option value="">-Select-</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                {formik.errors.gender && <div className='text-red-600 pl-5'>{formik.errors.gender}</div>}
                {isEditing ? (
                    <button className="bg-gray-200 w-20 h-10 mx-5  rounded-md text-xl font-serif" type="submit" >Update</button>
                ) : (
                    <button className="bg-white w-20 h-10 mx-5 rounded-md text-xl font-serif" type="submit" >Add</button>)}
            </form>

        </div>
    );
};

export default Formik;
