

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Footer, StarsCanvas } from './components';
import { BrowserRouter } from 'react-router-dom';


function App() {
  

  return (
   <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
       
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
        <Footer/>
      </div>
   </BrowserRouter>
  )
}

export default App
