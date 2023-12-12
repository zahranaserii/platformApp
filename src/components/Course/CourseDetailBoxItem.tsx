import React, { FC } from "react";

interface IProps {
  data: {
    title: string;
    subTitle: any;
  };
}

const CourseDetailBoxItem: FC<IProps> = ({ data }) => {
  return (
    <div className="bg-t-layer-bg-color rounded-md px-5 py-5 flex gap-1 flex-col justify-between items-center">
      <span className="text-t-primary-color text-sm font-medium">
        {data.title}
      </span>
      <span className="text-sm text-t-text-secondary-color">
        {data.subTitle}
      </span>
    </div>
  );
};

export default CourseDetailBoxItem;