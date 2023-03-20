import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPopular } from '../../api/fetchPopular'
import VideoCard from '../../components/VideoCard'

const MainPage = () => {
  const {data: popular, isLoading, error} = useQuery(['videos', 'popular'], fetchPopular, {
    staleTime: 1000 * 60
  })

  // console.log(popular)
  if(isLoading) return <div>loading...</div>
  if(error) return <div>{error.message}</div>

  return (
    <section className='max-w-screen-2xl mx-auto p-4'>
      <ul className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {popular.map(videos => <VideoCard key={videos.id} videos={videos} type='main' />)}
      </ul>
    </section>
  )
}

export default MainPage