//Component
import InputForm from "../../element/input/InputForm";

//Style
import styles from "./ItemList.module.scss";

const ItemList = ({ form, setForm }) => {

    const { products } = form;


    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: "", price: "", qty: "" }]
        })
        console.log(products)
    };

    const changeHandler = (e, index) => {
        const { name, value } = e.target;

        const newProducts = [...products];
        newProducts[index][name] = value;
        setForm({
            ...form,
            products: [...newProducts]
        })
    };

    const deleteHandler = index => {
        const newProducts = [...products];
        newProducts.splice(index, 1)
        setForm({
            ...form,
            products: [...newProducts]
        })
    }

    return (
        <div className={styles.itemList} >
            <p> Purchased products </p>

            <div className={styles.products_field} >
                {
                    products.map((product, index) => (<ProductInput
                         key={index}
                          product={product} 
                          changeHandler={e => changeHandler(e, index)}
                          deleteHandler={() => deleteHandler(index)}
                           />))
                }

                <button className={styles.buttonAdd} onClick={addHandler} >Add item</button>
            </div>
        </div>
    );
};

const ProductInput = ({ product, changeHandler ,deleteHandler }) => {

    return <div className={styles.inputForms} >
        <InputForm
            name="name"
            label="Product Name"
            type="text"
            value={product.name}
            changeHandler={changeHandler}
        />

        <div className={styles.inputForms_twice} >
            <InputForm
                name="price"
                label="price"
                type="text"
                value={product.price}
                changeHandler={changeHandler}
            />
            <InputForm
                name="qty"
                label="Quantity"
                type="tel"
                value={product.qty}
                changeHandler={changeHandler}
            />
        </div>

        <button className={styles.buttonDelete} onClick={deleteHandler} >Remove</button>
    </div>
}

export default ItemList;