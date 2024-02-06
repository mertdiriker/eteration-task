import { Button, Card } from "react-bootstrap";

const ProductCard = ({product}) => {
    return (
            <Card className="d-grid my-3 product-card cursor">
                <Card.Img variant="top" src={product.image} className="product-img" alt={product.name} />
                <Card.Body>
                    <Card.Text>
                        {product.price}₺
                    </Card.Text>
                    <Card.Text>
                        {product.name}
                    </Card.Text>
                    <Button className="add-to-cart-btn">Add to Cart</Button>
                </Card.Body>
            </Card>
    );
};
export default ProductCard;