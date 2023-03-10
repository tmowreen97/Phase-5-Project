import React, { useEffect, useState } from "react";

function Categories(){
  const [categories, setCategories]= useState([])
  useEffect(()=> {
    fetch("/categories").then(r=>r.json()).then(categories => setCategories(categories))
  },[])

  categories.map((category)=> {
    console.log(category.name)
  })
  return(
    categories.map((category)=> {
      return (
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1013/1013370.png"/>
          <h1>{category.name}</h1>
        </div>
        
      )
    })
  )
}

export default Categories;