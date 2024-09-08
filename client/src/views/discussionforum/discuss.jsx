import React, { useState, useEffect } from "react";
import "./discuss.css";
import img from "./announcement.png"

function Discus() {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        try {
            const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
            console.log("Loaded messages from localStorage:", savedMessages);
            setMessages(savedMessages.slice(-10)); 
        } catch (error) {
            console.error("Error loading messages from localStorage:", error);
        }
    }, []);
    useEffect(() => {
        try {
            console.log("Saving messages to localStorage:", messages);
            localStorage.setItem("messages", JSON.stringify(messages));
        } catch (error) {
            console.error("Error saving messages to localStorage:", error);
        }
    }, [messages]);
    const addChat = () => {
        if (inputValue.trim() === "") return;

        const newMessage = { text: inputValue, timestamp: new Date().toISOString() };
        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages, newMessage];
            console.log("Adding new message. Updated messages:", updatedMessages);
            return updatedMessages.slice(-10); 
        });
        setInputValue(""); 
    };

    return (
        <div id="ret">
            <h1>Discussion Forum</h1>
            <div className="main">
                <div className="announcements">
                    <h3 className="h3">ANNOUNCEMENTS</h3>
                    <img src={img} alt="" className="announcement-img"/>
                    <div className="infocard">Date:25/08/24 -  Janmashthami</div>
                    <div className="infocard">Note: Water supply will be off for 2 hours.</div>
                    <div className="infocard">Note: Water supply will be off for 2 hours.</div>
                </div>
                <div className="chat">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                {new Date(msg.timestamp).toLocaleString()}: {msg.text}
                            </div>
                        ))}
                    </div>
                    <div>
                    <input
                        type="text"
                        placeholder="Type your message"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="inp"
                    />
                    <button className="btn" onClick={addChat}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discus;
