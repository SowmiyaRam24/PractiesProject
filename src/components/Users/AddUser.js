import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';


const AddUser=(props)=>{
  const[useStat,userName]=useState('');
  const[useAges,userAge]=useState('');

  const AddUsessr=(event)=>{
  userName(event.target.value)

};
const AddAge=(event)=>{
   userAge(event.target.value)
};
  const onSubmiteButton=(event)=>{ 
    event.preventDefault();
    if(useStat.trim().length===0||useAges.trim().length===0){
      return;
    }
    if(+useAges<1){
      return;
    }
    console.log(useStat,useAges)
    userName('');
    userAge('');
  }
    return(
      <Card className={classes.input}>
         <form onSubmit={onSubmiteButton}>
          <label>username</label>
          <input type='text'value={useStat} onChange={AddUsessr}/>
          
          <label htmlFor='age'>Age (years)</label>
          <input id='use'value={useAges }onChange={AddAge}/>
          <div>

          <Button type='submit'>Add Expence</Button>
          </div>
        </form>
      </Card>
      
      
    );
};

export default AddUser;