
import { Aside } from '@/components/Aside'
import '../styles/App.css'
import { Main } from '@/components/main'


function App() {
  

  return (
  
      <div className=' sm:p-2 pb-0 h-screen flex flex-col'>
      <div className='flex sm:flex-1 sm:flex-row flex-col-reverse gap-2 relative'>
        <Aside />
        <Main  />
      </div>
      <footer className='sm:bg-[#050505] border-zinc-700 p-6  fixed w-full bottom-0'>
        <div>
          <div className='border border-solid p-4 rounded-xl'>
            reprodutor
          </div>
          <nav className='sm:hidden block pt-6'>
          Nav
        </nav>
        </div>
        
        
      </footer>
    </div> 
    
    
  )
}

export default App
