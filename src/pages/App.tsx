
import { Aside } from '@/components/Aside'
import '../styles/App.css'
import { Main } from '@/components/main'
import { Footer } from '@/components/Footer'


function App() {


  return (

    <div className=' sm:p-2 pb-0  flex flex-col gap-4'>
      <div className='flex sm:flex-1 sm:flex-row flex-col-reverse gap-2 relative'>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>


  )
}

export default App
