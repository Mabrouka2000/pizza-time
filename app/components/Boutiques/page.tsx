"use client"
import React from 'react';
import ImgHeader from '@/app/components/ImgHeader'
import App from '@/app/components/Modal/Modal';
import { card } from '../../constants/constants';
import Icons from '../Icons/Icons';
import Boutique from '@/app/Page/Boutique/Boutique';


export default function page() {


  return (
     <Boutique />
//     <div>
//     <div className='img' style={{ position: 'relative' }}> 
//      <ImgHeader/>
//       <div className="containers" style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         color: 'white',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         padding: '10px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}>
//         <div>
//           <p>{`${companyToShow.Company.replace(/\s/g, "")}`}  </p>
//           <p>ouvert de {companyToShow.openingTime1 } à {companyToShow.closingTime1} et de {companyToShow.openingTime2}  à {companyToShow.closingTime2}</p>
//           <p>
//             {" "}
//             {companyToShow.Address},{companyToShow.PostalCode} {companyToShow.town}   
//           </p>
//           <a href=''>Informations utiles</a>
//             <div></div>
//             <Icons/>
        
//         </div>
//         </div>
//         </div>
//         <div>
        
//           <ul >
          
//           {Object.entries(card.categories).map(([key, value]) => (
//   <li key={key}>{value.title}</li>
// ))}
//           {/* {card.categories.map((menuItem:any) => (
//                 <li key={menuItem.id} > {menuItem.title}</li>
//                ))}  */}
//                 <select className="max-w-xs nav-link"> 
//                 {/* {menuItems.map((menuItem:any) => (
//                     <option key={menuItem.id} value={menuItem.title1}> {menuItem.title1}</option>
//                   ))}      */}
//                 </select> 
//           </ul>
//         </div>
//         <div className="text-center">
//         </div>
//         {/* <div className="containers1">
//          {menuItems.map((menuItem:any) => (
//         <div key={menuItem.id}  className="flex my-2">
//           <p className='title'>{menuItem.title}</p>
//           <img src={menuItem.image}  className="image" />
//          <App/>
         
//          </div>
       
//       ))} 
//     </div> */}
//     </div>   
  );
}
