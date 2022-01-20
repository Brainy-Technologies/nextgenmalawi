import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import LandingPageFooter from '../LandingPageFooter'
import LandingPageHeader from '../LandingPageHeader'

export default function AboutUs() {
    return (
        <div>
            <LandingPageHeader/>
                <div className="bg-black sm:px-24 px-5 sm:py-10 py-5">
                    <div>
                        <h3 className="text-gray-200 text-3xl text-center font-bold">
                        The story behind every project
                        </h3>
                        <p className="text-gray-300 mt-2 text-md text-center text-lg">
                            Developers are trusted to create an engaging experience for their companies, so we build tools to help them.
                        </p>
                        <img src="https://preview.cruip.com/open-pro/images/team-mosaic-01.jpg" alt="team" className="justify-center w-full h-1/4 object-cover mt-2" />
                    </div>

                    <div className='mt-5 items-center flex flex-col'>
                        <h3 className="text-gray-200 text-3xl text-center font-bold">
                            Bringing the world's ideas to life
                        </h3>
                        <p className="text-lg sm:w-1/2 text-gray-300 text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div className="flex flex-col mt-3">
                            <div className='flex space-x-4'>
                               
                                <div>
                                    <div className='sm:space-y-28 space-y-52 pt-2'>
                                        <p className="rounded-full text-sm bg-green-200 text-green-500 px-3 py-1 font-semibold">
                                            2020
                                        </p>
                                        <p className="rounded-full text-sm bg-green-200 text-green-500 px-3 py-1 font-semibold">
                                            2021
                                        </p>
                                        <p className="rounded-full text-sm bg-green-200 text-green-500 px-3 py-1 font-semibold">
                                            2022
                                        </p>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <div className='flex flex-col items-center'>
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <div style={{ width: 2 }} className="sm:h-32 h-56 bg-gray-800 mt-1"></div>
                                    </div>
                                    <div className='flex flex-col items-center mt-1'>
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <div style={{ width: 2 }} className="sm:h-32 h-56 bg-gray-800 mt-1"></div>
                                    </div>
                                    <div className='flex flex-col items-center mt-1'>
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <div style={{ width: 2 }} className="sm:h-24 h-32 bg-gray-800 mt-1"></div>
                                        <div className="w-2 h-2 rounded-full bg-blue-400 border border-blue-300 ring-2 animate-ping"></div>
                                    </div>
                                </div>
                                <div className='space-y-8'>
                                    <div className="space-y-2">
                                        <h3 style={{ fontFamily: 'Architects Daughter' }} className="text-lg text-blue-400 mb-2">Beginning</h3>
                                        <h3 className="text-2xl font-bold text-gray-200">Nextgenerations was found at Malawi University of Science and Technology</h3>
                                        <p className="text-gray-300">The first official website for nextgenerations was developed by <span className="text-blue-400">Rodger Kumwanje</span>. Browse it <span className="text-blue-400">here.</span></p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 style={{ fontFamily: 'Architects Daughter' }} className="text-lg text-blue-400 mb-2">Growth</h3>
                                        <h3 className="text-2xl font-bold text-gray-200">Reaching out to more people</h3>
                                        <p className="text-gray-300">Nextgenerations reached out to 500+ people across Malawi and the world. Introducing it's visions.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 style={{ fontFamily: 'Architects Daughter' }} className="text-lg text-blue-400 mb-2">Re-imaging</h3>
                                        <h3 className="text-2xl font-bold text-gray-200">Yet more products</h3>
                                        <p className="text-gray-300">Impressive than the <span className="text-blue-400">job finder malawi,</span> nextgenerations brings you more software needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End of timeline */}
                        <div className="border-t border-gray-800 mt-10 pt-10">
                            <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="text-gray-200 text-3xl text-center font-bold mb-2">Our passionate team</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                            </div>
                            <div className="flex flex-wrap -m-2">
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-800 border p-4 rounded-md">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 title-font font-medium">Kelvin Chidothi</h2>
                                    <p className="text-gray-300">Founder & CEO</p>
                                </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-800 border p-4 rounded-md">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 title-font font-medium">Jacqueline Jailosi</h2>
                                    <p className="text-gray-300">Sales & Marketer</p>
                                </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-800 border p-4 rounded-md">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 title-font font-medium">Steve Temani</h2>
                                    <p className="text-gray-300">Web developer</p>
                                </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-800 border p-4 rounded-md">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 title-font font-medium">Rodger Kumwanje</h2>
                                    <p className="text-gray-300">Full Stack Developer</p>
                                </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-800 border p-4 rounded-md">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"/>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 title-font font-medium">Anthony Kamphantengo</h2>
                                    <p className="text-gray-300">Web developer</p>
                                </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-800 border p-4 rounded-md">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"/>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 title-font font-medium">Mike Chitedze</h2>
                                    <p className="text-gray-300">Systems Manager</p>
                                </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-800 border p-4 rounded-md">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"/>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 title-font font-medium">Bright</h2>
                                    <p className="text-gray-300">Market Analyst</p>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>

                    {/* End of the passionate team🔥 */}

                    <div className="pt-20 mt-10 border-t border-gray-800 flex flex-col items-center">
                        <h3 className="text-gray-200 text-3xl font-bold text-center">
                            Join the Nextgenerations team
                        </h3>
                        <p className="mt-3 text-lg text-gray-300">
                            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus in ornare.
                        </p>
                        <div className="sm:flex items-center justify-center sm:w-1/2 mt-3 sm:space-x-4">
                            <div className="flex space-x-2 items-center">
                                <BadgeCheckIcon className='w-5 h-5 text-green-400'/>
                                <p className="text-lg text-gray-300">Team work spirit</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <BadgeCheckIcon className='w-5 h-5 text-green-400'/>
                                <p className="text-lg text-gray-300">Open skills</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <BadgeCheckIcon className='w-5 h-5 text-green-400'/>
                                <p className="text-lg text-gray-300">Opportunity door</p>
                            </div>
                        </div>
                        <div className="sm:flex items-center justify-center sm:w-1/2 mt-3 sm:space-x-4">
                            <div className="flex space-x-2 items-center">
                                <BadgeCheckIcon className='w-5 h-5 text-green-400'/>
                                <p className="text-lg text-gray-300">Experience</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <BadgeCheckIcon className='w-5 h-5 text-green-400'/>
                                <p className="text-lg text-gray-300">Evolution</p>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-col items-center">
                           <img src="https://preview.cruip.com/open-pro/images/worldmap.png" alt="world-map" className="relative object-cover" />
                           {/* <div className="h-20 w-20 bg-blue-400 rounded-full absolute mt-72 "></div>   */}
                        </div>
                    </div>
                </div>
            <LandingPageFooter/>
        </div>
    )
}
