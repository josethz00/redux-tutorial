import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import { HeaderContainer, Cart } from './styles';
import logo from '../../assets/images/logo.svg';


const Header = ({ cartSize }) => {

    return (

        <HeaderContainer>
            <Link to='/'>
                <img src={logo} alt='Rocketshoes' />
            </Link>
            <Cart to='/cart'>
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</span>
                </div>
                <MdShoppingBasket size={36} color='#fff' />
            </Cart>
        </HeaderContainer>
    
    );

};

export default connect(state => ({
    cartSize: state.cart.length
}))(Header);