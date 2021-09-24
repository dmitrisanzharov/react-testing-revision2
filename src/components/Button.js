import React, {useState} from 'react'; 
 
export const Omg = () => {
  return (
    <h1>this is OMG component</h1>
  )
}
 
const Button = () => {
 
  const [value, setValue] = useState('Press Here');
 
 
  const dummyFunction = () => {
    setValue('You clicked')
 
  }
 
 
  return       ( 
 
   
 
  <button onClick={dummyFunction} title='dummyButton'>
  {value}
</button>
 
 
  
  
 
)
};
 
export default Button;