import LandingPageFooter from "../LandingPageFooter";
import LandingPageHeader from "../LandingPageHeader";

export default function ContactUs() {
    return (
        <div>
            <LandingPageHeader/>
                <div className="sm:px-24 px-5 sm:py-10 py-5 bg-black">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-gray-200 text-3xl text-center font-bold">
                         How can we help you?
                        </h3>
                        <p className="text-gray-300 mt-2 text-lg text-center">We have custom plans to power your business. Tell us your needs, and we’ll contact you shortly.</p>
                        <div className="mt-5">
                            <div className="sm:flex sm:space-x-3">
                                <div className="space-y-2">
                                    <p className="text-gray-200">First Name <span className="text-red-500">*</span></p>
                                    <input placeholder="Enter your first name" type="text" className="md:w-full lg:w-full w-full px-3 py-3 rounded-none border border-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 text-gray-300 bg-transparent" />
                                </div>
                                <div className="space-y-2 md:mt-2 lg:mt-2 mt-2">
                                    <p className="text-gray-200">Last Name <span className="text-red-500">*</span></p>
                                    <input placeholder="Enter your last name" type="text" className="md:w-full lg:w-full w-full px-3 py-3 rounded-none border border-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 text-gray-300 bg-transparent" />
                                </div>
                            </div>
                            <div className="space-y-2 mt-2">
                                <p className="text-lg text-gray-200">Email address <span className="text-red-500">*</span></p>
                                <input placeholder="Enter your email address" type="text" className="w-full px-3 py-3 rounded-none border border-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 text-gray-300 bg-transparent" />
                            </div>
                            <div className="space-y-2 mt-2">
                                <p className="text-lg text-gray-200">Country <span className="text-red-500">*</span></p>
                                <input type="text" className="w-full px-3 py-3 rounded-none border border-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 text-gray-300 bg-transparent" />
                            </div>
                            <div className="space-y-2 mt-2">
                                <p className="text-lg text-gray-200">Subject <span className="text-red-500">*</span></p>
                                <input placeholder="How can we help you?" type="text" className="w-full px-3 py-3 rounded-none border border-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 text-gray-300 bg-transparent" />
                            </div>
                            <div className="space-y-2 mt-2">
                                <p className="text-lg text-gray-200">Message <span className="text-red-500">*</span></p>
                                <textarea placeholder="Enter your message here" className="w-full px-3 py-3 rounded-none border border-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 text-gray-300 bg-transparent"></textarea>
                            </div>
                            <div className="flex space-x-4 mt-2 items-center">
                                <input type="checkbox" />
                                <p className="text-gray-300">I agree to Nextgenerations privacy policy and user agreements</p>
                            </div>
                            <button className="mt-2 w-full p-3 text-center bg-blue-400 text-gray-200">Send</button>
                        </div>
                    </div>
                </div>
            <LandingPageFooter/>
        </div>
    )
}
