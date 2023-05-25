import React from 'react';

export function ItemList({ gsm }) {
  return (
    <>
      <ul className="contactsList">
        {gsm.map(item => {
          let priceLCD = Math.ceil(((item.price + 20) * 37.8) / 50) * 50;
          let priceCharge = Math.ceil(((item.price + 10) * 37.8) / 50) * 50;
          let glassCam = Math.ceil(((item.price + 10) * 37.8) / 50) * 50;
          let iphoneRepair = Math.ceil(((item.price + 30) * 37.8) / 50) * 50;
          let newIphoneRepair = Math.ceil(((item.price + 40) * 37.8) / 50) * 50;
          let ICNewIphoneRepair =
            Math.ceil(((item.price + 50) * 37.8) / 50) * 50;

          let newIphone =
            item.name.includes('iPhone X') ||
            item.name.includes('iPhone XS') ||
            item.name.includes('iPhone XS Max') ||
            item.name.includes('iPhone 11') ||
            item.name.includes('iPhone 11 Pro') ||
            item.name.includes('iPhone 11 Pro Max') ||
            item.name.includes('iPhone 12') ||
            item.name.includes('iPhone 12 Mini') ||
            item.name.includes('iPhone 12 Pro') ||
            item.name.includes('iPhone 12 Pro Max') ||
            item.name.includes('iPhone 13 Pro Max') ||
            item.name.includes('iPhone 13 Pro') ||
            item.name.includes('iPhone 13');

          if (item.price >= 25) {
            priceLCD = Math.ceil(((item.price + 25) * 37.8) / 50) * 50;
          }
          if (item.price >= 60) {
            // eslint-disable-next-line no-unused-vars
            priceLCD = Math.ceil(((item.price + 30) * 37.8) / 50) * 50;
          }

          if (item.name.includes('Дисплей') || item.name.includes('Complete')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Дисплей:</span>
                      <span className="contactItem">{item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceLCD} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      {item.quantity_in_stock !== 0 && (
                        <span className="contactItem">
                          {' '}
                          {item.quantity_in_stock} шт
                        </span>
                      )}
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (
            item.name.includes("Роз'єм заряд") ||
            item.name.includes('Charge')
          ) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Роз'єм живлення:</span>
                      <span className="contactItem"> {item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {item.quantity_in_stock} шт
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.includes('Корпус')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Корпус:</span>
                      <span className="contactItem"> {item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">
                          {newIphoneRepair} грн
                        </span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {item.quantity_in_stock} шт
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (
            item.name.includes('Задня') ||
            item.name.includes('Кришка задня')
          ) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Задня кришка:</span>
                      <span className="contactItem">{item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {item.quantity_in_stock} шт
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.includes('Камер' || 'камер')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">
                        Камера (основна, фронтальна):
                      </span>
                      <span className="contactItem"> {item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {item.quantity_in_stock} шт
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.includes('Акумулятор')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Акумулятор:</span>
                      <span className="contactItem"> {item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {item.quantity_in_stock} шт
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.includes('Бузер')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Бузера:</span>
                      <span className="contactItem"> {item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {' '}
                        {item.quantity_in_stock} шт
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.toLowerCase().includes('динамік')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Спікер:</span>
                      <span className="contactItem">{item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {item.name.toLowerCase().includes('сітка динаміка') ? (
                        <span className="contactItem">{priceCharge} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {' '}
                        {item.quantity_in_stock} грн
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.toLowerCase().includes('мікросхема')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Мікросхеми:</span>
                      <span className="contactItem">{item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">
                          {ICNewIphoneRepair} грн
                        </span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {' '}
                        {item.quantity_in_stock} грн
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
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
                      <span className="contactValue">Скло камери:</span>
                      <span className="contactItem">{item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      <span className="contactItem"> {glassCam} грн</span>
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {' '}
                        {item.quantity_in_stock} грн
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.includes('Шлейф')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Шлейфові деталі:</span>
                      <span className="contactItem">{item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      {newIphone ? (
                        <span className="contactItem">{iphoneRepair} грн</span>
                      ) : (
                        <span className="contactItem">{priceCharge} грн</span>
                      )}
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {' '}
                        {item.quantity_in_stock} грн
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          }
          if (item.name.includes('Тачскрін')) {
            return (
              <>
                <li className="contactsItem" key={item.name}>
                  <div className="contact">
                    <span>
                      <img src={item.image} alt="" width="100" height="100" />
                    </span>
                    <span>
                      <span className="contactValue">Тачскрін:</span>
                      <span className="contactItem">{item.name}</span>
                    </span>
                    <span>
                      <span className="contactValue">Ціна:</span>
                      <span className="contactItem"> {priceCharge} грн</span>
                    </span>
                    <span>
                      <span className="contactValue">Наявність:</span>
                      <span className="contactItem">
                        {' '}
                        {item.quantity_in_stock} грн
                      </span>
                    </span>
                    <span className="provider">Provider: GSM</span>
                  </div>
                </li>
              </>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </>
  );
}
