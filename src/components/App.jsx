import { useState } from 'react';
import { ItemList } from './ContactList/contactList';
import { ServiceList } from './Servicelist/ServiceList';
import { Section } from './Section/section';

import Data from './apiData.json';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [gsm, setGsm] = useState([]);
  gsm.sort((a, b) => (a.name > b.name ? 1 : -1));
  const data = Data.shop.items.item;

  const handleChange = e => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    console.log(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      alert('Заповність поле пошуку');
      return;
    }

    setGsm(
      data.filter(contact =>
        contact.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return (
    <>
      <Section title= <p className='title'>
            The application was created as a test task for finding prices for repairs. Thanks to <a href="https://gsm-forsage.com.ua">GSM-FROSAGE</a> and <a href="https://tplus.market">TEXNO+</a> ​​for the provided API. 
            Junior front end developer: Oleg Torba. 
          </p>>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="formInput"
            placeholder="Введіть модель для пошуку"
            name="data"
            value={inputValue}
            onChange={handleChange}
          />

          <button className="formBtn" type="submit">
            Search
          </button>
        </form>
      </Section>

      {gsm.length > 0 && (
        <Section
          title=<p>
            За запитом "{inputValue}" ми знайшли {gsm.length} позицій
          </p>
        >
          <ItemList gsm={gsm} />
        </Section>

        
      )}

      <Section title=<p>Доступні сервісні центри</p> >
        <ServiceList/>
      </Section>
    </>
  );
}
