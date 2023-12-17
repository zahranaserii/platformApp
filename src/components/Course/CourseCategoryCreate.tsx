import { Button, Divider, Form, Input, Modal, message } from "antd";
import { AxiosError } from "axios";
import { FC, useState } from "react";
import { httpInterseptedServise } from "../../core/http-servise";
import LoadingCover from "../LoadingCover";

interface ICourseCategoryCreate {
  open: boolean;
  close: () => void;
  refetch: () => void;
}

const CourseCategoryCreate: FC<ICourseCategoryCreate> = ({
  open,
  close,
  refetch,
}) => {
  //hooks
  const [form] = Form.useForm();
  //states
  const [loading, setloading] = useState<boolean>(false);

  //functions
  const createCategory = async (values: Record<string, any>) => {
    setloading(true);
    const payload = { name: values.name, id: 0 };
    await httpInterseptedServise
      .post("/CourseCategory", payload)
      .then(() => {
        setloading(false);
        form.resetFields();
        close();
        message.open({
          type: "success",
          duration: 5,
          content: "عملیات با موفقیت انجام شد",
          style: {
            marginTop: "85vh",
            marginRight: "70vw",
          },
        });

        refetch();
      })
      .catch((error: AxiosError) => {
        setloading(false);
        message.open({
          type: "error",
          duration: 5,
          content: error.message,
          style: {
            marginTop: "85vh",
            marginRight: "70vw",
          }
        });
      });
  };

  return (
    <>
      {loading && <LoadingCover loading={loading} />}
      <Modal open={!!open} onCancel={close} footer={false}>
        <span className="text-t-primary-color text-base font-semibold">
          ایجاد دسته بندی دوره جدید
        </span>
        <div className="px-2">
          <Divider className="relative -top-3" />
        </div>
        <Form
          className="relative -top-3 pl-8 pr-4"
          form={form}
          onFinish={createCategory}
        >
          <Form.Item
            label="نام"
            name="name"
            rules={[{ required: true, message: "وارکردن نام دوره الزامی است" }]}
          >
            <Input placeholder="نام دوره را وارد کنید" />
          </Form.Item>
          <div className="flex justify-end gap-2 pl-3">
            <Button onClick={() => close()}>لغو</Button>
            <Button htmlType="submit">ایجاد</Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default CourseCategoryCreate;
