import React from 'react'

const Heading = ({className,text}) => {
    //console.log(text.split(" "));
     text.split(" ").map(item=>{
        //console.log(item);
       // console.log(item.includes("#"));
       if (item.includes("#")){
        let arr = item.split("")
        arr.pop()
        arr.shift()
        console.log(arr.join(""));

       }

   })
  return (
    <div className={`${className}`}>{text}</div>
  )
}

export default Heading