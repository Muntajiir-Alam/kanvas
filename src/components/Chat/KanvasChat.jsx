import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chatai from '../../assets/chatai.png'
import UserImg from '../UserData/UserImg'
import Username from '../UserData/Username'
import Capture from '../../assets/capture.png'
import image_plus from '../../assets/image_plus.png'
import UserBio from "../UserData/UserBio";

import {
    House,
    MessageCircle,
    Users,
    Settings,
    Search,
    LineSquiggle,
    Heart,
    MessagesSquare,
    EllipsisVertical,
    MessageSquarePlus,
    Bookmark,
    ChevronDown,
    Send,
    LoaderPinwheel,
    Phone,
    Video,
    ScreenShare,
    Smile,
    Paperclip,
    Mic,
    Forward,
    UserPen,
    X,
} from "lucide-react";

const LeftBtnStyle="flex items-center justify-center rounded-full outline-none cursor-pointer h-9 w-9 hover:bg-btn focus:text-black transition-all duration-3 active:scale-115 ease-in-out focus:bg-white focus:invert "
const ChatBtnStyle = "h-10 w-10 rounded-full p-1 bg-stock text-black  flex items-center justify-center outline-none cursor-pointer transition-all duration-3 active:scale-115 ease-in-out focus:bg-white focus:invert"



