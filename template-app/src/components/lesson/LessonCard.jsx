import { data } from "../../helper/data.js";
import cardStyle from "./LessonCard.module.css";

const LessonCard = () => {
  return (
    <div
      style={{
        backgroundColor: " #0093E9",
        borderRadius: "30px",
        padding: "1rem",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
      className="row"
    >
      {data.map((item, index) => (
        <div key={index} className=" col-12 col-md-6 col-lg-4 g-4">
          <div className="d-flex flex-column flex-md-row justify-content-md-start justify-content-center align-items-center gap-2">
            <img
              style={{
                height: "70px",
                width: "70px",
                background: "transparent",
                boxShadow: "3px 3px 3px rgba(0,0,0,0.2)",
              }}
              src={item.image}
              alt=""
            />
            <div className="d-flex flex-column  align-items-start  ">
              <span>
                Lesson Name :{" "}
                <span className={cardStyle.name}>{item.name}</span>
              </span>
              <span>
                Lesson Hour :{" "}
                <span className={cardStyle.hour}>{item.hour}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
