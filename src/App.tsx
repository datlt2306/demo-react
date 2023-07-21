/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import axios from "axios";
import { IProduct } from "./interfaces/Product";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(function () {
        axios.get(`http://localhost:3000/products`).then(({ data }) => {
            setProducts(data);
        });
    }, []);
    const onHandleAdd = async (product: IProduct) => {
        const { data } = await axios.post(`http://localhost:3000/products`, product);
        // reRender
        setProducts([...products, data]);
    };
    const onHandleEdit = async (product: IProduct) => {
        const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
        // reRender
        setProducts(products.map((item) => (item.id === data.id ? data : item)));
    };
    return (
        // props
        <>
            <Product data={products} onAdd={onHandleAdd} onEdit={onHandleEdit} />
        </>
    );
}

export default App;

// function display({ data, onAdd }: { data: string; onAdd: (product: any) => void }) {
//     console.log(data);
//     onAdd(10);
// }

// const onHandleAdd = (product: any) => {
//     console.log(product);
// };

// display({ data: "Product A", onAdd: onHandleAdd });
