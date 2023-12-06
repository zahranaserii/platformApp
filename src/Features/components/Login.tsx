import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../Redux/Reducers/LoginReducer";
import { RootState } from "../../Redux/store";
import { httpServise } from "../../core/http-servise";
import { IErrorModel, ILoginModel } from "../../models/LoginModel";

const Login = () => {
  //states
  const [loading, setloading] = useState<boolean>(false);

  //hooks
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //constants
  const language = useSelector((state: RootState) => state.language.language);

  //effects
  useEffect(() => {
    form.resetFields();
  }, [language]);

  const handleMobileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "");
    form.setFieldsValue({ mobile: newValue });
  };

  const handleSubmit = async (values: Record<string, any>) => {
    setloading(true);
    await httpServise
      .post("Users/login", values)
      .then((respons: AxiosResponse<ILoginModel>) => {
        return (
          dispatch(setToken(respons.data.token)),
          setloading(false),
          message.success(t("login.successfully")),
          navigate("/")
        );
      })
      .catch((error: AxiosError<IErrorModel>) => {
        setloading(false);
        if (error.response && error.response?.status === 400) {
          message.error(t("login.validation.IncorrectUserNameOrPassword"));
        }
      });
  };
  return (
    <>
      <h2 className=" w-fit text-t-primary-color font-medium text-xl pb-2">
        {t("login.title")}
      </h2>
      <h5 className="text-t-text-color text-[12px] font-medium">
        {t("login.introMessage")}
      </h5>
      <p className="text-[12px] font-medium mb-3">
        <span className="text-t-text-color">{t("login.areNotRegistered")}</span>{" "}
        <Link
          to="/register"
          className="cursor-pointer text-t-primary-color text-[12px]"
        >
          {t("login.register")}
        </Link>
      </p>

      <div className="flex w-96 bg-t-layer-bg-color py-6 px-7 rounded-md">
        <Form
          onFinish={handleSubmit}
          className="w-full"
          form={form}
          initialValues={{ mobile: "", password: "" }}
        >
          <Form.Item
            name="mobile"
            label={t("login.mobile")}
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
            label={t("login.password")}
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
          <div className="flex justify-center pr-7">
            <Button
              disabled={loading}
              htmlType="submit"
              type="primary"
              className="border border-t-primary-color text-t-primary-color w-full"
            >
              {loading ? t("login.signingin") : t("login.signin")}
              {/* {t("login.signingin")} */}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
