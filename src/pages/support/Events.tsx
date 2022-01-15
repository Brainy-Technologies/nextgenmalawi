import React from 'react'
import LandingPageFooter from '../LandingPageFooter'
import LandingPageHeader from '../LandingPageHeader'

import Poster from '../../assets/job-finder.png'
import { CalendarIcon, DeviceMobileIcon, GlobeAltIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline'
import { StatusOnlineIcon } from '@heroicons/react/solid'

export default function Events() {
    return (
        <div>
            <LandingPageHeader/>
                <div className="sm:px-24 px-5 sm:py-10 py-5 bg-black">
                    <div className='flex flex-col items-center'>
                        <h3 className='text-center text-3xl font-bold text-gray-100'>
                            Keep updated with every tiny detail of our projects
                        </h3>
                        <p className="mt-2 text-gray-300 text-center sm:w-3/5 text-lg">
                            Every feature in Open PRO makes things easy to build, pleasant to create, and simple to manage.
                        </p>
                    </div>


                    <div className="mt-10">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="upcoming-event-poster" className="lg:w-1/2 order-1 w-full lg:h-auto h-64 object-cover object-center rounded-none" src={Poster}/>
                        <div className="lg:w-1/2 w-full sm:space-x-4 order-2 pt-3">
                            <h2 className="text-sm sm:ml-4 text-blue-400 tracking-widest">UPCOMING NEXTGENERATIONS EVENT</h2>
                            <h1 className="text-gray-200 hover:text-blue-400 text-base mt-1 uppercase font-medium mb-1">Job Finder Malawi</h1>
                            <div className="sm:flex items-center sm:space-x-2 mb-4">
                                <div className="flex space-x-2 mt-2">
                                <DeviceMobileIcon className='w-5 h-5 text-blue-500'/>
                                <span className="text-gray-300  text-sm ml-3">2 Platforms</span></div>
                                <div className="flex space-x-2 mt-2">
                                    <LocationMarkerIcon className='w-4 h-4 text-blue-500'/>
                                <span className="text-gray-300 text-sm ml-3">Lilongwe, Malawi</span>
                                </div>
                                <div className="flex space-x-2 mt-2">
                                    <CalendarIcon className='w-4 h-4 text-blue-500'/>
                                <span className="text-gray-300 text-sm ml-3">28 February 2022</span>
                                </div>
                            </div>
                            <p className="leading-relaxed text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque mollitia, dolorum ducimus ipsum incidunt, sed, vitae minima praesentium quidem officia exercitationem similique deserunt iusto ratione quibusdam at sapiente sunt? Lorem</p>
                            
                            <div className="flex sm:mt-24 mt-3">
                                <div className="border border-red-500 text-red-500 p-1 flex space-x-2 items-center">
                                    <p className="text-red-500 uppercase text-sm">Live On Facebook</p>
                                    <StatusOnlineIcon className='w-4 h-4 text-red-500'/>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            <LandingPageFooter/>
        </div>
    )
}
