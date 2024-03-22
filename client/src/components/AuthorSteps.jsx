import { MdOutlineFileDownloadDone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AuthorSteps = () => {
    return (
        <div className="border border-gray-400 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-md my-4">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Want</span>
                    </span>{' '}
                    to become an <span className="text-blue-600">Author?</span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    If you possess adeptness in the realms of writing and literature, we have an exceptional opportunity tailored specifically for individuals with your unique skill set. <br />
                    <span className='text-blue-600 font-semibold my-4'>Apply for our Authorship Program below!</span>
                </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
                <div className=" border-dashed hover:border-solid border-2 border-blue-600 p-4">
                    <div className="flex items-center justify-between mb-6 ">
                        <p className="text-2xl font-bold">Step 1</p>
                        <FaArrowRight className='w-6 text-gray-700 transform rotate-90 sm:rotate-0' />
                    </div>
                    <p className="text-gray-600">
                        First, <Link className="text-blue-600 font-semibold" to={"/register"}>register</Link> your account with The NEWS and then login to your profile.
                    </p>
                </div>
                <div className=" border-dashed hover:border-solid border-2 border-blue-600 p-4">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 2</p>
                        <FaArrowRight className='w-6 text-gray-700 transform rotate-90 sm:rotate-0' />
                    </div>
                    <p className="text-gray-600">
                        After creating an account, go to the authorship <Link className="text-blue-600 font-semibold" to={"/apply-here"}>application page</Link> and fill the application form.
                    </p>
                </div>
                <div className=" border-dashed hover:border-solid border-2 border-blue-600 p-4">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 3</p>
                        <FaArrowRight className='w-6 text-gray-700 transform rotate-90 sm:rotate-0' />
                    </div>
                    <p className="text-gray-600">
                        Once you submit the application, our support team will carefully evaluate your eligibility criteria on the basis of details your provided.
                    </p>
                </div>
                <div className=" border-dashed hover:border-solid border-2 border-blue-600 p-4">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Success</p>
                        <MdOutlineFileDownloadDone size={25} className='w-6 text-gray-700' />
                    </div>
                    <p className="text-gray-600">
                        If your profile fulfill the elgibility criteria then your authorship account will be activated in One day.
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <Link to={"/apply-here"} className='bg-blue-600 rounded py-3 px-4 text-white font-semibold hover:bg-blue-500'>Apply Here...</Link>
            </div>

        </div>
    );
};

export default AuthorSteps;