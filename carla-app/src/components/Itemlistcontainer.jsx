import React, {useState, useEffect} from "react";

import {getFirestore, collection, getDocs, query,where} from 'firebase/firestore';

import ItemList from "./ItemList/ItemList";

import { useParams } from "react-router-dom";


export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
    const querydb = getFirestore ();
    const queryCollection = collection (querydb, 'productos');
  
	  if (categoriaId) {
      const queryFilter = query (queryCollection, where ('category', '==', categoriaId))
      getDocs (queryFilter)
     .then (res => res.docs.map (producto => ({id: producto.id, ...producto.data ()})));
		} else {
        getDocs (queryCollection)
        .then (res => setData (res.docs.map (producto => ({id: producto.id, ...producto.data ()}))));  
	}
},[categoriaId]);
   
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList data={data}/>
            
        </div>
    )
}

export default ItemListContainer;