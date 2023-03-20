import React from 'react'
import {BsDot} from 'react-icons/bs'
import { getDate } from '../../api/getDate'

const VideoCard = ({videos}) => {
  const {thumbnails, title, channelTitle, publishedAt} = videos.snippet
  console.log(videos)
  
  return (
    <li className='w-full'>
      <img src={thumbnails.medium.url} alt='video thumbnail' className='w-full mb-2'></img>
      <div className='flex w-full gap-3'>
        <div className='w-10 h-10'>
          <div className='w-10 h-10 bg-gray-500 rounded-full'></div>
        </div>
        <div className='w-full'>
          <h2 className='w-full font-bold mb-2 line-clamp-2'>{title}</h2>
          <p className='text-sm text-gray-500'>{channelTitle}</p>
          <p className='text-sm text-gray-500'>{getDate(publishedAt)}</p>
        </div>
      </div>
    </li>
  )
}

export default VideoCard