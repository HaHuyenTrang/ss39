import { memo } from 'react'
interface Props{
    count:number
}
 function Header(props:Props) {
    console.log("giá trị biến count");
    
  return (
    <div>Header
        <p>Giá trị count: {props.count}</p>
    </div>
  )
}
export default memo(Header)