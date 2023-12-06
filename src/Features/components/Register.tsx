import { Button, Form, Input, message } from "antd";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { AxiosError, AxiosResponse } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../Redux/store";
import { httpServise } from "../../core/http-servise";
import { IErrorModel } from "../../models/LoginModel";
import { IRegisterModel } from "../../models/RegisterModel";

const Register: FC = () => {
  //states
  const [loading, setLoading] = useState<boolean>(false);

  //hooks
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  //constants
  const language = useSelector((state: RootState) => state.language.language);

  //functions

  const handleMobileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "");
    form.setFieldsValue({ mobile: newValue });
  };

  const handleSubmit = async (values: Record<string, any>) => {
    const { confirmPassword, ...restValues } = values;
    setLoading(true);
    await httpServise
      .post("/Users", restValues)
      .then((res: AxiosResponse<IRegisterModel>) => {
        setLoading(false);
        if (res.status === 200) {
          return (
            message.success(t("register.successOperation")),
            setTimeout(() => {
              navigate("/login");
            }, 2000)
          );
        }
      })
      .catch((error: AxiosError<IErrorModel>) => {
        if (error.response && error.response?.status === 400) {
          setLoading(false);
          return message.error(t("register.validation.DuplicateUserName"));
        }
      });
  };
  //Effects

  useEffect(() => {
    form.resetFields();
  }, [language]);
  return (
    <>
      <h2 className=" w-fit text-t-primary-color font-medium text-xl pb-2">
        {t("register.title")}
      </h2>
      <h5 className="text-t-text-color text-[12px] font-medium">
        {t("register.introMessage")}
      </h5>
      <p className="text-[12px] font-medium mb-3">
        <Link
          to="/login"
          className="cursor-pointer text-t-primary-color text-[12px]"
        >
          <span className="text-t-text-color">
            {t("register.alreadyRegistered")}
          </span>{" "}
          {t("register.signin")}
        </Link>
      </p>
      <div className="flex w-96 bg-t-layer-bg-color py-4 px-7 rounded-md">
        <Form
          form={form}
          onFinish={handleSubmit}
          className="w-full pt-4 "
          initialValues={{ mobile: "", password: "", confirmPassword: "" }}
        >
          <Form.Item
            name="mobile"
            label={t("register.mobile")}
            rules={[
              {
                required: true,
                message: t("register.validation.mobileRequired"),
              },
              { min: 11, message: t("register.validation.mobileLength") },
              { max: 11, message: t("register.validation.mobileLength") },
              {
                pattern: /^\d+$/,
                message: t("register.validation.mobileisNumber"),
              },
            ]}
          >
            <Input onChange={handleMobileInputChange} />
          </Form.Item>
          <Form.Item
            label={t("register.password")}
            name="password"
            rules={[
              {
                required: true,
                message: t("register.validation.passwordRequired"),
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/,
                message: t("register.validation.PasswordTooShort"),
              },
            ]}
          >
            <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            label={t("register.repeatPassword")}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: t("register.validation.repeatPasswordRequired"),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(t("register.validation.notMatching"))
                  );
                },
              }),
            ]}
          >
            <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <div className="flex justify-center">
            <Button
              loading={loading}
              disabled={loading}
              htmlType="submit"
              type="primary"
              className="border border-t-primary-color text-t-primary-color w-full"
            >
              {!loading ? t("register.register") : t("register.saving")}
            </Button>
          </div>
          {/* {isSuccess}
          {isError} */}
        </Form>
      </div>
    </>
  );
};

export default Register;
