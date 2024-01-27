
import { Aside } from '@/components/Aside'
import '../styles/App.css'
import { Main } from '@/components/main'

function App() {
  

  return (
  
      <div className=' p-2 pb-0 h-screen bg-black text-[#b3b3b3] flex flex-col'>
      <div className='flex flex-1 gap-2'>
        <Aside />
        <Main  />
      </div>
     <footer className='bg-black border-zinc-700 p-6 py-10'>
        footer
      </footer>
    </div> 
    
    
  )
}

export default App
