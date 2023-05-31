import React from 'react';

// export function ItemList({ gsm }) {
//   return (
//     <>
//       <ul className="contactsList">
//         {gsm.map(item => {
//           let priceLCD = Math.ceil(((item.price + 22) * 39) / 50) * 50;
//           let priceCharge = Math.ceil(((item.price + 10) * 39) / 50) * 50;
//           let glassCam = Math.ceil(((item.price + 10) * 39) / 50) * 50;
//           // let promoPrice = Math.ceil(((item.price + 17) * 39) / 50) * 50;
//           let iphoneRepair = Math.ceil(((item.price + 30) * 39) / 50) * 50;
//           let newIphoneRepair = Math.ceil(((item.price + 40) * 39) / 50) * 50;
//           let ICNewIphoneRepair =
//             Math.ceil(((item.price + 50) * 39) / 50) * 50;

//           let newIphone =
//             item.name.includes('iPhone X') ||
//             item.name.includes('iPhone XS') ||
//             item.name.includes('iPhone XS Max') ||
//             item.name.includes('iPhone 11') ||
//             item.name.includes('iPhone 11 Pro') ||
//             item.name.includes('iPhone 11 Pro Max') ||
//             item.name.includes('iPhone 12') ||
//             item.name.includes('iPhone 12 Mini') ||
//             item.name.includes('iPhone 12 Pro') ||
//             item.name.includes('iPhone 12 Pro Max') ||
//             item.name.includes('iPhone 13 Pro Max') ||
//             item.name.includes('iPhone 13 Pro') ||
//             item.name.includes('iPhone 13');

