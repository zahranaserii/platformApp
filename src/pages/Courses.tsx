import { Spin } from "antd";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import CourseList from "../components/Course/CourseList";
import NewCourseButton from "../components/Course/NewCourseButton";
import { httpInterseptedServise } from "../core/http-servise";
import { ICourseList } from "../models/CourseModel";

const Courses = () => {
  //states
  const [courseList, setCourseList] = useState<ICourseList[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  //function
  const getcourseList = async () => {
    setLoading(true);
    await httpInterseptedServise
      .get("/Course/list")
      .then((res: AxiosResponse<ICourseList[]>) => {
        return setCourseList(res.data), setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  //effects
  useEffect(() => {
    getcourseList();
  }, []);
  return (
    <>
      {loading && <Spin />}
      <NewCourseButton />
      <CourseList data={courseList} />
    </>
  );
};

export default Courses;
