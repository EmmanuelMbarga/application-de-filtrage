
const Alimentelemt=(props)=>{
    const style=props.product.stock? {color:"black"}:{color:'red'}
    return(
        <div>
            <div style={style} className=" text-sm w-52 border-y w-74 py-1">
                <span className='-ml-4 mr-32'>{props.product.nom}</span>
                <span>{props.product.prix}</span>
            </div>
        </div>
    )
} 

export default Alimentelemt