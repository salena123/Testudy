import React from "react"
import '../../css/test.css'

export const HeaderQuestions = () => {
    return (
        <header className="solve-header">
            <div className="left">
                <img src="/img/Expand_left.svg" />
                <p className="question-number">3 вопрос</p>
            </div>
            <div className="right">
                <div className="timer">
                    <div className="timer__items">
                        <div className="timer__item timer__minutes">00</div>
                        <div className="timer__item timer__seconds">59</div>
                    </div>
                    <div className="timer__result"></div>
                </div>
                <p className="points">2 балла</p>
                <input type="button" className="next" value="Отправить ответ" />
            </div>
        </header>
    )
}