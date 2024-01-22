import { Navbar,Button, TextInput } from 'flowbite-react';
import { Link,useLocation} from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai";
import {FaMoon} from "react-icons/fa"
const Header = ()=>{
   const path = useLocation().pathname;
   return(
      <Navbar>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'> 
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Aman's Blog</span>
        </Link>
        <form>
            <TextInput
                type="text"
                placeholder='Search'
                rightIcon={AiOutlineSearch}
                color="info"
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray'>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            <Link to="/SignIn">
                <Button className='bg-indigo-500 rounded-lg'>SignIn</Button>
            </Link>
            <Navbar.Toggle />
        </div>
       <Navbar.Collapse>
         <Navbar.Link active={path==="/"}>
           <Link to="/">
                Home
           </Link>
         </Navbar.Link>
        <Navbar.Link active={path==="/About"}> 
            <Link to="/About">
                 About
           </Link></Navbar.Link>
        <Navbar.Link active={path==="/Project"}>
            <Link to="/Projects">
                Projects
            </Link>
        </Navbar.Link>
      </Navbar.Collapse>
     </Navbar>
   )
}
export default Header;