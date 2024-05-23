import { memo } from 'react'
interface Props{
    count:number
    // getIdProduct:Function
}
 function Main(props:Props) {
    console.log("re-render, main");
    // console.log(props.getIdProduct);
    
    
  return (
    <div>Main
        <p>{props.count}</p>
        
    </div>
  )
}

export default memo(Main)