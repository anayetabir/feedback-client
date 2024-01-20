import React from 'react';
import './Request.css';


const Request = () => {
    return (
        <div className="container-fluid ">
            <h1 className='headLine'>Feedback Request</h1>

            <div className="row mainContainer">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature Requests</h5>
                            <p className="card-text">Let us know what features you'd like to see on Kitsu!</p>


                            <form >

                                <div className="form-floating title">
                                    <input className="form-control" type="text" name="title" />
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Title</label>

                                </div>
                                <div className="form-floating ">
                                    <textarea className="form-control" name="details" cols="5" rows="5"></textarea>
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Details</label>
                                </div>
                                <div className='d-grid  mx-auto m'>
                                    <button className="btn btn-primary  reqFeature " type="button">Request Feature</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>





                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Request;