import Alimenttable from "./Alimenprice"
// import AlimentPriceApp from "./Alimenprice"
import Alimenttitle from "./titleAliment"



const ProductTableApp=(props)=>{
    return(
        <>
            <div className=' text-sm font-bold w-52 border-y-2 w-74 py-1'>
                <span className='-ml-2 mr-32'>Nom</span>
                <span>Prix</span>
            </div>
        {/* ----------------------titre produit----------------------------------------------------------------- */}
        <Alimenttitle/>
        {/* ----------------section pour les composants comportant les different fruits------------------------------ */}
        <Alimenttable Products={props.products} filterText={props.search1} checboxaffiche={props.afficherleselement1} />

        </>
    )
} 

export default ProductTableApp