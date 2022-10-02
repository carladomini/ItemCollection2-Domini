import React, {useState, useEffect} from "react";

import {getFirestore, doc, getDocs} from 'firebase/firestore';

import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

 export const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore ();
        const queryDoc = doc (querydb, 'productos', 'detalleId');
          getDocs (queryDoc)
           .then (res => console.log ({id: res.id, ...res.data ()}));

  },[])

	return <ItemDetail data={data} />;
};


export default ItemDetailContainer;