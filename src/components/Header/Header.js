import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
// import { CiViewTable } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";



const Header = () => {

    return (
        <div className='bg-gray-300 p-5 flex justify-content flex-col items-center w-auto '>
            <div className='bg-gray-300 h-20 mb-10 flex justify-between flex-row items-center w-3/4 border border-black px-10 rounded-xl'>
                <div>
                    <FaReact className='text-4xl' />
                </div>
                <div className='flex justify-between flex-row items-center w-1/2'>
                    <Link to="/">
                        <div className='flex flex-row align-baseline items-center'>
                            <IoIosHome className='text-2xl ' />
                            <button className="text-xl pl-5">Home</button></div> </Link>
                    {/* <Link to="table">
                        <div className='flex flex-row align-baseline items-center'>
                            <CiViewTable className='text-2xl' />
                            <button className="text-xl pl-5">Table</button></div></Link> */}
                    <Link to="fetchedData">
                    <div className='flex flex-row align-baseline items-center'>
                            <TbWorldWww className='text-2xl' />
                            <button className="text-xl pl-5">Show Data</button></div></Link>
                </div>
            </div>
            <h1 className='text-6xl italic font-serif'>-CRUD REACT-</h1>
        </div>
    );
};

export default Header;
