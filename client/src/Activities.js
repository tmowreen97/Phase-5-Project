import React, { useState } from "react";

function Activities({activities}){
  const [search, setSearch] = useState('')

  console.log('act',activities)
  return(
    <div className="activities-page">
    <div className="all-activities">
      <div className="activities">
      <h1 className="all-activities-title" >All Activities</h1>
      <div className="search-bar">
        <input 
        type='text'
        placeholder="Search by keyword..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button className="search-button">🔍</button>
      </div>
        {activities && activities.filter((activity)=> activity.name.includes(search)).map((activity)=> {
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