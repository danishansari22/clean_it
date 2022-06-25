import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom"


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/aboutus', current: false },
  { name: 'Contact us', href: '/mywork', current: false },
  { name: 'Help', href: '/enquiry', current: false },
  { name:'Your Reward', href:'/reward',current:false}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className=" bg-yellow-300" >
      {({ open }) => (
        <>
          <div className="sticky max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" style={{ position: "sticky" }}>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a className=' text-black text-3xl ml-7' style={{fontFamily: 'Rajdhani',}} >Clean It</a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 ml-24">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                      
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <Link to={item.href}>{item.name}</Link>

                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                ><a href="">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m7.46494 1.066c1.17334-.05378 1.54734-.066 4.53506-.066 2.9883 0 3.3617.01283 4.5344.066 1.1715.05317 1.9715.23956 2.6712.5115.7339.27631 1.3987.70924 1.9482 1.26867.5595.54943.9925 1.21429 1.2687 1.94822.2719.69972.4577 1.49967.5115 2.67055.0538 1.17334.066 1.54734.066 4.53506 0 2.9877-.0128 3.3617-.066 4.5351-.0532 1.1708-.2396 1.9708-.5115 2.6705-.2811.723-.6576 1.3371-1.2687 1.9482-.5494.5595-1.2143.9925-1.9482 1.2687-.6997.2719-1.4997.4577-2.6705.5115-1.1734.0538-1.5474.066-4.5351.066-2.98772 0-3.36172-.0128-4.53506-.066-1.17088-.0532-1.97083-.2396-2.67055-.5115-.72295-.2811-1.33711-.6576-1.94822-1.2687-.55953-.5494-.99249-1.2143-1.26867-1.9482-.27194-.6997-.45772-1.4997-.5115-2.6705-.05378-1.1734-.066-1.5468-.066-4.5351 0-2.98833.01283-3.36172.066-4.53444.05317-1.1715.23956-1.97145.5115-2.67117.27631-.73388.70924-1.39871 1.26867-1.94822.54942-.55953 1.21428-.99249 1.94822-1.26867.69972-.27194 1.49967-.45772 2.67055-.5115zm8.98026 1.98c-1.1599-.05256-1.5082-.06417-4.4452-.06417s-3.28533.01161-4.44522.06417c-1.0725.04889-1.65489.22794-2.04234.37889-.51333.19922-.88.43755-1.265.82255-.38438.385-.62333.75167-.82255 1.265-.15095.38745-.33.96984-.37889 2.04234-.05256 1.15989-.06417 1.50822-.06417 4.44522s.01161 3.2853.06417 4.4452c.04889 1.0725.22794 1.6549.37889 2.0424.17622.4778.4573.91.82255 1.265.3549.3652.78717.6463 1.265.8225.38745.151.96984.33 2.04234.3789 1.15989.0526 1.50761.0642 4.44522.0642 2.9376 0 3.2853-.0116 4.4452-.0642 1.0725-.0489 1.6549-.2279 2.0424-.3789.5133-.1992.88-.4375 1.265-.8225.3652-.3549.6463-.7872.8225-1.265.151-.3875.33-.9699.3789-2.0424.0526-1.1599.0642-1.5082.0642-4.4452s-.0116-3.28533-.0642-4.44522c-.0489-1.0725-.2279-1.65489-.3789-2.04234-.1992-.51333-.4375-.88-.8225-1.265-.385-.38438-.7517-.62333-1.265-.82255-.3875-.15095-.9699-.33-2.0424-.37889zm-5.8497 12.3449c.4453.1845.9225.2794 1.4045.2794.9735 0 1.907-.3867 2.5953-1.075.6884-.6883 1.0751-1.6219 1.0751-2.5953s-.3867-1.907-1.0751-2.59532c-.6883-.68832-1.6218-1.07502-2.5953-1.07502-.482 0-.9592.09494-1.4045.27939-.4454.18445-.84997.4548-1.19079.79563-.34082.34082-.61118.74542-.79563 1.19072s-.27938.9226-.27938 1.4046.09493.9593.27938 1.4046.45481.8499.79563 1.1907.74539.6112 1.19079.7956zm-2.59345-7.38889c1.06033-1.06033 2.49845-1.65602 3.99795-1.65602 1.4996 0 2.9377.59569 3.998 1.65602s1.656 2.49849 1.656 3.99799-.5957 2.9376-1.656 3.998c-1.0603 1.0603-2.4984 1.656-3.998 1.656-1.4995 0-2.93762-.5957-3.99795-1.656-1.06033-1.0604-1.65602-2.4985-1.65602-3.998s.59569-2.93766 1.65602-3.99799zm10.90565-.81363c.2506-.25065.3914-.59059.3914-.94505 0-.35447-.1408-.69441-.3914-.94505-.2507-.25064-.5906-.39145-.9451-.39145-.3544 0-.6944.14081-.945.39145-.2507.25064-.3915.59058-.3915.94505 0 .35446.1408.6944.3915.94505.2506.25064.5906.39145.945.39145.3545 0 .6944-.14081.9451-.39145z" fill="#000" fill-rule="evenodd" /></svg>
                  </a>
                  <span className="sr-only">View notifications</span>

                </button>



              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  // href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-teal-100 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>


        </>
      )}
    </Disclosure>
  )
}
