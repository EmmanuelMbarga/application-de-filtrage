import { useState } from "react"

const FormulaireApp=()=>{
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handlerForm=(e)=>{
        setNom(e.target.value)
        
    }
    
    return(
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nom">Nom</label>
                    <input type="name" name="nom" id="nom" onChange={handlerForm} value={nom} className="border mx-2 px-2"/>
                </div>

                <div className="my-2">
                    <label htmlFor="prenom">prenom</label>
                    <input type="text" name="text" id="prenom" onChange={(e)=>{
                        setPrenom(e.target.value)
                    }} value={prenom} className="border mx-2 px-2"/>
                </div>

                <div>
                    <label htmlFor="checkbox"/>
                    <input type="checkbox" name="boxchek" id="checkbox" />
                </div>
                <button className="my-5 border">envoyer</button>
        </form>
    )
}

export default FormulaireApp