import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-40">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/src/assets/images/doctor.jpg')` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-white opacity-80"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-black">
                <h2 className="text-6xl text-center text-black-200">I grow By Helping People In Need</h2>

                <div className='flex mt-4'>
  <input type="text" placeholder="Search here" className="flex-grow mr-2 px-4 py-2 border rounded-l-xl focus:outline-none" />
  <button className='bg-red-500 text-white rounded-r-xl px-4 py-2'>Search</button>
</div>

            </div>
        </div>
    );
};

export default Banner;
