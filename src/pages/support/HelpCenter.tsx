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

const questions = [
    {
        question: 'How can I use Open PRO without registration?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.'
    },
    {
        question: 'Can I import my sitemap to Open PRO?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.'
    },
    {
        question: 'How can I switch my subscription between essential, and premium plans?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.'
    },
    {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.'
    }
]

export default function HelpCenter() {

    const [openTab, setOpenTab] = useState(1);

    return (
        <div>
            <LandingPageHeader/>
            <div className='sm:px-24 px-5 sm:py-10 py-5 sm:flex space-x-6 bg-black'>
                <div className="sm:w-1/3 w-full">
                    <h3 className="font-semibold text-lg p-3 text-gray-300">
                        Choose a category
                    </h3>
                    <div className="divide-y divide-gray-800">
                        {
                            categories.map((item, index) => (
                                <div
                                    key={index} 
                                    onClick={() => setOpenTab(item.id)}
                                    className="cursor-pointer group flex justify-between items-center">
                                    <h3 className={"" + openTab === item.id.toString() ? 'font-md p-3 hover:text-blue-400 transition duration-150 text-blue-400' : 'font-md p-3 hover:text-blue-400 transition duration-150 text-gray-300'}>
                                        {item.name}
                                    </h3>
                                    <ChevronRightIcon className="w-4 h-4 text-blue-400 hidden group-hover:block"/>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="sm:w-full md:mt-2 lg:mt-2 mt-5">
                    
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                        <h3 className="text-3xl font-bold text-gray-300">FAQ’s – Frequently Asked Questions</h3>
                        <p className="mt-2 text-md text-gray-300">Last updated - <span className="text-blue-400">June 30, 2022</span></p>
                        <div className="mt-5 space-y-8">
                            {
                                questions.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <h3 className="text-xl text-gray-200 font-medium antialiased">
                                            {item.question}
                                        </h3>
                                        <p className="text-gray-300 text-lg">
                                            {item.answer}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                        <h3 className="text-3xl font-bold text-gray-300">Projects & Products</h3>
                    </div>

                    <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                        <div className="">
                            <div className="flex flex-col w-full mb-5">
                            <h1 className="text-3xl font-bold text-gray-300 mb-3">Prices for software development</h1>
                            <p className="leading-relaxed text-base text-gray-300">Simple, transparent pricing. Get the Open PRO plan that fits your needs at a special introductory price.</p>
                            </div>
                            <div className="w-full overflow-auto">
                            <table className="table-auto w-full text-left whitespace-no-wrap">
                                <thead>
                                <tr>
                                    <th className="px-4 py-3 font-medium text-gray-200 bg-blue-500">Category</th>
                                    <th className="px-4 py-3 font-medium text-gray-200 bg-blue-500">Platform</th>
                                    <th className="px-4 py-3 font-medium text-gray-200 bg-blue-500">Duration</th>
                                    <th className="px-4 py-3 font-medium text-gray-200 bg-blue-500">Price</th>
                                    <th className="px-4 py-3 font-medium text-gray-200 bg-blue-500">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="px-4 py-3 text-gray-300">Mobile apps</td>
                                    <td className="px-4 py-3 text-gray-300">Android</td>
                                    <td className="px-4 py-3 text-gray-300">3 Months</td>
                                    <td className="px-4 py-3 text-gray-300">MK2,000,000.00</td>
                                    <td className="w-10 text-center">
                                    <input name="plan" type="radio"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LandingPageFooter/>
        </div>
    )
}
