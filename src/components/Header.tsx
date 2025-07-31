'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const [time, setTime] = useState('')
  const [weather, setWeather] = useState('Loading...')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Apply dark mode to document
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    // Update time every minute
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        hour12: true
      })
      setTime(timeString)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 60000)

    // Fetch weather data for India using Open-Meteo (completely free!)
    const fetchWeather = async () => {
      try {
        // Using coordinates for India (New Delhi as representative)
        // Open-Meteo is completely free, no API key required!
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,weather_code,is_day&timezone=auto`
        )
        
        if (response.ok) {
          const data = await response.json()
          const temp = Math.round(data.current.temperature_2m)
          const isDay = data.current.is_day
          const weatherCode = data.current.weather_code
          
          // Choose icon based on time of day and weather
          const getWeatherIcon = (code: number, isDay: boolean) => {
            if (code === 0) return isDay ? '☀️' : '🌙'
            if (code <= 3) return isDay ? '⛅' : '☁️'
            if (code <= 48) return '🌫️'
            if (code <= 57) return '🌦️'
            if (code <= 67) return '🌧️'
            if (code <= 77) return '❄️'
            if (code <= 82) return '🌦️'
            if (code <= 86) return '🌨️'
            if (code >= 95) return '⛈️'
            return isDay ? '☀️' : '🌙'
          }
          
          const icon = getWeatherIcon(weatherCode, isDay)
          setWeather(`${icon} ${temp}°C`)
        } else {
          // Fallback if API fails
          const hour = new Date().getHours()
          const icon = hour >= 18 || hour < 6 ? '🌙' : '☀️'
          setWeather(`${icon} 28°C`)
        }
      } catch (error) {
        // Fallback if API fails
        const hour = new Date().getHours()
        const icon = hour >= 18 || hour < 6 ? '🌙' : '☀️'
        setWeather(`${icon} 28°C`)
      }
    }

    fetchWeather()
    // Update weather every 10 minutes
    const weatherInterval = setInterval(fetchWeather, 600000)

    return () => {
      clearInterval(timeInterval)
      clearInterval(weatherInterval)
    }
  }, [])

  return (
    <header className="border-b border-gray-100 dark:border-[#303030] dark:bg-[#1C1C1C] transition-colors">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
            Dawn Seban
          </Link>
          <div className="flex items-center justify-end space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{time} India {weather}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-[#1C1C1C] transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 