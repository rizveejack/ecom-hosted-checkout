import className from "classname"

const SingleIcon = ({ icon, title, message }) => {
    return (
        <li>
            <div className="media-icon">
                <i className={className("lni", icon)}></i>
            </div>
            <div className="media-body">
                <h5>{title}</h5>
                <span>{message}</span>
            </div>
        </li>
    )
}

SingleIcon.defaultProps = {
    icon: "lni-reload",
    title: "Easy Return.",
    message: "Hassle Free Shopping."
}

export default SingleIcon
