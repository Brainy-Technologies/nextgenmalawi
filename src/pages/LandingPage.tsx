import { 
    CheckIcon, 
    XIcon, 
    ChatAltIcon, 
    DeviceMobileIcon, 
    BriefcaseIcon, 
    RssIcon, GlobeAltIcon, 
    DesktopComputerIcon, 
    LightBulbIcon, 
    DocumentAddIcon, 
    BadgeCheckIcon
 } from '@heroicons/react/outline'

import { 
    useState
 } from 'react'

import { Link } from 'react-router-dom'

import User from '../assets/avatar.jpg'

import LandingPageFooter from './LandingPageFooter'
import LandingPageHeader from './LandingPageHeader'

export default function LandingPage() {

    const [showMessageBubble, setShowMessageBubble] = useState(false)

    return (
        <div>
            <LandingPageHeader/>
            <div className='bg-black'>
                <div className="sm:px-24 px-5 sm:py-10">
                    <main className="justify-center items-center flex flex-col">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl text-center font-bold">
                            <span style={{ fontFamily: 'Architects Daughter' }} className="block xl:inline text-center text-gray-100">Nextgenerations, centuries beyond</span>
                        </h1>
                        <p className="mt-3 text-lg text-center text-gray-300">
                            Digitize your businesses/firms from manual or paper work to automated digitized systems. Grow your firm with us today.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex items-center justify-center">
                            <div className="rounded-md shadow">
                            <Link
                                to="#"
                                className="focus:ring-offset-2 focus:ring-offset-transparent focus:ring-1 focus:ring-blue-400 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-none text-white bg-blue-500 hover:bg-blue-400 duration-75 transition"
                            >
                                Get started
                            </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link
                                to="#"
                                className="focus:ring-offset-2 focus:ring-offset-transparent focus:ring-1 focus:ring-blue-400 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-none text-blue-400 bg-gray-800 hover:bg-gray-900"
                            >
                                Create a project
                            </Link>
                            </div>
                        </div>
                        </div>
                    </main>
                    <div className="w-full sm:p-10 pt-4">
                        <img className='hover:scale-105 transition duration-100' src='https://lvivity.com/wp-content/uploads/2021/09/tailor-made-software-development.jpg' alt='hero'/>
                    </div>
                </div>
                <div className="sm:px-24 px-5 sm:py-10 py-5">
                    <div className="w-full">
                    <h3 className="font-bold text-3xl text-center text-gray-100">
                        Exclusively for your software needs
                    </h3>
                    <div className="w-full sm:flex justify-center sm:px-24 px-5 sm:py-10 py-5 self-center">
                        <div className="sm:w-1/3 mb-3 flex flex-col justify-center items-center">
                            <div className="bg-blue-400 w-14 h-14 flex rounded hover:bg-blue-500 transition duration-150 items-center justify-center">
                                <LightBulbIcon className='w-8 h-8 text-white hover:scale-75'/>
                            </div>
                            <h3 className="font-semibold text-lg mt-2 text-gray-200">Create a project</h3>
                            <p className='text-center text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit perspiciatis ducimus temporibus optio perferendis quis illo harum recusandae, alias magni nostrum sunt nam. Vel sit praesentium amet iure quas?
                            </p>
                        </div>
                        <div className="sm:w-1/3 mb-3 flex flex-col justify-center items-center">
                            <div className="bg-blue-400 w-14 h-14 flex rounded hover:bg-blue-500 transition duration-150 items-center justify-center">
                                <DocumentAddIcon className='w-8 h-8 text-white hover:scale-75'/>
                            </div>
                            <h3 className="font-semibold text-lg mt-2 text-gray-200">Fill project form</h3>
                            <p className='text-center text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro tenetur, quidem quae fugit dicta nisi illo commodi aspernatur? Ipsa repellat nam numquam mollitia voluptates reprehenderit perspiciatis a dignissimos tenetur?
                            </p>
                        </div>
                        <div className="sm:w-1/3 flex flex-col justify-center items-center">
                            <div className="bg-blue-400 w-14 h-14 flex rounded hover:bg-blue-500 transition duration-150 items-center justify-center">
                                <BadgeCheckIcon className='w-8 h-8 text-white hover:scale-75'/>
                            </div>
                            <h3 className="font-semibold text-lg mt-2 text-gray-200">Submit</h3>
                            <p className='text-center text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam voluptatum quasi culpa maiores, dignissimos at nam ipsa animi? Quae, aperiam sequi vel quaerat numquam consectetur ea error nobis magnam.
                            </p>
                        </div>
                    </div>
                    </div>


                    <div className='border-t border-gray-800 pt-10'>
                
                    <div className="w-full sm:flex mt-3 mb-3 space-x-4 border-b border-gray-800 pb-10">
                        <div className="sm:w-2/5 pb-3 justify-center flex items-center object-cover bg-cover" style={{ backgroundImage: `url('https://www.incimages.com/uploaded_files/image/1920x1080/IN0316LPO03-web_80434.jpg')` }}>
                            <div className="w-28 h-28 m-10 transition-all duration-150 border-8 border-blue-400 bg-blue-500 rounded-full ring-8"></div>
                        </div>
                        <div className="sm:w-3/5 space-y-2">
                            <h1 className="text-blue-400 text-lg" style={{ fontFamily: 'Architects Daughter' }}>Lightening fast workflow</h1>
                            <h3 className="text-2xl font-bold text-relaxed text-gray-200">Say hello to this approach</h3>
                            <p className='text-gray-300'>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                            </p>
                            <div className="flex flex-wrap space-x-3">
                                <div className="flex items-center space-x-2">
                                    <CheckIcon className='w-5 h-5 text-green-500'/>
                                    <p className='font-medium text-gray-300'>Impressive User Interface</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckIcon className='w-5 h-5 text-green-500'/>
                                    <p className='font-medium text-gray-300'>Great Interaction</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckIcon className='w-5 h-5 text-green-500'/>
                                    <p className='font-medium text-gray-300'>Fast networking speed</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckIcon className='w-5 h-5 text-green-500'/>
                                    <p className='font-medium text-gray-300'>Clean & maintainable app</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckIcon className='w-5 h-5 text-green-500'/>
                                    <p className='font-medium text-gray-300'>Versioning</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckIcon className='w-5 h-5 text-green-500'/>
                                    <p className='font-medium text-gray-300'>App distribution</p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <img src={User} alt="kelvin-chidothi" className="rounded-full w-10 h-10 object-cover" />
                                <div>
                                    <p className="text-sm italic text-gray-400">"A clean app with android architect i.e., MVVM"</p>
                                    <p className="mt-2 text-gray-200">Kelvin Chidothi <span className="text-blue-400">- Android developer</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='pt-10 pb-10'>
                        <h1 className="antialiased font-bold text-3xl text-center decoration-8 text-gray-100">
                            Our goals in software development
                        </h1>
                        <p className="mt-2 text-center self-center leading-8 justify-center text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                        <div className="flex flex-wrap flex-row space-y-2 sm:space-x-5 space-x-2 items-center justify-center mt-2">
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-900 rounded-full p-2 bg-gray-900 flex space-x-2 flex-row items-center justify-center">
                                <DeviceMobileIcon className='text-blue-400 w-5 h-5'/>
                                 <p className='text-gray-400'>Mobile apps</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-900 rounded-full p-2 bg-gray-900 flex space-x-2 flex-row items-center justify-center">
                                <DesktopComputerIcon className='text-blue-400 w-5 h-5'/>
                                 <p className='text-gray-400'>Desktop apps</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-900 rounded-full p-2 bg-gray-900 flex space-x-2 flex-row items-center justify-center">
                                <GlobeAltIcon className='text-blue-400 w-5 h-5'/>
                                 <p className='text-gray-400'>Web development</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-900 rounded-full p-2 bg-gray-900 flex space-x-2 flex-row items-center justify-center">
                                <RssIcon className='text-blue-400 w-5 h-5'/>
                                 <p className='text-gray-400'>USSD apps</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-900 rounded-full p-2 bg-gray-900 flex space-x-2 flex-row items-center justify-center">
                                <BriefcaseIcon className='text-blue-400 w-5 h-5'/>
                                 <p className='text-gray-400'>Maintenance</p>
                            </button>
                        </div>

                        <div className="mt-3 sm:flex sm:h-72 border border-gray-800">
                            <div className="sm:w-1/2 order-1">
                                <img className='h-72 w-full object-cover' src="https://preview.cruip.com/open-pro/images/tabs-image-01.jpg" alt="www" />
                            </div>
                            <div className='sm:w-1/2 p-10 space-y-3'>
                                <h1 className='text-lg font-semibold truncate text-gray-200'>Optimize and scale, easy to start</h1>
                                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className='bg-blue-400 flex items-center py-2 px-3 text-white hover:bg-blue-500 transition duration-200 focus:ring-2 focus:ring-offset-1 focus:ring-blue-400'>Learn more 
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    <div className="sm:py-10 py-5 sm:px-24 px-5 flex-col flex items-center border-t border-gray-800">
                    <h3 className="text-3xl font-bold text-center justify-center text-gray-300">
                        From the big picture to every tiny detail, we got you covered.
                    </h3>

                    <div className="w-full sm:flex sm:space-x-10">
                        <div className="sm:w-1/2">
                        <img className='mt-10' src="https://preview.cruip.com/open-pro/images/features-02-image.png" alt="work" />
                        </div>
                        <div className="sm:w-1/2 py-10 sm:space-y-3">
                        <p className='text-lg text-blue-400' style={{ fontFamily: 'Architects Daughter' }}>Be the change you want to see</p>
                        <div>
                            <div className="flex space-x-1 items-center">
                            <div className='w-2 h-2 rounded-full bg-blue-400'></div>
                            <h1 className="text-lg font-bold text-gray-300">
                                For Developers
                            </h1>
                            </div>
                            <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint iusto, minima dolore obcaecati enim minus eum fuga voluptatum? Sit incidunt velit nemo eius officiis! Laborum tenetur maiores enim sunt.</p>
                        </div>
                        <div>
                            <div className="flex space-x-1 items-center">
                            <div className='w-2 h-2 rounded-full bg-red-400'></div>
                            <h1 className="text-lg font-bold text-gray-300">
                                For Developers
                            </h1>
                            </div>
                            <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint iusto, minima dolore obcaecati enim minus eum fuga voluptatum? Sit incidunt velit nemo eius officiis! Laborum tenetur maiores enim sunt.</p>
                        </div>
                        <div>
                            <div className="flex space-x-1 items-center">
                            <div className='w-2 h-2 rounded-full bg-yellow-400'></div>
                            <h1 className="text-lg font-bold text-gray-300">
                                For Developers
                            </h1>
                            </div>
                            <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint iusto, minima dolore obcaecati enim minus eum fuga voluptatum? Sit incidunt velit nemo eius officiis! Laborum tenetur maiores enim sunt.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Blog section */}

                    <div className='sm:px-24 px-5 sm:py-10 py-5 border-t border-gray-800'>
                        <h1 className="text-3xl font-bold text-center text-gray-300">
                            Refreshing news for developers, designers and customers
                        </h1>

                        <div className="flex flex-wrap mt-10 space-y-3">
                            <div className="sm:p-4 md:w-1/3">
                                <div className="h-full border border-gray-800 border-opacity-60 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://preview.cruip.com/open-pro/images/news-01.jpg" alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-blue-400 mb-1">MOBILE APP DEVELOPMENT</h2>
                                    <h1 className="text-2xl font-semibold mb-3 text-gray-200">Better UI & UIX for android applications</h1>
                                    <p className="text-md mb-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <img src="https://preview.cruip.com/open-pro/images/news-author-02.jpg" alt="guy" className="w-10 h-10 bject-cover rounded-full" />
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1 border-r-2 border-gray-800">
                                        Devin
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        12th January 2021
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="sm:p-4 md:w-1/3">
                                <div className="h-full border border-gray-800 border-opacity-60 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://preview.cruip.com/open-pro/images/news-01.jpg" alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-blue-400 mb-1">MOBILE APP DEVELOPMENT</h2>
                                    <h1 className="text-2xl font-semibold mb-3 text-gray-200">Better UI & UIX for android applications</h1>
                                    <p className="text-md mb-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <img src="https://preview.cruip.com/open-pro/images/news-author-02.jpg" alt="guy" className="w-10 h-10 bject-cover rounded-full" />
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1 border-r-2 border-gray-800">
                                        Devin
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        12th January 2021
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="sm:p-4 md:w-1/3">
                                <div className="h-full border border-gray-800 border-opacity-60 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://preview.cruip.com/open-pro/images/news-01.jpg" alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-blue-400 mb-1">MOBILE APP DEVELOPMENT</h2>
                                    <h1 className="text-2xl font-semibold mb-3 text-gray-200">Better UI & UIX for android applications</h1>
                                    <p className="text-md mb-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <img src="https://preview.cruip.com/open-pro/images/news-author-02.jpg" alt="guy" className="w-10 h-10 bject-cover rounded-full" />
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 py-1 border-r-2 border-gray-800">
                                        Devin
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        12th January 2021
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>

                    {/* End of blog section */}

                    <div className="heropattern-circuitboard-blue-400 bg-repeat">
                    <div className="bg-gray-900 sm:m-20 m-5 sm:p-20 p-5 sm:flex sm:space-x-10">
                        <div>
                        <div className="flex">
                            <h1 className='text-2xl text-white'>Stay in the loop</h1>
                            {/* <div className="rounded-full w-12 h-12 bg-red-400 border-8 animate-ping border-red-300"></div> */}
                        </div>
                        <p className='text-white mt-2'>Join our newsletter to get top news before anyone else.</p>
                        </div>
                        <div className="flex mt-2 xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                            <input placeholder='Your best email' type="text" id="footer-field" name="footer-field" className="w-full  bg-opacity-50 rounded-none border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-400 border-0 py-2 px-3 focus:outline-none hover:bg-blue-400 rounded-none">Subscribe</button>
                        </div>
                    </div>
                    </div>

                    {showMessageBubble ? <div className="fixed bottom-28 right-2 border bg-white">
                        <div className="flex bg-blue-400 p-3 justify-between items-center">
                            <p className="text-white text-center">
                            Send us a message
                            </p>
                            <button 
                                onClick={()=> setShowMessageBubble(!showMessageBubble)}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                <XIcon className='w-5 h-5 text-white'/>
                            </button>
                        </div>
                        <div className="pl-10 pr-10 pt-3 pb-3">
                            {/* <p>Get in touch with us</p> */}
                            <div className="space-y-2">
                            <div>
                                <input 
                                type="email" 
                                placeholder='Email address'
                                className="w-full border rounded-none px-3 py-1 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-400" />
                            </div>
                            <div>
                                <textarea  
                                placeholder='Your message'
                                className="w-full border rounded-none px-3 py-10 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-400" />
                            </div>
                            <button className="bg-blue-400 w-full text-white py-2 px-3 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 rounded-none">
                                Send message
                            </button>
                            </div>
                        </div>
                    </div> : <></>}

                    {/* <button 
                        onClick={()=> setShowMessageBubble(!showMessageBubble)}
                        className="fixed focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 items-center flex justify-center  bottom-10 rounded-full border-8 border-blue-400 right-2 w-14 h-14 bg-blue-500">
                        <ChatAltIcon className='text-white w-6 h-6'/>
                    </button> */}

                </div>

                
            </div>
            <LandingPageFooter/>
        </div>
    )
}
