import React from 'react'

function page() {
      return (
        <div style={{backgroundImage:"url('/image/img.png')"}} className='h-screen bg-cover'>
          <div className='flex justify-between'>
            <div className='ml-20 w-[500px] mt-20'>
              <h1 className='text-[60px]'>Discover World Hidden Wonders</h1>
              <p className='pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nostrum illum? Rem quos reprehenderit molestiae sunt deleniti, suscipit repellendus similique voluptas illo harum natus architecto amet. Architecto ipsa quia nihil!</p>
              <button className="px-6 py-2 mt-16  bg-black text-white rounded hover:bg-gray-800">Discover now</button>
            </div>
            <div className='flex justify-between gap-8 mt-32'>
              <div style={{backgroundImage:"url('/image/img1.jpg')"}} className='w-[250px] h-[300px]'></div>
              <div style={{backgroundImage:"url('/image/img2.jpg')"}} className='w-[200px] h-[200px]'></div>
              <div style={{backgroundImage:"url('/image/img3.jpg')"}} className='w-[200px] h-[200px]'></div>
            </div>
          </div>
        </div>
      );
    };
    
    export default page 

