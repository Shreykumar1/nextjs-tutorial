import Link from 'next/link';
import React from 'react'

const DrinksPage = async () => {
  // await new Promise((resolve)=> setTimeout(resolve,1000))
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
const response = await fetch(url);
if(!response.ok){
  throw new Error('Failed to fetch drinks')
}
const {drinks} = await response.json();
  return (
    <div>
      <div className='flex max-w-6xl flex-wrap'>
        {drinks.map((drink)=>{
          const {idDrink} = drink
          return <Link key={idDrink} href={`/drinks/${idDrink}`} className='w-1/2 h-36 btn'>
            <p>{drink.strDrink}</p></Link>
        })}
      </div>
    </div>
  )
}

export default DrinksPage