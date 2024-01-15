import Image from 'next/image'
import './globals.css'
import profilePic from '../public/20210327_150727(1).jpg'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-myindigo to bg-navy">
      {/* <div className='bg-lightgreen h-40 w-full'>
      </div> */}
      <section className='flex flex-col border-[1.75px] border-lightgreen items-center mt-16 pt-12 w-1/3 lg:w-1/2'>
        <div className='rounded-full bg-teal-500 w-20 h-20 lg:w-44 lg:h-44 border-2 border-lightgreen overflow-hidden relative'>
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
          <h1 className='text-white mt-4 text-4xl'>Lishia Ellis</h1>
          <p className='text-white my-8'>Making your online presence awesome</p>
          <div className='flex flex-col'>
            <a href='https://twitter.com/TealTernary'target='_blank' rel='noreferrer'>
            <button className='rounded-2xl border-[1.75px] border-lightgreen lg:w-[42rem] h-12 flex justify-center items-center'type='button' >
              <p className='text-white'>Twitter</p> 
              </button>
           </a>
          </div>
      </section>


      
    </main>
  )
}
