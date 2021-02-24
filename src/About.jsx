import React from 'react';


function About() {

  const aboutStyle = {
      margin: "50px auto",
      padding: "16px",
      minHeight: "580px",
      maxWidth: "580px",
      backgroundColor: "#f1f5f8",
      paddingLeft: "30px",
      paddingRight: "30px",
      lineHeight: "1.3"
  }

 return (
    <div style={aboutStyle}> 
      <h1 style={{fontWeight:"300"}}> Учебный проект для демонстрации навыков работы с 💙 React 💙  </h1>
        <li>Добавление задач с помощью нажатия Enter или кнопки</li>
        <li>  Удаление задач</li>
        <li>   Роутинг</li>
        <li>   Помечание важных задач </li>
        <li>  Drag and drop </li>
    </div>
  );
}

export default About;