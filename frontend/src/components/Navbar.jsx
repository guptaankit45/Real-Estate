import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
function Navbar () {
    const [open,setOpen]=useState(false)
    const user=true;
    return(
   
        <nav>

           <div className="left">
            <a href="" className="logo">
            <img src="/logo.png" alt="" />
            <span>Ved Estate</span>
            </a> 
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Content</a>
            <a href="">Agents</a>
            </div>
           <div className="right">
           {  user ? (<div className="user">
            <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            />
            <span>Jhon Wick</span>
            <Link to="/profile" className="profile">
                <div className="notification">3</div>
                Profile</Link>
           </div>):(
           <>
           <a href="">SignIn</a>
           <a href="" className="su">SignUp</a>
           </>
        )}
           <div className="menuIcon">
            <img src="/menu.png" alt=""  onClick={()=>setOpen((prev)=>!prev)}/>
           </div>
           <div className={open ?"menu active":"menu"}>
           <a href="">Home</a>
            <a href="">About</a>
            <a href="">Content</a>
            <a href="">Agents</a>
            <a href="">SignIn</a>
           <a href="" >SignUp</a>
           </div>
           </div>
        </nav>



    )
}

export default Navbar;