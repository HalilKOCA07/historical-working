import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import cardContainerStyle from "./cardContainer.module.scss"

const CardContainer = () => {
    return(
        <div className={cardContainerStyle.container}>
            <Form.Control className={cardContainerStyle.inputSearch} size="lg" type="text" placeholder="Searching" />
        </div>
    )
}

export default CardContainer