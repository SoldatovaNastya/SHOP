import React from 'react';
import s from './GoodsItem.module.css';

function GoodsItem(props) {
    const { 
        offerId, 
        displayName, 
        finalPrice, 
        displayAssets,
        displayDescription, 
        addToBasket = Function.prototype,
    } = props;

   

    return (
       
        <div key={offerId} className={s.card} id={offerId}>
             <img src={displayAssets[0]?.background} className={s.card_img_top} alt={displayName}/>
            <div className={s.card_body}>
                <h5 className="card-title">{displayName}</h5>
                <p className={s.card_text}>{displayDescription}</p>
                
                <button 
                    className="btn btn-warning"
                    onClick={() => 
                        addToBasket({
                            offerId,
                            displayName,
                            finalPrice,
                        })
                    }
                >
                    Купить
                </button>
                <span className={s.right}>{finalPrice}</span>
            </div>
        </div>
    );
}

export { GoodsItem };
