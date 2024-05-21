import { editing } from "../../App/DataSlice"
import { deleteUserData} from "../../App/User.actions"
import {useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const UserFetchDataItem = ({data}) => {
    const dispatch = useDispatch()


    const dataLength = data.length

    const onDeleteItem = (_id) => {
        dispatch(deleteUserData(_id))
    }
    const onEditItem = (eachItem) => {
        dispatch(editing(eachItem))
    }
    return (
        <div className="bg-gray-300 p-10 flex justify-content flex-col items-center w-auto flex flex-col">
            <div className="m-5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border border-black rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-black">
                            <thead>
                                <tr className="divide-x divide-black">
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Gender</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black ">
                            {!dataLength && <tr className="text-5xl font-serif text-center" >
                                <td colSpan={4}>--No Data--</td></tr>}
                            {data.map((eachItem) =>
                                <tr className="divide-x divide-black">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{eachItem.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{eachItem.age}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{eachItem.gender}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <Link to="/">
                                        <button onClick={() => onEditItem(eachItem)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none mr-2">Edit</button></Link>
                                        <button onClick={() => onDeleteItem(eachItem._id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserFetchDataItem
