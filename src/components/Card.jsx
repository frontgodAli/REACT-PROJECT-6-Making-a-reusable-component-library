import { IoCloudUploadOutline } from "react-icons/io5";


export default function Card({
    icon=<IoCloudUploadOutline />,
    title="Easy Deployment",
    text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    iconColor
}
    ){

    
    return(
        <div className="card">
            <div style={{backgroundColor:iconColor}} className="icon-container">{icon}</div>
            {title && <h3>{title}</h3>}
            {text && <p>{text}</p>}
        </div>)

    
}