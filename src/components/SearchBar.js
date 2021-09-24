import React, {useState} from 'react'; 
 
const Search = () => {
 
    const [inputValue, setInputValue] = useState('');
 
 
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
 
  return       ( 
 
    <div>
      <h1>Some random text</h1>
    <input type="text" onChange={handleChange} title='mySearch'/>
    </div>
    
 
)
};
 
export default Search;