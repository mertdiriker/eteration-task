import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../slicers/cartSlice";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const handleAddToCart = async () => {
        dispatch(addToCart(product));
    }
    return (
            <Card className="d-grid my-3 product-card cursor">
                <Card.Img variant="top" src={product.image} className="product-img" alt={product.name} />
                <Card.Body>
                    <Card.Text >
                        <p className="price-text">
                        {product.price}₺
                        </p>
                    </Card.Text>
                    <Card.Text>
                        {product.name}
                    </Card.Text>
                    <Button onClick={()=>{handleAddToCart()}} className="add-to-cart-btn">Add to Cart</Button>
                </Card.Body>
            </Card>
    );
};
export default ProductCard;