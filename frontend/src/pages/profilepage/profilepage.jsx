import List from "../../components/list/list";
import "./profilepage.scss";
import { Link, useNavigate} from "react-router-dom";
import Chat from "../../components/chat/chat"
import apiRequest from "../../lib/apiRequest";
import "../../lib/apiRequest"


function ProfilePage() {

const navigate = useNavigate() 
const handleLogout = async()=>{
  try{
    const res=apiRequest.post("/auth/Logout");
    localStorage.removeItem("user")
    navigate("/")
  }catch(err){
    console.log(err);
  }
}
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"alt="" />
            </span>
            <span>
              Username: <b>John Wick</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List/>

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>

        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
