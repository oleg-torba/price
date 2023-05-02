import  { useState} from 'react';

import { Section } from './Section/section';

import Data from "./apiData.json"


export function App () {

  const [inputValue, setInputValue] = useState('')
  const [gsm, setGsm] = useState([])
  gsm.sort((a,b) => a.name > b.name ? 1 : -1)
  const data = Data.shop.items.item

  const handleChange = e => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    console.log(inputValue)
  
  };

  const handleSubmit = e => {
    e.preventDefault();


   setGsm(data.filter(contact =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    ))
    
    

  };



    return (

    
        <>
        <Section title = "Welcome"/>
        <form className="form" onSubmit={handleSubmit}>

        <label>

          <input
            className="formInput"
            placeholder='Введіть модель для пошуку'
            name="data"
            value={inputValue}

            onChange={handleChange} />
        </label>
        <button className="formBtn" type="submit">
         Search
        </button>
      </form>
     {gsm.length>0 &&  <Section title="Результат"/>}
      <div className="contactBlock">
          <ul className="contactsList">
            {gsm.map((item) => {




              let priceLCD = Math.ceil(((item.price + 20) * 38.5) / 100) * 100;

              let priceCharge = Math.ceil(((item.price + 10) * 38.5) / 100) * 100;
              if (item.price >= 25) {
                priceLCD = Math.ceil(((item.price + 25) * 38.5) / 100) * 100;
              }
              if (item.price >= 60) {
                priceLCD = Math.ceil(((item.price + 30) * 38.5) / 100) * 100;

              }
            

              if (item.name.includes("Дисплей" || "complete")) {
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
                          <span className="contactValue">Наявність:</span>{item.quantity_in_stock} шт
                        </span>

                      </div>
                    </li>
                  </>
                );
              }
              if (item.name.includes('Роз\'єм заряд' || 'Charge')) {
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
        </div></>
    
      
    );
  }

