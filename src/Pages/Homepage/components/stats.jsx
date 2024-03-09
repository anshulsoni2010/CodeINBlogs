import React from 'react';

const Stats = () => {
    return (
        <>
            <section className="bg-gray-900">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 divide-x divide-gray-700 sm:divide-hide text-left">
                        <div className='text-left'>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DAC8FF]"> 2000+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-white">Community Members</p>
                        </div>
                    <div className="sm:hidden mt-8 border-t border-gray-700"></div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DAC8FF]"> 30+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-white">Community Ambassadors</p>
                        </div>
                        <div className="sm:hidden mt-8 border-t border-gray-700"></div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DAC8FF]"> 20+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-white">Mentors</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stats;
