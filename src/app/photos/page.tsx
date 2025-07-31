'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  place: string;
  state?: string;
  country: string;
  flag: string;
  year: string;
  location: string;
  description: string;
  filename: string;
  fullLocation: string;
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        // Try to load generated photo data
        const response = await fetch('/photo-data.json');
        if (response.ok) {
          const data = await response.json();
          setPhotos(data);
        } else {
          // Fallback to sample data if no generated data exists
          setPhotos([
            {
              id: 1,
              src: "/photos/sample1.jpg",
              alt: "Sample photo",
              year: "2024",
              location: "Add your photos to /public/photos/",
              description: "Run 'npm run generate-photos' to auto-generate this data"
            }
          ]);
        }
      } catch (error) {
        // Fallback to sample data if fetch fails
        setPhotos([
          {
            id: 1,
            src: "/photos/sample1.jpg",
            alt: "Sample photo",
            year: "2024",
            location: "Add your photos to /public/photos/",
            description: "Run 'npm run generate-photos' to auto-generate this data"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-gray-500 dark:text-gray-400">Loading photos...</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
            ← Back to home
          </Link>
        </div>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Photos</h1>
            <p className="text-gray-600 dark:text-gray-400">Still frames from a moving mind</p>
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
          
          {/* Instructions */}
          <div className="text-center py-8 border-t border-gray-200 dark:border-[#303030]">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Add photos to <code className="bg-gray-100 dark:bg-[#1C1C1C] px-2 py-1 rounded text-xs">/public/photos/</code> and run <code className="bg-gray-100 dark:bg-[#1C1C1C] px-2 py-1 rounded text-xs">npm run generate-photos</code> to auto-populate
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

function PhotoCard({ photo }: { photo: Photo }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg overflow-hidden transition-all hover:shadow-lg">
        {/* Photo Container */}
        <div className="aspect-[4/5] bg-gray-200 dark:bg-[#2A2A2A] relative overflow-hidden">
          {!imageError ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              priority={photo.id <= 6}
              loading={photo.id > 6 ? "lazy" : "eager"}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7SNBlw0c0O/wCuuD9AeV8lI2v8z7nSP//Z"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <div className="text-sm">Photo placeholder</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Photo Info */}
        <div className="p-3 space-y-2">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
              {photo.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {photo.location}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                {photo.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 