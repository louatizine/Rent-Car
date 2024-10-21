/* import './App.css'    


import SignupForm from './components/SignUp/Signup'
/* import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Trending from './Components/Trending/Trending'
import Sellers from './Components/Sellers/Sellers'
import Auction from './Components/Auction/Auction'
import Review from './Components/Review/Review'
import Footer from './Components/Footer/Footer' 

const App = () => {
  return (
    <div className='app'>


      <SignupForm/>
   {   <Navbar />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer /> }
    </div>

  )
}

export default App
 */


// App.jsx
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignUp/Signup';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
