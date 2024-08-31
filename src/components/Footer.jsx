const Footer = () => {
    return(
        <>
        <div className="flex m-0 p-0">
            <div className="flex font-extrabold mt-6 ml-14">
                <h1>
                    WAKANDA.ID
                </h1>
            </div>
        </div>
        <div className="flex m-0 p-0 ml-32 mt-5">
            <div className="flex font-semibold list-none">
                <ul className="flex gap-8">
                    <li><a href="" className="hover:text-gray-600 delay-500">Home</a></li>
                    <li><a href="" className="hover:text-gray-600 delay-500">News</a></li>
                    <li><a href="" className="hover:text-gray-600 delay-500">sport</a></li>
                </ul>
            </div>
        </div>
        <hr  className="mt-2 ml-32"/>
        <div className="flex m-0 p-0">
            <div className="flex ml-16 mt-3 font-semibold">
                <h3>
                    Follow Us in :
                </h3>
                <div className="flex m-0 p-0 ml-4">
                   <ul className="flex gap-8">
                    <li>
                        <a href="https://www.instagram.com/dwiiaffa_n?igsh=NHJxdmsxenUycGtt" >
                            <img src="https://img.icons8.com/?size=30&id=59813&format=png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://img.icons8.com/?size=30&id=59780&format=png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://img.icons8.com/?size=30&id=01GWmP9aUoPj&format=png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://img.icons8.com/?size=30&id=62852&format=png" alt="" />
                        </a>
                    </li>
                   </ul>
                </div>
            </div>
        </div>
        <div className="flex m-0 p-0 list-none ml-3 font-light list-none mt-2 max-w-max"> 
            <ul className="flex gap-3 max-w-fit">
                <li><a href="" className="hover:underline">Terms of Use</a></li>
                <li><a href="" className="hover:underline">About the Wakanda.Id</a></li>
                <li><a href="" className="hover:underline">Privacy Policy</a></li>
                <li><a href="" className="hover:underline">Cookies</a></li>
                <li><a href="" className="hover:underline">Accessibility Help</a></li>
                <li><a href="" className="hover:underline">Contact the Wakanda.Id</a></li>
            </ul>
        </div>
        <div className="flex font-light ml-3 mt-4"> 
            <p>
             Copyright 2024 Wakanda.Id. All rights reserved.  The Wakanda.Id is not responsible for the content of external sites. 
             <a href="">Read about our approach to external linking.</a>
            </p>
        </div>
        <div className="flex m-0 p-0 font-light mt-5 ml-3">
            <p>
                &copy; Designed - Affan Dwi Saputra
            </p>
        </div>
        </>
    )
}
export default Footer;
        