import { useState } from 'react'
import './App.css'
// import AlimentPriceApp from './components/Alimenprice'
// import RedAlimentPriceApp from './components/redAlimentprice'
// import Alimenttitle from './components/titleAliment'
import SearchApp from './containers/search'
import ProductTableApp from './components/productTable'


function App() {

  const Products=[
    {
      nom:'Apple',
      categories:'Fruits',
      prix:'2$',
      stock:true
    },
    {
      nom:'passion',
      categories:'Fruits',
      prix:'1$',
      stock:true
    },
    {
      nom:'orange',
      categories:'Fruits',
      prix:'1$',
      stock:false
    },
    {
      nom:'manioc',
      categories:'Vegetable',
      prix:'2$',
      stock:true
    },
    {
      nom:'patate',
      categories:'Vegetable',
      prix:'2$',
      stock:false
    },
    {
      nom:'zom',
      categories:'Vegetable',
      prix:'2$',
      stock:true
    },
    
  ]




  const [afficherleselement,setAfficherleselement]=useState(false)
  const [search,setSearch]=useState("")


  return (

    <div className=' bg-white w-[20rem] translate-x-96 translate-y-32 p-2 rounded-md'>
      <div className='mx-9  py-6'>
        <SearchApp afficherleselement1={afficherleselement} afficherleselement2={setAfficherleselement} search1={search} search2={setSearch}  />
  
        <ProductTableApp products={Products} afficherleselement1={afficherleselement} afficherleselement2={setAfficherleselement} search1={search} search2={setSearch} />
      </div>
        
    </div>
  )
}





export default App
