import React from 'react';
import './CSSPaymentForm.css';

const PaymentForm = () => {


    return (
        <div className="payment-modal">
            <div className="payment-modal-header">
                <div className="payment-modal-header-title">Add Payment</div>
                <button type="button" className="payment-modal-header-close-btn">&times;</button>
            </div>

            <form className="payment-modal-form">
                <div className="payment-modal-form-fields-container">
                    <div className="payment-modal-form-fields">
                        <div className="form-group">
                            <label>Type:</label>
                            <select>

                            </select>
                        </div>
                        <div className="form-group">
                            <label>Amount:</label>
                            <input type="number" placeholder="Enter amount"/>
                        </div>
                        <div className="form-group">
                            <label>Installments:</label>
                            <select>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Each:</label>
                            <input type="number" placeholder="Each installment"/>
                        </div>
                    </div>
                </div>

                <div className="payment-modal-form-buttons">
                    <button type="button" name="" className="cancel-btn">Cancel</button>
                    <button type="submit" name="" className="save-btn">Save</button>
                </div>
            </form>
        </div>

    );
};

export default PaymentForm;
