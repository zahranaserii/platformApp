import { ClockCircleOutlined, CommentOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ICourseList } from "../../models/CourseModel";

interface Iprops {
  data?: ICourseList;
}
const Course: FC<Iprops> = ({ data }) => {
  //state
  const [showMore, setshowMore] = useState<boolean>(true);
  return (
    <div className="w-full pb-2 bg-t-layer-bg-color rounded-md overflow-hidden">
      <img className="w-full" src={data?.coverImageUrl} alt="courseImg" />
      <div className="relative right-1 -bottom-1 flex justify-center items-center rounded-md bg-t-primary-color text-xs font-semibold text-t-text-color w-14 h-5 ">
        <p>{data?.courseLevel}</p>
      </div>
      <div className="flex flex-col gap-2 items-center py-2 px-3">
        <Link
          to={`/courses/${data?.id}`}
          className="text-sm text-t-text-color border-b-2 font-semibold"
        >
          {data?.title}
        </Link>
        <span>{data?.courseCategory}</span>
        <div className="flex items-end  text-xs text-t-text-color">
          <span className={`${showMore ? "line-clamp-2" : "line-clamp-none"}`}>
            {data?.description}{" "}
          </span>
          <span onClick={() => setshowMore(!showMore)}>
            {showMore ? "بیشتر" : "کمتر"}
          </span>
        </div>
        <span className="text-sm text-t-text-color">
          {data?.basePrice.toLocaleString("fa-IR")} تومان
        </span>
      </div>
      <div className="flex justify-between px-3 text-xs text-t-text-color">
        <div className="flex gap-2">
          <ClockCircleOutlined />
          <span>{data?.duration.toLocaleString("Fa-IR")} ساعت</span>
        </div>
        <div className="flex gap-2">
          <CommentOutlined />
          <span>{data?.numOfReviews.toLocaleString("Fa-IR")} نظر</span>
        </div>
      </div>
    </div>
  );
};

export default Course;
