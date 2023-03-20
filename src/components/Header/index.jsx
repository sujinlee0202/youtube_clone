import React, { useCallback, useState } from 'react'
import {BsYoutube, BsKeyboardFill, BsSearch, BsXLg} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState('')
  const [removeButton, setRemoveButton] = useState(false)
  const navigate = useNavigate()

  const onClickBanner = () => {
    navigate('/')
  }

  const onChangeSearch = useCallback((e) => {
    setSearch(e.target.value)
    if (e.target.value.length > 0) {
      setRemoveButton(true)
    } else {
      setRemoveButton(false)
    }
  }, [])

  const onClickRemoveButton = () => {
    setSearch('')
    setRemoveButton(false)
  }

  const onSubmitSearch = (e) => {
    e.preventDefault()
    console.log(search)
    navigate(`/results/${search}`)
  }

  const onClickDarkMode = () => {
    console.log('click darkmode')
  }

  return (
    <header className='h-14 border-b'>
      <div className='flex h-full justify-between items-center mx-auto px-6 max-w-screen-2xl'>
        <button className='flex items-center' onClick={onClickBanner}>
          <BsYoutube className='mr-1 text-2xl text-red'></BsYoutube>
          <span className='text-xl font-bold'>YouTube</span>
        </button>    
        <form 
          className='items-center h-10 relative mx-4 hidden md:flex' 
          onSubmit={onSubmitSearch}
        >
          <input 
            type='text' 
            placeholder='검색'
            value={search}
            onChange={onChangeSearch}
            className='w-96 h-10 py-2 pl-6 pr-10 border border-gray-400 rounded-l-3xl'
          ></input>
          <BsKeyboardFill className={`absolute ${removeButton ? 'right-28' : 'right-20'} w-6 h-6 text-gray-600 hover:text-gray-800`}></BsKeyboardFill>
          {removeButton && <BsXLg 
            className='absolute right-20 w-8 h-8 p-1 text-gray-600 hover:text-gray-800'
            onClick={onClickRemoveButton}
          ></BsXLg>}
          <button className='h-10 w-16 border border-l-0 rounded-r-3xl border-gray-400 flex items-center justify-center bg-gray-100 hover:bg-gray-200'>
            <BsSearch className='w-5 h-5'></BsSearch>
          </button>
        </form>
        <div>
          <MdDarkMode className='w-8 h-8' onClick={onClickDarkMode}></MdDarkMode>
        </div>
      </div>
    </header>
  )
}

export default Header