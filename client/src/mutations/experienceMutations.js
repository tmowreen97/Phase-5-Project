import axios from "axios";
import { useMutation } from "react-query";

//has both edit and delete experience mutations 
const editExperience = (experience) => {
  return (axios.patch(`/experiences/${experience.id}`, experience)
  .then(response => response.data))
}

const deleteExperience = (experience_id) => {
  return(
    axios.delete(`/experiences/${experience_id}`)
    .then(resp=> resp.data)
  )
}

export const useEditExperience = () =>{
  return useMutation(editExperience)
}

export const useDeleteExperience = () =>{
  return useMutation(deleteExperience)
}