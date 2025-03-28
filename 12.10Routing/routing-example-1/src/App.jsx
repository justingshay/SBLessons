import { useState } from 'react';
import { createBrowserRouter,
   Route,
   NavLink,
   createRoutesFromElements, 
   RouterProvider} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/help/FAQ';
import Contact, { contactAction } from './pages/help/Contact';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';
import NotFound from './pages/NotFound';

import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" element={<FAQ/>}/>
        <Route path="contact" element={<Contact/>} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout/>} errorElement={<CareersError/>}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (    
    
    <RouterProvider router={router} />
  );
}

export default App;

/* OLD WAY OF DOING ROUTING
      <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter> */