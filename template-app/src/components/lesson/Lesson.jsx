import LessonCard from "./LessonCard";

const Lesson = () => {
  return (
    <div
      style={{ padding:"1rem 2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontFamily:" 'Monoton', sans-serif" ,color:"blue"}}>LESSON  REMINDER</h1>
      <div className="m-auto">
        <LessonCard />
      </div>
    </div>
  );
};

export default Lesson;
