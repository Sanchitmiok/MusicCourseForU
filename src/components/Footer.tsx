import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        {/* Logo & About */}
        <div>
          <h2 className='text-white text-xl font-bold mb-2'>MusicCourses</h2>
          <p className='text-sm'>
            Unlock your musical potential with expert-led courses, interactive lessons, and a supportive community.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className='text-white font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2'>
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className='text-white font-semibold mb-3'>Resources</h3>
          <ul className='space-y-2'>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h3 className='text-white font-semibold mb-3'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <svg width="24" height="24" fill="currentColor"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 2.75a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.25.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <svg width="24" height="24" fill="currentColor"><path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03a12.72 12.72 0 0 1-9.24-4.684 4.48 4.48 0 0 0 1.388 5.98A4.44 4.44 0 0 1 2 9.13v.057a4.48 4.48 0 0 0 3.59 4.393 4.48 4.48 0 0 1-2.018.077 4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.18 9.18 0 0 0 24 4.59a8.93 8.93 0 0 1-2.57.705z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition">
              <svg width="24" height="24" fill="currentColor"><path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.14 5.5 12 5.5 12 5.5s-6.14 0-7.86.56A2.75 2.75 0 0 0 2.2 8.001 28.1 28.1 0 0 0 1.5 12a28.1 28.1 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.94 1.94C5.86 18.5 12 18.5 12 18.5s6.14 0 7.86-.56a2.75 2.75 0 0 0 1.94-1.94A28.1 28.1 0 0 0 22.5 12a28.1 28.1 0 0 0-.7-3.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <p className='text-center font-bold mt-8 text-gray-500'>© 2025 MusicCourses. All rights reserved.</p>
    </footer>
  )
}

export default Footer
