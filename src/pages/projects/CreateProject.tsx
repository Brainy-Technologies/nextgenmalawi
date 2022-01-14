import React from 'react'
import LandingPageFooter from '../LandingPageFooter'
import LandingPageHeader from '../LandingPageHeader'

export default function CreateProject() {
    return (
        <div>
            <LandingPageHeader/>
             <div className='sm:px-24 px-5 sm:py-10 py-5 bg-black'>
                <h3 className="text-3xl text-gray-100">
                    Create a new project
                </h3>
                <p className="text-md text-gray-400">
                    Start your software development by creating a project with us
                </p>
                <div className="mt-10 bg-gray-900 p-5">
                    <div className="justify-between flex">
                        <div>
                            <p className="text-gray-300">STEP 1 of 4</p>
                        </div>
                        <div className="flex space-x-3">
                            <button className="w-2 h-2 bg-yellow-500 rounded-full border border-yellow-300"></button>
                            <button className="w-2 h-2 bg-green-500 rounded-full"></button>
                            <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                            <button className="w-2 h-2 bg-blue-500 rounded-full"></button>
                        </div>
                    </div>
                    <h3 className="uppercase text-gray-200 mt-2 text-sm">personal information</h3>
                </div>
             </div>
            <LandingPageFooter/>
        </div>
    )
}
