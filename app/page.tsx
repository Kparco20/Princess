'use client'

import { useState } from 'react'
import MailInvitation from '@/components/MailInvitation'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div><h1 className="text-5xl md:text-6xl font-light text-white tracking-wide">
            You are Invited
          </h1></div>

      <div className="w-full max-w-2xl space-y-8 z-10">
        {/* Instructions Text */}
        <div className="text-center">
          <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase font-light">
            Click the envelope to open your
            <br />
            <span className="text-amber-200">invitation</span>
          </p>
        </div>

        {/* Mail Invitation Section */}
        <MailInvitation />

        {/* Debutant Info Section - Below Envelope */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-amber-500/20 rounded-lg p-12 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-white tracking-wide">
            Princess Nicole
          </h1>
          
          <div className="space-y-2">
            <p className="text-amber-400 text-sm tracking-widest font-light uppercase">
              Turns
            </p>
            <p className="text-7xl md:text-8xl font-light text-white" style={{
              fontFamily: 'serif',
              letterSpacing: '0.05em'
            }}>
              18
            </p>
          </div>

          <p className="text-amber-600/70 text-base tracking-widest pt-4 font-light">
            06.10.2026
          </p>
        </div>
      </div>
    </main>
  )
}
