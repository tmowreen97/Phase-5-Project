import React, { useState } from "react";
import Select from 'react-select';

function Activities({activities}){
  const [search, setSearch] = useState('')

  //Ascending Z-A
  const ascending =[...activities].sort(function(a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      
  // sort in an ascending order
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  //Descending Z-A
  const descending = [...activities].sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  const [allActivities, setAllActivities] = useState(ascending)
  const [allCategories, setAllCategories] = useState((activities.map((act)=>{
    return(act.category)
  })).filter((currentValue, index, arr)=> (
    arr.indexOf(currentValue) === index
  )))

  const categoryOptions = [
    {value: "Emotional", label: "Emotional"},
    {value: "Environmental", label: "Environmental"},
    {value: "Financial", label: "Financial"},
    {value: "Mental", label: "Mental"},
    {value: "Physical", label: "Physical"},
    {value: "Professional", label: "Professional"},
    {value: "Social", label: "Social"},
    {value: "Spiritual", label: "Spiritual"},
  ]

  console.log(allCategories)

  const [sort, setSort] = useState('ascending')

  console.log('act',allActivities)
  function handleSelection(e){
    if (e == 'descending'){
      const descending = [...allActivities].sort(function(a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      setAllActivities(descending)
      setSort('descending')
    }
    else {
      const ascending =[...allActivities].sort(function(a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            
        // sort in an ascending order
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        });
      setAllActivities(ascending)
      setSort('ascending')
    }
  }

  function handleFilter(e){
    console.log(e)
    if (sort === 'ascending'){
      const filtered = e.map(element => {
      return(
        ascending.filter((activity)=> {
        // debugger
        return (activity.category === element.value)
      })
      )
      })
      const flattened = filtered.flat()
      flattened.sort(function(a, b) {
        const nameA = a.name
        const nameB = b.name
        // sort in an ascending order
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        console.log('Flat',flattened)
        setAllActivities(flattened)
    } else {
      const filtered = e.map(element => {
        return(
          descending.filter((activity)=> {
          // debugger
          return (activity.category === element.value)
        })
        )
        })
        const flattened = filtered.flat()
        flattened.sort(function(a, b) {
          const nameA = a.name
          const nameB = b.name
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        });
          setAllActivities(flattened)
    }
    }
   
    
  
  


  

    

  console.log('descending', descending)
  // console.log('ascending', ascending)

  return(
    <div className="activities-page">
    <div className="all-activities">
      <div className="activities">
      <h1 className="all-activities-title" >All Activities</h1>
      <p className="all-activities-desc">Here are a list of all activities. Feel free to search by keyword, sort by name, or filter them by category!</p>
      <div className="filter-section">
        <input 
        type='text'
        placeholder="Search by keyword..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button className="search-button">🔍</button>
        <select className='sort-select' onChange={(e)=> handleSelection(e.target.value)}>
          <option value = {'ascending'}>A-Z</option>
          <option value={'descending'}>Z-A</option>
        </select>
        <Select
          defaultValue={categoryOptions}
          isMulti
          name="categories"
          options={categoryOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e)=> handleFilter(e)}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'black' : 'grey',
            }),
          }}
        />
        <button className='refresh-filter-button' onClick={()=> window.location.reload()} title="Click to refresh filter to default">↻</button>
      </div>
        {allActivities && allActivities.filter((activity)=> activity.name.includes(search)).map((activity)=> {
          return(
            <li className="all-activities-list">{activity.name} -{activity.category}</li>
          )
        })} 
      </div>
           
    </div>  
    </div>
    

  )
}

export default Activities;