'use client'

import React, { useState, useEffect } from 'react'

const LiveClock: React.FC = () => {
  const [now, setNow] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // mark as mounted (client) and start timer
    setMounted(true)
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // don't render anything on the server
  if (!mounted) {
    return null
  }

  const fullTime = now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  // If you really want to split a meridiem, note that with hour12:false
  // fullTime.split(' ') will just give [timeString]
  const timePart = fullTime

  // const dateString = now.toLocaleDateString([], {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // })

  return (
    <div className="flex flex-col w-fit items-start">
      <span className="lg:text-lg  lg:w-[132px] w-[97px]  opacity-50 lg:mb-3 mb-4"> {timePart}</span>
      {/* <span className="text-sm text-gray-600">{dateString}</span> */}
    </div>
  )
}

export default LiveClock
