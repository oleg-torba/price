import React from 'react';

export function LcdItem({ gsm }) {
  return (
    <table className='table'>
      <tr>
        <th className="tableTitle">Найменування</th>
        <th className="tableTitle">Ціна</th>
        <th className="tableTitle">Наявність</th>
      </tr>
      {gsm.map(item => {
        let priceLCD = Math.ceil(((item.price + 22) * 39) / 50) * 50;
        let priceCharge = Math.ceil(((item.price + 11) * 39) / 50) * 50;
        let glassCam = Math.ceil(((item.price + 11) * 39) / 50) * 50;
        // let promoPrice = Math.ceil(((item.price + 17) * 39) / 50) * 50;
        let iphoneRepair = Math.ceil(((item.price + 30) * 39) / 50) * 50;
        let newIphoneRepair = Math.ceil(((item.price + 40) * 39) / 50) * 50;
        let ICNewIphoneRepair = Math.ceil(((item.price + 50) * 39) / 50) * 50;
        let available = item.available;

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
          priceLCD = Math.ceil(((item.price + 25) * 39) / 50) * 50;
        }
        if (item.price >= 60) {
          // eslint-disable-next-line no-unused-vars
          priceLCD = Math.ceil(((item.price + 30) * 39) / 50) * 50;
        }
        if (item.name.includes('Акумулятор')) {
          return (
            <tr key={item.vendorCode}>
              <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
                 {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
               
            </tr>
          );
        }
        if (item.name.includes('Бузер')) {
          return (
            <tr key={item.vendorCode}>
              <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
    {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Динамік')) {
          return (
            <tr key={item.vendorCode}>
            <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}

{available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Дисплей') || item.name.includes('Complete')) {
          return (
            <tr key={item.vendorCode}>
              <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceLCD} грн</td>
              )}
                {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (
          item.name.includes('Задня частина') ||
          item.name.includes('Кришка задня')
        ) {
          return (
            <tr key={item.vendorCode}>
              <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
                {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Камера')) {
          return (
            <tr key={item.vendorCode}>
             <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{newIphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
           {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Корпус')) {
          return (
            <tr key={item.vendorCode}>
            <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{newIphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
                 {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Скло камери')) {
          return (
            <tr key={item.vendorCode}>
             <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              <td className="tableTitle">{glassCam} грн</td>
              {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Мікросхема')) {
          return (
            <tr key={item.vendorCode}>
              <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{ICNewIphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
   {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (
          item.name.toLowerCase().includes("роз'єм заряд") ||
          item.name.toLowerCase().includes('charge')
        ) {
          return (
            <tr key={item.vendorCode}>
             <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
                {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Тачскрін')) {
          return (
            <tr key={item.vendorCode}>
             <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
               {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        }
        if (item.name.includes('Шлейф')) {
          return (
            <tr key={item.vendorCode}>
            <div className="tableItem">
               <td> <img className='tableImg' src={item.image} alt="" width="50" height="40" />{' '}</td>
              <td>  {item.name}</td>
              </div>
              {newIphone ? (
                <td className="tableTitle">{iphoneRepair} грн</td>
              ) : (
                <td className="tableTitle">{priceCharge} грн</td>
              )}
               {available ? (
                   <td className="tableTitle available">На складі</td>
              ) : (<td className="tableTitle unavailable">Запит</td>)}
            </tr>
          );
        } else {
                      return null
                    }
      })}
    </table>
  );
}
