"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import { card } from './constants/constants';
import Navbar from './components/Navbar';
import ImgHeader from './components/ImgHeader';
import Icons from './components/Icons/Icons';
import { setId } from './components/store';
import Link from 'next/link';

export default function Home() {
  const isShopOpen = (id: number) => {
    if (id === 0 || id === 2) {
      return true;
    } else {
      return false;
    }
  };

  const router = useRouter();
  
  const navigateToOtherPage = (id: number) => {
    setId(id);
    localStorage.setItem("id", id.toString());
    router.push("/components/Boutiques");
  };
  
  return (
    <div>
      <ImgHeader />
      <Navbar />
      <div className="container" role="button">
       <div className='row'>
        {Object.values(card.shoplist).map((item: any, id: number) => {
          const isOpen = isShopOpen(id);
          return (
            <div key={id} onClick={() => navigateToOtherPage(id)}
            className='col-sm-3 my-3'>
              <div className='card' style={{width:"18rem"}}>
              <Link href="/components/Boutiques">
                  <img src={item.image} alt={`Produit`} className="card-img-top" /> </Link>
                  <div className='card-body'>
                  <p  className='card-title'>{item.Company}</p>
                  <p style={{ display: "inline", color: isOpen ? "green" : "red" }}>
                    {isOpen ? "Ouvert" : "Fermé"}
                  </p>
                  <p>{item.Address}, {item.PostalCode} {item.town}</p>
                  <Icons />   
                  </div> 
                  </div>         
          </div>
          );
        })}
        </div>  
      </div>
    </div>
  );
}
