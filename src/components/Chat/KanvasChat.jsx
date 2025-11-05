import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chatai from '../../assets/chatai.png'
import UserImg from '../UserData/UserImg'
import Username from '../UserData/UserName'
import Capture from '../../assets/capture.png'
import image_plus from '../../assets/image_plus.png'
import Community from "../../assets/community.png";
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
    UserPlus,
    UserRoundSearch,
    User,
} from "lucide-react";

const LeftBtnStyle="flex items-center justify-center p-1 rounded-full outline-none cursor-pointer h-9 w-9 hover:bg-btn focus:text-black transition-all duration-300 ease-in-out focus:bg-stock  "
const ChatBtnStyle = "h-10 w-10 rounded-full p-2 bg-stock text-black  flex items-center justify-center outline-none cursor-pointer transition-all duration-300 active:scale-115 ease-in-out focus:bg-white focus:invert"

const KanvasChat = () => {
    const navigate = useNavigate();
    const [Profile, setProfile] = useState(true)
    const [addFriends, setAddFriends] = useState(true)
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
            {/* left div  */}
            <div className="bg-background border-r border-stock h-full w-5/17 flex  flex-col items-center relative">
                {/* header  */}
                <div className="h-18 absolute top-0 w-full bg-background shadow-lg flex items-center justify-between gap-3  text-white">
                    <div className="h-full w-2/5 flex items-center justify-start ml-6">
                        <button 
                            type='button'
                            onClick={()=>{
                                setProfile(!Profile)
                            }}
                            className="flex h-10 w-10 cursor-pointer rounded-full outline-2 p-1 outline-stock mr-6 "
                            >
                            <UserImg />
                        </button>
                    </div>
                    {/* button */}
                    <div className="h-full w-3/5 flex items-center justify-around">
                        <button 
                            onClick={() => navigate("/canvas")}
                            className={LeftBtnStyle}
                        >
                        <LineSquiggle />
                        </button>
                        <button className={LeftBtnStyle}>
                            <MessagesSquare />
                        </button>
                        <button className={LeftBtnStyle}>
                            <Users />
                        </button>
                        <button 
                            className={LeftBtnStyle}
                            onClick={()=>{
                            setAddFriends(!addFriends)
                            }}
                            >
                            <Search />
                        </button>
                        <button className={LeftBtnStyle}>
                            <EllipsisVertical />
                        </button>
                    </div>
                </div>

                {/* chat-list */}
                <div className="w-full h-160 my-1 px-4 pt-20 pb-10 overflow-y-auto scroll-smooth hide-scrollbar">
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
                
                {/* search bar for chat list  */}
                <div className="w-92 h-14 bg-stock absolute rounded-full bottom-3 text-canvas flex justify-between items-center shadow-lg">
                    <label for="chatli" className="cursor-pointer h-10 w-10  focus:bg-white focus:invert rounded-full ml-4 flex items-center justify-center outline-none">
                        <Search />
                    </label>
                    <input type="text" id="chatli" placeholder="Search here" className="h-1/2 w-3/4 outline-none " />
                    <button className="cursor-pointer h-10 w-10   rounded-full mr-4 flex items-center justify-center outline-none focus:bg-white focus:invert">
                        <img src={chatai} alt="Chatai" />
                    </button>
                </div>
            </div>
            {/* right div -> chating section */}
            <div className="bg-background w-12/17 flex flex-col items-center relative">
                {/* header */}
                <div className="w-full h-18 px-4 flex items-center justify-between bg-background shadow-lg absolute top-0">
                    <div className="flex items-center gap-4">
                        <img className="h-12  rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <h1 className="font-bold">Sazar</h1>
                    </div>
                    <div className="flex items-center gap-4 pr-2">
                        <button className={ChatBtnStyle}><ScreenShare /></button>
                        <button className={ChatBtnStyle}><Video /></button>
                        <button className={ChatBtnStyle}><Phone /></button>
                        <button className={ChatBtnStyle}><EllipsisVertical /></button>
                    </div>
                </div>
                {/* chat push */}
                <div className="w-205 h-162 pb-10  pt-16 mt-1  overflow-y-auto scroll-smooth hide-scrollbar ">
                    {messages.length === 0 ? (
                    <p className="text-stock text-center mt-50">No messages yet</p>) : ( messages.map((msg, index) => (
                        <div key={index} className="bg-stock rounded-full text-black py-2 px-4 my-4 ml-5 text-sm w-fit max-w-[80%] self-end text-wrap shadow-sm shadow-canvas"> {msg}</div>
                    )))}

                    <div ref={messagesEndRef} />
                </div>

                {/* footer */}
                <div className="w-full px-6 h-14  absolute  bottom-3 bg-bac text-canvas flex  justify-between items-center">
                    <div className="w-210 h-full bg-stock rounded-full flex justify-between items-center ">
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
                    <button className="h-14 w-14  bg-stock rounded-full flex items-center justify-center focus:bg-white focus:invert outline-none cursor-pointer">
                        <Mic />
                    </button>
                    <button className="absolute right-8 bottom-19 bg-stock h-11 w-11 flex items-center justify-center rounded-full outline-none cursor-pointer  transition-all duration-3 active:scale-115 ease-in-out focus:bg-white focus:invert">
                        <img src={chatai} alt="Chatai" />
                    </button>
                </div>
            </div>
        </div>
        {/* profile section */}
        <div className={`h-full w-full absolute top-0 bg-white/1 backdrop-blur-xs flex items-center justify-center transition-all duration-500 ease-in-out ${Profile ? "hidden" : null } `}
        >
            {/* fake div for onClick  */}
            <div 
                className="h-full w-full "
                onClick={()=>{
                    setProfile(!Profile)
                }}
                ></div>
                {/* profile view mid*/}
            <div className="absolute bg-btn h-3/5 w-2/4 rounded-2xl flex items-center  ">
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

        {/* add friendes */}
        <div className={`h-full w-full absolute top-0 bg-white/1 backdrop-blur-xs flex items-center justify-center transition-all duration-500 ease-in-out ${addFriends ? "hidden" : null}`}
        >
            {/* fake div for onClick  */}
            <div
            className="h-full w-full "
                onClick={()=>{
                    setAddFriends(!addFriends)
                }}></div>
            <div className="absolute bg-btn h-5/7 w-3/5 rounded-2xl flex items-center  ">
                {/* left-div-search friends */}
                <div className="h-full w-2/5  p-4 flex flex-col gap-2 text-white">
                    <div className="h-7  flex items-center justify-center">
                        <div className="font-karla text-lg flex gap-2 items-center "> 
                            <UserRoundSearch size={20} className="mb-1"/> Search friends
                        </div>
                    </div>
                    <input type="text" name="" id="" placeholder="Search here" className=" bg-stock  w-full h-10 rounded-full pl-4 text-canvas outline-none mb-2" />
                    
                    {/* seached list */}
                    <div className="w-full h-90  bg-background  rounded-2xl font-bold  overflow-y-auto scroll-smooth hide-scrollbar">
                        
                        <div className="h-15 w-full flex items-center justify-between rounded-2xl px-3 cursor-pointer hover:bg-white/5">
                            <div className="h-11 w-11">
                                <UserImg />
                            </div>
                            <h1 className="mr-24">
                                Gufran Ali
                            </h1>
                            <button className="h-8 w-8 p-2 bg-stock rounded-full flex items-center justify-center text-canvas cursor-pointer">
                                <UserPlus />
                            </button>
                        </div>
                        
                        <div className="h-15 w-full flex items-center justify-between rounded-2xl px-3 cursor-pointer hover:bg-white/5">
                            <div className="h-11 w-11">
                                <UserImg />
                            </div>
                            <h1 className="mr-24">
                                Gufran Ali
                            </h1>
                            <button className="h-8 w-8 p-2 bg-stock rounded-full flex items-center justify-center text-canvas cursor-pointer">
                                <UserPlus />
                            </button>
                        </div>
                        
                        <div className="h-15 w-full flex items-center justify-between rounded-2xl px-3 cursor-pointer hover:bg-white/5">
                            <div className="h-11 w-11">
                                <UserImg />
                            </div>
                            <h1 className="mr-24">
                                Gufran Ali
                            </h1>
                            <button className="h-8 w-8 p-2 bg-stock rounded-full flex items-center justify-center text-canvas cursor-pointer">
                                <UserPlus />
                            </button>
                        </div>
                        
                        <div className="h-15 w-full flex items-center justify-between rounded-2xl px-3 cursor-pointer hover:bg-white/5">
                            <div className="h-11 w-11">
                                <UserImg />
                            </div>
                            <h1 className="mr-24">
                                Gufran Ali
                            </h1>
                            <button className="h-8 w-8 p-2 bg-stock rounded-full flex items-center justify-center text-canvas cursor-pointer">
                                <UserPlus />
                            </button>
                        </div>
                        
                        <div className="h-15 w-full flex items-center justify-between rounded-2xl px-3 cursor-pointer hover:bg-white/5">
                            <div className="h-11 w-11">
                                <UserImg />
                            </div>
                            <h1 className="mr-24">
                                Gufran Ali
                            </h1>
                            <button className="h-8 w-8 p-2 bg-stock rounded-full flex items-center justify-center text-canvas cursor-pointer">
                                <UserPlus />
                            </button>
                        </div>
                        
                        <div className="h-15 w-full flex items-center justify-between rounded-2xl px-3 cursor-pointer hover:bg-white/5">
                            <div className="h-11 w-11">
                                <UserImg />
                            </div>
                            <h1 className="mr-24">
                                Gufran Ali
                            </h1>
                            <button className="h-8 w-8 p-2 bg-stock rounded-full flex items-center justify-center text-canvas cursor-pointer">
                                <UserPlus />
                            </button>
                        </div>
                        
                        <div className="h-15 w-full flex items-center justify-between rounded-2xl px-3 cursor-pointer hover:bg-white/5">
                            <div className="h-11 w-11">
                                <UserImg />
                            </div>
                            <h1 className="mr-24">
                                Gufran Ali
                            </h1>
                            <button className="h-8 w-8 p-2 bg-stock rounded-full flex items-center justify-center text-canvas cursor-pointer">
                                <UserPlus />
                            </button>
                        </div>
                        
                    </div>
                </div>
                {/* right div clicked profile */}
                <div className="h-full w-3/5 border-l text-white border-stock/34 flex flex-col items-center py-10 gap-4" >
                    <div className="h-40 w-40">
                        <UserImg />
                    </div>
                    <div className="h-18 w-60  text-center overflow-y-auto overflow-hidden scroll-smooth hide-scrollbar">
                        <UserBio />
                    </div>
                    <div className="flex gap-6 text-lg ">
                        <div className=" flex items-center   py-2  rounded-2xl justify-around outline-none gap-3 "><User />200 </div>
                        <div className="flex items-center   py-2  rounded-2xl justify-around outline-none gap-3 "><span><LineSquiggle /></span>200</div>
                    </div>
                    <button className="flex items-center  bg-stock py-2  rounded-2xl justify-around outline-none cursor-pointer  gap-3 text-black  focus:bg-black/80 focus:text-white px-4">
                            <UserPlus />
                            Add friends
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default KanvasChat;
