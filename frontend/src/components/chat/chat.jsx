import {  useState } from "react";
import "./chat.scss";


function Chat() {
  const [chat, setChat] = useState(null);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>

          <div
            className="message"
          >
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Jhon Wick</span>
            <p> Hello how are you my brother....</p>
          </div>
          <div
            className="message"
          >
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Jhon Wick</span>
            <p> Hello how are you my brother....</p>
          </div>
          <div
            className="message"
          >
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Jhon Wick</span>
            <p> Hello how are you my brother....</p>
          </div>
          <div
            className="message"
          >
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Jhon Wick</span>
            <p> Hello how are you my brother....</p>
          </div>
          <div
            className="message"
          >
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Jhon Wick</span>
            <p> Hello how are you my brother....</p>
          </div>
          <div
            className="message"
          >
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Jhon Wick</span>
            <p> Hello how are you my brother....</p>
          </div>
      </div>
   
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
              Jhon Wick
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
          
              <div className="chatMessage own">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
              <div className="chatMessage own">
               <p>HELLO HOW ARE YOU</p> 
               <span>1 hour ago</span>
              </div>
           
          </div>
          <div className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </div>
        </div>
   
    </div>
  );
}

export default Chat;
