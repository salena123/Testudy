/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import '../index.css'
import { Link } from "react-router-dom"
import radio from "../no-check_ring.svg";
import {radioChangeFunction} from '../script.js'
import { BrowserRouter as Routes, Route } from "react-router-dom";

export const Questions = (props) => {
    return (
        
        <>
            <Routes>
                <Route path={props.path} element={<><header className="solve-header">
                    <div className="left">
                        {/* <img src="/img/Expand_left.svg" alt="error" /> */}
                        <p className="question-number">{props.questionNumber}</p>
                    </div>
                    <div className="right">
                        <div className="timer">
                            <div className="timer__items">
                                <div className="timer__item timer__minutes hidden">00</div>
                                <div className="timer__item timer__seconds hidden">59</div>
                            </div>
                            <div className="timer__result"></div>
                        </div>
                        <p className="points">{props.points} балла</p>
                        <Link to={props.link}><input type="button" className="next" value={props.next} onClick={props.getReset}/></Link>
                    </div>
                    </header>
                    <div className="question-container">
                        <p className="question">{props.question}</p>
                        <form name="answers" className="answers">
                            <div className="answer">
                                <label>
                                    <input type="radio" className="radio-button" id="ans1" name="ans"
                                    value={props.valueA}
                                    onChange={radioChangeFunction}
                                    onClick={(evt) => props.getAnswer(evt)} />
                                    <span className="custom-radio"><img src={radio} alt="error"/></span>
                                    {props.optionA}
                            </label>
                            </div>

                            <div className="answer">
                                <label>
                                    <input type="radio" className="radio-button" id="ans2" name="ans"
                                    value={props.valueB}
                                    onChange={radioChangeFunction}
                                    onClick={(evt) => props.getAnswer(evt)} />
                                    <span className="custom-radio"><img src={radio} alt="error" /></span>
                                    {props.optionB}
                                </label>
                                </div>
                            <div className="answer">
                                <label>
                                    <input type="radio" className="radio-button" id="ans3" name="ans"
                                    value={props.valueC}
                                    onChange={radioChangeFunction}
                                    onClick={(evt) => props.getAnswer(evt)} />
                                    <span className="custom-radio"><img src={radio} alt="error" /></span>
                                    {props.optionC}
                                </label>
                            </div>
                            <div className="answer">
                                <label>
                                    <input type="radio" className="radio-button" id="ans4" name="ans"
                                    value={props.valueD}
                                    onChange={radioChangeFunction}
                                    onClick={(evt) => props.getAnswer(evt)} />
                                    <span className="custom-radio"><img src={radio} alt="error" /></span>
                                    {props.optionD}
                                </label>
                            </div>
                        </form>
                    </div> </>} />
            </Routes>
            
                
                   
        </>       
    )
}