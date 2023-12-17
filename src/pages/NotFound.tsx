import { Link } from "react-router-dom";
import errorImg from "../assets/3793096.jpg";
const NotFound = () => {
  return (
    <div className="bg-t-bg-color  flex justify-center">
      <div className="flex flex-col absolute bottom-48">
        <h2 className="font-medium text-t-text-color">
          صفحه ای که به دنبال آن بودید پیدا نشد!
        </h2>
        <Link
          className="w-fit text-sm text-t-primary-color font-semibold"
          to="/"
        >
          {" "}
          {"  صفحه اصلی  >"}
        </Link>
      </div>
      <img className="max-w-lg h-1/2" src={errorImg} alt="notFound" />
    </div>
  );
};

export default NotFound;
