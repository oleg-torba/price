// /* eslint-disable array-callback-return */
import React from 'react';
// import PropTypes from 'prop-types';



export function ItemList ({gsm}) {
    return (
      <><div className="contactBlock">

        <ul className="contactsList">
          {gsm.map((item) => {




            let priceLCD = Math.ceil(((item.price + 20) * 37.8) / 100) * 100;
            const changeGlass = priceLCD / 2;

            let priceCharge = Math.ceil(((item.price + 10) * 37.8) / 100) * 100;
            let glassCam = Math.ceil(((item.price + 8) * 37.8) / 100) * 100;
            if (item.price >= 25) {
              priceLCD = Math.ceil(((item.price + 25) * 37.8) / 100) * 100;
            }
            if (item.price >= 60) {
              priceLCD = Math.ceil(((item.price + 30) * 37.8) / 100) * 100;

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
                        <span className="contactValue">Заміна дисплейного модулю:</span>
                        <span className="contactItem">{item.name}</span>
                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem">{priceLCD} грн</span>
                      </span>
                      <span>
                        <span className="contactValue">Заміна скла дисплею:</span>
                        <span className="contactItem">{changeGlass} грн</span>
                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        {item.quantity_in_stock !== 0 && <span className="contactItem"> {item.quantity_in_stock} шт</span>}
                        

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
                        <span className="contactValue">Заміна роз'єму живлення:</span>
                        <span className="contactItem"> {item.name}</span>
                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem">{priceCharge} грн</span>

                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        <span className="contactItem">{item.quantity_in_stock} шт</span>
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
                        <span className="contactValue">Заміна задньої кришки:</span>
                        <span className="contactItem">{item.name}</span>
                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem">{priceCharge} грн</span>
                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        <span className="contactItem">{item.quantity_in_stock} шт</span>

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
                        <span className="contactValue">Заміна камери (основна, фронтальна):</span>
                        <span className="contactItem"> {item.name}</span>

                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem">{priceCharge} грн</span>

                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        <span className="contactItem">{item.quantity_in_stock} шт</span>
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
                        <span className="contactValue">Заміна акумулятора:</span>
                        <span className="contactItem"> {item.name}</span>
                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem"> {priceCharge} грн</span>

                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        <span className="contactItem">{item.quantity_in_stock} шт</span>
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
                        <span className="contactValue">Заміна бузера:</span>
                        <span className="contactItem"> {item.name}</span>
                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem">   {priceCharge} грн</span>

                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        <span className="contactItem"> {item.quantity_in_stock} шт</span>
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
                        <span className="contactValue">Заміна спікера:</span>
                        <span className="contactItem">{item.name}</span>
                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem"> {priceCharge} грн</span>

                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        <span className="contactItem"> {item.quantity_in_stock} грн</span>
                      </span>

                    </div>
                  </li>
                </>
              );

            }
            if (item.name.includes('Скло камери')) {
              return (
                <>
                  <li className="contactsItem" key={item.name}>
                    <div className="contact">
                      <span>
                        <img src={item.image} alt="" width="100" height="100" />
                      </span>
                      <span>
                        <span className="contactValue">Заміна скла камери:</span>
                        <span className="contactItem">{item.name}</span>
                      </span>
                      <span>
                        <span className="contactValue">Ціна:</span>
                        <span className="contactItem"> {glassCam} грн</span>

                      </span>
                      <span>
                        <span className="contactValue">Наявність:</span>
                        <span className="contactItem"> {item.quantity_in_stock} грн</span>
                      </span>

                    </div>
                  </li>
                </>
              );
            }
            else {
              return null;
            }
          }
          )}
        </ul>
      </div></>
    )
}
