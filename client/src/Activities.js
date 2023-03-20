import React from "react";

function Activities({activities}){
  return(
    <div className="all-activities">
      <div className="activities">
        <h1 className="all-activities-title" >All Activities</h1>
        {activities.map((activity)=> {
          return(
            <li className="all-activities-list">{activity.name} -{activity.category}</li>
          )
        })} 
      </div>
           
    </div>

  )
}

export default Activities;