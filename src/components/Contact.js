import React from 'react';

const Contact = () => {
    return (
        <div id='contact' data-testid="contact" className="contact-container w-4/12 mx-auto bg-gray-100 p-3 rounded-md mt-10">
            <div className="contact-form">
                <h2 className='text-center text-lg text-gray-700 font-semibold'>Contact Us</h2>
                <form className='mt-10 block'>
                    <div className="form-group my-5">
                        <label className='text-gray-700 text-md pr-3' htmlFor="name">Name:</label>
                        <input className='px-2 py-1 rounded-md border border-gray-200' type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group my-5">
                        <label className='text-gray-700 text-md pr-3' htmlFor="email">Email:</label>
                        <input className='px-2 py-1 rounded-md border border-gray-200' type="email" id="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group my-5">
                        <label className='text-gray-700 text-md pr-3' htmlFor="contact">Contact Number:</label>
                        <input className='px-2 py-1 rounded-md border border-gray-200' type="tel" id="contact" name="contact" placeholder="Contact Number" />
                    </div>
                    <div className="form-group my-5">
                        <button type="submit" className='px-2 py-1 rounded-md border border-gray-200 bg-blue-400 text-white text-md'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
