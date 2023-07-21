import { IProduct } from "../../interfaces/Product";

type ProductProps = {
    data: IProduct[];
    onAdd: (product: IProduct) => void;
    onEdit: (product: IProduct) => void;
};
const Product = ({ data, onAdd, onEdit }: ProductProps) => {
    return (
        <div>
            {data?.map((item) => {
                return <div key={item.id}>{item?.name}</div>;
            })}

            <button onClick={() => onAdd({ name: "San phẩm A", price: 100 })}>Thêm</button>
            <button onClick={() => onEdit({ name: "San phẩm A update", price: 200, id: 2 })}>
                Sửa
            </button>
        </div>
    );
};

export default Product;
