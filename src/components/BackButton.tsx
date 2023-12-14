import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  //hooks
  const navigate = useNavigate();
  //function
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="pb-2">
      <Button
        className="w-10 text-lg relative flex justify-center items-center bg-t-primary-color text-t-text-color"
        onClick={goBack}
      >
        <ArrowRightOutlined />
      </Button>
    </div>
  );
};

export default BackButton;
