import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { YoutubeAPIContext } from '../../context/YoutubeAPIContext'
import VideoCard from '../VideoCard'

/**
 * 연관된 데이터 컴포넌트
 * @param {videoId} 비디오 ID
 */
const RelativeVideo = ({videoId}) => {
  const youtubeContext = useContext(YoutubeAPIContext)
  const {data: relate, isLoading, error} = useQuery(['related', videoId], 
  () => youtubeContext.relate(videoId), {
    staleTime: 1000 * 60 * 5
  })

  if(isLoading) return <div>loading...</div>
  if(error) return <div>{error.message}</div>

  return (
    <article className=''>
      <ul className='lg:w-96 md:w-full'>
        {relate.map(videos => (
          <VideoCard key={videos.id.videoId ? videos.id.videoId : videos.id.channelId} videos={videos} type='relate' />
        ))}
      </ul>
    </article>
  )
}

export default RelativeVideo