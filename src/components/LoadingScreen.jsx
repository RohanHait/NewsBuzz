import React from 'react'

function LoadingScreen() {
  return (
    <>
    <div className='overflow-auto animate-ext-pulse '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto my-6 overflow-auto relative '>
       {[1,2,3,4,5,6,7,8,9].map((key)=>{
            return (
                <div className=" text-white z-20 w-80  mx-auto my-2 p-3 border border-slate-700 bg-slate-800  rounded-lg">
      
                
                  <div className='w-[295px] h-64 bg-slate-600'>
                  </div>
                  <div className="py-2 " >
                    <h2 className="max-h-20 text-xl/6 font-semibold text-wrap break-words truncate hover:text-clip ">
                    <div className="w-3/4 h-4 bg-slate-600 m-2 rounded-md "></div>
                    <div className="w-1/2 h-4 bg-slate-600 m-2 rounded-md"></div>
                    </h2>
                    <p className=" text-gray-200 text-sm/5 font-normal h-16 text-wrap text-justify break-words truncate ">
                    <div className="w-3/4 h-3 bg-slate-600 m-1 rounded-md "></div>
                    <div className="w-1/2 h-3 bg-slate-600 m-1 rounded-md"></div>
                    </p>
                  </div>
                    <div className="flex text-xs items-center justify-between w-full">
                      <div className=" text-mirage-400 ">
                        <div className="w-24 h-2 bg-slate-600 rounded"></div>
                      </div>
                      <div className=" text-slate-500 ">
                        <div className="w-28 h-2 bg-slate-600 rounded"></div>
                      </div>
                    </div>
        
              </div>
            )
       }) }
      </div>
      </div>

    </>
  )
}

export default LoadingScreen