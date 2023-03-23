import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

/**
 * 메인 페이지 레이아웃
 */
const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Home