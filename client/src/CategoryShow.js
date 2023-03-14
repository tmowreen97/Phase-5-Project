import React from 'react';
import {useParams} from 'react-router-dom';

function CategoryShow({categories}){

  let { id } = useParams()
  console.log({id})
  const currentCategory = categories.filter((cat)=> {
    return (
      cat.id == id
    )
  })

  return(
    currentCategory && currentCategory.map((category)=> {
      return(
        <div>
          <h1>{category.name}</h1>
          <h3>Description:</h3>
          <h5>{category.description}</h5>
        </div>
        
      )
    })
  )
}

export default CategoryShow;