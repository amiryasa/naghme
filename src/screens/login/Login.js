import { useNavigate } from 'react-router-dom';

import { Checkbox } from "@mui/material";

import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";

import "./Login.css";

const Login = () => {

  const navigator = useNavigate();

  const checkboxChangeHandler = () => {};

  return (
    <div className="loginHolder">
      <div className="loginInputHolder">
        <p> ورود کاربر </p>
        <div className="loginInputHolderReall">
          <Input title="ایمیل کاربر" className="enterInputBig" />
          <Input title="رمز عبور" className="enterInputBig" />
        </div>
        <p className="loginInputHolderForP" onClick={() => navigator('/forgotPass')}> رمز عبورم را فراموش کرده‌ام! </p>

        <div className="loginInputHolderRemainder">
          <Checkbox
            size="small"
            style={{ color: "#043D72" }}
            onChange={checkboxChangeHandler}
          />
          <p className="loginInputHolderRemainderP1"> مرا به خاطر بسپار! </p>
          <p className="loginInputHolderRemainderP2">
            ( برای سیستم‌های اشتراکی توصیه نمی‌شود.)
          </p>
        </div>

        <div className="loginButtonHolderReall">
          <Btn
            color="goal"
            text="ورود"
            elementClass="mediumBtnCh2"
            variant="contained"
          />
          <Btn
            color="info"
            text="ثبت نام"
            elementClass="mediumBtnCh2"
            variant="outlined"
            borderColor="#00ADEF"
            click="/register"
          />
        </div>
      </div>
      <div className="loginImageHolder"></div>
    </div>
  );
};

export { Login };
