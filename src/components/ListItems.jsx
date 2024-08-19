// import React from 'react'

// const ListItems = () => {
//     const categories = [
//         "All", "Music", "React routers", "Computer programming", "Reverberation", "Movie musicals", "India national cricket team", "News", "Mixes", "1990s", "Telugu cinema", "Live", "Dramedy", "Dubbing", "Indian soap opera", "Cricket", "Football", "Learn Coding"
//     ]
//     return (
//         <div className='flex mt-4 overflow-x-scroll hide-scroll-bar px-3'>

//            <div className='flex space-x-4 flex-nowrap'>
//            {categories.map((category) => {
//                 return (
//                     <div  key={category} className=' flex-none bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-xl px-4 py-2 font-medium text-gray-700'>
//                         {category}
//                     </div>
//                 )

//             })}
//            </div>



//         </div>
//     )
// }

// export default ListItems


import React, { useRef, useEffect } from 'react';
import './ListItem.css';
const ListItems = () => {
    const categories = [
        "All", "Music", "React routers", "Computer programming", "Reverberation", "Movie musicals", "India national cricket team", "News", "Mixes", "1990s", "Telugu cinema", "Live", "Dramedy", "Dubbing", "Indian soap opera", "Cricket", "Football", "Learn Coding"
    ];

    const scrollRef = useRef(null);

    // Horizontal scrolling with the mouse wheel
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const onWheel = (e) => {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
            };
            scrollContainer.addEventListener('wheel', onWheel);
            return () => scrollContainer.removeEventListener('wheel', onWheel);
        }
    }, []);

    return (
        <div ref={scrollRef} className='flex mt-4 overflow-x-scroll hide-scroll-bar px-3'>
            <div className='flex space-x-4 flex-nowrap'>
                {categories.map((category) => {
                    return (
                        <div key={category} className='flex-none bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-xl px-4 py-2 font-medium text-gray-700'>
                            {category}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListItems;

