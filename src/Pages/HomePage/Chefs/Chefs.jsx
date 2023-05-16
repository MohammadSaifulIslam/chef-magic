import React, { useEffect, useState } from 'react';
import ChefCard from '../../../Cards/ChefCard/ChefCard';


const Chefs = () => {
 
    const [allData, setAllData] = useState([])
    const [chefsData, setChefsData] = useState([])

    const handleSeeAll = () => {
        setChefsData(allData)
    }
    const handleSeeLess = () => {
        setChefsData(allData.slice(0,4))
    }
    console.log(chefsData.length)
    useEffect(() => {
        fetch('https://chef-magic-server-saifmdislam231-gmailcom.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefsData(data.slice(0, 4))
                setAllData(data)
            })
            
        }, [])

    return (
        <div className='my-container mt-24'>
            <div className="section-title text-center mb-10">
                <h5 className='text-4xl font-bold mb-2'>Our Chefs</h5>
                <p className='md:w-1/2 mx-auto  '>At Chef's Magic, our expert chefs are the backbone of our restaurant. They are skilled and passionate about their craft, creating magic with each dish they prepare.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {
                    chefsData.map(chefData => <ChefCard
                        key={chefData.id}
                        chefData={chefData}
                    ></ChefCard>)
                }
            </div>
            <div className={`flex justify-center mt-10`}>
                {
                    chefsData.length === 4 ? <button onClick={handleSeeAll} className='my-btn'>See all Chefs</button>
                    : <button onClick={handleSeeLess} className='my-btn'>See Less</button>
                }
            </div>
        </div>
    );
};

export default Chefs;