import Alimentelemt from "./Alimentcom"
import Alimenttitle from "./titleAliment"




const Alimenttable=(props)=>{

        const allproduct=props.Products
        const Filtertext=props.filterText
        const checkboxAffich=props.checboxaffiche
       

        const rows=[]; //c'est la table des produits
        let lastCategory = null;

        allproduct.forEach((product) => {
            
            if(product.nom.indexOf(Filtertext) === -1){
                return
            }

            if (checkboxAffich && !product.stock ) {
                return
            }
           
            if(product.categories !== lastCategory) {
                rows.push(
                    <Alimenttitle
                    categories={product.categories}
                    key={product.categories}

                    />
                )
            }

            rows.push(
                <Alimentelemt
                product={product}
                key={product.nom}
                 />
            )
            lastCategory = product.categories     
        });


    
    


    return(
        <div className=" text-sm w-52 w-74 py-1" >
            <span>{rows}</span>
        </div>
        
    )
} 

export default Alimenttable