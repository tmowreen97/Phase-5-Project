import { useMutation } from "react-query";

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

export const useAddExperience = ()=> {
  return useMutation(addExperience)
}