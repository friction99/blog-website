import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
const FooterComp = ()=>{
    return(
        <Footer container className="text-white border border-t-4 border-teal-500">
            <div className="w-full max-w-7xl mx-auto sm:flex sm:justify-between">
                <Link to="/">
                        <span className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 rounded-lg mr-2">Aman's</span>Blog
                </Link>
                <div className="grid grid-cols-2 gap-3 mt-8 sm:mt-2 sm:gap-6">
                    <div>
                        <p>
                            ABOUT US
                            <ul className="list-none p-2">
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms & Condition</Link></li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <p>
                            FOLLOW US
                            <ul className="list-none p-2">
                                <li><Link to="#">Instagram</Link></li>
                                <li><Link to="#">LinkedIn</Link></li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </Footer>
    )
}
export default FooterComp;