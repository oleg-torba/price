import { useState, useEffect } from 'react';
import { ItemList } from './ContactList/contactList';
import { ServiceList } from './Servicelist/ServiceList';
import { CategoryItem } from './CategoryTitle/CategoryTitle';
import { ApiPartsList } from './Api1000Parts/Api1000Parts';
import { Form } from './Form/form';

import { Section } from './Section/section';

import Data from './apiData.json';
import Parts from './1000parts.json';

export function App() {
  // const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [gsm, setGsm] = useState([]);
  const [parts, setParts] = useState([]);
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

  function formSubmit(query) {
    if (query === searchQuery) {
      alert('Enter another query');
    }
    setSearchQuery(query.toLowerCase());
    setGsm([]);
    setParts([]);
  }
  console.log(gsm.name);

  return (
    <>
      <Section title=<p>Введіть модель пристрою у поле нижче</p>>
        <Form onSubmit={formSubmit} />
      </Section>

      <Section>
        <CategoryItem />
      </Section>
      {gsm.length > 0 && (
        <Section
          title=<p>
            За запитом "{searchQuery}" ми знайшли {totalItems} позицій
          </p>
        >
          <ItemList gsm={gsm} />
          <ApiPartsList parts={parts} />
        </Section>
      )}
<Section title=<p>Відгуки про нас (згодом)</p>>
  
      </Section>
      <Section title=<p>Доступні сервісні центри</p>>
        <ServiceList />
      </Section>
    </>
  );
}
