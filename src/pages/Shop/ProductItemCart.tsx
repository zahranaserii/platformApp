import { Button } from "antd";
import { FC, useEffect, useRef, useState } from "react";
import { IProducts } from "../../models/ShopModel";

interface Iprops {
  data: IProducts | undefined;
}

const ProductItemCart: FC<Iprops> = ({ data }) => {
  //states
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const titleRef = useRef<HTMLSpanElement>(null);

  //effects
  useEffect(() => {
    if (titleRef.current) {
      setIsOverflowing(
        titleRef.current.scrollHeight > titleRef.current.clientHeight
      );
    }
  }, [data?.title]);

  return (
    <div className="bg-t-layer-bg-color flex flex-col gap-6 items-center px-8 py-4 rounded-xl overflow-hidden">
      <div className=" relative bg-white flex items-center justify-center rounded-md aspect-w-16 aspect-h-9 w-24 h-40">
        <img
          src={data?.image}
          className="absolute  inset-0 rounded-xl"
          alt=""
        />
      </div>

      <div className="flex gap-2 justify-center cursor-pointer">
        <span
          ref={titleRef}
          className={`${
            showMore ? "" : "line-clamp-1"
          } text-sm text-t-text-color`}
        >
          {data?.title}
        </span>
        {isOverflowing && (
          <span
            className="text-sm text-t-text-secondary-color"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "less" : "more"}
          </span>
        )}
      </div>
      <div className="flex justify-center gap-3 pt-4">
        <Button className="bg-t-primary-color text-t-text-color">+</Button>
        <span>0</span>
        <Button className="bg-t-primary-color text-t-text-color">-</Button>
      </div>
    </div>
  );
};

export default ProductItemCart;
