import React, { useState } from 'react'
import Chat from './Chat';
import "./style.css"
function Discuss(props) {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const joinRoom = () => {
        if (username !== "" && room !== "") {
            props.socket.emit("join_room", room)
            setShowChat(true)
        }
    }
    return (

        <div className="App">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    <input
                        type="text"
                        placeholder="John..."
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Room ID..."
                        onChange={(event) => {
                            setRoom(event.target.value);
                        }}
                    />
                    <button onClick={joinRoom}>Join A Room</button>
                </div>
            ) : (
                <Chat socket={props.socket} username={username} room={room} />
            )}
        </div >
    );
}

export default Discuss