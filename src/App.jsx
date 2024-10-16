import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Services from './components/Services'
import {dataServices, dataClient}  from './data/data'
import AboutUs from './components/About'
import Comments from './components/Comments'
import ContactForm from './components/ContactForm';
// import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          
           {/* <Route path='/contact' element={<ContactForm />} />  */}
        </Routes>
      </Router>


      <AboutUs
          
      />

<Services 
          services={dataServices}
        />
      <Comments 
          client={dataClient}
      />
      {/* <Footer 
      
      /> */}
      <ContactForm />
      <Footer>

      </Footer>

    </div>
  )
}

export default App
