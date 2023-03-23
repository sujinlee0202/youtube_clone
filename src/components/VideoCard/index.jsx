import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { getDate } from '../../api/getDate'
import { YoutubeAPIContext } from '../../context/YoutubeAPIContext'

/**
 * 비디오 카드 컴포넌트
 * @param {videos} 비디오 데이터
 */
const VideoCard = ({videos, type}) => {
  const youtubeContext = useContext(YoutubeAPIContext)
  const {thumbnails, title, channelId, channelTitle, publishedAt, description} = videos.snippet
  const {data: channel, isLoading, error} = useQuery(['channel', channelId], 
  () => youtubeContext.channel(channelId), {
    staleTime: 1000 * 60 * 5
  })
  const navigate = useNavigate()
  
  if(isLoading) return <div>loading...</div>
  if(error) return <div>{error.message}</div>

  const url = channel.thumbnails.default.url

  const onClickVideoDetail = () => {
    navigate(`/watch?v=${videos.id.videoId ? videos.id.videoId : videos.id}`, {
      state: {videos: videos, channelURL: url}
    })
  }

  return (
    <>
      <li 
        className={`
          ${type === 'main' && 'w-full'}
          ${type === 'search' && 'w-2/3 flex gap-4 mb-4'}
          ${type === 'relate' && 'flex gap-4 mb-4'
        }`} 
        onClick={onClickVideoDetail}
      >
        <img 
          src={thumbnails.medium.url} 
          alt='video thumbnail' 
          className={`
            ${type === 'main' && 'w-full mb-2'} 
            ${type === 'search' && 'w-full max-w-sm max-h-[240px]'} 
            ${type === 'relate' && 'w-40 mr-2'}`}
        ></img>
        {type === 'main' && (
          <div className='flex w-full gap-3'>
            {url && <img src={url} alt='channel' className='w-10 h-10 rounded-full'></img>}
            <div className='w-full'>
              <h2 className='w-full font-bold mb-2 line-clamp-2'>{title}</h2>
              <p className='text-sm text-gray-500'>{channelTitle}</p>
              <p className='text-sm text-gray-500'>{getDate(publishedAt)}</p>
            </div>
          </div>
        )}
        {type === 'search' && (
          <div className='w-full'>
            <h2 className='w-full font-bold mb-1 line-clamp-2'>{title}</h2>
            <p className='text-sm text-gray-500'>{getDate(publishedAt)}</p>
            <div className='flex items-center gap-3 my-4'>
              {url && <img src={url} alt='channel' className='w-10 h-10 rounded-full'></img>}
              <p className='text-sm text-gray-500'>{channelTitle}</p>
            </div>
            <p className='w-full text-gray-500 line-clamp-2'>
              {description.slice(0, 70)}...
            </p>
          </div>
        )}
        {type === 'relate' && (
          <div className='w-full'>
            <h2 className='w-full font-bold mb-1 line-clamp-2'>{title}</h2>
            <p className='text-sm text-gray-500'>{channelTitle}</p>
            <p className='text-sm text-gray-500'>{getDate(publishedAt)}</p>
          </div>
        )}
      </li>
    </>
  )
}

export default VideoCard