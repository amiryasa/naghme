import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import { GeneralContext } from "../../providers/GeneralContext"
import * as fa from "../../constants/persianStrings"

import "./index.css";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import AvatarCostomize from "../common/avatar";
import { getItem } from "../../api/storage/storage";

const Header = () => {
  const navigator = useNavigate();
  const idUser = JSON.parse(getItem('id'))
  const { language, setLanguage, themePage, shoppCourse, setThemePage, dataUser } = useContext(GeneralContext);


  let isHidden = true;

  const hamberMenuOnclickHandler = () => {
    const myElement = document.getElementById("navbarHamAction");

    if (isHidden) {
      myElement.style.opacity = 1;
      myElement.style.height = "154px";
      isHidden = false;
    } else {
      myElement.style.opacity = 0;
      myElement.style.height = 0;
      isHidden = true;
    }

  };

  const changeLanguage = (lng) => {
    if (lng === 'fa')
      setLanguage('en')
    else
      setLanguage('fa')
  }


  // headerItems[4].style.cursor = "pointer";
  // headerItems[4].style.color = "#808080";
  // headerItems[4].style.textDecoration = "none";

  // headerItems[index].style.cursor = "default";
  // headerItems[index].style.color = "#043d72";
  // headerItems[index].style.textDecoration = "underline";



  return (
    <div
      className={language === 'fa' ? "header1" : "header1En"}
      style={{
        display: `${window.location.pathname === "/" ? "block" : "flex"}`,
      }}
    >
      <div className="headerRow headerLogo"></div>

      <div className="headerRow headerNavbar" id="navbarHamAction">
        <p
          className={`headerRowItems ${themePage}`}

          onClick={() => {
            navigator("/");
          }}
        >
          {language === 'fa' ? fa.HEADER_HOME : fa.HEADER_HOME_EN}
        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/courses");
          }}
        >
          {language === 'fa' ? fa.HEADER_COURSE : fa.HEADER_COURSE_EN}

        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/news");
          }}
        >
          {language === 'fa' ? fa.HEADER_NEWS : fa.HEADER_NEWS_EN}
        </p>
        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/");
          }}
        >
          {language === 'fa' ? fa.HEADER_SERVICES : fa.HEADER_SERVICES_EN}

        </p>
        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/");
          }}
        >
          {language === 'fa' ? fa.HEADER_CONTACT : fa.HEADER_CONTACT_EN}

        </p>
      </div>
      <div className="lng headerRow">
        <p onClick={() => { changeLanguage(language) }}>
          {language}
        </p>
      </div>

      <div className="mode headerRow">
        <FormControlLabel
          control={<ThemeButton sx={{ m: 1 }}
            checked={themePage === 'light' ? true : false}
            onChange={
              (theme) => {
                if (theme.target.checked === true) setThemePage('light')
                else setThemePage("dark")
              }} />}
        />
      </div>
      <div
        className="headerHamberMenu"
        onClick={hamberMenuOnclickHandler}
      >

      </div>
      <div className="headerRow headerLogin">
        <div
          className="loginSearch"
          onClick={() => navigator("/shoppingCart")}
        >
          {shoppCourse.length > 0 && <p className="numberOfShopp">{shoppCourse && shoppCourse.length}</p>}
        </div>

        {idUser && dataUser ?
          <AvatarCostomize
            src={dataUser.profile}
            className="avatarHeader"
            onClick={() => {
              navigator("./studentPanel")
            }} /> :
          <div className="loginUser" onClick={() => navigator("./login")}>

          </div>}
      </div>
    </div>
  );
};

export { Header };
