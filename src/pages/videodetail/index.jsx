import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getDate } from '../../api/getDate'
import RelativeVideo from '../../components/RelativeVideo'

const VideoDetailPage = () => {
  const location = useLocation()
  let query = new URLSearchParams(location.search)
  let videoId = query.get('v')

  const {channelTitle, description, publishedAt, title, tags} = location.state.videos.snippet
  const channelURL = location.state.channelURL

  console.log(videoId)
  console.log(channelURL)

  return (
    <section className='max-w-screen-2xl mx-auto p-4 flex gap-2'>
      <article className='basis-4/6'>
        <div className='relative w-full h-0 pb-[56.25%] overflow-hidden'>
          <iframe 
            id="player" 
            type="text/html" 
            width="100%" 
            height="100%"
            src={`http://www.youtube.com/embed/${videoId}`}
            // frameborder="0"
            title='title'
            allow="encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className='absolute inset-0 w-full h-full'
          ></iframe>
        </div>
        <h2 className='text-2xl font-bold my-2'>{title}</h2>
        <div className='flex items-center mb-2'>
          <img src={channelURL} alt={channelTitle} className='mr-2 w-10 h-10 rounded-full'></img>
          <p>{channelTitle}</p>
        </div>
        <div className='w-full rounded-xl bg-gray-100 p-2'>
          <span className='mr-2'>{getDate(publishedAt)}</span>
          {tags && tags.map((tag, index) => <span key={index} className='mr-2 text-blue-600'>#{tag}</span>)}
          <pre className='whitespace-pre-wrap'>
            {description}
          </pre>
        </div>
      </article>
      <RelativeVideo />
    </section>
  )
}

export default VideoDetailPage
