import Image from 'next/image'
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Logo and Socials */}
        <div className="mb-6 md:mb-0 flex flex-col justify-center items-center lg:flex-none lg:justify-start lg:items-start">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="mfine logo" width={150} height={150} />
          </div>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <FaInstagram className="text-2xl hover:text-white cursor-pointer" />
            <FaXTwitter className="text-2xl hover:text-white cursor-pointer" />
            <FaFacebook className="text-2xl hover:text-white cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-white cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-white cursor-pointer" />
          </div>
          <div className="mt-4 flex space-x-2">
            <Image
              src="/app-store.svg"
              alt="App Store"
              width={120}
              height={40}
            />
            <Image
              src="/google-play.svg"
              alt="Google Play"
              width={120}
              height={40}
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-400">
          <div>
            <h4 className="font-semibold text-white mb-2">MFine</h4>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Derma Essentials</h4>
            <ul className="space-y-2">
              <li>Acne Treatment</li>
              <li>Pigmentation</li>
              <li>Dark Circles</li>
              <li>Skin Ageing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Our Services</h4>
            <ul className="space-y-2">
              <li>Consultation</li>
              <li>Lab Tests</li>
              <li>Health Packages</li>
              <li>Scans & X-Rays</li>
              <li>Long Term Care Plans</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Health Tools</h4>
            <ul className="space-y-2">
              <li>Blood Pressure Monitor</li>
              <li>SPO2 Tracker</li>
              <li>Heart Rate Monitor</li>
              <li>Period Tracker</li>
              <li>Self Checks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between lg:items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/iso.png"
            alt="ISO 27001 Certified"
            width={150}
            height={150}
          />
        </div>
        <div className="mt-4 md:mt-0">
          2024 © mfine™ Pvt Ltd. Copyright and all rights reserved.
        </div>
      </div>
    </footer>
  )
}
