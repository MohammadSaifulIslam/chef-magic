import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleResetPassword = event =>{
        setError(null)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        resetPassword(email)
        .then(result=>{
            toast.success('Check your email to reset password')
            form.reset();
            navigate('/login')
        })
        .catch(error =>{
            setError(error.message)
            console.log(error)
        })

    }
    return (
        <section className='my-container mt-24'>
            <form onSubmit={handleResetPassword} className='mx-5 my-10 rounded-xl shadow-xl  md:w-1/2 md:mx-auto px-5 py-10 border-2 border-[#82B440]'>
                <h4 className='text-[#82B440] text-2xl font-bold mb-5 text-center'>Forgot Password?</h4>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="">
                        <input type="email" name='email' placeholder='example@gmail.com' className='input input-bordered w-full max-w-xs"' required />
                    </label>
                </div>          
                <button className='my-btn w-full mt-5'>Send Email</button>
                <p className='text-error text-center mt-2'>{error}</p>

            </form>
        </section>
    );
};

export default ResetPassword;