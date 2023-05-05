// /* eslint-disable array-callback-return */
import React from 'react';
// import PropTypes from 'prop-types';



export function ApiPartsList ({parts}) {


    return (

      <div className="contactBlock">
        <ul className="contactsList">
          {parts.map((item)=>{
                let priceTouch = Math.ceil((item.price + 500) / 100) * 100;
            if(item.name.includes('та дисплей')){
              priceTouch = Math.ceil((item.price + 800) / 100) * 100;
            }
            if(item.price >=2500){
              priceTouch = Math.ceil((item.price + 1200) / 100) * 100;
            }
            if(item.name.includes('акумулятор')){
              priceTouch = Math.ceil((item.price + 600) / 100) * 100;
            }
       
           return(
            <li className="contactsItem" key={item.name}>
            <div className="contact">
         
              <span>
                <img src={item.picture[0]} alt="" width="100" height="100" />
              </span>
              <span>
                <span className="contactItem">{item.name}</span>
              </span>
              <span>
                <span className="contactValue">Ціна:</span>
                <span className="contactItem">{priceTouch} грн</span>
              </span>
            
              <span>
                <span className="contactValue">Наявність:</span>
                {<span className="contactItem">Є</span>}
                

              </span>
              <span
                    className="provider">Provider: 1000P
                      </span>
            </div>
          
  </li>
           )
           

})}
        </ul>
      </div>

    )
     
    
}
