import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div>Courses</div>;
      <Link className="font-semibold text-blue-800" to="/home">
        homePage
      </Link>
    </>
  );
};

export default Courses;
