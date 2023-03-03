import React from 'react'
import Home from './Home'
import Cousine from './Cousine'
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cousine' element={<Cousine />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages