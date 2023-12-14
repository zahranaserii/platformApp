import { Spin } from "antd";
import { FC } from "react";

interface Iprops {
  loading: boolean;
}
const LoadingCover: FC<Iprops> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 z-50 flex  items-center justify-center w-full h-full overflow-hidden border shadow-md backdrop-filter backdrop-blur-sm ">
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default LoadingCover;
