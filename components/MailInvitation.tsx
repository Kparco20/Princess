'use client'

import { useState, useEffect } from 'react'

export default function MailInvitation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showEventDetails, setShowEventDetails] = useState(false)
  const [isMusicOn, setIsMusicOn] = useState(false)
  // Try to start music on first mount; browsers may block autoplay with sound.
  useEffect(() => {
    // Attempt autoplay once; if blocked, user can press Play Music.
    const t = setTimeout(() => setIsMusicOn(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='w-full flex flex-col items-center justify-center relative'>
      {/* Hidden YouTube iframe created on user click (or attempted autoplay) */}
      {isMusicOn && (
        <iframe
          src="https://www.youtube.com/embed/HpphFd_mzXE?autoplay=1&controls=0&loop=1&playlist=HpphFd_mzXE&modestbranding=1"
          allow="autoplay; encrypted-media"
          className="w-0 h-0 opacity-0 pointer-events-none"
          title="background-music"
        />
      )}
      {!isOpen ? (
        <>
        <button
          onClick={() => setIsOpen(true)}
          className='group relative w-72 h-52 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg shadow-2xl hover:shadow-amber-900/50 transition-all duration-500 transform hover:scale-105 flex items-center justify-center cursor-pointer border border-amber-200/50'
        >
          {/* Envelope flap */}
          <div className='absolute inset-0 rounded-lg overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-amber-200 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-amber-100 to-amber-50 transform -skew-y-6 group-hover:skew-y-0 transition-transform duration-500 origin-top'></div>
          </div>

          {/* Envelope content */}
          <div className='relative z-10 text-center'>
            <div className='text-5xl mb-3'>💌</div>
            <p className='text-amber-900 font-light text-sm tracking-widest uppercase'>
              Open Me
            </p>
          </div>
        </button>

        {/* Music control placed below the envelope */}
        <div className="mt-4">
          <button
            onClick={() => setIsMusicOn((s) => !s)}
            className={`px-4 py-2 rounded-md text-sm font-light transition ${isMusicOn ? 'bg-amber-400 text-black' : 'bg-gray-800 text-amber-300'}`}
          >
            {isMusicOn ? 'Pause Music' : 'Play Music'}
          </button>
        </div>
        </>
      ) : !showEventDetails ? (
        <div className='w-full max-w-2xl animate-fade-in'>
          <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-2xl border border-amber-200/30 shadow-2xl overflow-hidden'>
            {/* Decorative top border */}
            <div className='h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>

            <div className='p-12 md:p-16 space-y-8'>
              {/* Decorative element */}
              <div className='flex justify-center'>
                <div className='w-20 h-20 border-2 border-amber-500/40 rounded-full flex items-center justify-center'>
                  <div className='w-10 h-10 border border-amber-500/60 rounded-full'></div>
                </div>
              </div>

              {/* Main invitation text */}
              <div className='text-center space-y-6'>
                <p className='text-amber-600 text-xs tracking-widest uppercase font-light'>
                  You are Invited
                </p>

                <h2 className='text-2xl md:text-4xl font-light text-gray-200 tracking-wider leading-relaxed'>
                  to celebrate the debut of
                </h2>

                <h3 className='text-5xl md:text-7xl font-light text-amber-100 tracking-wide' style={{ fontFamily: 'serif' }}>
                  Princess Nicole 
                </h3>

                <div className='py-8 space-y-3'>
                  <p className='text-gray-400 text-sm'>As she turns</p>
                  <p className='text-amber-400 text-4xl font-light'>18</p>
                </div>

                <div className='py-6 border-t border-b border-amber-500/20 space-y-4'>
                  <p className='text-amber-600 text-xs tracking-widest uppercase font-light'>Date & Time</p>
                  <p className='text-white text-lg font-light'>Wednesday, June 10, 2026</p>
                  <p className='text-amber-200 text-sm'>5:00 PM</p>
                </div>

                <div className='py-6 space-y-2'>
                  <p className='text-gray-500 text-xs uppercase tracking-widest'>Venue</p>
                  <p className='text-gray-200 text-lg font-light'>Okada Manila</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className='flex gap-4 justify-center pt-8'>
                <button
                  onClick={() => setShowEventDetails(true)}
                  className='px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-light tracking-widest uppercase text-sm rounded-lg border border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20'
                >
                  View Details
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className='px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-light tracking-widest uppercase text-sm rounded-lg border border-gray-600/30 transition-colors duration-300'
                >
                  Close
                </button>
              </div>
            </div>

            {/* Decorative bottom border */}
            <div className='h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
          </div>
        </div>
      ) : (
        <div className='w-full max-w-4xl animate-fade-in space-y-8'>
          <button
            onClick={() => {
              setShowEventDetails(false)
              setIsOpen(false)
            }}
            className='text-amber-600/60 hover:text-amber-500 font-light text-sm tracking-widest uppercase transition-colors'
          >
            ← Back
          </button>

          {/* Event Timeline */}
          <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl border border-amber-200/20 p-8 md:p-12'>
            <h2 className='text-2xl md:text-3xl font-light text-amber-200 tracking-widest uppercase text-center mb-10'>
              Event Timeline
            </h2>
            <div className='space-y-6'>
              {[
                { time: '5:00 PM', event: 'Guest Arrival & Cocktail Hour' },
                { time: '5:30 PM', event: 'Opening Program' },
                { time: '5:45 PM', event: 'Grand Entrance of the Debutante' },
                { time: '6:00 PM', event: 'Dinner Service' },
                { time: '7:00 PM', event: 'The 18 Specials' },
                { time: '8:00 PM', event: 'Cake Cutting Ceremony' },
                { time: '9:00 PM', event: 'Grand Party & Dance' },
              ].map((item, idx) => (
                <div key={idx} className='flex gap-8 items-start'>
                  <div className='text-amber-400 font-light text-base min-w-fit tracking-wide'>
                    {item.time}
                  </div>
                  <div className='flex-1 pb-6 border-b border-amber-200/10'>
                    <p className='text-gray-300 font-light'>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 18 Roses */}
          <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl border border-amber-200/20 p-8 md:p-12'>
            <h3 className='text-xl md:text-2xl font-light text-amber-200 tracking-widest uppercase text-center mb-8'>
              18 Roses
            </h3>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-3'>
              {Array(18).fill(0).map((_, i) => (
                <div key={i} className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-amber-200/20 hover:border-amber-200/40 transition-colors text-center'>
                  <p className='text-amber-600/60 text-xs tracking-widest uppercase'>Rose {i + 1}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 18 Candles & 18 Treasures */}
          <div className='grid md:grid-cols-2 gap-8'>
            {/* 18 Candles */}
            <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl border border-amber-200/20 p-8'>
              <h3 className='text-lg md:text-xl font-light text-amber-200 tracking-widest uppercase text-center mb-6'>
                18 Candles
              </h3>
              <div className='grid grid-cols-3 gap-3'>
                {Array(18).fill(0).map((_, i) => (
                  <div key={i} className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 border border-amber-200/20 hover:border-amber-200/40 transition-colors text-center'>
                    <p className='text-amber-600/60 text-xs tracking-widest uppercase'>Candle {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 18 Treasures */}
            <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl border border-amber-200/20 p-8'>
              <h3 className='text-lg md:text-xl font-light text-amber-200 tracking-widest uppercase text-center mb-6'>
                18 Treasures
              </h3>
              <div className='grid grid-cols-3 gap-3'>
                {Array(18).fill(0).map((_, i) => (
                  <div key={i} className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 border border-amber-200/20 hover:border-amber-200/40 transition-colors text-center'>
                    <p className='text-amber-600/60 text-xs tracking-widest uppercase'>Treasure {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dress Code & Gift Guide */}
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Dress Code */}
            <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl border border-amber-200/20 p-8'>
              <h3 className='text-lg md:text-xl font-light text-amber-200 tracking-widest uppercase text-center mb-6'>
                Dress Code
              </h3>
              <p className='text-gray-400 text-center mb-6 font-light text-sm'>
                Semi-formal Attire
              </p>
              <div className='space-y-4'>
                <div>
                  <h4 className='text-amber-300 font-light text-sm mb-2'>For Women</h4>
                  <p className='text-gray-400 text-xs font-light'>Evening gown or cocktail dress</p>
                </div>
                <div>
                  <h4 className='text-amber-300 font-light text-sm mb-2'>For Men</h4>
                  <p className='text-gray-400 text-xs font-light'>Suit, dress shirt, and tie or barong</p>
                </div>
              </div>
            </div>

            {/* Gift Guide */}
            <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl border border-amber-200/20 p-8'>
              <h3 className='text-lg md:text-xl font-light text-amber-200 tracking-widest uppercase text-center mb-6'>
                Gift Guide
              </h3>
              <p className='text-gray-400 text-center mb-6 font-light text-sm'>
                Your presence is the greatest gift
              </p>
              <ul className='space-y-2 text-gray-400 font-light text-xs'>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-500'>✦</span>
                  <span>Monetary gift</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-500'>✦</span>
                  <span>A thoughtful letter</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-amber-500'>✦</span>
                  <span>A special token</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RSVP Info */}
          <div className='text-center py-8 border-t border-amber-200/20'>
            <p className='text-gray-400 font-light mb-3'>Please RSVP on or before</p>
            <p className='text-amber-300 text-lg font-light tracking-wide'>May 20, 2026</p>
          </div>
        </div>
      )}
    </div>
  )
}
