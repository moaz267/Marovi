import React from "react";
import { useNavigate } from "react-router-dom";
import Line from "../../components/Line/Line";
import Footer from '../../components/Footer/Footer';
import Wrap2 from "../../components/Wrap2/Wrap2";
import Butn from "../../components/Butn/Butn";
const data = [
  {
    img: "./src/assets/Home1.jpg",
    path: "/modern",
    text: "Best Seller Bed Rooms",
    color: "#f0a500",
    gridItems: [          <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,          <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />]
  },
  {
    img: "./src/assets/Home2.jpg",
    path: "/classic",
    text: "Exclusive Kids Rooms",
    color: "#0a74da",
    gridItems: [          <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />]
  },
  {
    img: "./src/assets/Home3.jpg",
    path: "/classic",
    text: "Elegant Living Rooms",
    color: "#e94e77",
    gridItems: [          <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />,           <Wrap2
            src={"./src/assets/Home1.jpg"}
            title={"any thing"}
            price={"4000"}
            decription={"any thing its just a test "}
          />]
  }
];

const Pages = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {data.map((item, index) => (
        <div className="pages" key={index}>
          {/* الجزء الأول */}
          <section className="section top-section">
          <div className="half1">
  <Line color={item.color} />
</div>

            <div className="half2">
              <p style={{ color: item.color }}>{item.text}</p>
            </div>
          </section>

          {/* الجزء الثاني */}
          <section className="section bottom-section">
            <div
              className="left"
              onClick={() => handleClick(item.path)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.img} alt={`room-${index}`} />
              <div className="get"><Butn/></div>
            </div>
            <div className="right grid">
              {item.gridItems.map((gridItem, i) => (
                <div className="grid-item" key={i}>{gridItem}</div>
              ))}
            </div>
          </section>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Pages;
