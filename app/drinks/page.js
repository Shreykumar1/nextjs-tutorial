import Link from 'next/link';
import React from 'react'
import Image from "next/image";


const DrinksPage = async () => {
  // await new Promise((resolve)=> setTimeout(resolve,1000))
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
const response = await fetch(url);
if(!response.ok){
  throw new Error('Failed to fetch drinks')
}
const {drinks} = await response.json();
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className='text-xl font-medium'
          >
            <div className='relative h-48 mb-4'>
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                alt={drink.strDrink}
                className='rounded-md object-cover'
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DrinksPage