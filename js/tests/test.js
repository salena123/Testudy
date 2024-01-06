import { React, useState } from 'react'
import { HeaderQuestions } from './components/header-question.js'
import { Questions } from './components/questions.js'
import '../css/tests.css'
import store from './constants.js'
import { BrowserRouter } from "react-router-dom"

function Test() {

    let questionsArray = store.questions.map((element) =>
        <Questions
            questionNumber = {element.questionNumber}
            question = {element.question}
            points = {element.points}
            optA = {element.optionA}
            optB = {element.optionB}
            optC = {element.optionC}
            optD = {element.optionD}
            valueA = {element.valueA}
            valueB = {element.valueB}
            valueC = {element.valueC}
            valueD = {element.valueD}
            path = {element.path}
            link = {element.link}
            next = {element.next}
        />
    );

    return (
        <BrowserRouter>
            <HeaderQuestions />
            {questionsArray}
            getResult = {getResult}
        </BrowserRouter>

    );
}


export default Test