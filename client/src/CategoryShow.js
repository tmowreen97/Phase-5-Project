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
        <div className='category-show'>
          <h1 className='category-title'>{category.name}</h1>
          <h4 className='category-description-title'>Description:</h4>
          <h5 className='description'>{category.description}</h5>
          <CategoryActivities category={category}/>
        </div>
      )
    })
  )
}

export default CategoryShow;

const CategoryActivities = ({category}) => {
  return(
    <div>
          <h4 className='activities-title'>Activities:</h4>
          {category.activities.map((activity)=> {
            return(
              <li className='activity-list-item'>{activity.name}</li>
            )
          })}
    </div>

  )
}