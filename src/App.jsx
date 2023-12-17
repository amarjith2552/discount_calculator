import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const[amount,setAmount]=useState(0)
  const[discount,setDiscount]=useState(0)
  const[output,setoutput]=useState(0)
  const[saving,setSaving]=useState(0)

  console.log(amount,discount);

  const calculate=(e)=>{
    const result= amount- (amount * (discount/100))
    console.log(result);
    setoutput(result)
    const save =amount - result
    setSaving(save)
  }
  const reset=(e)=>{
    setAmount(0)
    setDiscount(0)
    setSaving(0)
    setoutput(0)
  }

  return (
    <>
     <h1 style={{textAlign:'center',fontSize:'35px'}}>Discount <span>Calculator</span></h1> 
      <div className='main'>
        <div className="pic">
              <img src="https://i.pinimg.com/originals/11/64/91/1164913b4932faae0fe871859b01684b.gif" alt="" />
            </div>
  
       <div>
          <div className="App"> 
            <h2>Calculate Your Discount</h2> 
            <div className='input'> 
              <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="outlined" /> <br /> <br />
              <TextField id="outlined-basic" value={discount||""} onChange={(e)=>setDiscount(e.target.value)} label="Discount %" variant="outlined" />  <br />
            </div>
            <div className='button'>
              <Button variant="contained" onClick={e=>calculate(e)} color="error">Discount %</Button> 
              <Button variant="contained" onClick={e=>reset(e)} color="primary">Reset</Button>
            </div>
      
      
      
          </div> <br /> <br /> <br />
                <div className="container">
                <h2>Discount<span className='p'>Price</span>:<span className='sav'>₹ {output}</span></h2>
                <h2>You<span className='p'>saved</span>:<span className='out'>₹ {saving}</span></h2>
              </div>
       </div>
            
      </div>
    </>
    
  );
}

export default App;
//Discounted Price = Original Price - (Original Price * (Discount Percentage / 100))