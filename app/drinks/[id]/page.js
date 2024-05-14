import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleDrinkPage = async ({ params }) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`;
  const response = await fetch(url);
  const data = await response.json();
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mb-12 mt-8">
        Back to Drinks
      </Link>
      {/* <img src={data.drinks[0].strDrinkThumb} width={150} height={150} className='w-40 h-40' alt="" /> */}
      <Image
        src={data.drinks[0].strDrinkThumb}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt="drink"
      />
      <h1 className="text-4xl mb-8">{data.drinks[0].strDrink}</h1>
    </div>
  );
};

export default SingleDrinkPage;
