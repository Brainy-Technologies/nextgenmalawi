import { CheckIcon, XIcon, ChatAltIcon, PhoneIcon, DeviceMobileIcon, BriefcaseIcon, RssIcon, GlobeAltIcon, DesktopComputerIcon, BookmarkIcon, LightBulbIcon, DocumentAddIcon, BadgeCheckIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Help from '../assets/help.png'
import LandingPageFooter from './LandingPageFooter'
import LandingPageHeader from './LandingPageHeader'

export default function LandingPage() {

    const [showMessageBubble, setShowMessageBubble] = useState(false)

    return (
        <div>
            <LandingPageHeader/>
            <div>
                <div className="sm:px-24 px-5 sm:py-10 py=5">
                    <main className="justify-center items-center flex flex-col mt-10">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl text-center font-bold">
                            <span className="block xl:inline text-center">We are centuries beyond</span>
                        </h1>
                        <p className="mt-3 text-lg text-center">
                            Digitize your businesses/firms from manual or paper work to automated digitized systems. Grow your firm with us today!
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex items-center justify-center">
                            <div className="rounded-md shadow">
                            <Link
                                to="#"
                                className="focus:ring-offset-2 focus:ring-2 focus:ring-blue-400 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-none text-white bg-blue-400 hover:bg-blue-400"
                            >
                                Get started
                            </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link
                                to="#"
                                className="focus:ring-offset-2 focus:ring-2 focus:ring-blue-400 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-none text-blue-400 bg-blue-100 hover:bg-blue-200"
                            >
                                Create a project
                            </Link>
                            </div>
                        </div>
                        </div>
                    </main>
                    <div className="w-full sm:p-10 pt-4">
                        <img src='https://lvivity.com/wp-content/uploads/2021/09/tailor-made-software-development.jpg' alt='hero'/>
                    </div>
                </div>
                <div className="sm:px-24 px-5 sm:py-10 py-5">
                    <div className="w-full">
                    <h3 className="font-bold text-3xl text-center">
                        Exclusively for your software needs
                    </h3>
                    <div className="w-full sm:flex justify-center sm:px-24 px-5 sm:py-10 py-5 self-center">
                        <div className="sm:w-1/3 mb-3 flex flex-col justify-center items-center">
                            <div className="bg-blue-400 w-14 h-14 flex rounded-full items-center justify-center">
                                <LightBulbIcon className='w-8 h-8 text-white'/>
                            </div>
                            <h3 className="font-semibold text-lg mt-2">1. Create a project</h3>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odit perspiciatis ducimus temporibus optio perferendis quis illo harum recusandae, alias magni nostrum sunt nam. Vel sit praesentium amet iure quas?
                            </p>
                        </div>
                        <div className="sm:w-1/3 mb-3 flex flex-col justify-center items-center">
                            <div className="bg-blue-400 w-14 h-14 flex rounded-full items-center justify-center">
                                <DocumentAddIcon className='w-8 h-8 text-white'/>
                            </div>
                            <h3 className="font-semibold text-lg mt-2">2. Fill project form</h3>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro tenetur, quidem quae fugit dicta nisi illo commodi aspernatur? Ipsa repellat nam numquam mollitia voluptates reprehenderit perspiciatis a dignissimos tenetur?
                            </p>
                        </div>
                        <div className="sm:w-1/3 flex flex-col justify-center items-center">
                            <div className="bg-blue-400 w-14 h-14 flex rounded-full items-center justify-center">
                                <BadgeCheckIcon className='w-8 h-8 text-white'/>
                            </div>
                            <h3 className="font-semibold text-lg mt-2">3. Submit</h3>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quisquam voluptatum quasi culpa maiores, dignissimos at nam ipsa animi? Quae, aperiam sequi vel quaerat numquam consectetur ea error nobis magnam.
                            </p>
                        </div>
                    </div>
                    </div>


                    <div className='border-t pt-10'>
                
                    <div className="w-full sm:flex mt-3 mb-3">
                        <div className="sm:w-2/5">
                        <img src={Help} alt="help-illustration" className='relative'/>
                        </div>
                        <div className="sm:w-3/5">
                        <p>We are here to provide the best tech services you can ever find in Malawi and abroad. Our prices are fair justified with the highest quality of services that we provide to all our clients.</p>
                        <div className="w-full sm:flex space-x-2">
                            <div className="sm:w-1/2 w-full sm:space-y-2">
                            <h2 style={{ fontFamily: 'Architects Daughter' }} className='mt-2 font-semibold'>Build your business</h2>
                            <div className="flex">
                                <CheckIcon className='w-8 h-8 text-green-500 mr-2'/>
                                <p>In a fast growing tech world, your business might just have the chance to sprout</p>
                            </div>
                            <div className="flex">
                                <CheckIcon className='w-8 h-8 text-green-500 mr-2'/>
                                <p>In a fast growing tech world, your business might just have the chance to sprout</p>
                            </div>
                            </div>
                            <div className="sm:w-1/2 w-full space-y-2">
                            <h2 style={{ fontFamily: 'Architects Daughter' }} className='mt-2 font-semibold'>Build your business</h2>
                            <div className="flex">
                                <CheckIcon className='w-8 h-8 text-green-500 mr-2'/>
                                <p>In a fast growing tech world, your business might just have the chance to sprout</p>
                            </div>
                            <div className="flex">
                                <CheckIcon className='w-8 h-8 text-green-500 mr-2'/>
                                <p>In a fast growing tech world, your business might just have the chance to sprout</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className='pt-10 pb-10'>
                        <h1 className="antialiased font-bold text-3xl text-center decoration-8">
                            Our goals in software development
                        </h1>
                        <p className="mt-2 text-center self-center leading-8 justify-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                        <div className="flex flex-wrap flex-row space-y-2 sm:space-x-5 space-x-2 items-center justify-center mt-2">
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 rounded-full p-2 bg-gray-100 flex space-x-2 flex-row items-center justify-center">
                                <DeviceMobileIcon className='text-blue-400 w-5 h-5'/>
                                <p>Mobile apps</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 rounded-full p-2 bg-gray-100 flex space-x-2 flex-row items-center justify-center">
                                <DesktopComputerIcon className='text-blue-400 w-5 h-5'/>
                                <p>Desktop apps</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 rounded-full p-2 bg-gray-100 flex space-x-2 flex-row items-center justify-center">
                                <GlobeAltIcon className='text-blue-400 w-5 h-5'/>
                                <p>Web development</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 rounded-full p-2 bg-gray-100 flex space-x-2 flex-row items-center justify-center">
                                <RssIcon className='text-blue-400 w-5 h-5'/>
                                <p>USSD apps</p>
                            </button>
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 rounded-full p-2 bg-gray-100 flex space-x-2 flex-row items-center justify-center">
                                <BriefcaseIcon className='text-blue-400 w-5 h-5'/>
                                <p>Maintenance</p>
                            </button>
                        </div>

                        <div className="mt-3 sm:flex sm:h-72 border">
                            <div className="sm:w-1/2 order-1">
                                <img className='h-72 w-full object-cover' src="https://preview.cruip.com/open-pro/images/tabs-image-01.jpg" alt="www" />
                            </div>
                            <div className='sm:w-1/2 p-10 space-y-3'>
                                <h1 className='text-lg font-semibold truncate'>Optimize and scale, easy to start</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className='bg-blue-400 flex items-center py-2 px-3 text-white hover:bg-blue-500 transition duration-200'>Learn more 
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    <div className="sm:py-10 py-5 sm:px-24 px-5 flex-col flex items-center border-t">
                    <h3 className="text-3xl font-bold text-center justify-center">
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
                            <h1 className="text-lg font-bold">
                                For Developers
                            </h1>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint iusto, minima dolore obcaecati enim minus eum fuga voluptatum? Sit incidunt velit nemo eius officiis! Laborum tenetur maiores enim sunt.</p>
                        </div>
                        <div>
                            <div className="flex space-x-1 items-center">
                            <div className='w-2 h-2 rounded-full bg-red-400'></div>
                            <h1 className="text-lg font-bold">
                                For Developers
                            </h1>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint iusto, minima dolore obcaecati enim minus eum fuga voluptatum? Sit incidunt velit nemo eius officiis! Laborum tenetur maiores enim sunt.</p>
                        </div>
                        <div>
                            <div className="flex space-x-1 items-center">
                            <div className='w-2 h-2 rounded-full bg-yellow-400'></div>
                            <h1 className="text-lg font-bold">
                                For Developers
                            </h1>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint iusto, minima dolore obcaecati enim minus eum fuga voluptatum? Sit incidunt velit nemo eius officiis! Laborum tenetur maiores enim sunt.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Blog section */}

                    <div className='sm:px-24 px-5 sm:py-10 py-5 border-t'>
                        <h1 className="text-3xl font-bold text-center">
                            Refreshing news for developers, designers and customers
                        </h1>

                        <div className="flex flex-wrap mt-10 space-y-3">
                            <div className="sm:p-4 md:w-1/3">
                                <div className="h-full border border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                    <button className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="sm:p-4 md:w-1/3">
                                <div className="h-full border border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                    <button className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="sm:p-4 md:w-1/3">
                                <div className="h-full border border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                    <button className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>

                    {/* End of blog section */}

                    <div className="">
                    <div className="bg-blue-400 p-20 sm:flex sm:space-x-10">
                        <div>
                        <h1 className='text-2xl text-white'>Stay in the loop</h1>
                        <p className='text-white mt-2'>Join our newsletter to get top news before anyone else.</p>
                        </div>
                        <div className="flex mt-2 xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                            <input placeholder='Your best email...' type="text" id="footer-field" name="footer-field" className="w-full focus:ring-offset-2 bg-gray-100 bg-opacity-50 rounded-none border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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

                    <button 
                        onClick={()=> setShowMessageBubble(!showMessageBubble)}
                        className="fixed focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 items-center flex justify-center  bottom-10 rounded-full border right-2 w-14 h-14 bg-blue-400">
                        <ChatAltIcon className='text-white w-6 h-6'/>
                    </button>

                </div>

                
            </div>
            <LandingPageFooter/>
        </div>
    )
}
