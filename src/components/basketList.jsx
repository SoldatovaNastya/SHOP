import React from 'react';
import BasketItem from './basketItem.jsx';
import './basketList.css';

function BasketList({ order, removeFromBasket, incQuantity, decQuantity, handlePayment, getTotalPrice }) {
    return (
        <div className="basket-list-container">
            <div className="basket-list" style={{ backgroundColor: 'white' }}>
                <h2 className="text-center">Корзина</h2>
                {order.map(item => (
                    <BasketItem
                        key={item.offerId}
                        item={item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        getTotalPrice={getTotalPrice}
                    />
                ))}
                <div className='opl d-flex justify-content-center flex-column'>
                    <div className="total-price text-center"><strong>Общая сумма: {getTotalPrice()} руб.</strong></div> { }
                    <button className="pay-button btn btn-warning" onClick={handlePayment}>Оплатить</button>
                </div>
            </div>
        </div>
    );
}

export default BasketList;
