import { useState} from 'react';
import PropTypes from 'prop-types';


export function Form ({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('');
    const handleChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase());
      
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery === '') {
          return 
        }
        
        onSubmit(searchQuery);
      };
  
  return(
<form  className="form" onSubmit={handleSubmit}>
        
        <input
          className="formInput"
          placeholder="Введіть модель"
          name="data"
          value={searchQuery}
          onChange={handleChange}
        />
        
        <button className="searchBtn" type="submit">
          Пошук
        </button>
        </form>
  )
  
  

  }


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
