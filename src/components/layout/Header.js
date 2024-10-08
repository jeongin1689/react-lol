import React from "react";
import { Link } from "react-router-dom";
import SubLogo from "../../assets/img/sub_logo.png";
import AlertIcon from "../../assets/img/alert_icon.png";
import LocaleIcon from "../../assets/img/locale_icon.png";
import { ReactComponent as HeaderLogo } from "../../assets/svg/header-logo.svg";
import { ReactComponent as HeaderSearch } from "../../assets/svg/header-search.svg";

const headerInfo = [
  {info : "게임정보"},
  {info : "새소식"},
  {info : "다운로드"},
  {info : "E스포츠"},
  {info : "이벤트"},
  {info : "알아보기"},
  {info : "더 보기"},
]

function Info({data}){
  return <li className="list_item"><span className="list_tit">{data}</span></li>;
}

function Header(){
  return (
    <header className="header">
      <div className="header_logo">
        <h1 className="logo">
          <Link to="/">
            <HeaderLogo></HeaderLogo>
          </Link>
        </h1>
        <h2 className="sub_logo">
          <img src={SubLogo} alt="서브 로고" />
        </h2>
      </div>
      <nav className="header_menu">
        <ul className="header_list">
          {headerInfo.map((headerText) => (
            <Info data={headerText.info} key={headerText.info} />
          ))}
        </ul>
      </nav>
      <div className="header_etc">
        <ul className="header_etc_list">
          <li className="header_etc_item">
            <span className="header_search"><HeaderSearch></HeaderSearch></span>
          </li>
          <li className="header_etc_item alert_box">
            <img src={AlertIcon} alt="주의사항"/>
          </li>
          <li className="header_etc_item locale_box">
            <img src={LocaleIcon} alt="위치"/>
          </li>
          <li className="header_etc_item login_box">
            <Link to="/">로그인</Link>
          </li>
          <li className="header_etc_item join_box">
            <Link to="/">회원가입</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;