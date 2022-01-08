import LandingPageFooter from "../LandingPageFooter";
import LandingPageHeader from "../LandingPageHeader";

export default function HelpCenter() {
    return (
        <div>
            <LandingPageHeader/>
            <div className='px-24 py-10 flex space-x-6'>
                <div className="w-2/5 p-10">
                    <h3 className="font-md p-3 border-b mb-1">
                        Choose a category
                    </h3>
                    <h3 className="font-md p-3 border-b mb-1">
                        Frequently asked questions
                    </h3>
                    <h3 className="font-md p-3 border-b mb-1">
                        What is Nextgenerations?
                    </h3>
                    <h3 className="font-md p-3 border-b mb-1">
                        Billing FAQ's
                    </h3>
                </div>
            </div>
            <LandingPageFooter/>
        </div>
    )
}
