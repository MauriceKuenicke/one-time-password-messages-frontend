import { Link } from "react-router-dom"

const ReturnLink = () => {
    return (
        <div className="bottom-screen-buttons">
            <Link className="btnLink" to="/">Go back</Link>
        </div>
    )
}

ReturnLink.defaultProps = {
    btnText: "Default-Button-Text",
    color: "steelblue"
}



export default ReturnLink