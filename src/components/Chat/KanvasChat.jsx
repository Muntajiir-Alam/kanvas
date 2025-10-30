import React from "react";
import chatai from '../../assets/chatai.png'
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
} from "lucide-react";
const LeftBtnStyle="flex items-center justify-center rounded-full outline-none cursor-pointer h-9 w-9 hover:bg-btn active:text-white transition-all duration-3 active:scale-115 ease-in-out"
const ChatBtnStyle = "h-10 w-10 rounded-full p-1 bg-stock text-black  flex items-center justify-center outline-none cursor-pointer transition-all duration-3 active:scale-115 ease-in-out"
const KanvasChat = () => {
    return (
        <>
        <div className="h-full w-full  flex  text-white">
            <div className="bg-background border-r-2 border-stock w-1/17 flex flex-col items-center ">
                <div className="h-full w-full flex flex-col items-center justify-start gap-5 pt-7 text-white">
                    <button className="flex h-10 w-10 cursor-pointer rounded-full outline-2 p-1 outline-stock ">
                        <img
                            className="h-full w-full rounded-full"
                            src="https://i.pinimg.com/1200x/2c/36/44/2c364466678be55dfacfe65c673844c1.jpg"
                            alt=""
                        />
                    </button>
                    <button className={LeftBtnStyle}>
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
            <div className="bg-background border-r-2 border-stock h-full w-5/17 flex  flex-col items-center relative">
                <div className="h-18 w-full  flex items-center px-6 justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-karla ">Muntajir</h1>
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
                    <button className="cursor-pointer pl-4">
                        <Search />
                    </button>
                    <h1>Search here</h1>
                    <button className="cursor-pointer pr-4">
                        <img src={chatai} alt="Chatai" />
                    </button>
                </div>
            </div>
            <div className="bg-background w-11/17 flex flex-col items-center relative">
                <div className=" rounded-2xl  w-205 h-15 flex justify-between px-4 top-2 relative">
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
                <div className="w-205 h-full mt-4 rounded-2xl  ">
                
                </div>
                <div className="w-205 h-14  absolute  bottom-3 text-canvas flex justify-between items-center">
                    <div className="w-180 h-full bg-stock rounded-full flex justify-between items-center ml-2">
                        <button className="cursor-pointer pl-4">
                            <Smile />
                        </button>
                        <h1>Type a message</h1>
                        <button className="cursor-pointer pr-4">
                            <Paperclip />
                        </button>
                    </div>
                    <button className="h-full w-14 mr-3 bg-stock rounded-full flex items-center justify-center">
                        <Mic />
                    </button>
                </div>
                <button className="absolute right-7 bottom-22 bg-stock h-11 w-11 flex items-center justify-center rounded-full outline-none cursor-pointer  transition-all duration-3 active:scale-115 ease-in-out">
                    <img src={chatai} alt="Chatai" />
                </button>
            </div>
        </div>
        </>
    );
};

export default KanvasChat;
