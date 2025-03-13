// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJ_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSS_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
//  obtiene la base de datos del firestore y la aloja en la constante db

//obtener un producto
export async function getSingleProduct(id) {
  if (!id || typeof id !== 'string') {
    throw new Error('ID de producto inválido');
  }

  const documentRef = doc(db, 'Items', id);

  try {
    const snapshot = await getDoc(documentRef);
    
    if (!snapshot.exists()) {
      throw new Error('Documento no encontrado en la colección');
    }
    
    return { 
      id: snapshot.id,
      ...snapshot.data() 
    };
    
  } catch (error) {
    console.error(`Error al obtener producto ${id}:`, error);
    throw new Error(`No se pudo obtener el producto: ${error.message}`);
  }
}

//obtener toda una coleccion
export async function getItems() {
  try {
    const querySnapshot = await getDocs(collection(db, "Items"));
    if (querySnapshot.size !== 0) {
      //consultamos si ese querysnapshot(similar a array) es distinto de vacio
      // y mapeo todo el "array"
      const ItemsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
        //tomo id de firestore para linkear los productos y diferenciarlos
      });
      return ItemsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener la coleccion: ', error);
  }
}

//filtros de categoria
export async function filterProductsBycategory(category) {
  try {
    const filteredQuery = query(
      collection(db, 'Items'),
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

// //agregar una nueva orden de pedido
// //order parametro grande con datos del comprador y productos
export async function addOrder(order) {
  const ordersCollection = collection(db, 'Orders');
  try {
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error('Error al agregar el documento nuevo ', error);
  }
}