import { Button, Divider, Form, Input, Modal, message } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpInterseptedServise } from "../../core/http-servise";
import { ICourseCategoryRowObj } from "../../models/CourseModel";

interface Iprops {
  open: ICourseCategoryRowObj | undefined;
  close: () => void;
  refetch: () => void;
}

const CourseCategoryEditModal: FC<Iprops> = ({ open, close, refetch }) => {
  //states
  const [loading, setLoading] = useState<boolean>(false);
  //hooks
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const editCourseCategory = async (values: Record<string, any>) => {
    const payload = { name: values?.name, id: open?.id };
    setLoading(true);
    await httpInterseptedServise
      .post("/CourseCategory", payload)
      .then((res: AxiosResponse<ICourseCategoryRowObj>) => {
        setLoading(false);
        form.setFieldsValue(res.data);
        close();
        navigate("/CourseCategory");
        refetch();
        message.success("عملیات با موفقیت انجام شد");
      })
      .catch((error: AxiosError) => {
        setLoading(false);
        message.error(error.message);
      });
  };

  return (
    <Modal className="" open={!!open} onCancel={close} footer={false}>
      <span className="text-t-primary-color font-semibold">
        تغییر نام دوره {open?.name}
      </span>

      <Divider className="relative -top-3" />

      <Form
        form={form}
        onFinish={editCourseCategory}
        className=" relative -top-2 pb-5 px-10 rounded-md"
      >
        <Form.Item label="نام" name="name">
          <Input placeholder="نام دوره را وارد کنید" />
        </Form.Item>
        <div className="flex justify-end gap-2">
          <Button onClick={() => close()}>لغو</Button>
          <Button
            className="bg-t-primary-color text-t-text-color"
            htmlType="submit"
          >
            ویرایش
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CourseCategoryEditModal;
