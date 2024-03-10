import React from "react";

const BenefitsCards = () => {
    return (
        <div className="benefits-section">
            <h2>Unlock the CodeINBlogs Experience Through Its Benefits!</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-32">
                    <div className="benefits-cards p-4">
                        <div className="card-icon">
                            <div className="icon-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                    <g clipPath="url(#clip0_3_8442)">
                                        <path d="M24.375 22.3286H22.5V24.2036H26.25V5.45361H28.125V26.0786H22.5V27.9536H30V3.57861H26.25V1.70361H20.625C19.7656 1.70361 18.9404 1.83545 18.1494 2.09912C17.3584 2.36279 16.6211 2.7583 15.9375 3.28564C15.2637 2.7583 14.5312 2.36279 13.7402 2.09912C12.9492 1.83545 12.1191 1.70361 11.25 1.70361H5.625V3.57861H1.875V15.5757L3.75 14.7261V5.45361H5.625V13.8765L7.5 13.0122V3.57861H11.25C11.9434 3.57861 12.6074 3.6958 13.2422 3.93018C13.877 4.16455 14.4629 4.51123 15 4.97021V13.8765L16.875 14.7261V4.97021C17.4023 4.521 17.9834 4.1792 18.6182 3.94482C19.2529 3.71045 19.9219 3.58838 20.625 3.57861H24.375V22.3286ZM3.75 26.064L10.3125 29.3599L16.875 26.064C16.875 25.7124 16.8701 25.3413 16.8604 24.9507C16.8506 24.5601 16.8115 24.1646 16.7432 23.7642C16.6748 23.3638 16.5771 22.9878 16.4502 22.6362C16.3232 22.2847 16.1475 21.9575 15.9229 21.6548L18.75 20.3657V28.8911H20.625V19.5161L10.3125 14.8286L0 19.5161L4.70215 21.6548L4.58496 21.8159C4.37988 22.1187 4.22363 22.4458 4.11621 22.7974C4.00879 23.1489 3.92578 23.5054 3.86719 23.8667C3.80859 24.228 3.77441 24.5991 3.76465 24.98C3.75488 25.3608 3.75 25.7222 3.75 26.064ZM10.3125 16.8794L16.0986 19.5161L10.3125 22.1528L4.52637 19.5161L10.3125 16.8794ZM10.3125 27.2651L5.625 24.9067C5.63477 24.6528 5.6543 24.4233 5.68359 24.2183C5.71289 24.0132 5.7666 23.813 5.84473 23.6177C5.92285 23.4224 6.00098 23.2319 6.0791 23.0464C6.15723 22.8608 6.26953 22.6558 6.41602 22.4312L10.3125 24.2036L14.209 22.4312C14.3555 22.6655 14.4727 22.8755 14.5605 23.061C14.6484 23.2466 14.7266 23.4321 14.7949 23.6177C14.8633 23.8032 14.9072 23.9985 14.9268 24.2036C14.9463 24.4087 14.9658 24.6479 14.9854 24.9214L10.3125 27.2651Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_8442">
                                            <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0.203613)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <h3 className="benefits-heading">
                            Learning Hub
                        </h3>
                        <p className="benefits-content">Embark on an exhilarating journey with CodeINBlogs! Unlock access to exclusive events, hackathons, and schwag opportunities. Plus, enjoy complimentary courses from our experienced tutors! Join us today and unleash your potential in the world of coding.</p>
                    </div>
                    <div className="benefits-cards p-4">
                        <div className="card-icon">
                            <div className="icon-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <g clipPath="url(#clip0_3_8449)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M27.517 19.4379H16.4963C17.7468 19.3265 18.9063 18.7376 19.7338 17.7936C20.5614 16.8496 20.9935 15.623 20.9403 14.3687C20.887 13.1144 20.3526 11.9288 19.448 11.0583C18.5434 10.1878 17.3381 9.69934 16.0827 9.69433H12.4827C13.0209 8.97062 13.4059 8.14475 13.614 7.2672C13.8222 6.38965 13.8492 5.47887 13.6933 4.59054C13.5375 3.70221 13.2021 2.855 12.7076 2.10071C12.2132 1.34641 11.5701 0.700894 10.8177 0.203613L27.517 0.203613C28.2835 0.204749 29.0182 0.510032 29.5598 1.05243C30.1014 1.59482 30.4056 2.32998 30.4056 3.09647V16.5515C30.4056 18.1458 29.1113 19.44 27.517 19.44V19.4379ZM7.15128 9.69861C7.67893 9.71089 8.2037 9.61757 8.69476 9.42413C9.18582 9.23069 9.63326 8.94104 10.0108 8.57221C10.3883 8.20337 10.6883 7.76279 10.8931 7.27636C11.0979 6.78993 11.2034 6.26747 11.2034 5.73968C11.2034 5.2119 11.0979 4.68944 10.8931 4.20301C10.6883 3.71658 10.3883 3.276 10.0108 2.90716C9.63326 2.53833 9.18582 2.24868 8.69476 2.05524C8.2037 1.8618 7.67893 1.76848 7.15128 1.78076C6.11726 1.80481 5.13368 2.23248 4.41087 2.9723C3.68806 3.71212 3.28339 4.70538 3.28339 5.73968C3.28339 6.77399 3.68806 7.76725 4.41087 8.50707C5.13368 9.24689 6.11726 9.67455 7.15128 9.69861ZM18.2834 14.5758C18.2834 13.3586 17.2977 12.3729 16.0827 12.3729H7.15342C6.40763 12.3726 5.66908 12.5193 4.98 12.8046C4.29091 13.0899 3.6648 13.5081 3.13744 14.0355C2.61008 14.5628 2.19181 15.189 1.90654 15.878C1.62126 16.5671 1.47457 17.3057 1.47485 18.0515V20.6336C1.47485 21.7736 2.40057 22.6972 3.54057 22.6972H3.90914L4.51343 28.29C4.56994 28.8152 4.81839 29.3009 5.21111 29.6541C5.60382 30.0073 6.11313 30.2029 6.64128 30.2036H7.717C8.23393 30.2034 8.73336 30.0163 9.12322 29.6769C9.51308 29.3374 9.76709 28.8685 9.83842 28.3565L11.452 16.7765H16.0806C17.2956 16.7765 18.2813 15.7908 18.2813 14.5758H18.2834Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_8449">
                                            <rect width="30" height="30" fill="white" transform="translate(0.941284 0.203613)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <h3 className="benefits-heading">
                            Mentorship
                        </h3>
                        <p className="benefits-content">Unlock invaluable guidance within CodeINBlogs. Our mentors are ready to assist with project suggestions, code-related queries, resource recommendations, insights, and updates on mentoring sessions. In our supportive environment, you're never alone on your coding journey.</p>
                    </div>
                    <div className="benefits-cards p-4">
                        <div className="card-icon">
                            <div className="icon-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <path d="M29.0663 28.3286H21.5663V3.95361H29.0663V28.3286ZM19.6913 28.3286H12.1913V11.4536H19.6913V28.3286ZM10.3163 28.3286H2.81628V17.0786H10.3163V28.3286Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="benefits-heading">
                            Hands-on
                        </h3>
                        <p className="benefits-content">Immerse yourself in practical coding experiences with CodeINBlogs. Participate in electrifying hackathons, challenges, and real-world projects expertly organized by our team. Hone your skills, gain confidence, and elevate your coding prowess within our immersive environment.</p>     </div>
                    <div className="benefits-cards p-4">
                        <div className="card-icon">
                            <div className="icon-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <g clipPath="url(#clip0_3_8463)">
                                        <path d="M0.941284 0.203613V30.2036H30.9413V0.203613H0.941284ZM25.9413 25.2036H5.94128V23.5369H25.9413V25.2036ZM25.9413 21.8703H5.94128V20.2036H25.9413V21.8703ZM25.9413 15.2036H5.94128V5.20361H25.9413V15.2036Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_8463">
                                            <rect width="30" height="30" fill="white" transform="translate(0.941284 0.203613)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <h3 className="benefits-heading">
                            Exclusive Blogs
                        </h3>
                        <p className="benefits-content">Explore the vast coding universe with us! Discover fundamental terms from our coding-related informative and educational posts. Plus, easily share your own insightful blogs with just two simple steps. Reach a wider audience as your blogs are automatically shared with all registered CodeINBlogs members.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsCards;
