import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Categories({categories}){
  // const [categories, setCategories]= useState([])
  const navigate = useNavigate()
  // useEffect(()=> {
  //   fetch("/categories").then(r=>r.json()).then(categories => setCategories(categories))
  // },[])

  categories.map((category)=> {
    console.log(category.name)
  })

  return(
    categories.map((category)=> {
      return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={category.img}/>
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <Button variant="primary" onClick={()=> navigate(`/categories/${category.id}`) }>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      )
    })
  )
}

export default Categories;
