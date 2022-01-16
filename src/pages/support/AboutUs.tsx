import { BadgeCheckIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import LandingPageFooter from '../LandingPageFooter'
import LandingPageHeader from '../LandingPageHeader'

export default function AboutUs() {
    return (
        <div>
            <LandingPageHeader/>
                <div className="bg-black px-24 py-10">
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
                        <p className="text-lg w-1/2 text-gray-300 text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div className="flex flex-col mt-3">
                            <div className='flex space-x-4'>
                               
                                <div>
                                    <div className='space-y-28 pt-2'>
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
                                        <div style={{ width: 2 }} className="h-32 bg-gray-800 mt-1"></div>
                                    </div>
                                    <div className='flex flex-col items-center mt-1'>
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <div style={{ width: 2 }} className="h-32 bg-gray-800 mt-1"></div>
                                    </div>
                                    <div className='flex flex-col items-center mt-1'>
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <div style={{ width: 2 }} className="h-32 bg-gray-800 mt-1"></div>
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

                    <div className="mt-5 border-t border-gray-800 p-5">
                        <h3 className="text-gray-200 text-3xl font-bold text-center">
                            Our passionate team
                        </h3>
                        <p className="mt-3 text-lg text-gray-300">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.
                        </p>

                        <div className="mt-10 flex">
                            <div className='space-y-2 w-1/4 flex flex-col items-center'>
                                <img src="https://preview.cruip.com/open-pro/images/team-member-01.jpg" alt="co-founder" className="w-28 h-28 rounded-full object-cover" />
                                <h3 className="text-gray-200 font-bold text-lg">Kelvin Chidothi</h3>
                                <p className="text-gray-400 text-md">CEO & Founder</p>
                                <div className="flex space-x-2">
                                    <Link to='#' className="text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-400">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-cyan-400">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className='space-y-2 w-1/4 flex flex-col items-center'>
                                <img src="https://preview.cruip.com/open-pro/images/team-member-01.jpg" alt="co-founder" className="w-28 h-28 rounded-full object-cover" />
                                <h3 className="text-gray-200 font-bold text-lg">Kelvin Chidothi</h3>
                                <p className="text-gray-400 text-md">CEO & Founder</p>
                                <div className="flex space-x-2">
                                    <Link to='#' className="text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-400">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-cyan-400">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className='space-y-2 w-1/4 flex flex-col items-center'>
                                <img src="https://preview.cruip.com/open-pro/images/team-member-01.jpg" alt="co-founder" className="w-28 h-28 rounded-full object-cover" />
                                <h3 className="text-gray-200 font-bold text-lg">Kelvin Chidothi</h3>
                                <p className="text-gray-400 text-md">CEO & Founder</p>
                                <div className="flex space-x-2">
                                    <Link to='#' className="text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-400">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-cyan-400">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className='space-y-2 w-1/4 flex flex-col items-center'>
                                <img src="https://preview.cruip.com/open-pro/images/team-member-01.jpg" alt="co-founder" className="w-28 h-28 rounded-full object-cover" />
                                <h3 className="text-gray-200 font-bold text-lg">Kelvin Chidothi</h3>
                                <p className="text-gray-400 text-md">CEO & Founder</p>
                                <div className="flex space-x-2">
                                    <Link to='#' className="text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-400">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                    </Link>
                                    <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-cyan-400">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                    </Link>
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
                        <div className="flex items-center justify-center w-1/2 mt-3 space-x-4">
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
                        <div className="flex items-center justify-center w-1/2 mt-3 space-x-4">
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
