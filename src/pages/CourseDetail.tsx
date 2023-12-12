import { message } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CourseDetailBoxItem from "../components/Course/CourseDetailBoxItem";
import LoadingCover from "../components/LoadingCover";
import { httpInterseptedServise } from "../core/http-servise";
import { ICourseDetail } from "../models/CourseModel";

const CourseDetail = () => {
  //states
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ICourseDetail>();

  //hooks
  const { pathname } = useLocation();
  const courseId = pathname.split("/").at(-1);
  // const courseId = pathNameSplited[pathNameSplited.length - 1];

  //function
  const getcourseDetail = async () => {
    setLoading(true);
    await httpInterseptedServise
      .get(`/Course/by-id/${courseId}`)
      .then((res: AxiosResponse<ICourseDetail>) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((error: AxiosError) => {
        setLoading(false);
        message.error(error.message);
      });
  };

  //effect
  useEffect(() => {
    if (courseId) {
      getcourseDetail();
    }
  }, [courseId]);

  //constant
  const BoxDetailItem: { title: string; subTitle: any }[] = [
    {
      title: "زمان آموزش",
      subTitle: `${data?.duration} ساعت`,
    },
    {
      title: "سطح دروه",
      subTitle: `${data?.courseLevel} `,
    },
    {
      title: "تعداد فصل ها",
      subTitle: `${data?.numOfLectures} فصل`,
    },
    {
      title: "تعداد مباحث",
      subTitle: `${data?.numOfChapters} مبحث`,
    },
    {
      title: "تعداد نظرات",
      subTitle: `${data?.numOfReviews} ساعت`,
    },
    {
      title: "میانگین نظرات",
      subTitle: `${data?.averageReviewRating} از 5 `,
    },
  ];

  return (
    <>
      <LoadingCover loading={loading} />
      <div className=" flex flex-col gap-8">
        <div className=" flex flex-col justify-center bg-t-layer-bg-color ">
          <div className="px-36 flex justify-center">
            <img
              src={data?.coverImageUrl}
              alt="courseImg"
              className="pt-16 max-w-sm"
            />
          </div>
          <div className="flex flex-col gap-2 px-6 items-center justify-center py-4 ">
            <span className="relative flex items-center justify-center bg-t-primary-color w-10 h-6  rounded-md text-t-text-color text-sm">
              {data?.courseCategory}
            </span>
            <span className="font-semibold text-t-text-color">
              {data?.title}
            </span>
            <p className="text-t-text-scondary-color text-sm">
              {data?.description}
            </p>
          </div>
        </div>

        <div className=" gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {BoxDetailItem.map((item, index) => (
            <CourseDetailBoxItem data={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
