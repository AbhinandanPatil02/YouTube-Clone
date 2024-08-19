import React from 'react'
import { Link } from 'react-router-dom'
import BottomTime from '../loader/BottomTime'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'

const SuggestedVideo = ({video}) => {
  return (
    <div>
            <Link to={`/video/${video?.videoId}`}>
        <div className='flex mb-3   p-0 m-0'>
          <div className='h-24 md:h-20 w-48 min-w-[168px] lg:w-40 lg:min-w-[28px] xl:w-[168px] xl:h-24 md:rounded-xl hover:rounded-none duration-200 overflow-hidden relative p-0 m-0'>
            <img className='h-full rounded-lg w-full p-0 m-0' src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <BottomTime time={video?.lengthSeconds} />}
          </div>
          <div className='flex mt-3'>
            <div className='flex items-start'>
              <div className='flex h-9 w-9 rounded-full overflow-hidden border p-0 m-0'>
                <img className='h-full w-full rounded-full overflow-hidden p-0 m-0' src={video?.author?.avatar[0].url} alt="" />
              </div>
            </div>
            <div className='ml-2 p-0 m-0'>
              <span className='text-sm font-bold line-clamp-2 p-0 m-0'>{video?.title}</span>
              <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-600 p-0 m-0'>
                {video?.author.title}
                {video?.author.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />
                )}
              </span>
              <div className='flex text-gray-500 text-[12px] p-0 m-0'>
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                <span className='flew text-[24px] leading-none font-bold relative top-[-10px] mx-1 p-0 m-0'>.</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SuggestedVideo
