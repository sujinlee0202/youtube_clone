import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useLocation } from 'react-router'
import { fetchSearch } from '../../api/fetchSearch'
import VideoCard from '../../components/VideoCard'


const SearchPage = () => {
  const location = useLocation()
  let query = new URLSearchParams(location.search)
  let keyword = query.get('search_query')

  const {data: search, isLoading, error} = useQuery(['videos', keyword], fetchSearch, {
    staleTime: 1000 * 60
  })


  if(isLoading) return <div>loading...</div>
  if(error) return <div>{error.message}</div>

  return (
    <section className='max-w-screen-2xl mx-auto p-4'>
      <ul className='w-full flex flex-col justify-center items-center'>
        {search.map(videos => (
          <VideoCard key={videos.id.videoId ? videos.id.videoId : videos.id.channelId} videos={videos} type='search' />
        ))}
      </ul>
    </section>
  )
}

export default SearchPage