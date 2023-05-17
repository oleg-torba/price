import { BsTelephone } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import {useState} from 'react'
export function Header ({onSubmit}){
    const [searchQuery, setSearchQuery] = useState('');
    const handleChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase());
      
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery === '') {
          return;
        }
        onSubmit(searchQuery);
      };
    return(
        <>
 <VscTools className="icon" size='2rem' fill="blue"/>
        <header className="header">
       
        <form  className="form" onSubmit={handleSubmit}>
        
        <input
          className="formInput"
          placeholder="Введіть модель"
          name="data"
          value={searchQuery}
          onChange={handleChange}
        />
        
        <button className="formBtn" type="submit">
          Пошук
        </button>
        </form>
     
            </header>
            <a className="phone" href="tel:098-188-28-58"><BsTelephone/>{'  '}098-188-28-58</a></>
    )
}