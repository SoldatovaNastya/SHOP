import React from 'react';
import { GoodsItem } from "./GoodsItem";
import s from "./goodsList.module.css";

function GoodsList(props) {
    const { shop = [], addToBasket = Function.prototype } = props;

    if (!shop.length) {
        return <h3>Не найдено</h3>;
    }

    return (
        <div className={s.goods_list}>
            {shop.map((item) => (
                <GoodsItem 
                    key={item.offerId} 
                    addToBasket={addToBasket} 
                    finalPrice={item.price.finalPrice} // Проверяем, что finalPrice передается корректно
                    {...item} 
                />
            ))}
        </div>
    );
}

export { GoodsList };
