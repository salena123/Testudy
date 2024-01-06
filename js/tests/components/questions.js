import React from "react"
import '../../../css/test.css'
import { Route } from "react-router"
import { NavLink } from "react-router-dom"

export const Questions = (props) => {
    return (
        <Route exact path={props.path}>
            <header className="solve-header">
                <div className="left">
                    <img src="/img/Expand_left.svg" />
                    <p className="question-number">{props.questionNumber}</p>
                </div>
                <div className="right">
                    <div className="timer">
                        <div className="timer__items">
                            <div className="timer__item timer__minutes">00</div>
                            <div className="timer__item timer__seconds">59</div>
                        </div>
                        <div className="timer__result"></div>
                    </div>
                    <p className="points">{props.points} + балла</p>
                    <NavLink to={props.link}><input type="button" className="next" value={props.next} /></NavLink>
                </div>
            </header>
            <div className="question-container">
                <p className="question">{props.question}</p>
                <form name="answers" className="answers">
                    <div className="answer">
                        <label>
                            <input type="radio" className="radio-button" id="ans1" name="ans" value={props.valueA} />
                            <span className="custom-radio"><img src="/img/no-check_ring.svg" /></span>
                            {props.optionA}
                    </label>
                    </div>

                    <div className="answer">
                        <label>
                            <input type="radio" className="radio-button" id="ans2" name="ans" value={props.valueB} />
                            <span className="custom-radio"><img src="/img/no-check_ring.svg" /></span>
                            {props.optionB}
                        </label>
                    </div>
                    <div className="answer">
                        <label>
                            <input type="radio" className="radio-button" id="ans3" name="ans" value={props.valueC} />
                            <span className="custom-radio"><img src="/img/no-check_ring.svg" /></span>
                            {props.optionC}
                        </label>
                    </div>
                    <div className="answer">
                        <label>
                            <input type="radio" className="radio-button" id="ans4" name="ans" value={props.valueD} />
                            <span className="custom-radio"><img src="/img/no-check_ring.svg" /></span>
                            {props.optionD}
                        </label>
                    </div>
                </form>
            </div>
        </Route>
    )
}