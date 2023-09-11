import React from 'react';
import Subproduct from './Subproduct';
export default function ProductList(props)  {
    console.log(props)
    return (
      props.productlist.map((product,i) =>{
        return<Subproduct product={product} key={i}/>
      })
    )
}
