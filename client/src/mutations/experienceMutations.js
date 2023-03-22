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
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      console.log(res.status)

      throw new Error("Error creating experience")
    })
  )
}

const editExperience = (experience) => {
  return(
    fetch(`/experiences/${experience.id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(experience)
    })
    .then(resp => resp.json())
  )
}

const deleteExperience = (experience_id) => {
  return(
    fetch(`/experiences/${experience_id}`, {
      method: 'DELETE'
    })
    .then(resp=> resp.json())
  )
}

export const useAddExperience = ()=> {
  return useMutation(addExperience, {
    onError: (error) => {return(error)}
  })
}

export const useEditExperience = () =>{
  return useMutation(editExperience)
}

export const useDeleteExperience = () =>{
  return useMutation(deleteExperience)
}