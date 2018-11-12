import React, { Component } from 'react';
// import Header from './Header'

import { Button } from 'reactstrap';
import logo from "./images/logo-setting.png";
import Headercenter from "./components/Headercenter";
import Formlabel from "./components/Formlabel";
import Formbutton from "./components/Formbutton"

class App extends Component {
  render() {


    // header
    const headerSetting = 'ตั้งค่าบอทน้อย'
    const botnoiInYou = 'บอทน้อยในเเบบของคุณ'
    // header
    // Formlabel //
    const labelBotnoiName = 'บอทน้อย "แทนตัวเอง" ว่าอะไรดีครับ'
    const placeholderBotnoiName = 'ที่รัก ฮันนี่ เจ้านาย etc.'
    // Formlabel //
    // Formlabel //
    const labelBotnoiLastname = 'อยากให้บอทน้อย"พูดลงท้าย"ว่าอะไร'
    const placeholderBotnoiLastname = 'ครับ ค่ะ ฮ่ะ'
    // Formlabel //
    // Formlabel //
    const labelNicknameYou = 'ชื่อเล่นของคุณ'
    const placeholderNicknameYou = 'กิ้บ กบ (ไม่ใช่ชื่อบอทน้อยนะ)'
    // Formlabel //
    // Formlabel //
    const labelBirthdayYou = '"วันเกิด"ของคุณ'
    const placeholderBirthdayYou = '"บอทน้อยจะไปแฮปปี้เบิร์ดเดย์"'
    // Formlabel //
    // Formbutton //
    const labelSex = 'เพศของคุณ'
    const buttonSexMen = 'ชาย'
    const buttonSexGirl = 'หญิง'
    // Formbutton //
    // Formlabel //
    const labelHobbieInterest = 'งานอดิเรกเเละความสนใจ'
    const placeholderHobbieInterest = '"เล่นฟุตบอล ดูหนัง ฟังเพลง"'
    // Formlabel //
    return (
      //   <h1>hello world {2*4}{sample}</h1>
      <div className="container">
        <img src={logo} className="image__botnoi" alt="image__botnoi"></img>
        <div className="container__form font__st ring shadow__form color__input__box shadow__input__box font__placeholder">
          <Headercenter header={headerSetting} detail={botnoiInYou}/>
          <Formlabel label={labelBotnoiName} placeholder={placeholderBotnoiName} />
          <Formlabel label={labelBotnoiLastname} placeholder={placeholderBotnoiLastname} />
          <Formlabel label={labelNicknameYou} placeholder={placeholderNicknameYou} />
          <Formlabel label={labelBirthdayYou} placeholder={placeholderBirthdayYou} />
          <Formbutton label={labelSex} buttonFormMen={buttonSexMen} buttonFormGirl={buttonSexGirl} />
          <Formlabel label={labelHobbieInterest} placeholder={placeholderHobbieInterest} />
          <Button className="btn__footer">เรียบร้อย</Button>
        </div>
      </div>
    );
  }
}

export default App;
