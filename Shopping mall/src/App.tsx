import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux';
import store from './modules';
import ProductList from './components/ProductList'
import Layout from './components/Layout'
import MaingPage from './pages/MainPage';
import FashionPage from './pages/FashionPage';

function App() {
    
    return (
        <Provider store={store}>
            <div className="App dark:bg-base-content">
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Layout />}>    
                            <Route path={""} element={<MaingPage />} />
                            <Route path={"/fashion"} element={<FashionPage />} />
                            <Route path={"/accessory"} element={<ProductList />} />
                            <Route path={"/digital"} element={<ProductList />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>

    )
}

export default App
