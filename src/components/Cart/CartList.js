import React, { Component } from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
        return (
            <div className="container-fliud">
                {cart.map(item => {
                    return  <CartItem key={item.id} item={item} value={value}></CartItem>
                })}

            </div>
        );
}
