// /* eslint-disable array-callback-return */
import React from 'react';
// import PropTypes from 'prop-types';



export function ItemList ({gsm}) {
    return (
        <div className="contactBlock">
        
          <ul className="contactsList">
            {gsm.map((item) => {




              let priceLCD = Math.ceil(((item.price + 20) * 38.5) / 100) * 100;
              const changeGlass = priceLCD/2

              let priceCharge = Math.ceil(((item.price + 10) * 38.5) / 100) * 100;
              if (item.price >= 25) {
                priceLCD = Math.ceil(((item.price + 25) * 38.5) / 100) * 100;
              }
              if (item.price >= 60) {
                priceLCD = Math.ceil(((item.price + 30) * 38.5) / 100) * 100;

              }
            

              if (item.name.includes("Дисплей") || item.name.includes('Complete')) {
                return (

                  <>
                    <li className="contactsItem" key={item.name}>
                      <div className="contact">
                        <span>
                          <img src={item.image} alt="" width="100" height="100" />
                        </span>
                        <span>
                          <span className="contactValue">Заміна дисплейного модулю:</span> {item.name}
                        </span>
                        <span>
                          <span className="contactValue">Ціна:</span>{priceLCD} грн
                        </span>
                        <span>
                          <span className="contactValue">Заміна скла дисплею:</span>{changeGlass} грн
                        </span>
                        <span>
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );
              }
              if (item.name.includes('Роз\'єм заряд') || item.name.includes('Charge')) {
                return (
                  <>
                    <li className="contactsItem" key={item.name}>
                      <div className="contact">
                      <span>
                          <img src={item.image} alt="" width="100" height="100" />
                        </span>
                        <span>
                          <span className="contactValue">Заміна роз'єму живлення:</span> {item.name}
                        </span>
                        <span>
                          <span className="contactValue">Ціна:</span>
                          {priceCharge} грн
                        </span>
                        <span>
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );
              }
              if (item.name.includes("Задня")) {
                return (
                  <>
                    <li className="contactsItem" key={item.name}>
                      <div className="contact">
                      <span>
                          <img src={item.image} alt="" width="100" height="100" />
                        </span>
                        <span>
                          <span className="contactValue">Заміна задньої кришки:</span> {item.name}
                        </span>
                        <span>
                          <span className="contactValue">Ціна:</span>{priceCharge} грн
                        </span>
                        <span>
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );
              }
              if (item.name.includes("Камер" || "камер")) {
                return (
                  <>
                    <li className="contactsItem" key={item.name}>
                      <div className="contact">
                      <span>
                          <img src={item.image} alt="" width="100" height="100" />
                        </span>
                        <span>
                          <span className="contactValue">Заміна камери (основна, фронтальна):</span> {item.name}
                        </span>
                        <span>
                          <span className="contactValue">Ціна:</span>
                          {priceCharge} грн
                        </span>
                        <span>
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );
              }
              if (item.name.includes("Акумулятор")) {
                return (
                  <>
                    <li className="contactsItem" key={item.name}>
                      <div className="contact">
                      <span>
                          <img src={item.image} alt="" width="100" height="100" />
                        </span>
                        <span>
                          <span className="contactValue">Заміна акумулятора:</span> {item.name}
                        </span>
                        <span>
                          <span className="contactValue">Ціна:</span>
                          {priceCharge} грн
                        </span>
                        <span>
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );
              }
              if (item.name.includes("Бузер")) {
                return (
                  <>
                    <li className="contactsItem" key={item.name}>
                      <div className="contact">
                      <span>
                          <img src={item.image} alt="" width="100" height="100" />
                        </span>
                        <span>
                          <span className="contactValue">Заміна бузера:</span> {item.name}
                        </span>
                        <span>
                          <span className="contactValue">Ціна:</span>
                          {priceCharge} грн
                        </span>
                        <span>
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );
              }
              if (item.name.includes("Динамік")) {
                return (
                  <>
                    <li className="contactsItem" key={item.name}>
                      <div className="contact">
                      <span>
                          <img src={item.image} alt="" width="100" height="100" />
                        </span>
                        <span>
                          <span className="contactValue">Заміна спікера:</span> {item.name}
                        </span>
                        <span>
                          <span className="contactValue">Ціна:</span>
                          {priceCharge} грн
                        </span>
                        <span>
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );

              }else{
                return null
              }
            }
            )}
          </ul>
        </div>
    )
}

// export function Contact({ gsm }) {

//   console.log(gsm)
//   return (
   
//   );
 
  
// }

// Contact.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       data: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }),
//     })
//   ),

// };
