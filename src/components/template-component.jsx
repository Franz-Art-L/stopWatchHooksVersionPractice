import React from 'react';
import Navbar from './navbar-component';
import Footer from './footer.component';
import {StopWatch} from './stopwatch-component';

const Template = props => {
    return (
        <React.Fragment>
            <Navbar/>
                <div className="container">
                    <div className="row overflow">
                        <div className="col-12">
                            <StopWatch/>
              
                        </div>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Template;