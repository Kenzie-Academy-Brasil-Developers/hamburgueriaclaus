import React from 'react'
import { Routes , Route } from 'react-router-dom';
import { CartProvider } from '../contexts/CartContext';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Registry } from '../pages/Registry';
import { RoutesAuth } from './RoutesAuth';

export function RoutesMain() {
    return (
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/registry' element={ <Registry/> }/>
            <Route element={ <CartProvider> <RoutesAuth/> </CartProvider> }>
                <Route path='/marketplace' element={ <Home/> }/>
            </Route>
        </Routes>
    )
}