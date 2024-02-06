import { Card, Row,Col } from "react-bootstrap";

const LeftBar = () => {
    return (
        <Row className="d-flex flex-column gap-3">
            <Col>
                <span className="light-span">Sort by</span>
                <Card className="">
                    <div className="sort-div">
                        <input className="cursor" id="oldtonew" name="sort" type="radio"></input><label className="cursor" for="oldtonew">Old to new</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="newtoold" name="sort" type="radio"></input><label className="cursor" for="newtoold">New to old</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="pricetohigh" name="sort" type="radio"></input><label className="cursor" for="pricetohigh">Price high to low</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="pricetolow" name="sort" type="radio"></input><label className="cursor" for="pricetolow">Price low to high</label>
                    </div>
                </Card>
            </Col>
            <Col>
                <span className="light-span">Brands</span>
                <Card className="">
                    <div className="sort-div">
                        <input className="cursor" id="oldtonew" name="sort" type="radio"></input><label className="cursor" for="oldtonew">Old to new</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="newtoold" name="sort" type="radio"></input><label className="cursor" for="newtoold">New to old</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="pricetohigh" name="sort" type="radio"></input><label className="cursor" for="pricetohigh">Price high to low</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="pricetolow" name="sort" type="radio"></input><label className="cursor" for="pricetolow">Price low to high</label>
                    </div>
                </Card>
            </Col>
            <Col>
                <span className="light-span">Model</span>
                <Card className="">
                    <div className="sort-div">
                        <input className="cursor" id="oldtonew" name="sort" type="radio"></input><label className="cursor" for="oldtonew">Old to new</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="newtoold" name="sort" type="radio"></input><label className="cursor" for="newtoold">New to old</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="pricetohigh" name="sort" type="radio"></input><label className="cursor" for="pricetohigh">Price high to low</label>
                    </div>
                    <div className="sort-div">
                        <input className="cursor" id="pricetolow" name="sort" type="radio"></input><label className="cursor" for="pricetolow">Price low to high</label>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default LeftBar;