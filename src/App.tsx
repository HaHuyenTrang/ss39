import {useCallback, useState} from 'react'
import UseRef from './components/UseRef'
import Header from './components/Header'
import Main from './components/Main'
import UseReducer from './components/UseReducer'
import Bai1ss37 from './components/Bai1ss37'
import Bai2ss37 from './components/Bai2ss37'
import Bai3 from './components/Bai3'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'
import Bai7 from './components/Bai7'
import Bai8 from './components/Bai8'
import Bai9 from './components/Bai9'



export default function App() {
  const [active, setActive] = useState<boolean>(false)
  const [count,setCount]= useState<number>(0)
  const handleClick=()=>{
    setActive(!active)
  }
  console.log("re-render app");
  /*
    khi component app đc re-render thì các component con cũng re-render theo
    nêu active  là true thi hiển thị thẻ p với nội dung là xin chào
    nếu active là false thì không hiển thị gì cả
  */ 
  
    
    useCallback(()=>{
      const getIdProduct=()=>{

      }
      return getIdProduct;
    },[])
  return (
    <div>App
      {active?<p>xin chào</p>:""}
      <UseRef></UseRef>
      <Header count={count}></Header>
      <Main  count={count} ></Main>
      <button onClick={handleClick}> click active</button>
      <UseReducer></UseReducer>
      {/* <Bai1ss37></Bai1ss37> */}
      <Bai2ss37 context={null}></Bai2ss37>
      <Bai3></Bai3>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai9></Bai9>
    </div>
  )
}
