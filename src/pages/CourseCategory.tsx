import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Pagination, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingCover from "../components/LoadingCover";
import { httpInterseptedServise } from "../core/http-servise";
import { ICourseCategory, ICourseCategoryRowObj } from "../models/CourseModel";

const CourseCategory = () => {
  //state
  const [courseCategory, setCourseCategory] = useState<
    ICourseCategory | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3);

  //hooks
  const navigate = useNavigate();

  //function
  const getCourseCategory = async () => {
    setLoading(true);
    await httpInterseptedServise
      .get(`/CourseCategory/sieve?Page=${page}&PageSize=${pageSize}`)
      .then((res: AxiosResponse<ICourseCategory>) => {
        setLoading(false);
        setCourseCategory(res.data);
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        message.error(err.message);
      });
  };

  const handleChangePagination = (page: number, pageSize?: number) => {
    setPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
    navigate(`/courseCategory?Page=${page}&PageSize=${pageSize}`);
  };

  const convertToPersianNumbers = (input: any) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return input
      .toString()
      .replace(/\d/g, (match: any) => persianNumbers[parseInt(match)]);
  };

  //effect
  useEffect(() => {
    getCourseCategory();
  }, [page, pageSize]);
  //constant
  const columns: ColumnsType<ICourseCategoryRowObj> = [
    {
      title: "نام",
      dataIndex: "name",
      key: "name",
      render: (_text, record) => {
        return <div className="text-t-text-color">{record.name}</div>;
      },
    },
    {
      title: "عملیات",
      dataIndex: "operation",
      key: "operation",
      render: (_text, record) => (
        <div className="flex gap-x-5">
          <div className="cursor-pointer text-base text-t-primary-color">
            <EditOutlined />
          </div>
          <div className="cursor-pointer text-base text-t-primary-color">
            <DeleteOutlined />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      {loading && <LoadingCover loading={loading} />}
      <Table
        pagination={false}
        className="border border-t-layer-bg-color overflow-hidden rounded-lg"
        dataSource={courseCategory?.data}
        columns={columns}
      />
      <div className="flex justify-center pt-3">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={courseCategory?.totalRecords}
          onChange={handleChangePagination}
          onShowSizeChange={handleChangePagination}
          itemRender={(current, type, originalElement) => {
            if (type === "page") {
              return convertToPersianNumbers(current);
            }
            return originalElement;
          }}
        />
      </div>
    </div>
  );
};

export default CourseCategory;
