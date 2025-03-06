import React, { useState } from 'react';
import Image from 'next/image';

function DesignType({ selectedDesignType = () => {} }) {
    const Design = [
        {
            name: 'Rustik',
            image: '/Rustikkitchenn.jpg'
        },
        {
            name: 'Bohemian',
            image: '/BohemianBedrrom.jpg'
        },
        {
            name: 'Minimalist',
            image: '/MinimalistlivingRoom.jpg'
        },
        {
            name: 'Modern',
            image: '/Bathroommodern.jpg'
        },
        {
            name: 'Traditional',
            image: '/BalconyTradional.jpg'
        }, 
        {
            name: 'Library',
            image: '/Libraryrustt.jpg'
        },
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (designName) => {
        setSelectedOption(designName);
        selectedDesignType(designName);
    };

    return (
        <div className='mt-5'>
            <label className='text-gray-700'>Select Interior Design Type</label>
            <div className='grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {Design.map((design, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleSelect(design.name)}
                        className={`cursor-pointer transition-all rounded-md overflow-hidden 
                        ${design.name === selectedOption ? 'border-2 border-black' : 'border border-gray-300'}`}
                    >
                        <Image 
                            src={design.image} 
                            width={200} 
                            height={200} 
                            className="h-[100px] w-full object-cover hover:scale-105 transition-transform duration-300" 
                            alt={design.name} 
                        />
                        <h2 className='text-center text-sm mt-2'>{design.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DesignType;
