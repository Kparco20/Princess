'use client'

import { useState } from 'react'

interface DebutantProps {
  name: string
  image: string
}

export default function Debutant({ name, image }: DebutantProps) {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold text-pink-600">{name}</h1>
      <p className="text-gray-600 text-lg">is turning 18!</p>
    </div>
  )
}
