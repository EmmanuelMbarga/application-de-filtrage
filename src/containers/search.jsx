import SearchbarApp from "./searchbar"
import SearchCheckApp from "./searchcheck"




const SearchApp=(props)=>{

    return(
        <div>
            <SearchbarApp searchbar={props.search1} onChange={props.search2}/>
            <SearchCheckApp checkedbox1={props.afficherleselement1} onChange={props.afficherleselement2} />
        </div>
    )
}

export default SearchApp