import { useNavigate } from "react-router-dom";
import WrapperCollection from "../WrapperCollection/WrapperCollection";

export default function Collection() {
  const navigate = useNavigate();

  return (
    <div className="gallery">
      <div className="image-card" onClick={() => navigate("/Classic")}>
        <WrapperCollection 
          src={"./src/assets/Home1.jpg"} 
          title={"Classic Design"} 
          p1={"DESCOVER NEW WAYS"} 
          p2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"} 
        />
      </div>
      <div className="image-card" onClick={() => navigate("/Modern")}>
        <WrapperCollection 
          src={"./src/assets/Home1.jpg"} 
          title={"Modern Design"} 
          p1={"DESCOVER NEW WAYS"} 
          p2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"} 
        />
      </div>
    </div>
  );
}
