import { useState, useEffect } from "react";
import Data from '../apiData.json';
import Timer from './Timer/Timer'
export function Promo ({promoParts}) {

    const data = Data.shop.items.item;
    const [promo, setPromo] = useState([])
    console.log(promo)
   useEffect(() => {
    setPromo(data.filter(data =>
        data.vendorCode==='CB-00012256' || data.vendorCode === 'CB-00008428' || data.vendorCode === 'CB-00012222'
      ))
   }, [data])
    return (
        
        <div className="promoBlock">
         <div className="promoHead">
         <p className="promoTitle">Sale -10%</p>
      <Timer/>
         </div>
        <ul className="promoItem">
            {promo.map(item => {
                const currentPrice = Math.ceil(((item.price + 20) * 39) / 50) * 50;
                const promoPrice = Math.ceil(((item.price + 17) * 39) / 50) * 50;
                return (
                    <li className="contactsItem" key={item.vendorCode}>
                        <div className="contact">
                            <span>
                                <img src={item.image} alt="" width="100" height="100" />
                            </span>
                            
                               
                                <span className="contactItem">{item.name}</span>
                          
                            <span className="contactValue">Стара ціна:</span>
                            <span className="contactItem">{currentPrice} грн</span>
                            <span>
                                <b className="contactValue">Нова ціна:</b>

                                <b className="contactItem">{promoPrice} грн</b>

                            </span>
                        </div>
                    </li>
                );
            })}

        </ul>
        </div>
    )
}

