import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();

  let data = useSelector((state)=> state?.userData);
  console.log(data)

  async function fetchData(dispatch,getState){
    console.log(getState())

    let res =  await fetch('https://jsonplaceholder.typicode.com/users/2');

    let data = await res.json()
    dispatch({type:'ADD', payload:data})
  }


  return (
    <center>
     <div>id:{data?.id}</div>
    <div> name:{data?.name},</div>
    <div> mobile:{data?.phone},</div>
    
      <button className='btn btn-primary'
       onClick={()=>{
          dispatch(fetchData)
      }}>Get</button>
    
    </center>
   
  )
}

export default App
