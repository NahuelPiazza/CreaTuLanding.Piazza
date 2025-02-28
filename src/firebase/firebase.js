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
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtt-9UO87tRUnKtzkh0vIrFAUpLdY4ZnI",
  authDomain: "reactproyect-nahuelpiazza.firebaseapp.com",
  projectId: "reactproyect-nahuelpiazza",
  storageBucket: "reactproyect-nahuelpiazza.firebasestorage.app",
  messagingSenderId: "85617626320",
  appId: "1:85617626320:web:245a83ea21b7926b1e22d5",
  measurementId: "G-Z4NGKBGFWW"
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











// //actualizar un producto
// export async function updateProduct(id, toUpdate) {
//   const itemDocRef = doc(db, 'products', id);
//   try {
//     await updateDoc(itemDocRef, toUpdate);
//     alert('Se actualizo el producto!');
//   } catch (error) {
//     console.log('Hubo un error al actualizar!', error);
//   }
// }

// //actualizar multiples productos
// export async function updateMultiple() {
//   const batch = writeBatch(db); //creando el batch

//   const docRef1 = doc(db, 'products', 'ZjkF4RdijYUaR3gseS30');
//   const docRef2 = doc(db, 'orders', '0Nu9HbjYKc7hmS67nNzd');

//   batch.update(docRef1, { description: 'usb Logitech' });
//   batch.update(docRef2, { total: 1212 });

//   try {
//     await batch.commit(); //ejecuta todas las actualizaciones juntas
//   } catch (error) {
//     console.log(error);
//   }
// }

//investigar como eliminar productos y/o ordenes de pedido.
