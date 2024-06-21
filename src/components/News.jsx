import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useSelector , useDispatch} from 'react-redux'
import { addResponseData } from '../storeConfig'
import LoadingScreen from './LoadingScreen'
function News() {
  const data = useSelector(state => state.responseData)
  const api = useSelector(state => state.api)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch() ;
  return (
    <>
    {!loading && <div className='overflow-auto '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto my-6 overflow-auto relative '>
        {data.results.map((news)=> (<NewsCard data={news} key={news.id}/>))}
      </div>
      <button className=' btn btn-primary mx-auto my-4 relative z-10 left-1/2' onClick={()=>{
        api.getNextPage().then((data) => {
          dispatch(addResponseData(data))
        }).catch((err) => {
          console.log(err)
        })
      }} >Load More</button>
    </div>}
    {loading && <LoadingScreen/>}

    </>
  )
}

export default News