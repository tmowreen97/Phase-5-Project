import React, { useContext, useEffect, useState } from "react";
import '../src/styles/card.css';import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AppContext } from "./App";

function Categories(){
  const navigate = useNavigate()
  const {category_query} = useContext(AppContext)

  const [sortedCategories, setSortedCategories]= useState(
    [...category_query].sort(function(a, b) {
      const nameA = a.name
      const nameB = b.name
          
      // sort in an ascending order
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      })
  )
  console.log(sortedCategories)

  return(
    <div className="all-categories">
      <div className="categories">

      <h1 className="categories-title">Categories</h1>
      <p className="categories-desc">Did you know there are 8 categories of self-care? Click on any category to learn more!</p>
    <div className="grid">
      {category_query && sortedCategories.map((category)=> {
        return(
          <Card key={category.id} style={{ width: '18rem' }} className='box' onClick={()=> navigate(`/category/${category.id}`)}>
          <Card.Img variant="top" src={category.img} />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
          </Card.Body>
        </Card>
        )
      })}
    </div>
    </div>
    </div>
  )
}

export default Categories;


