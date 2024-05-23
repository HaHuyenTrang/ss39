 {/* 
            đây là 1 hook hay còn gọi là 1 hàm!
            dùng để quản lí các state đơn giản thì có dùng useReducer được 
            nhưng mà các state đơn giản thi nên dùng useState
            +đầu vào useReducer nhận vào 2 tham số
                +tham số thứ 1 là 1 cái hàm reducer  đặt tên gì cũng đc
                +tham số thứ 2 là 1 giá trị khởi 
            nắm được luồng chạy của useReducer bài học sau sẽ học redux
        */}


 import React, { useReducer } from 'react';

export default function UseReducer() {
    let initial = {
        count: 0,
        product: {},
        products: {},
        isLoading: false,
    };

    const reducer = (state:any, action:any) => {
        switch (action) {
            case "increase":
                return state + 1;
            case "decrease":
                return state - 1;
            default:
                return state;
        }
    };
    let initialCount = 0;
    const [state, dispatch] = useReducer(reducer, initialCount);

    const handleIncrease = () => {
        dispatch('increase');
    };

    const handleDecrease = () => {
        dispatch('decrease' );
    };

    console.log("11111");

    return (
        <div>
            <p>Giá trị biến cao : {state}</p>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrease</button>
        </div>
    );
}