import React, { useEffect, useRef, useState } from 'react';
import './Request.css';
import axios from 'axios';

const Request = () => {
    let titleRef, detailsRef = useRef();

    const [selectedOption, setSelectedOption] = useState('Trending');
    const [feedback, setFeedback] = useState([]);

    const handleRequest = () => {
        const title = titleRef.value;
        const details = detailsRef.value;
        axios.post("http://localhost:5000/api/v1/create", {
            title: title,
            details: details
        }).then(res => {
            console.log(res.data);
            window.location.reload();
        }).catch(err => {
            console.log(err.messages);
        });
    };

    const handleLikeClick = (feedbackId) => {
        axios.post(`http://localhost:5000/api/v1/like/${feedbackId}`, {
            like: 1
        })
            .then(res => {
                console.log('Response:', res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log('Error:', err.message);
            });
    };

    useEffect(() => {
        // Fetch feedback based on the selected option
        const fetchData = async () => {
            const url = selectedOption === 'Trending'
                ? "http://localhost:5000/api/v1/getallfeedback?sort=trending"
                : "http://localhost:5000/api/v1/getallfeedback?sort=now";

            try {
                const res = await axios.get(url);
                setFeedback(res.data.feedback);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [selectedOption]);




    return (
        <div className="container-fluid ">

            {/* <h1 className='headLine'>Feedback Request</h1> */}

            <li className="nav-item dropdown headLine bg-dark">
                <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Treanding FeedBack
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => setSelectedOption('Trending')}
                        >
                            Trending
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => setSelectedOption('Now')}
                        >
                            New
                        </a>
                    </li>
                </ul>
            </li>


            <div className="row mainContainer">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature Requests</h5>
                            <p className="card-text">Let us know what features you'd like to see on Kitsu!</p>

                            <form>
                                <div className="form-floating title">
                                    <input className="form-control" type="text" name="title" ref={(input) => titleRef = input} />
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Title</label>
                                </div>
                                <div className="form-floating ">
                                    <textarea className="form-control" name="details" cols="5" rows="5" ref={(input) => detailsRef = input}></textarea>
                                    <label className='upperCaseHeader' htmlFor="floatingTextarea">Details</label>
                                </div>
                                <div className='d-grid  mx-auto m'>
                                    <button className="btn btn-primary reqFeature" type="button" onClick={handleRequest}>Request Feature</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    {feedback.map((feedbackItem, index) => (
                        <div key={index} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{feedbackItem.title}</h5>
                                <p className="card-text">{feedbackItem.details}</p>

                                <div className='likeBtn'>
                                    <div className='likeCount'>
                                        <i className={`fa${feedbackItem.isLiked ? '-solid' : '-regular'} fa-heart`} onClick={() => handleLikeClick(feedbackItem._id)}></i>
                                        <span>{(feedbackItem.like)}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Request;
