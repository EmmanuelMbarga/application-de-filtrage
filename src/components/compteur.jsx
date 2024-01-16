import { useState } from "react"

const Compteur=()=>{
    const [personne,setPersonne]=useState(
        {
            firstName:"owona",
            lastName:"tsimi",
            age:20
        }
        )

    const handlerClick=()=>{
        setPersonne({...personne, age:personne.age +1 , lastName:'judas'})

    }

    return(
        <div>
            <span>{personne.firstName}, {personne.lastName} aura {personne.age} ans</span>
            <button onClick={handlerClick}>clique ici</button>
           
        </div>
    )
} 

export default Compteur