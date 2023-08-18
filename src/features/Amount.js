import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add,total } from './amountSlice';
function Amount() {
    const [value,setValue]=useState();
    const dispatch = useDispatch();

    const balance =  useSelector(state=>state.amount.balance);

    const amount = useSelector(state=>state.amount.total);

  return (
    <div style={{width:"30%"}}>
      <h1>Accounts</h1>
      <h2>count : {balance.length}</h2>
      <label htmlFor="amount">Balance</label>
      <input type="number" id="amount" onChange={(e)=>setValue(e.target.value)}/>
      <br/>
      <button onClick={()=>dispatch(add(value))}>Submit</button>
      {balance.length>0?balance.map((value,index)=>(
        <h3 key={index}>balance : {value}</h3>
      )):<p></p>}
    </div>
  );
}

export default Amount;