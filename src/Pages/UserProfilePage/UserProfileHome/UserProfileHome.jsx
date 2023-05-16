import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigation } from 'react-router-dom';

const UserProfileHome = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const [update, setUpdate] = useState(false)
    const navigation = useNavigation()

    const handleUpdate= ()=>{
        setUpdate(true)
    }

    const handleUpdateProfile = event => {
        setError(null)
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;

        updateUser(name, photo)
            .then(() => {
                toast.success('Successfully Update Profile!')
                setUpdate(false)
            })
            .catch((error) => {
                console.log("an error occuered", error)
                setError(error.message)
            })
    }

    return (
        <div className='my-container mt-10 md:w-1/2 md:mx-auto h-[calc(100vh-100px)]'>
            <div className="flex items-center gap-5">
                <img src={user?.photoURL} alt="User photo" className='h-20 w-20 rounded-full' />
                <h2 className='text-center text-2xl font-bold'>Hello! <span className='text-[#82B440]'>{user?.displayName}</span></h2>
            </div>
            <div className="text-gray-700 text-xl font-semibold mt-5">
                <p className=' font-bold mb-2'>User Information</p>
                <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
            </div>
            <button onClick={handleUpdate} className='my-btn mt-5'>Update Profile</button>

            {/* profile update form */}
            {
                update &&
                <form onSubmit={handleUpdateProfile} className='mt-5'>
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered border-2 border-[#82B440] bg-slate-50 w-full focus:outline-none" required />
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered border-2 border-[#82B440] bg-slate-50 w-full focus:outline-none mt-5" required />
                    <p className='text-error mt-2'>{error}</p>
                    <button className='my-btn text-start mt-4'>Update</button>
                </form> 
            }
        </div>
    );
};

export default UserProfileHome;