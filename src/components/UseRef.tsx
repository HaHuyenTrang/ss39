import { useEffect, useRef,useState } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0)
    let index = 0
    const refCurrent=useRef<HTMLInputElement>(null);
    // refCurrent.current?.focus()
    useEffect(()=>{
        refCurrent.current?.focus();
    })

    // console.log(ref);
    /*
        useRef là 1 hàm nhận vào tham số là 1 giá trị khởi tao
        useRef() trả về 1 đối tượng hay 1 object, bên trong object này
        sẽ có 1 key (current) với giá trị là giá trị tham số truyền vào
        khi mỗi lần component re-render thì useRef không tạo ra 1 tham
        chiếu mới.
        khi muốn focus vào ô input khi muốn nhập dữ liệu
    */ 
    
    
    const handleClick =()=>{
        // ref.current = ref.current +1
        index++;
        setCount(count+1)
    }
  return (
    <div>UseRef
        
        <p>GIá trị count: {count} {index}</p>
        <button onClick={handleClick}>click</button>
        <input type="text" ref={refCurrent} placeholder='nhập email' />
    </div>
  )
}
