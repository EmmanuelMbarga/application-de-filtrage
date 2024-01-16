
const RedAlimentPriceApp=(props)=>{
    return(
        <div className='text-sm w-52 border-y w-74 py-1 text-red-600'>
            <span className='-ml-4 mr-32'>{props.name}</span>
            <span>{props.price}</span>
        </div>
    )
} 

export default RedAlimentPriceApp