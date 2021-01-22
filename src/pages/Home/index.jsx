import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatCurrency } from '../../utils/formatCurrency';
import * as CartActions from '../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';


const Home = ({ amount, addToCartRequest }) => {

    const [products, setProducts] = useState([]);

    const handleAddProduct = id => {

        /*dispatch({
            type: 'Add',
            product
        });*/ //jeito tradicional de fazer, recebe o dispatch pelas props
        addToCartRequest(id);

    };

    useEffect(() => {

        async function loadProducts () {

            const response = await api.get('products');
            const data = response.data.map(product => ({

                ...product,
                formattedPrice: formatCurrency(product.price)

            }));
            setProducts(data);

        }

        loadProducts ();

    }, []);

    return (
        <ProductList>
            {products.map(product => (

                <li key={product.id}>
                    <img 
                        src={product.image} 
                        alt={product.title}
                    />
                    <strong>
                        {product.title}
                    </strong>
                    <span>
                        {product.formattedPrice}
                    </span>
                    <button type='button' onClick={() => handleAddProduct(product.id)}>
                        <div>
                            <MdAddShoppingCart size={16} color='#fff' /> {' '}
                            {amount[product.id] || 0}
                        </div>
                        <span>
                            ADICIONAR AO CARRINHO
                        </span>
                    </button>
                </li>

            ))}
        </ProductList>
    );

};

const mapStateToProps = state => ({

    amount: state.cart.reduce((amount, product) => {
        
        amount[product.id] = product.amount;
        return amount;

    }, {})

})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);