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
  console.log(currentCategory)

  return(
    currentCategory.map((category)=> {
      return(
        <div>
          <h1>{category.name}</h1>
          <h3>Description:</h3>
          <h5>{category.description}</h5>
          <h3>Activities:</h3>
          <CategoryActivities category={category}/>
        </div>
        
      )
    })
  )
}

export default CategoryShow;

const CategoryActivities = ({category}) => {
  return(
    category.activities.map((activity)=> {
      return(<li>{activity.name}</li>)
    })
  )
}