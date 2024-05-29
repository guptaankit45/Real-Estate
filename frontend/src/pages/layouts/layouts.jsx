  import "./layouts.scss"
  import Navbar from "../../components/Navbar"
  import { Outlet } from "react-router-dom";
  function Layouts(){
    return(
        <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
        <div className="content">
        <Outlet/>
        </div>
       
      </div>
    )
  }

  export default Layouts