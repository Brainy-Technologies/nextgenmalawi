import { Link } from "react-router-dom";
import { ScrollToTop } from "../components/ScrollToTop";

export default function LandingPageFooter() {

    return (
        <div className="bg-black">
            <ScrollToTop/>
            <footer className="border-gray-800 body-font border-t">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-400 tracking-widest text-sm mb-3">USEFUL LINKS</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Current Projects</Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Our Products </Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Recent Stories </Link>
                        </li>
                        <li>
                            <Link to='/about-us' className="text-gray-300 hover:text-gray-200 transition duration-150">About Us </Link>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-400 tracking-widest text-sm mb-3">SERVICES</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Web Development </Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Mobile App development </Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Desktop App Development </Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">USSD Development </Link>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-400 tracking-widest text-sm mb-3">POLICY & PRIVACY</h2>
                        <nav className="list-none mb-10">
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Usage Policy </Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Privacy </Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Website Copyrights </Link>
                        </li>
                        <li>
                            <Link to='#' className="text-gray-300 hover:text-gray-200 transition duration-150">Agreements </Link>
                        </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 bg-">
                        <h2 className="title-font font-medium text-blue-400 tracking-widest text-sm mb-3 uppercase">subscribe to our newsletters</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                            <input type="email" id="footer-field" name="footer-field" className="w-full focus:ring-offset-0 bg-transparent bg-opacity-50 rounded-none border border-gray-300 focus:bg-transparent focus:ring-0 focus:ring-indigo-200 focus:border-blue-400 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-400 border-0 py-2 px-3 focus:ring-2 hover:bg-blue-400 rounded-none">Subscribe</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="text-sm text-gray-300 sm:ml-6 sm:mt-0 mt-4">© {new Date().getFullYear() } NEXTGENERATIONS MALAWI
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link to='#' className="text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                         </Link>
                        <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                         </Link>
                        <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                         </Link>
                        <Link to='#' className="ml-3 text-gray-500 rounded-full bg-gray-900 p-1 hover:bg-gray-700 transition duration-150 hover:text-blue-500">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                         </Link>
                    </span>
                    </div>
                </div>
                </footer>
        </div>
    )
}
