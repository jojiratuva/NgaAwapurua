//import styles 
import './../css/style.css'
//import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components 
import Nav from './Nav'
import Footer from './Footer'

//import pages 
import Home from '.././pages/Home'
import Kaupapa from '.././pages/Kaupapa';
import WhatWeDo from '.././pages/WhatWeDo';
import WhatWeDoItems from '../pages/WhatWeDoItems';
import Donate from '../pages/Donate';



const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/kaupapa' element={<Kaupapa />}></Route>
                <Route path='/whatwedo' element={<WhatWeDo />}></Route>
                <Route path='/whatwedo/:id' element={<WhatWeDoItems />}></Route>
                <Route path='/donate' element={<Donate />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App