//           if (item.price >= 25) {
//             priceLCD = Math.ceil(((item.price + 25) * 39) / 50) * 50;
//           }
//           if (item.price >= 60) {
//             // eslint-disable-next-line no-unused-vars
//             priceLCD = Math.ceil(((item.price + 30) * 39) / 50) * 50;
//           }
//         })}
//           if (item.name.includes('Дисплей') || item.name.includes('Complete')) {
//             return (
//               <>
              
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Дисплей:</span>
//                       <span className="contactItem">{item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
               
                     
//                       {/* {item.vendorCode === 'CB-00008428' || item.vendorCode === 'CB-00012256' || item.vendorCode === 'CB-00012222' && (  
//                            <b className="contactItem">{promoPrice} грн</b>  )
//                            } */}
                         
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       {item.quantity_in_stock !== 0 && (
//                         <span className="contactItem">
//                           {' '}
//                           {item.quantity_in_stock} шт
//                         </span>
//                       )}
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (
//             item.name.includes("Роз'єм заряд") ||
//             item.name.includes('Charge')
//           ) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Роз'єм живлення:</span>
//                       <span className="contactItem"> {item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">{iphoneRepair} грн</span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {item.quantity_in_stock} шт
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.includes('Корпус')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Корпус:</span>
//                       <span className="contactItem"> {item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">
//                           {newIphoneRepair} грн
//                         </span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {item.quantity_in_stock} шт
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (
//             item.name.includes('Задня частина') ||
//             item.name.includes('Кришка задня')
//           ) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Задня кришка:</span>
//                       <span className="contactItem">{item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">{iphoneRepair} грн</span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {item.quantity_in_stock} шт
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.includes('Камер' || 'камер')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">
//                         Камера (основна, фронтальна):
//                       </span>
//                       <span className="contactItem"> {item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">{iphoneRepair} грн</span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {item.quantity_in_stock} шт
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.includes('Акумулятор')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Акумулятор:</span>
//                       <span className="contactItem"> {item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">{iphoneRepair} грн</span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {item.quantity_in_stock} шт
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.includes('Бузер')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Бузер:</span>
//                       <span className="contactItem"> {item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">{iphoneRepair} грн</span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {' '}
//                         {item.quantity_in_stock} шт
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.toLowerCase().includes('динамік')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Спікер:</span>
//                       <span className="contactItem">{item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
                     
//                       {newIphone ? (
//                         <span className="contactItem">{iphoneRepair} грн</span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {' '}
//                         {item.quantity_in_stock} грн
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.toLowerCase().includes('мікросхема')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Мікросхеми:</span>
//                       <span className="contactItem">{item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">
//                           {ICNewIphoneRepair} грн
//                         </span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {' '}
//                         {item.quantity_in_stock} грн
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.includes('Скло камери')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Скло камери:</span>
//                       <span className="contactItem">{item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       <span className="contactItem"> {glassCam} грн</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {' '}
//                         {item.quantity_in_stock} грн
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.includes('Шлейф')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Шлейфові деталі:</span>
//                       <span className="contactItem">{item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       {newIphone ? (
//                         <span className="contactItem">{iphoneRepair} грн</span>
//                       ) : (
//                         <span className="contactItem">{priceCharge} грн</span>
//                       )}
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {' '}
//                         {item.quantity_in_stock} грн
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           }
//           if (item.name.includes('Тачскрін')) {
//             return (
//               <>
//                 <li className="contactsItem" key={item.name}>
//                   <div className="contact">
//                     <span>
//                       <img src={item.image} alt="" width="100" height="100" />
//                     </span>
//                     <span>
//                       <span className="contactValue">Тачскрін:</span>
//                       <span className="contactItem">{item.name}</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Ціна:</span>
//                       <span className="contactItem"> {priceCharge} грн</span>
//                     </span>
//                     <span>
//                       <span className="contactValue">Наявність:</span>
//                       <span className="contactItem">
//                         {' '}
//                         {item.quantity_in_stock} грн
//                       </span>
//                     </span>
//                     <span className="provider">Provider: GSM</span>
//                   </div>
//                 </li>
//               </>
//             );
//           } else {
//             return null;
//           }
       
//       </ul>
//     </>
//   );
// }

export function LcdItem ({gsm}){

    return (
      
      <table>
      <tr>
            <th className='tableTitle'>Найменування</th>
            <th className='tableTitle'>Ціна</th>
          </tr>
       {gsm.map(item => {
     
          let priceLCD = Math.ceil(((item.price + 22) * 39) / 50) * 50;
          let priceCharge = Math.ceil(((item.price + 11) * 39) / 50) * 50;
          let glassCam = Math.ceil(((item.price + 11) * 39) / 50) * 50;
          // let promoPrice = Math.ceil(((item.price + 17) * 39) / 50) * 50;
          let iphoneRepair = Math.ceil(((item.price + 30) * 39) / 50) * 50;
          let newIphoneRepair = Math.ceil(((item.price + 40) * 39) / 50) * 50;
          let ICNewIphoneRepair =
            Math.ceil(((item.price + 50) * 39) / 50) * 50;
      
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
         if(item.name.includes("Акумулятор")){
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" /> {item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
  
           
          </tr>
          )
         }
          if(item.name.includes("Бузер")){
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40"/>{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
          
           
          </tr>
          )
         }
         if(item.name.includes("Динамік")){
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
      
           
          </tr>
          )}
         if(item.name.includes("Дисплей") || item.name.includes('Complete')){
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceLCD} грн</td>
              }
          
           
          </tr>
          )
         }
         if(item.name.includes('Задня частина') ||item.name.includes('Кришка задня')){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
           
           
          </tr>
          )
         }
         if(item.name.includes('Камера')){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{newIphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
            
           
          </tr>
          )
         }
         if(item.name.includes('Корпус')){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{newIphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
       
           
          </tr>
          )
         }
         if(item.name.includes('Скло камери')){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
               <td className="tableTitle">{priceCharge} грн</td>
              
       
           
          </tr>
          )
         }
         if(item.name.includes('Мікросхема')){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{ICNewIphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
       
           
          </tr>
          )
         }
         if( item.name.toLowerCase().includes("роз'єм заряд") || item.name.toLowerCase().includes('charge')){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
            
           
          </tr>
          )
         }
         if( item.name.toLowerCase().includes("тачскрін")){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
            
           
          </tr>
          )
         }
         if(item.name.includes('Шлейф')){
      
          return (
            <tr key={item.vendorCode}>
     
          
                <td className="tableTitle"><img src={item.image} alt="" width="50" height="40" />{item.name}</td>
              {
                newIphone ?
                  <td className="tableTitle">{iphoneRepair} грн</td> :
                  <td className="tableTitle">{priceCharge} грн</td>
              }
       
           
          </tr>
          )
         }
          
       })}
       
       </table>
    )

 
   
  }

  // export function BatteryItem ({gsm}){
  //   return (
  //     <table>
  //       <th>Найменування</th>
  //       <th>Ціна</th>
  //       <th>Наявність</th>
  //       {gsm.map(item => {
  //       console.log(item.name.includes("Дисплей"))
  //         let priceLCD = Math.ceil(((item.price + 22) * 39) / 50) * 50;
  //         let priceCharge = Math.ceil(((item.price + 10) * 39) / 50) * 50;
  //         let glassCam = Math.ceil(((item.price + 10) * 39) / 50) * 50;
  //         // let promoPrice = Math.ceil(((item.price + 17) * 39) / 50) * 50;
  //         let iphoneRepair = Math.ceil(((item.price + 30) * 39) / 50) * 50;
  //         let newIphoneRepair = Math.ceil(((item.price + 40) * 39) / 50) * 50;
  //         let ICNewIphoneRepair =
  //           Math.ceil(((item.price + 50) * 39) / 50) * 50;
      
  //         let newIphone =
  //           item.name.includes('iPhone X') ||
  //           item.name.includes('iPhone XS') ||
  //           item.name.includes('iPhone XS Max') ||
  //           item.name.includes('iPhone 11') ||
  //           item.name.includes('iPhone 11 Pro') ||
  //           item.name.includes('iPhone 11 Pro Max') ||
  //           item.name.includes('iPhone 12') ||
  //           item.name.includes('iPhone 12 Mini') ||
  //           item.name.includes('iPhone 12 Pro') ||
  //           item.name.includes('iPhone 12 Pro Max') ||
  //           item.name.includes('iPhone 13 Pro Max') ||
  //           item.name.includes('iPhone 13 Pro') ||
  //           item.name.includes('iPhone 13');
      
  //         if (item.price >= 25) {
  //           priceLCD = Math.ceil(((item.price + 25) * 39) / 50) * 50;
  //         }
  //         if (item.price >= 60) {
  //           // eslint-disable-next-line no-unused-vars
  //           priceLCD = Math.ceil(((item.price + 30) * 39) / 50) * 50;
  //         }
  //        if(item.name.includes("Акумулятор")){
  //         return (
  //           <tr>
     
          
  //               <td>{item.name}</td>
  //             {
  //               newIphone ?
  //                 <td className="contactItem">{iphoneRepair} грн</td> :
  //                 <td className="contactItem">{priceCharge} грн</td>
  //             }
  //           <td className="contactItem">{item.quantity_in_stock}</td>
           
  //         </tr>
  //         )
  //        }
        
          
          
  //      })}
  //     </table>
  //   )
   
  // }
  
     
       