import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
// business ,crime ,domestic ,education ,entertainment ,environment ,food ,health ,lifestyle ,other ,politics ,science ,sports ,technology ,top ,tourism ,world
import { setResponseData, setLoading } from '../storeConfig'
// import { getNews } from '../API'
const CatagoryList= ["Top", "India" , "World" , "Business" , "Entertainment" , "Science & Technology" , "Sports" ,"Health"]

function NewsTab() {
    const [activeTab, setActiveTab] = useState(0)
    const dispatch = useDispatch() ;
    const api = useSelector(state => state.api) ;
    useEffect(() => {
        dispatch(setLoading(true))
        api.getNews().then((data) => {
            dispatch(setResponseData(data))
        }).catch((err) => {
            console.log(err)
        })
        dispatch(setLoading(false))
    }, [])

    const handleClick = (index) =>{
        api.setQuery(null) ;
        if(index === activeTab) return ;
        else if(index === 0){
            api.setCategory(null);
            api.setCountry(null) ;
        }
        else if(index === 1){
            api.setCategory(null);
            api.setCountry('in') ;
        }
        else if(index === 2){
            api.setCategory(null)
            api.setCountry('wo')
        }
        else if(index === 5){
            api.setCountry(null) ;
            api.setCategory('technology,science') ;
        }
        else {
            api.setCountry(null) ;
            api.setCategory(CatagoryList[index].toLowerCase());
        }
        dispatch(setLoading(true))
        api.getNews().then((data) => {
            // console.log(data)
            dispatch(setResponseData(data))
            dispatch(setLoading(false))
        }).catch((err) => {
            dispatch(setLoading(false))
            console.log(err)
        })
        setActiveTab(index)
    }
    const TabItem = ({name, index}) => {
        return (
            <button onClick={()=>handleClick(index)} className={`news-tab-item ${activeTab === index ? 'news-tab-item-active' : ''}`}>{name}</button>
        )
    }
  return (
    <div className='w-full p-0 h-[90%] md:h-auto  md:top-10 border-b navbar-color border-gray-100 dark:border-slate-50/10 space-x-12  items-center  text-sm/6 font-semibold hidden md:block' id='News-Tabs'>
        <div className='flex gap-4  md:justify-around flex-col md:flex-row'>
            {CatagoryList.map((name, index) => (
                <TabItem name={name} index={index} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default NewsTab