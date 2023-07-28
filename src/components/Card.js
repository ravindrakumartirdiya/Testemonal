import React, { useState } from "react";
import { AiOutlineDoubleLeft , AiOutlineDoubleRight} from "react-icons/ai";

function Card(props) {
    let data = props.data;
    const [index , setIndex] = useState(0);


    function leftHandler(){
        if(index - 1 < 0) {
            setIndex(data.length - 1);
        }
        else{
            setIndex(index-1);
        }

    }

    function rightHandler(){
        if(index + 1 >= data.length) {
            setIndex(0);
        }
        else{
            setIndex(index+1);
            
        }
    }

    function supriceHandler(){
        let randomIndex = Math.floor(Math.random() * data.length);
        setIndex(randomIndex);
    }

    
    return (
        <div className="h-90 w-96 bg-black text-white flex flex-col gap-5 justify-center items-center p-6 relative">
            <img src={data[index].image} className="w-20 rounded-full shadow-xl shadow-black absolute -top-10 left-3"></img>
            <div className="font-bold text-2xl">
                {data[index].name}
            </div>
            <div className="font-bold text-lg">
                {data[index].job}
            </div>
            <div>
                {data[index].text}
            </div>
            <div className="flex gap-4">
                <button onClick={leftHandler}><AiOutlineDoubleLeft/></button>
                <button onClick={rightHandler}><AiOutlineDoubleRight/></button>
            </div>
            <button onClick={supriceHandler} className="h-10 w-32 bg-slate-400 text-black font-bold rounded hover:bg-white">surprise me</button>
            
        </div>
    )
}

export default Card;