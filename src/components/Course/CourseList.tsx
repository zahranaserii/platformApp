import { FC } from "react";
import { ICourseList } from "../../models/CourseModel";
import Course from "./Course";

interface Iprops {
  data?: ICourseList[];
}

const CourseList: FC<Iprops> = ({ data }) => {
  return (
    <div className=" grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((CourseItem: ICourseList) => (
        <Course key={CourseItem.id} data={CourseItem} />
      ))}
    </div>
  );
};

export default CourseList;
