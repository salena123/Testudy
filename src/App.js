import { React, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Start } from './components/start.js';
import { Questions } from './components/questions.js'
import { Result } from './components/result.js'
import './index.css'
import {store} from './constants.js'


const App = function () {

    let [answer, setAnswer] = useState(0);
    let [flag, setFlag] = useState(0);
    let [result, setResult] = useState(0);

    const getAnswer = function (evt) {
        if (evt.target.value === "yes") {
            if (flag === 0) {
                setAnswer(answer + 1);
                setFlag(flag + 1);
            } else {
                setAnswer(answer);
            }
        } else {
            if (flag !== 0) {
                setAnswer(answer - 1);
                setFlag(flag - 1);
            } else {
                setAnswer(answer);
            }
        }
    };

    const getReset = function () {
        setAnswer(0);
        setFlag(0);
        setResult(result + answer);
    };

    const getResult = function () {
        setAnswer(0);
        setFlag(0);
        setResult(0);
    };

    let questionsArray = store.questions.map((element) =>
        <Questions 
            questionNumber = {element.questionNumber}
            question = {element.question}
            points = {element.points}
            optionA = {element.optionA}
            optionB = {element.optionB}
            optionC = {element.optionC}
            optionD = {element.optionD}
            valueA = {element.valueA}
            valueB = {element.valueB}
            valueC = {element.valueC}
            valueD = {element.valueD}
            path = {element.path}
            link = {element.link}
            next = {element.next}
            getReset = {getReset}
            getAnswer = {getAnswer}
        />
    );

    return (
        <>
            <Routes>
                <Route path="/" element={ <Start /> } />
                <Route path="*" element={ questionsArray } />
                <Route path="result" element={ <Result getResult={getResult} /> } />
            </Routes>
        </>
        
    );
}

export default App
