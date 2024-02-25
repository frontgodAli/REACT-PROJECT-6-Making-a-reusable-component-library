import picture from "../assets/picture.jpg"
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial({img=picture,text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",author="Unknown author",location="Unknown location"}){



    return(
    <div className="testimonial">
        <img src={img} alt="women smiling" width={160} />
        <div className="testimonial-children">
            <ImQuotesLeft />
            <p>{text}</p>
            <div className="testimonial-author">
                <p>{author}</p>
                <p>{location}</p>
            </div>
        </div>
    </div>)
}