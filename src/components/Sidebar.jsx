
import React from 'react';
import { useUtils } from '../context/UtilContext';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from 'react-icons/bi';
import { GiLinkedRings } from 'react-icons/gi';
import { AiOutlineLike } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import { MdOutlineContacts } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsExclamationSquare } from "react-icons/bs";


const Sidebar = () => {
  const { isSidebar, mobileShow } = useUtils();

      const sidebarItems=[
        {
            groupname:"Home",
            groupItems:[
                {
                    id: 1,
                    name: "Home",
                    icon: <GoHome />
                },
                {
                    id: 2,
                    name: "Shorts",
                    icon: <SiYoutubeshorts />
                },
                {
                    id: 3,
                    name: "Subscriptions",
                    icon: <MdOutlineSubscriptions />
                }
        
            ]
        },
        {
            groupname:"You",
            groupItems:[
                {
                    id: 1,
                    name: "Your channel",
                    icon: <MdOutlineContacts />
                },
                {
                    id: 2,
                    name: "History",
                    icon: <GrHistory />
                },
                {
                    id: 3,
                    name: "Playlist",
                    icon: <MdOutlineSubscriptions />
                },
                {
                    id: 4,
                    name: "Your videos",
                    icon: <BiVideo />
                },
                {
                    id: 5,
                    name: "Watch later",
                    icon: <MdWatchLater />
                },
                {
                    id: 6,
                    name: "Liked videos",
                    icon: <AiOutlineLike />
                },
        
            ]
        },
        {
            groupname:"Explore",
            groupItems:[
                {
                    id: 1,
                    name: "Trending",
                    icon: <MdOutlineContacts />
                },
                {
                    id: 2,
                    name: "Shopping",
                    icon: <HiOutlineShoppingCart />
                },
                {
                    id: 3,
                    name: "Music",
                    icon: <PiMusicNoteLight />
                },
                {
                    id: 4,
                    name: "Movies",
                    icon: <PiFilmSlateLight />
                },
                {
                    id: 5,
                    name: "Live",
                    icon: <CgMediaLive />
                },
                {
                    id: 6,
                    name: "Gaming",
                    icon: <SiYoutubegaming />
                },
                {
                    id: 7,
                    name: "News",
                    icon: <FaRegNewspaper />
                },
                {
                    id: 8,
                    name: "Sports",
                    icon: <TfiCup />
                },
                {
                    id: 9,
                    name: "Courses",
                    icon: <PiLightbulbLight />
                },
                {
                    id: 10,
                    name: "Fashion & Beauty",
                    icon: <SiStylelint />
                },
                {
                    id: 11,
                    name: "Podcast",
                    icon: <MdPodcasts />
                },
        
            ]
        },
        {
            groupname:"More from YouTube",
            groupItems: [
                {
                    id: 1,
                    name: "YouTube Premium",
                    icon: <FaYoutube />
                },
                {
                    id: 2,
                    name: "YouTube Studio",
                    icon: <SiYoutubestudio />
                },
                {
                    id: 3,
                    name: "YouTube Music",
                    icon: <SiYoutubemusic />
                },
                {
                    id: 4,
                    name: "YouTube Kids",
                    icon: <SiYoutubekids />
                }
        
            ]
        },
        {
            groupname:" ",
            groupItems:[
                {
                    id: 1,
                    name: "Setting",
                    icon: <MdOutlineSettings />
                },
                {
                    id: 2,
                    name: "Report history",
                    icon: <MdOutlineOutlinedFlag />
                },
                {
                    id: 3,
                    name: "Help",
                    icon: <FaRegQuestionCircle />
                },
                {
                    id: 4,
                    name: "Send feedback",
                    icon: <BsExclamationSquare />
                }
        
            ]
        }
    ]


  return (
    <div
    className={`
      ${mobileShow 
        ? "fixed top-0 left-0 z-40 w-[80%] sm:w-[40%] h-screen bg-white transition-transform duration-300 transform" 
        : "hidden"} 
      ${isSidebar ? "xl:block xl:w-[20%]" : "xl:hidden"}
      px-6 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16
    `}
  >

  {/* Render sidebar items */}
      {sidebarItems.map((group) => (
        <div key={group.groupname} className='mb-5'>
          <h1 className='font-bold'>{group.groupname}</h1>
          {group.groupItems.map((item) => (
            <div key={item.id} className='space-x-6 hover:bg-gray-300 flex items-center duration-300 my-2 rounded-xl p-1'>
              <div className='text-sm cursor-pointer'>{item.icon}</div>
              <span className='text-sm cursor-pointer'>{item.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;















// import React from 'react'
// import { GoHome } from "react-icons/go";
// import { SiYoutubeshorts } from "react-icons/si";
// import { MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";

// import { FaChevronRight } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
// import { SiYoutubekids } from "react-icons/si";
// import { SiYoutubestudio } from "react-icons/si";
// import { SiYoutubemusic } from "react-icons/si";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { PiMusicNoteLight } from "react-icons/pi";
// import { PiFilmSlateLight } from "react-icons/pi";
// import { CgMediaLive } from "react-icons/cg";
// import { SiYoutubegaming } from "react-icons/si";

// import { FaRegNewspaper } from "react-icons/fa";
// import { TfiCup } from "react-icons/tfi";
// import { PiLightbulbLight } from "react-icons/pi";
// import { SiStylelint } from "react-icons/si";
// import { MdPodcasts } from "react-icons/md";
// import { BiVideo } from 'react-icons/bi';
// import { GiLinkedRings } from 'react-icons/gi';
// import { AiOutlineLike } from "react-icons/ai";
// import { GrHistory } from "react-icons/gr";
// import { MdOutlineContacts } from "react-icons/md";
// import { MdOutlineSettings } from "react-icons/md";
// import { MdOutlineOutlinedFlag } from "react-icons/md";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { BsExclamationSquare } from "react-icons/bs";
// import {useUtils} from '../context/UtilContext'



// const Sidebar = () => {

//     const {isSidebar,setIsSidebar,mobileShow,setMobileShow}=useUtils()


//     const sidebarItems=[
//         {
//             groupname:"Home",
//             groupItems:[
//                 {
//                     id: 1,
//                     name: "Home",
//                     icon: <GoHome />
//                 },
//                 {
//                     id: 2,
//                     name: "Shorts",
//                     icon: <SiYoutubeshorts />
//                 },
//                 {
//                     id: 3,
//                     name: "Subscriptions",
//                     icon: <MdOutlineSubscriptions />
//                 }
        
//             ]
//         },
//         {
//             groupname:"You",
//             groupItems:[
//                 {
//                     id: 1,
//                     name: "Your channel",
//                     icon: <MdOutlineContacts />
//                 },
//                 {
//                     id: 2,
//                     name: "History",
//                     icon: <GrHistory />
//                 },
//                 {
//                     id: 3,
//                     name: "Playlist",
//                     icon: <MdOutlineSubscriptions />
//                 },
//                 {
//                     id: 4,
//                     name: "Your videos",
//                     icon: <BiVideo />
//                 },
//                 {
//                     id: 5,
//                     name: "Watch later",
//                     icon: <MdWatchLater />
//                 },
//                 {
//                     id: 6,
//                     name: "Liked videos",
//                     icon: <AiOutlineLike />
//                 },
        
//             ]
//         },
//         {
//             groupname:"Explore",
//             groupItems:[
//                 {
//                     id: 1,
//                     name: "Trending",
//                     icon: <MdOutlineContacts />
//                 },
//                 {
//                     id: 2,
//                     name: "Shopping",
//                     icon: <HiOutlineShoppingCart />
//                 },
//                 {
//                     id: 3,
//                     name: "Music",
//                     icon: <PiMusicNoteLight />
//                 },
//                 {
//                     id: 4,
//                     name: "Movies",
//                     icon: <PiFilmSlateLight />
//                 },
//                 {
//                     id: 5,
//                     name: "Live",
//                     icon: <CgMediaLive />
//                 },
//                 {
//                     id: 6,
//                     name: "Gaming",
//                     icon: <SiYoutubegaming />
//                 },
//                 {
//                     id: 7,
//                     name: "News",
//                     icon: <FaRegNewspaper />
//                 },
//                 {
//                     id: 8,
//                     name: "Sports",
//                     icon: <TfiCup />
//                 },
//                 {
//                     id: 9,
//                     name: "Courses",
//                     icon: <PiLightbulbLight />
//                 },
//                 {
//                     id: 10,
//                     name: "Fashion & Beauty",
//                     icon: <SiStylelint />
//                 },
//                 {
//                     id: 11,
//                     name: "Podcast",
//                     icon: <MdPodcasts />
//                 },
        
//             ]
//         },
//         {
//             groupname:"More from YouTube",
//             groupItems: [
//                 {
//                     id: 1,
//                     name: "YouTube Premium",
//                     icon: <FaYoutube />
//                 },
//                 {
//                     id: 2,
//                     name: "YouTube Studio",
//                     icon: <SiYoutubestudio />
//                 },
//                 {
//                     id: 3,
//                     name: "YouTube Music",
//                     icon: <SiYoutubemusic />
//                 },
//                 {
//                     id: 4,
//                     name: "YouTube Kids",
//                     icon: <SiYoutubekids />
//                 }
        
//             ]
//         },
//         {
//             groupname:" ",
//             groupItems:[
//                 {
//                     id: 1,
//                     name: "Setting",
//                     icon: <MdOutlineSettings />
//                 },
//                 {
//                     id: 2,
//                     name: "Report history",
//                     icon: <MdOutlineOutlinedFlag />
//                 },
//                 {
//                     id: 3,
//                     name: "Help",
//                     icon: <FaRegQuestionCircle />
//                 },
//                 {
//                     id: 4,
//                     name: "Send feedback",
//                     icon: <BsExclamationSquare />
//                 }
        
//             ]
//         }
//     ]

//     return (
//         <>
//             <div className={`${mobileShow ? "": "" } px-6 w-[30%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16`}>
           

      

//                 <div className=' items-center space-y-3'>
//                     {/* Home */}
//                     {sidebarItems.map((group) => {
//                         return (
//                             <div className='mb-5'>
//                                 <h1 className='font-bold'>{group.groupname}</h1>
//                                 {
//                                     group.groupItems.map((item)=>(
//                                         <div key={item.id}   className='space-x-6 hover:bg-gray-300 flex items-center duration-300 my-2 rounded-xl p-1'>
//                                             <div className='text-sm cursor-pointer'>{item.icon}</div>
//                                             <span className='text-sm cursor-pointer'>{item.name}</span>
                                            
//                                         </div>
//                                     ))
//                                 }
//                             </div>
                            
//                         )
//                     })}

//                     <br />
//                     <hr />

                   
//                     <hr />
//                     <div className='text-xs font-semibold  text-gray-500'>
//                         <span className='cursor-pointer'>About Press Copyright <br />
//                          Contact us Creators <br />
//                           Advertise Developers <br />
//                           <br />
//                           <p className='cursor-pointer'>
//                           Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new features
//                             </p></span>
//                             <br />
//                             <p className='cursor-pointer text-xs font-semibold  text-gray-500'>
//                             © 2024 Google LLC
//                             </p>
//                     </div>



//                 </div>

//             </div>
//         </>

//     )
// }

// export default Sidebar