const KanvasChat = () => {
    const navigate = useNavigate();
    const [Profile, setProfile] = useState(true)
    const [send, setSend] = useState(true)

    const [message, setMessage] = useState("");     
    const [messages, setMessages] = useState([]);    

    const messagesEndRef = useRef(null);

    const handleSend = () => {
        if (message.trim() === "") return;  
        setMessages([...messages, message]); 
        setMessage(""); 
    };

    // Auto scroll function in chat after send message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    
     // Messages update hone pe scroll kare
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (
        <>
        <div className="h-full w-full  flex  text-white">
            <div className="bg-background border-r border-stock w-1/17 flex flex-col items-center ">
                <div className="h-full w-full flex flex-col items-center justify-start gap-5 pt-7 text-white">
                    <button 
                        type='button'
                        onClick={()=>{
                            setProfile(!Profile)
                        }}
                        className="flex h-10 w-10 cursor-pointer rounded-full outline-2 p-1 outline-stock "
                        >
                        <UserImg />
                    </button>
                    <button 
                        onClick={() => navigate("/canvas")}
                        className={LeftBtnStyle}
                    >
                    <LineSquiggle />
                    </button>
                    ____
                    <button className={LeftBtnStyle}>
                        <MessagesSquare />
                    </button>
                    <button className={LeftBtnStyle}>
                        <Users />
                    </button>
                    <button className={LeftBtnStyle}>
                    <Search />
                    </button>
                    ____
                    <button className={LeftBtnStyle}>
                    <Heart />
                    </button>
                    <button className={LeftBtnStyle}>
                        <MessageCircle />
                    </button>
                    <button className={LeftBtnStyle}>
                    <Bookmark />
                    </button>
                    ____
                    <button className={LeftBtnStyle}>
                    <Settings />
                    </button>
                </div>
            </div>
            <div className="bg-background border-r border-stock h-full w-5/17 flex  flex-col items-center relative">
                <div className="h-18 w-full  flex items-center px-6 justify-between ">
                    <div className="flex items-center gap-4 ">
                        <Username />
                        <ChevronDown className="mt-1"/>
                    </div>
                    <div className="flex gap-4 ">
                        <button>
                            <MessageSquarePlus />
                        </button>
                        <button>
                            <EllipsisVertical />
                        </button>
                    </div>
                </div>
                <div className="w-full h-7  flex items-center justify-around my-4 px-3">
                    <button className="bg-stock rounded-full px-4 text-black">
                        All
                    </button>
                    <button className="bg-stock rounded-full px-4 text-black">
                        Unread
                    </button>
                    <button className="bg-stock rounded-full px-4 text-black">
                        My Kanvi
                    </button>
                    <button className="bg-stock rounded-full px-4 text-black">
                        all
                    </button>
                </div>
                
                {/* chat-list */}
                <div className="w-full h-118  my-1 px-1 overflow-y-auto scroll-smooth hide-scrollbar">
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5  gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>

                </div>
                <div className="w-92 h-14 bg-stock absolute rounded-full bottom-3 text-canvas flex justify-between items-center">
                    <button className="cursor-pointer h-10 w-10  focus:bg-white focus:invert rounded-full ml-4 flex items-center justify-center outline-none">
                        <Search />
                    </button>
                    <input type="text" placeholder="Search here" className="h-1/2 w-2.5/4 outline-none " />
                    <button className="cursor-pointer h-10 w-10   rounded-full mr-4 flex items-center justify-center outline-none focus:bg-white focus:invert">
                        <img src={chatai} alt="Chatai" />
                    </button>
                </div>
            </div>
            <div className="bg-background w-11/17 flex flex-col items-center relative">
                <div className="w-205 h-16 flex justify-between top-2 relative bg-background">
                    <div className="flex items-center gap-2">
                        <img className="h-12  rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <h1 className="font-bold">Sazar</h1>
                    </div>
                    <div className="flex flex-col-reverse items-center gap-3 pr-1 absolute right-2 top-2">
                        <button className={ChatBtnStyle}><ScreenShare /></button>
                        <button className={ChatBtnStyle}><Video /></button>
                        <button className={ChatBtnStyle}><Phone /></button>
                        <button className={ChatBtnStyle}><EllipsisVertical /></button>
                    </div>
                </div>
                <div className="w-205 h-135  mt-1  overflow-y-auto scroll-smooth hide-scrollbar ">
                    {messages.length === 0 ? (
                    <p className="text-gray-400 text-center mt-50">No messages yet</p>) : ( messages.map((msg, index) => (
                        <div key={index} className="bg-stock rounded-lg text-black p-2 my-4 ml-5 text-sm w-fit max-w-[80%] self-end text-wrap "> {msg}</div>
                    ))
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="w-205 h-14  absolute  bottom-3 bg-bac text-canvas flex gap-6 justify-between items-center">
                    <div className="w-190 h-full bg-stock rounded-full flex justify-between items-center ">
                        <button  className="cursor-pointer h-10 w-10  focus:bg-white focus:invert rounded-full ml-4 flex items-center justify-center outline-none">
                            <Smile />
                        </button>
                        <input 
                            type="text" 
                            placeholder="Type a message" 
                            className="h-1/2 w-3/4 outline-none "
                            onClick={()=>{
                                if(send===true){
                                    setSend(!send)
                                }
                            }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        {send ? 
                        <button className="cursor-pointer h-10 w-10  focus:bg-white focus:invert rounded-full mr-4 flex items-center justify-center outline-none">
                            <Paperclip />
                        </button>:
                        <button 
                            onClick={handleSend}
                            className="cursor-pointer h-10 w-10  focus:bg-white focus:invert rounded-full mr-4 flex items-center justify-center outline-none">
                            <Send />
                        </button>}
                    </div>
                    <button className="h-full w-14 bg-stock rounded-full flex items-center justify-center focus:bg-white focus:invert outline-none cursor-pointer">
                        <Mic />
                    </button>
                </div>
                <button className="absolute right-9 bottom-22 bg-stock h-11 w-11 flex items-center justify-center rounded-full outline-none cursor-pointer  transition-all duration-3 active:scale-115 ease-in-out focus:bg-white focus:invert">
                    <img src={chatai} alt="Chatai" />
                </button>
            </div>
        </div>
        <div className={`h-full w-full absolute top-0 bg-white/1 backdrop-blur-xs flex items-center justify-center transition-all duration-500 ease-in-out ${Profile ? "hidden" : null } `}
        >
            <div className="bg-btn h-3/5 w-2/4 rounded-2xl flex items-center  ">
                {/* left */}
                <div className="w-4/7 h-full flex items-center justify-center text-xs">
                    <div className="w-80 h-80 relative">
                        <UserImg />
                        <div className="w-full  h-15 absolute -bottom-7 flex items-center justify-around  ">
                            <button className="flex items-center  bg-white/20 backdrop-blur-x px-3 py-2  rounded-2xl justify-around outline-none cursor-pointer gap-3 text-white focus:scale-105 focus:bg-black/80">
                                <img src={Capture} alt="Take Photo" className="h-8 w-8 invert" />
                                <h1>Take photo</h1>
                            </button>
                            <button className="flex items-center  bg-white/20 backdrop-blur-x px-3 py-2  rounded-2xl justify-around outline-none cursor-pointer gap-3 text-white focus:scale-105 focus:bg-black/80 ">
                                <img src={image_plus} alt="Take Photo" className="h-8 w-8 invert " />
                                <h1>Add photo</h1>
                            </button>
                        </div>
                        <button 
                            type='button'
                            onClick={()=>{
                            setProfile(!Profile)
                        }}
                        className="absolute -top-6 -left-2 h-10 w-10  flex items-center justify-center bg-white/20 backdrop-blur-x  rounded-full  outline-none cursor-pointer  text-white focus:scale-105 focus:bg-black/80">
                            <X />
                        </button>
                    </div>
                </div>
                {/* right */}
                <div className="h-7/10 w-[1px] bg-stock"></div>
                <div className="h-full w-3/7 flex flex-col  py-14 px-4 gap-3 text-xs text-white">
                    <Username />
                    <div className="h-30 w-60">
                        <UserBio />
                    </div>
                    <div className="gap-2 flex flex-col">
                        <button className="flex items-center  bg-white/20 backdrop-blur-x  py-2  rounded-2xl justify-around outline-none cursor-pointer gap-3 text-white  focus:bg-black/80">
                            <UserPen />
                            Edit Profile
                        </button>
                        <button className="flex items-center  bg-white/20 backdrop-blur-x  py-2  rounded-2xl justify-around outline-none cursor-pointer gap-3 text-white  focus:bg-black/80">
                            <Forward />
                            Share Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default KanvasChat;
