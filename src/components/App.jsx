import { useState, useEffect } from 'react';
import { ItemList } from './ContactList/contactList';
import { ServiceList } from './Servicelist/ServiceList';

import { ApiPartsList } from './Api1000Parts/Api1000Parts';
import { Header } from './Header/Header';

import { Section } from './Section/section';

import Data from './apiData.json';
import Parts from './1000parts.json';

export function App() {
  // const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [gsm, setGsm] = useState([]);
  const [parts, setParts] = useState([]);
  const [filter, setFilter] = useState([]);

  gsm.sort((a, b) => (a.name > b.name ? 1 : -1));
  parts.sort((a, b) => (a.name > b.name ? 1 : -1));
  const data = Data.shop.items.item;
  const partList = Parts.yml_catalog.shop.offers.offer;
  const totalItems = gsm.length + parts.length;

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setGsm(
      data.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setParts(
      partList.filter(data =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, partList, searchQuery]);
  const filterChange = e => {
    if (gsm.length > 1) {
      setFilter(gsm.filter(data => data.name.includes(e.target.name)));
    }
  
  };
  function formSubmit(query) {
    if (query === searchQuery) {
      alert('Змініть пошуковий запис');
    }
    setSearchQuery(query.toLowerCase());
    setGsm([]);
    setParts([]);
    setFilter([]);
  }

  return (
    <>
      <Section>
        <Header onSubmit={formSubmit} />
      </Section>

      {gsm.length > 0 && (
        <Section
          title=<p>
            За запитом "{searchQuery}" ми знайшли {totalItems} позицій
          </p>
        
        >
          <div className='itemBlock'>
<div>
          
      
          <ul className="FilterButton">
            <li>
              <button name="Акумулятор" onClick={filterChange}>
                Акумулятори
              </button>
            </li>
            <li>
              <button name="Бузер" onClick={filterChange}>
                Бузери
              </button>
            </li>

            <li>
              <button name="Дисплей" onClick={filterChange}>
                Дисплеї
              </button>
            </li>

            <li>
              <button name="Задня" onClick={filterChange}>
                Задні кришки
              </button>
            </li>

            <li>
              <button name="Камера" onClick={filterChange}>
                Камери
              </button>
            </li>
            <li>
              <button name="Роз'єм" onClick={filterChange}>
                Роз'єми
              </button>
            </li>
            <li>
              <button name="Динамік" onClick={filterChange}>
                Спікери
              </button>
            </li>
            <li>
              <button name="Тачскрін" onClick={filterChange}>
                Сенсори
              </button>
            </li>
            <li>
              <button name="Шлейф" onClick={filterChange}>
                Шлейфи
              </button>
            </li>
          </ul>
          
            </div>
         <div className='items'>
          {filter.length > 0 && (
            
              <ItemList gsm={filter} />
          
          )}
           <ApiPartsList parts={parts} />
           {filter.length < 1 && <ItemList gsm={gsm} onClick={filterChange} />}
         </div>
          </div>
          
        </Section>
      )}

      <Section title=<p>Відгуки про нас (згодом)</p>></Section>
      <Section title=<p>Доступні сервісні центри</p>>
        <ServiceList />
      </Section>
    </>
  );
}
