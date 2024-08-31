import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return(
    <>
    <div className="m-0 p-0 flex">
      <div className="heading flex font-bold ml-5  ">
        WAKANDA.ID |
      </div>
      <div className="flex font-medium list-none ml-5">
        <ul className="flex gap-8">
          <li><a href="" className="hover:text-gray-500 delay-150" onClick={() => navigate('/')}>Home</a></li>
          <li><a href="" className="hover:text-gray-500 delay-150">Sekarang</a></li>
          <li><a href="" className="hover:text-gray-500 delay-150">Sport</a></li>
        </ul>
      </div>
    </div>
    <hr className="mt-3"/>
    {/* Register-Login */}
    <div className="flex justify-end items-end text-end mr-5 mt-2">
      <ul className="flex gap-4">
        <li><a href="" className="text-blue-500 hover:text-blue-800 delay-300">Login</a></li>
        <li><a href="" className="text-red-500 hover:text-red-800">Register</a></li>
      </ul>
    </div>
    <hr  className="mt-2"/>
    </>
  )

}
export default Navbar;


    
    
    