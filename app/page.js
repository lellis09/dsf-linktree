import Image from 'next/image'
import './globals.css'
import profilePic from '../public/20210327_150727(1).jpg'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-myTeal to bg-myindigo2  px-12">
      {/* <div className='bg-lightgreen h-40 w-full'>
      </div> */}
      <section className='flex flex-col  items-center mt-16 pt-12 w-full max-w-[42rem] lg:w-1/2'>
        <div className='rounded-full bg-teal-500 w-24 h-24 lg:w-48 lg:h-48 border-4 border-lightgreen overflow-hidden relative'>
          <Image 
            src={profilePic}
            alt= "picture of the owner of page"
            className='rounded-full'  
            layout='fill'
            style={{
              objectFit:'cover',
            }}    
          />
        </div>
          <h1 className='text-mywhite mt-4 text-5xl'>Lishia Ellis</h1>
          <p className='text-mywhite text-xl mt-4 mb-12'>Making your online presence awesome</p>
          <div className='flex flex-col gap-8'>
            <a href='https://twitter.com/TealTernary'target='_blank' rel='noreferrer'>
            <button className='rounded-2xl bg-gradient-to-r from lightgreen to-myTeal w-[24rem] lg:w-[42rem] h-12 flex justify-center items-center hover:bg-lightgreen'type='button' >
              <p className='text-navy text-xl uppercase'>Twitter</p> 
              </button>
           </a>
           <a href='https://github.com/lellis09'target='_blank' rel='noreferrer'>
            <button className='rounded-2xl bg-gradient-to-r from lightgreen to-myTeal w-[24rem] lg:w-[42rem] h-12 flex justify-center items-center hover:bg-lightgreen'type='button' >
              <p className='text-navy text-xl uppercase'>Github</p> 
              </button>
           </a>
           {/* <a href='https://twitter.com/TealTernary'target='_blank' rel='noreferrer'>
            <button className='rounded-2xl bg-gradient-to-r from lightgreen to-myTeal w-[24rem] lg:w-[42rem] h-12 flex justify-center items-center hover:bg-lightgreen'type='button' >
              <p className='text-navy text-xl uppercase'>Work With Me</p> 
              </button>
           </a> */}
          <a href='https://www.linkedin.com/in/lishia-ellis/'target='_blank' rel='noreferrer'>
            <button className='rounded-2xl bg-gradient-to-r from lightgreen to-myTeal w-[24rem] lg:w-[42rem] h-12 flex justify-center items-center hover:bg-lightgreen'type='button' >
              <p className='text-navy text-xl uppercase'>Linkedin</p> 
              </button>
           </a>
          </div>
      </section>


      
    </main>
  )
}
