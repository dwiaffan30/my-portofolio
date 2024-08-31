import { useNavigate } from "react-router-dom";

const MainHome = () => {
    const navigete = useNavigate()
 return(
    <>
        <div className="m-0 p-0 flex mt-5 ml-5">
            <div className="flex font-semibold justify-start items-start text-start">
                <h1 className="underline"> 
                    <a href="" onClick={() => navigete('/Kedua')} className="hover:text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Accusamus saepe, fuga animi impedit vitae <br /> atque nam, deleniti et illum quod in? Unde sint <br /> voluptatibus laboriosam <br /> doloribus culpa! Repellendus, ratione velit!</a>
                </h1>
                {/* Mid-Content */}
                <div className=" sidebar ml-16">
                <h1 className="underline"> 
                    <a href="" onClick={() => navigete('/Kedua')} className="hover:text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Accusamus saepe, fuga animi impedit vitae <br /> atque nam, deleniti et illum quod in? Unde sint <br /> voluptatibus laboriosam <br /> doloribus culpa! Repellendus, ratione velit!</a>
                </h1>
                </div>
            </div>
        </div>
        <div className="flex font-thin justify-start items-start text-start mt-4 ml-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Aperiam aspernatur <br /> distinctio sapiente consectetur <br /> quod dolore ea <br />blanditiis ad fugit!  <br /> maxime fuga vero similique dolore animi <br /> quod dolores omnis adipisci.
            {/* Mid-content */}
            <div className="ml-16 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Aperiam aspernatur <br /> distinctio sapiente consectetur <br /> quod dolore ea <br />blanditiis ad fugit!  <br /> maxime fuga vero similique dolore animi <br /> quod dolores omnis adipisci.
            </div>
        </div>
        <div className="flex justify-start items-center text-start mt-4 ml-5 font-light">
            11 Weeks Ago | Jakarta,Indonesia
        </div>
        {/* Garis */}
        <hr className="ml-4 w-44 mt-4"/>
        <div className="flex font-semibold justify-start items-start text-start mt-5 ml-5">
                <h1 className="underline"> 
                    <a href="" onClick={() => navigete('/Kedua')} className="hover:text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Accusamus saepe, fuga animi impedit vitae <br /> atque nam, deleniti et illum quod in? Unde sint <br /> voluptatibus laboriosam <br /> doloribus culpa! Repellendus, ratione velit!</a>
                </h1>
        </div>
        <div className="flex font-thin justify-start items-start text-start mt-4 ml-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Aperiam aspernatur <br /> distinctio sapiente consectetur <br /> quod dolore ea <br />blanditiis ad fugit!  <br /> maxime fuga vero similique dolore animi <br /> quod dolores omnis adipisci.
        </div>
        <div className="flex justify-start items-center text-start mt-4 ml-5 font-light">
            1 Month Ago | Banten, Indonesia
        </div>
        {/* Garis */}
        <hr className="mt-5"/>
        <hr className="mt-7"/>
    
    
    
    </>
 )
}
export default MainHome;