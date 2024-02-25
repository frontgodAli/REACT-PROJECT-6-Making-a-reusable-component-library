import { IoIosWarning,IoIosCloseCircle,IoIosInformationCircle,IoIosCheckmarkCircle } from "react-icons/io"

export default function Banner({title,text,status}){

    let svgIcon

    switch(status){
        case 'error':
            svgIcon= <IoIosCloseCircle className={`banner-svg-${status}`} />
            break;
        case 'success': 
            svgIcon= <IoIosCheckmarkCircle className={`banner-svg-${status}`} />
            break;
        case 'neutral':
            svgIcon= <IoIosInformationCircle className={`banner-svg-${status}`} />
            break;
        case 'warning':
            svgIcon= <IoIosWarning className={`banner-svg-${status}`} />
            break;    
        default:
            break;
    }

    return(
    <div className={`banner banner-${status}`}>
        {svgIcon}
        <div className="banner-children">
            <h3 className={`banner-title-${status}`}>{title}</h3>
            {text&&<p className={`banner-${status}`}>{text}</p>}
        </div>    
    </div>)
}