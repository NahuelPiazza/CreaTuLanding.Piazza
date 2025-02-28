import {useEffect, useState } from "react";
import "./ItemList.css"
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import {filterProductsBycategory, getItems } from "../firebase/firebase";

import ReactLoading from "react-loading"


export default function ItemListCont () {
  
    const [myProds,setMyProds] = useState ([])
    const [loading,setLoading] = useState (true)
    const {catId} = useParams()
    



    useEffect(() => {
      if (!catId) {
        getItems()
        .then((items) => setMyProds(items));
        setLoading(false);
        
      } else {
          filterProductsBycategory(catId).then((response)=> {
            setMyProds(response);
            setLoading(false);
          });
      }
      
      }, [catId]);
    
      return (
        <>
          { loading ? (
            
            <div style={{
                display: "flex", 
                flexDirection:"column", 
                justifyContent:"center", 
                alignItems:"center",
                }}>

            <ReactLoading 
            type="cubes" 
            color="#79C99E" 
            width="100px" 
            height="50px" 
            />

            </div>
        )   
        : (
            <section >
              <div style={{
                            display:"grid",
                            justifyContent:"center",
                            alignItems:"center",
                            justifyItems:"center",
                            gridTemplateColumns:"1fr 1fr",
                            gridTemplateRows:"1fr 1fr 1fr 1fr 1fr",
                            gap:"2rem",
                            
                            }}>
              {
                myProds.map((prod) => <ItemCard key={prod.id} prod={prod} />)}
            </div>
            </section>
        )}
      </>
      );
    }





















    
    // useEffect(() => {
    //     if (!catId) {
    //         getProducts().then((response) => {
    //             setSingleItems(response);
    //             setLoading(false);
    //         });
    //     } else {
    //         getProducts().then((Items) => setMyProds(Items));
    //         setLoading(false);
    //         ;
    //     }
    // }, []);
    
    // return (
    //     <>
                


    //             { loading ? (
    //                 <div style={{
    //                     display: "flex", 
    //                     flexDirection:"column", 
    //                     justifyContent:"center", 
    //                     alignItems:"center",
    //                     }}>
    //                 <ReactLoading 
    //                 type="cubes" 
    //                 color="white" 
    //                 width="100px" 
    //                 height="50px" 
    //                 />
    //                 </div>
    //             )   
    //             :
    //                 (

    //                     <section style={{ display: 'flex' }}>
    //                         {singleProd && (
    //                             <p>
    //                             Producto: {SingleItems.title} - Precio $ {SingleItems.price}
    //                             </p>
    //                         )}
    //                         {myProds &&
    //                             myProds.map((item) => <ItemCard key={prod.id} prod={item} />)}
    //                         </section>
                    
//                 )}
//         </>
//     );
// }
//ver video clase 5 para guiarse, aca colocamos el mapeo de los productos y vinculamos el filtrado por categoria