import React, { useState } from 'react';
import './CSSCreateContactForm.css';

const CreateContactForm = () => {
    const [status, setStatus] = useState('Lead');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (

            <div className="contact-modal" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h3>Create Contact</h3>
                    <button type="button" className="header-close-button">&times;</button>
                </div>

                <div className="contact-modal-body">
                    <div className="form-body">
                    <div className="form-row">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter name" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="surname">Surname:</label>
                        <input type="text" id="surname" placeholder="Enter surname" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" placeholder="Enter phone number" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" placeholder="Enter city" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="course">Course:</label>
                        <select id="course">
                            <option>Select course</option>

                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="source">Source:</label>
                        <select id="source">
                            <option>Select source</option>

                        </select>
                    </div>




                    </div>



                    <div className="status-container">
                        <label className="status-label lead">
                            <input
                                type="radio"
                                value="Lead"
                                checked={status === 'Lead'}
                                onChange={() => setStatus('Lead')}
                            /> Lead
                        </label>
                        <label className="status-label in-work">
                            <input
                                type="radio"
                                value="In work"
                                checked={status === 'In work'}
                                onChange={() => setStatus('In work')}
                            /> In work
                        </label>
                        <label className="status-label consultation">
                            <input
                                type="radio"
                                value="Consultation"
                                checked={status === 'Consultation'}
                                onChange={() => setStatus('Consultation')}
                            /> Consultation
                        </label>
                        <label className="status-label save-for-later">
                            <input
                                type="radio"
                                value="Save for later"
                                checked={status === 'Save for later'}
                                onChange={() => setStatus('Save for later')}
                            /> Save for later
                        </label>
                        <label className="status-label student">
                            <input
                                type="radio"
                                value="Student"
                                checked={status === 'Student'}
                                onChange={() => setStatus('Student')}
                            /> Student
                        </label>
                        <label className="status-label archive">
                            <input
                                type="radio"
                                value="Archive"
                                checked={status === 'Archive'}
                                onChange={() => setStatus('Archive')}
                            /> Archive
                        </label>
                    </div>
                </div>
                <div className="form-row-comment-row">
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" placeholder="Enter comment"></textarea>
                </div>
                <div className="form-footer">
                    <button type="button" className="cancel-btn">Cancel</button>
                    <button type="submit" className="save-btn">Create</button>
                </div>


            </div>

    );
};

export default CreateContactForm;
