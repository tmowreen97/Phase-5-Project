const addExperience = (experience)=> {
  return(
    fetch('/experiences', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(experience)
    })
    .then(resp=> resp.json())
  )
}
const logoutUser = (experience_id) => {
  return(
    fetch(`/experiences/${experience_id}`, {
      method: 'DELETE'
    })
    .then(resp=> resp.json())
  )
}

