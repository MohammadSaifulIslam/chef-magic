import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className='my-container mt-24'>
             <div className="section-title text-center mb-10">
                <h5 className='text-4xl font-bold mb-2'>Our Terms & Conditions</h5>
            </div>
            <p className='text-base font-medium'>
                1. Reservations: We strongly recommend making reservations in advance to ensure availability. Reservations can be made via our website, phone, or in-person. 
                <br/>

                2. Cancellation Policy: If you need to cancel or change your reservation, please notify us as soon as possible. We require at least 24 hours' notice for cancellations or changes. Failure to show up for a reservation may result in a fee. <br/>

                3. Dress Code: We request that guests dress appropriately for the occasion and refrain from wearing beachwear, flip-flops, or shorts. Smart casual attire is preferred. <br/>

                4. Children: Children are welcome at our restaurant but must be supervised by an adult at all times. We do not have a specific children's menu, but we are happy to accommodate any dietary restrictions. <br/>

                5. Dietary Restrictions: Please inform us of any dietary restrictions or allergies when making your reservation. We will do our best to accommodate your needs. <br/>

                6. Payment: We accept cash, credit cards, and debit cards. Gratuity is not included in the menu price and is at the discretion of the guest. <br/>

                7. Seating: Seating is subject to availability and may be limited during peak times. We will do our best to accommodate your seating preference, but we cannot guarantee specific tables or areas. <br/>

                8. Service: We strive to provide excellent service to all our guests. If you have any concerns or feedback about your experience, please let us know. <br/>

                9. Alcohol Policy: We reserve the right to refuse service to anyone who appears to be intoxicated or under the legal drinking age. We also reserve the right to stop serving alcohol at any time. <br/>

                10. Changes to Terms and Conditions: We reserve the right to modify these terms and conditions at any time without prior notice. Please check our website for the most up-to-date information. <br/>
            </p>
            <Link to='/register' ><button className='my-btn mt-5'>Back to Register</button></Link>
        </div>
    );
};

export default TermsAndConditions;