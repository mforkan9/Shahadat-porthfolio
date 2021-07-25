import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import './Counter.scss'

const Counter = () => {
    return (
        <div className="container main" id='achieve'>
            <h5 className='text-center '>Summary</h5>
            <h1 className='text-center title'>This is my work Count</h1>
            <div class="container box-area">
                <div class="row">
                    <div class="col-md-4 col-4">
                        <div class="counter-box "><i class="zmdi zmdi-archive mdc-text-green"></i>
                            <span class="counter">
                                <CountUp start={0} end={100} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />+
                                        </div>
                                    )}
                                </CountUp>
                            </span>
                            <p>Achieve</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-4">
                        <div class="counter-box colored"> <i class="zmdi zmdi-case"></i>
                            <span class="counter">
                                <CountUp start={0} end={150} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />+
                                        </div>
                                    )}
                                </CountUp>
                            </span>
                            <p>Total</p>
                        </div>
                    </div>
                    <div class=" col-md-4 col-4">
                        <div class="counter-box"> <i class="zmdi zmdi-case-check"></i>
                            <span class="counter">
                                <CountUp start={0} end={120} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />+
                                        </div>
                                    )}
                                </CountUp>
                            </span>
                            <p>Solved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;