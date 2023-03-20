import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router'
import { fetchChannel } from '../../api/fetchChannel'
import { getDate } from '../../api/getDate'

const VideoCard = ({videos, type}) => {
  const {thumbnails, title, channelId, channelTitle, publishedAt, description} = videos.snippet
  const {data: channel, isLoading, error} = useQuery(['channel', channelId], fetchChannel, {
    staleTime: 1000 * 60 * 5
  })
  const navigate = useNavigate()

  const onClickVideoDetail = () => {
    navigate(`/watch/${videos.id.videoId ? videos.id.videoId : videos.id}`)
  }
  
  if(isLoading) return <div>loading...</div>
  if(error) return <div>{error.message}</div>
  
  return (
    <>
      {type === 'main' && (
          <li className='w-full' onClick={onClickVideoDetail}>
            <img src={thumbnails.medium.url} alt='video thumbnail' className='w-full mb-2'></img>
            <div className='flex w-full gap-3'>
              <div className='w-10 h-10'>
                <img src={channel.snippet.thumbnails.default.url} alt='channel' className='w-10 h-10 rounded-full'></img>
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
      {type === 'search' && (
          <li className='w-2/3 flex gap-4 mb-4' onClick={onClickVideoDetail}>
            <img src={thumbnails.medium.url} alt='video thumbnail' className='w-full'></img>
            <div className='w-full'>
              <h2 className='w-full font-bold mb-1 line-clamp-2'>{title}</h2>
              <p className='text-sm text-gray-500'>{getDate(publishedAt)}</p>
              <div className='flex items-center gap-3 my-4'>
                <div className='w-10 h-10'>
                  <img src={channel.snippet.thumbnails.default.url} alt='channel' className='w-10 h-10 rounded-full'></img>
                </div>
                <p className='text-sm text-gray-500'>{channelTitle}</p>
              </div>
              <p className='text-sm text-gray-500 line-clamp-2'>{description}</p>
            </div>
          </li>
        )
      }
    </>
  )
}

export default VideoCard