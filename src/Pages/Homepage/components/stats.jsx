import React from 'react';

const Stats = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="text-center">
                <span className='SectionHeading text-[14px] md:text-[20px] 2xl:text-[clamp(20px,1.5vw+0.4rem,40px)] 2xl:leading-[110%]'>BENEFITS</span>

                <section className=" stats mx-auto">
                    <div className="max-w-5xl px-4 sm:px-6 lg:px-8" style={{ padding: '0 20px' }}> {/* Add padding */}
                        <div className="grid grid-cols-1 gap-8  sm:gap-x-8 space-x-12 md:grid-cols-3 ">
                        <div>
                                <h3 className="font-bold text-7xl">
                                    <span className=""> 2000+ </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium ">Community Members</p>
                            </div>
                            <div className="sm:hidden mt-8 border-t border-gray-700"></div>

                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className=""> 30+ </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium ">Community Ambassadors</p>
                            </div>
                            <div className="sm:hidden mt-8 border-t border-gray-700"></div>

                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className=""> 20+ </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium ">Mentors</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Stats;
