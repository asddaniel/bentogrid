

import './App.css'

function App() {


  return (
    <>
     <div className="grid grid-cols-1 lg:grid-cols-7 lg:row-span-6 p-3 gap-4">
      <div className="p-2 lg:col-span-2 lg:row-span-2 flex flex-col lg:items-end lg:justify-start justify-center gap-2 w-full">
        <div className="p-3 font-semibold  rounded-lg shadow-sm cursor-pointer bg-pink-100 text-2xl h-72 lg:w-40 w-full">
        <span className="">
          Create and schedule content
        </span>
        <span className="text-blue-500"> quicker</span>
        <div className="py-2">
          <img src={location.origin+"/illustration-create-post.webp"} alt="" />
        </div>
        </div>

        <div   style={{backgroundColor:'hsl(39, 100%, 71%)'}} className="p-3 rounded-lg shadow-sm cursor-pointer overflow-hidden bg-yellow-600 text-2xl h-64 lg:w-40 w-full">
        <span className=" font-semibold tracking-tight">
          Write your Content using ai
        </span>

        <div className="py-2">
          <img src={location.origin+"/illustration-ai-content.webp"} alt="" />
        </div>
        </div>
      </div>
     <div className='grid lg:grid-cols-2 gap-2 lg:col-span-3'>
     <div style={{backgroundColor: 'hsl(228, 45%, 44%)'}} className="p-2 py-1 lg:col-span-2 shadow lg:text-5xl text-2xl font-semibold rounded-lg h-56 text-white text-center ">
        <span>Social Media</span> <span className="text-yellow-600" style={{color:'hsl(39, 100%, 71%)'}}> 10 X</span>
        <div className="py-3 text-center text-5xl italic">Faster With AI</div>
        <div className='flex justify-center py-3 pb-1'>
          <img className='h-6' src={location.origin+"/illustration-five-stars.webp"} />
        </div>
        <div className="text-white text-sm font-normal">Over 4,000 5-star reviews</div>
      </div>
      <div className="p-3 py-1 rounded bg-white">
        <div className="my-2 shadow-xl rounded overflow-hidden p-2">
          <img src={location.origin+"/illustration-multiple-platforms.webp"}  alt="" />
        </div>
        <div className="my-2 text-2xl font-semibold">Manage Multiple accounts and platforms.</div>
      </div>
      <div className="p-3 rounded bg-white max-h-56 overflow-y-hidden" style={{backgroundColor:'hsl(39, 100%, 71%)'}}>
        
        <div className="my-2 text-2xl font-semibold px-4">Maintains a consistens posting schedule.</div>
        <div className="my-2 shadow-xl rounded overflow-hidden p-2">
          <img src={location.origin+"/illustration-consistent-schedule.webp"}  alt="" />
        </div>
      </div>
     </div>
      <div className="p-2 lg:col-span-2 lg:w-48 w-full  overflow-x-hidden">
        <div className="bg-gray-300 rounded p-3 lg:w-64 w-full pb-8">
          <div className="text-2xl font-semibold py-8 px-8 tracking-tight">Schedule To social Media</div>
          <img className="w-full" src={location.origin+"/illustration-schedule-posts.webp"} alt="" />
          <div className="py-4 lg:text-xs text-xl text-gray-600 lg:px-8 px-4 font-semibold   w-4/5">
            Optimize post timings to publish content at the perfect time 
            for your audience
          </div>
        </div>

      </div>
      <div className="p-2 col-span-2  gap-3 w-[60vw] grid lg:grid-cols-3 ">
          <div className="p-2 bg-red-600">

          </div>
          <div style={{backgroundColor: 'hsl(228, 45%, 44%)'}} className="col-span-2 p-2 ">

          </div>
      </div>
     </div>
    </>
  )
}

export default App
