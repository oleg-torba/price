import { useState, useEffect } from 'react';
import { ItemList } from './ContactList/contactList';
import { ServiceList } from './Servicelist/ServiceList';
import { UseLocalStorage } from 'hooks/useLocalStorage';
import { ApiPartsList } from './Api1000Parts/Api1000Parts';
import { Header } from './Header/Header';
import { Promo } from './Promo/Promo';
import { Section } from './Section/section';

import Data from './apiData.json';
import Parts from './1000parts.json';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [gsm, setGsm] = useState([]);
  const [parts, setParts] = useState([]);
  const [filter, setFilter] = useState([]);
  gsm.sort((a, b) => (a.name > b.name ? 1 : -1));
  parts.sort((a, b) => (a.name > b.name ? 1 : -1));
  const data = Data.shop.items.item;
  const partList = Parts.yml_catalog.shop.offers.offer;
  const totalItems = gsm.length + parts.length;

  const [theme, setTheme] = UseLocalStorage('theme', '');

  const battery = gsm.filter(i => i.name.includes('Акумулятор'));
  const lcd = gsm.filter(i => i.name.includes('Дисплей'));
  const buzzer = gsm.filter(i => i.name.toLowerCase().includes('бузер'));
  const backCover = gsm.filter(
    i => i.name.includes('Задня') || i.name.includes('Кришка')
  );
  const camera = gsm.filter(i => i.name.includes('Камера'));
  const charge = gsm.filter(i => i.name.includes("Роз'єм"));
  const speaker = gsm.filter(i => i.name.toLowerCase().includes('динамік'));
  const flat = gsm.filter(i => i.name.includes('Шлейф'));
  const touch = gsm.filter(i => i.name.includes('Тачскрін'));
  const corps = gsm.filter(i => i.name.includes('Корпус'));
  const ic = gsm.filter(i => i.name.includes('Мікросхема'));

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setGsm(
      data.filter(data =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setParts(
      partList.filter(data =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, partList, searchQuery]);
  const onChangeTheme = () => {
    setTheme(prevTheme =>
      prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    );
  };
  const filterChange = e => {
    if (gsm.length > 1) {
      setFilter(
        gsm.filter(data =>
          data.name.toLowerCase().includes(e.target.name.toLowerCase())
        )
      );
    }
  };

  function formSubmit(query) {
    if (query === searchQuery) {
      alert('Змініть пошуковий запит');
    }
    setSearchQuery(query.toLowerCase());
    setGsm([]);
    setParts([]);
    setFilter([]);
  }

  return (
    <>
      {theme === 'dark-theme' ? (
        <div className="container dark-theme">
          <Section>
            <Header
              onSubmit={formSubmit}
              theme={theme}
              onChangeTheme={onChangeTheme}
            />
          </Section>

          <Section>
            <Promo promoParts={data} />
          </Section>

          {gsm.length > 0 && (
            <Section
              title=<p className="title">
                За запитом "{searchQuery}" ми знайшли {totalItems} позицій
              </p>
            >
              <div className="itemBlock">
                <div>
                  <ul className="FilterButton">
                    <li>
                      <button
                        className="formBtn"
                        name="Акумулятор"
                        onClick={filterChange}
                      >
                        Акумулятори: ({battery.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Бузер"
                        onClick={filterChange}
                      >
                        Бузери: ({buzzer.length})
                      </button>
                    </li>

                    <li>
                      <button
                        className="formBtn"
                        name="Дисплей"
                        onClick={filterChange}
                      >
                        Дисплеї: ({lcd.length})
                      </button>
                    </li>

                    <li>
                      <button
                        className="formBtn"
                        name="Задня"
                        onClick={filterChange}
                      >
                        Задні кришки: ({backCover.length})
                      </button>
                    </li>

                    <li>
                      <button
                        className="formBtn"
                        name="Камера"
                        onClick={filterChange}
                      >
                        Камери: ({camera.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Корпус"
                        onClick={filterChange}
                      >
                        Корпус: ({corps.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Мікросхема"
                        onClick={filterChange}
                      >
                        Контролери\IC: ({ic.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Роз'єм"
                        onClick={filterChange}
                      >
                        Роз'єми: ({charge.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Динамік"
                        onClick={filterChange}
                      >
                        Спікери: ({speaker.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Тачскрін"
                        onClick={filterChange}
                      >
                        Сенсори: ({touch.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Шлейф"
                        onClick={filterChange}
                      >
                        Шлейфи: ({flat.length})
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="items">
                  {filter.length > 0 && <ItemList gsm={filter} />}
                  <ApiPartsList parts={parts} />
                  {filter.length < 1 && (
                    <ItemList gsm={gsm} onClick={filterChange} />
                  )}
                </div>
              </div>
            </Section>
          )}

          <Section title=<p className="title">Доступні сервісні центри</p>>
            <ServiceList />
          </Section>
        </div>
      ) : (
        <div className="container light-theme">
          <Section>
            <Header
              onSubmit={formSubmit}
              theme={theme}
              onChangeTheme={onChangeTheme}
            />
          </Section>

          <Section>
            <Promo promoParts={data} />
          </Section>

          {gsm.length > 0 && (
            <Section
              title=<p className="title">
                За запитом "{searchQuery}" ми знайшли {totalItems} позицій
              </p>
            >
              <div className="itemBlock">
                <div>
                  <ul className="FilterButton">
                    <li>
                      <button
                        className="formBtn"
                        name="Акумулятор"
                        onClick={filterChange}
                      >
                        Акумулятори: ({battery.length})
                      </button>
                    </li>
                    <li>
                      <button
                        name="Бузер"
                        onClick={filterChange}
                        className="formBtn"
                      >
                        Бузери: ({buzzer.length})
                      </button>
                    </li>

                    <li>
                      <button
                        className="formBtn"
                        name="Дисплей"
                        onClick={filterChange}
                      >
                        Дисплеї: ({lcd.length})
                      </button>
                    </li>

                    <li>
                      <button
                        className="formBtn"
                        name="Задня"
                        onClick={filterChange}
                      >
                        Задні кришки: ({backCover.length})
                      </button>
                    </li>

                    <li>
                      <button
                        className="formBtn"
                        name="Камера"
                        onClick={filterChange}
                      >
                        Камери: ({camera.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Корпус"
                        onClick={filterChange}
                      >
                        Корпус: ({corps.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Мікросхема"
                        onClick={filterChange}
                      >
                        Контролери\IC: ({ic.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Роз'єм"
                        onClick={filterChange}
                      >
                        Роз'єми: ({charge.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Динамік"
                        onClick={filterChange}
                      >
                        Спікери: ({speaker.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Тачскрін"
                        onClick={filterChange}
                      >
                        Сенсори: ({touch.length})
                      </button>
                    </li>
                    <li>
                      <button
                        className="formBtn"
                        name="Шлейф"
                        onClick={filterChange}
                      >
                        Шлейфи: ({flat.length})
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="items">
                  {filter.length > 0 && <ItemList gsm={filter} />}
                  <ApiPartsList parts={parts} />
                  {filter.length < 1 && (
                    <ItemList gsm={gsm} onClick={filterChange} />
                  )}
                </div>
              </div>
            </Section>
          )}
          <Section title=<p>Доступні сервісні центри</p>>
            <ServiceList />
          </Section>
        </div>
      )}
    </>
  );
}
