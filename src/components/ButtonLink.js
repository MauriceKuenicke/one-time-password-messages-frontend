import { Link } from "react-router-dom"

const ButtonLink = () => {
    return (
        <div className="middle-screen-buttons">
            <Link className="btnLink" to="/create">I want to create a message.</Link>
            <Link className="btnLink" to="/receive">I have received a message.</Link>
        </div>
    )
}

ButtonLink.defaultProps = {
    btnText: "Default-Button-Text",
    color: "steelblue"
}



export default ButtonLink