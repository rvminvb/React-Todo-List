import React from 'react';
import styled from 'styled-components';

function About() {
    const Wrapper = styled.div`
        margin: 50px auto;
        padding: 16px;
        min-height: 580px;
        max-width: 580px;
        background-color: #f1f5f8;
        padding-left: 30px;
        padding-right: 30px;
        line-height: 1.3;
        li {
            list-style-type: none;
            line-height: 1.5;
        }
        h1 {
            font-weight: 300;
        }
    `;

    return (
        <Wrapper>
            <h1> Учебный проект для демонстрации навыков работы с 💙 React 💙 </h1>
            <ul>
                <li>Добавление задач с помощью нажатия Enter или кнопки</li>
                <li> Удаление задач</li>
                <li> Роутинг</li>
                <li> Помечание важных задач </li>
                <li> Drag and drop </li>
            </ul>
            <h1>Спецификации</h1>
            <ul>
                <li> React 17</li>
                <li> TypeScript</li>
                <li> ESLint </li>
                <li>Prettier</li>
                <li>Styled-Components</li>
            </ul>
        </Wrapper>
    );
}

export default About;
