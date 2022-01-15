import { ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import LandingPageFooter from "../LandingPageFooter";
import LandingPageHeader from "../LandingPageHeader";

const categories = [
    {
        id: 1,
        name: 'Frequently Asked questions'
    },
    {
        id: 2,
        name: 'Get Started'
    },
    {
        id: 3,
        name: 'Projects & Products'
    }
]

export default function HelpCenter() {

    const [openTab, setOpenTab] = useState(1);

    const color: string = 'blue'

    return (
        <div>
            <LandingPageHeader/>
            <div className='px-24 py-10 flex space-x-6 bg-black'>
                <div className="w-1/3">
                    <h3 className="font-semibold text-lg p-3 text-gray-300">
                        Choose a category
                    </h3>
                    <div className="divide-y divide-gray-700">
                        {
                            categories.map((item, index) => (
                                <div
                                    key={index} 
                                    onClick={() => setOpenTab(item.id)}
                                    className="cursor-pointer group flex justify-between items-center">
                                    <h3 className="font-md p-3 hover:text-blue-400 transition duration-150 text-gray-300">
                                        {item.name}
                                    </h3>
                                    <ChevronRightIcon className="w-4 h-4 text-blue-400 hidden group-hover:block"/>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="w-full">
                    
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                        <h3 className="text-3xl font-bold text-gray-300">FAQ’s – Frequently Asked Questions</h3>
                        <p className="mt-2 text-md text-gray-300">Last updated - <span className="text-blue-400">June 30, 2022</span></p>
                    </div>

                    <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                        <h3 className="text-3xl font-bold text-gray-300">Projects & Products</h3>
                    </div>

                    <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                        <h3 className="text-3xl font-bold text-gray-300">Billing</h3>
                    </div>
                </div>
            </div>
            <LandingPageFooter/>
        </div>
    )
}
