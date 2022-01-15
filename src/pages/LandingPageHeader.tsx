import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChatAltIcon,
  ChipIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  GlobeAltIcon,
  MenuIcon,
  PresentationChartLineIcon,
  RssIcon,
  ShieldCheckIcon,
  SunIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Icon from '../assets/icon.png'

const solutions = [
  {
    name: "Web Development",
    description:
      "Get a better business, personal websites and advanced web backends.",
    to: "#",
    icon: GlobeAltIcon,
  },
  {
    name: "Mobile Applications",
    description: "Cross platform applications (iOS & Android) with greater user interface.",
    to: "#",
    icon: DeviceMobileIcon,
  },
  {
    name: "Desktop Applications",
    description: "Linux, Google Chromebook, MacOS, Windows desktop applications.",
    to: "#",
    icon: DesktopComputerIcon,
  },
  {
    name: "Unstructured Supplementary Service Data (USSD)",
    description: "For small phones, build USSD apps with us.",
    to: "#",
    icon: RssIcon,
  },
  {
    name: "Maintenance",
    description:
      "Thinking of maintaining? Renovation? ",
    to: "#",
    icon: ChipIcon
  },
];
const callsToAction = [
  { name: "Create a project", to: "#", icon: PresentationChartLineIcon },
  { name: "Contact Sales", to: "#", icon: ChatAltIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    to: "/help-center",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    to: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "Exiting software's coming your way, see the timelines.",
    to: "/events",
    icon: CalendarIcon,
  },
  {
    name: "Contact us",
    description: "Send us a message to get in touch with us",
    to: "/contact-us",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LandingPageHeader() {
  return (
    <Popover className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              {/* <span className="sr-only">Icon</span>
              <svg width="24" height="24" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="43" height="40" stroke="#60a5fa" stroke-width="5"/>
                <rect x="18.5" y="14.5" width="43" height="40" stroke="#60a5fa" stroke-width="5"/>
              </svg> */}
              <img src={Icon} alt="app-icon" className="w-12 w-ato object-cover" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-black rounded-none p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-200" : "text-gray-300",
                      "group bg-black rounded-none inline-flex items-center text-base font-medium hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-400"
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-300" : "text-gray-200",
                        "ml-2 h-5 w-5 group-hover:text-gray-300"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-none shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="-m-3 p-3 flex items-start rounded-none text-white hover:bg-gray-900"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-900 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link
                                to={item.to}
                                className="-m-3 p-3 flex items-center rounded-none text-base font-medium text-white hover:bg-gray-900"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-300"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              to="/projects"
              className="text-base font-medium text-gray-300 hover:text-gray-100"
            >
              Projects
            </Link>
            <Link
              to="#"
              className="text-base font-medium text-gray-300 hover:text-gray-100"
            >
              Blog
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-200" : "text-gray-300",
                      "group bg-black rounded-none inline-flex items-center text-base font-medium hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-400"
                    )}
                  >
                    <span>Support</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-300" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-300"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-none shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="-m-3 p-3 flex items-start rounded-none hover:bg-gray-900"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-400"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-300">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <SunIcon className="w-5 h-5 text-gray-300 mr-3 transition duration-150 rounded-full hoverLbg-gray-300"/>
            <Link
              to="#"
              className="focus:ring-offset-2 focus:ring-2 focus:ring-blue-400 whitespace-nowrap text-base font-medium text-gray-300 hover:text-gray-100"
            >
              Create a project
            </Link>
            <Link
              to="#"
              className="ml-8 focus:ring-offset-2 focus:ring-2 focus:ring-blue-400 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-none shadow-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-500"
            >
              Enquiry
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-none shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-800">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  {/* <svg width="24" height="24" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.5" y="2.5" width="43" height="40" stroke="#60a5fa" stroke-width="5"/>
                  <rect x="18.5" y="14.5" width="43" height="40" stroke="#60a5fa" stroke-width="5"/>
                </svg> */}
                  <img src={Icon} alt="app-icon" className="w-12 w-ato object-cover" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-black rounded-none p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-m-3 p-3 flex items-center rounded-none hover:bg-gray-900"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-300">
                        {item.name}
                        <span className="sr-only">Close menu</span>
                      </span>
                      
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to="#"
                  className="text-base font-medium text-gray-300 hover:text-gray-200"
                >
                  Pricing
                </Link>

                <Link
                  to="#"
                  className="text-base font-medium text-gray-300 hover:text-gray-200"
                >
                  Docs
                </Link>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-base font-medium text-gray-300 hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Link
                  to="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-none shadow-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-500"
                >
                  Create a project
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
