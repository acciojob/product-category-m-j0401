import React, { useState } from "react";

import List from  "../ProductList.js";

const Product=()=>{


    let[data,setData]=useState(List.Male)
    function handleChange(e)
    {
      let val=e.target.value;
      setData(List["val"]);
    }


    return (
        <div>
            <select onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <ul>
           { data.map((value,ind)=>
           <li key={ind}>{value}</li>
        )
}
       </ul>
        </div>
    )
}

export default Product;