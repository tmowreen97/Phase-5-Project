import React, { useEffect, useState } from "react";
import '../src/styles/card.css';import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Categories({categories}){
  const navigate = useNavigate()
  // const [categories, setCategories]= useState([])
  // useEffect(()=> {
  //   fetch("/categories").then(r=>r.json()).then(categories => setCategories(categories))
  // },[])
  console.log(categories)

  // categories.map((category)=> {
  //   console.log(category.name)
  // })

  return(
    <div className="grid">
      {categories && categories.map((category)=> {
        return(
          <Card key={category.id} style={{ width: '18rem' }} className='box' onClick={()=> navigate(`/categories/${category.id}`)}>
          <Card.Img variant="top" src={category.img} />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
          </Card.Body>
        </Card>
        )
      })}
    </div>
  )
}

export default Categories;


