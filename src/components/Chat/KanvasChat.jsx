import React from "react";
import Logo from '../../pages/Logo'
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
    
} from "lucide-react";



const KanvasChat = () => {
    return (
        <>
        <div className="h-full w-full bg-canvas flex gap-5 p-3 text-white">
            <div className="bg-background rounded-2xl w-1/17 flex flex-col items-center ">
                <div className="h-full w-full flex flex-col items-center justify-start gap-7 pt-7 text-white">
                    <div className="flex h-9 w-9 ">
                    <img
                        className="h-full w-full rounded-full"
                        src="https://i.pinimg.com/1200x/2c/36/44/2c364466678be55dfacfe65c673844c1.jpg"
                        alt=""
                    />
                    </div>
                    <button>
                    <LineSquiggle />
                    </button>
                    ____
                    <button>
                        <MessagesSquare />
                    </button>
                    <button>
                        <Users />
                    </button>
                    <button>
                    <Search />
                    </button>
                    ____
                    <button>
                    <Heart />
                    </button>
                    <button>
                        <MessageCircle />
                    </button>
                    <button>
                    <Bookmark />
                    </button>
                    ____
                    <button className="">
                    <Settings />
                    </button>
                </div>
            </div>
            <div className="bg-background rounded-2xl h-full w-5/17 flex  flex-col items-center relative">
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
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
                        <img className="h-14 rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <div className="h-10 w-70  text-sm pl-3">
                            <h1 className="font-bold">Sazar</h1>
                            <h1>Last massege sent</h1>
                        </div>
                        <button>
                            <Send />
                        </button>
                    </div>
                    <div className="h-16 w-full flex items-center px-5 flex items-center gap-1">
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
                        <LoaderPinwheel />
                    </button>
                </div>
            </div>
            <div className="bg-background rounded-2xl   w-11/17 flex flex-col items-center relative">
                <div className=" rounded-2xl  w-205 h-15 flex justify-between px-4 absolute top-2 relative">
                    <div className="flex items-center gap-2">
                        <img className="h-12  rounded-full" src="https://i.pinimg.com/1200x/6b/d9/2a/6bd92a4a73c0bbbf5bb691da2dd04719.jpg" alt="" />
                        <h1 className="font-bold">Sazar</h1>
                    </div>
                    <div className="flex flex-col-reverse items-center gap-3 pr-1 absolute right-2 top-2">
                        <button className="h-10 w-10 rounded-full p-1 bg-stock text-black  flex items-center justify-center"><ScreenShare /></button>
                        <button className="h-10 w-10 rounded-full p-1 bg-stock text-black  flex items-center justify-center"><Video /></button>
                        <button className="h-10 w-10 rounded-full p-1 bg-stock text-black  flex items-center justify-center"><Phone /></button>
                        <button className="h-10 w-10 rounded-full p-1 bg-stock text-black  flex items-center justify-center"><EllipsisVertical /></button>
                    </div>
                </div>
                <div className="w-205 h-full mt-4 rounded-2xl  ">
                    
                </div>
                <div className="w-205 h-14 bg-stock absolute rounded-full bottom-3 text-canvas flex justify-between items-center">
                    <button className="cursor-pointer pl-4">
                        <Smile />
                    </button>
                    <h1>Type a message</h1>
                    <button className="cursor-pointer pr-4">
                        <Paperclip />
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default KanvasChat;
