import { useState, useEffect } from 'react';
import { ServiceList } from './Servicelist/ServiceList';
import { UseLocalStorage } from 'hooks/useLocalStorage';
import { Header } from './Header/Header';
import { Promo } from './Promo/Promo';
import { Section } from './Section/section';
import { LcdItem } from './ContactList/contactList';

import Data from './apiData.json';
import Parts from './1000parts.json';
import { ExpoParts } from './ExpositionParts/ExpositionParts';

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
    i => i.name.includes('Задня частина') || i.name.includes('Кришка')
  );
  const camera = gsm.filter(i => i.name.includes('Камера'));
  const charge = gsm.filter(i => i.name.includes("Роз'єм"));
  const speaker = gsm.filter(i => i.name.toLowerCase().includes('динамік'));
  const flat = gsm.filter(i => i.name.includes('Шлейф'));
  const touch = gsm.filter(i => i.name.includes('Тачскрін'));
  const corps = gsm.filter(i => i.name.includes('Корпус'));
  const ic = gsm.filter(i => i.name.includes('Мікросхема'));
  const cameraGlass = gsm.filter(i => i.name.includes('Скло камери'));

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
          data.name.includes(e.target.name)
        )
      );
    } else {
     return (<p>jdsdsdsd</p>)
    }
  };

  function formSubmit(query) {
    if (query === searchQuery) {
      return;
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

          {gsm.length < 1 && (
            <Section>
              <Promo promoParts={data} />
            </Section>
          )}

          {gsm.length > 0 && (
            <Section
              title=<p className="title">
                За запитом '{searchQuery}' знайдено {totalItems} позицій
              </p>
            >
            <ExpoParts/>
              <div className="itemBlock">
                <div>
                  <ul className="FilterButton">
                 {battery.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Акумулятор"
                        onClick={filterChange}
                      >
                        Акумулятори: ({battery.length})
                      </button>
                    </li>
                 )}
                {buzzer.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Бузер"
                        onClick={filterChange}
                      >
                        Бузери: ({buzzer.length})
                      </button>
                    </li>
                )}

                {lcd.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Дисплей"
                        onClick={filterChange}
                      >
                        Дисплеї: ({lcd.length})
                      </button>
                    </li>
                )}

                {backCover.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Задня"
                        onClick={filterChange}
                      >
                        Задні кришки: ({backCover.length})
                      </button>
                    </li>
                )}

                   {camera.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Камера"
                        onClick={filterChange}
                      >
                        Камери: ({camera.length})
                      </button>
                    </li>
                   )}
                   {corps.length >0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Корпус"
                        onClick={filterChange}
                      >
                        Корпус: ({corps.length})
                      </button>
                    </li>
                   )}
                 {ic.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Мікросхема"
                        onClick={filterChange}
                      >
                        Контролери\IC: ({ic.length})
                      </button>
                    </li>
                 )}
                   {charge.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Роз'єм"
                        onClick={filterChange}
                      >
                        Роз'єми: ({charge.length})
                      </button>
                    </li>
                   )}
                  {speaker.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Динамік"
                        onClick={filterChange}
                      >
                        Спікери: ({speaker.length})
                      </button>
                    </li>
                  )}
                  {cameraGlass.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Скло камери"
                        onClick={filterChange}
                      >
                        Скло камери: ({cameraGlass.length})
                      </button>
                    </li>
                  )}
                 {touch.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Тачскрін"
                        onClick={filterChange}
                      >
                        Сенсори: ({touch.length})
                      </button>
                    </li>
                 )}
                  {flat.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Шлейф"
                        onClick={filterChange}
                      >
                        Шлейфи: ({flat.length})
                      </button>
                    </li>
                  )}
                  </ul>
                </div>
                <div className="items">
                  {filter.length > 0 && <LcdItem gsm={filter} />}

                  {filter.length < 1 && (
                    <LcdItem gsm={gsm} onClick={filterChange} />
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
          {gsm.length < 1 && (
            <Section>
              <Promo promoParts={data} />
            </Section>
          )}

          {gsm.length > 0 && (
            <Section
              title=<p className="title">
                За запитом '{searchQuery}' знайдено {totalItems} позицій
              </p>
            >
            <ExpoParts/>
              <div className="itemBlock">
                <div>
                  <ul className="FilterButton">
                 {battery.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Акумулятор"
                        onClick={filterChange}
                      >
                        Акумулятори: ({battery.length})
                      </button>
                    </li>
                 )}
                {buzzer.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Бузер"
                        onClick={filterChange}
                      >
                        Бузери: ({buzzer.length})
                      </button>
                    </li>
                )}

                {lcd.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Дисплей"
                        onClick={filterChange}
                      >
                        Дисплеї: ({lcd.length})
                      </button>
                    </li>
                )}

                {backCover.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Задня"
                        onClick={filterChange}
                      >
                        Задні кришки: ({backCover.length})
                      </button>
                    </li>
                )}

                   {camera.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Камера"
                        onClick={filterChange}
                      >
                        Камери: ({camera.length})
                      </button>
                    </li>
                   )}
                   {corps.length >0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Корпус"
                        onClick={filterChange}
                      >
                        Корпус: ({corps.length})
                      </button>
                    </li>
                   )}
                 {ic.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Мікросхема"
                        onClick={filterChange}
                      >
                        Контролери\IC: ({ic.length})
                      </button>
                    </li>
                 )}
                   {charge.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Роз'єм"
                        onClick={filterChange}
                      >
                        Роз'єми: ({charge.length})
                      </button>
                    </li>
                   )}
                  {speaker.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Динамік"
                        onClick={filterChange}
                      >
                        Спікери: ({speaker.length})
                      </button>
                    </li>
                  )}
                  {cameraGlass.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Скло камери"
                        onClick={filterChange}
                      >
                        Скло камери: ({cameraGlass.length})
                      </button>
                    </li>
                  )}
                 {touch.length > 0 && (
                     <li>
                      <button
                        className="formBtn"
                        name="Тачскрін"
                        onClick={filterChange}
                      >
                        Сенсори: ({touch.length})
                      </button>
                    </li>
                 )}
                  {flat.length > 0 && (
                      <li>
                      <button
                        className="formBtn"
                        name="Шлейф"
                        onClick={filterChange}
                      >
                        Шлейфи: ({flat.length})
                      </button>
                    </li>
                  )}
                  </ul>
                </div>
                <div className="items">
                  {filter.length > 0 && <LcdItem gsm={filter} />}

                  {filter.length < 1 && (
                    <LcdItem gsm={gsm} onClick={filterChange} />
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
