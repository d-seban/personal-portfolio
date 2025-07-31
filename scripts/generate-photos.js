const fs = require('fs');
const path = require('path');
const ExifReader = require('exifreader');

// Country to flag emoji mapping
const countryFlags = {
  'India': '🇮🇳',
  'Thailand': '🇹🇭',
  'Nepal': '🇳🇵',
  'Bhutan': '🇧🇹',
  'Sri Lanka': '🇱🇰',
  'Myanmar': '🇲🇲',
  'China': '🇨🇳',
  'Japan': '🇯🇵',
  'South Korea': '🇰🇷',
  'Vietnam': '🇻🇳',
  'Cambodia': '🇰🇭',
  'Laos': '🇱🇦',
  'Indonesia': '🇮🇩',
  'Malaysia': '🇲🇾',
  'Singapore': '🇸🇬',
  'Philippines': '🇵🇭',
  'USA': '🇺🇸',
  'United States': '🇺🇸',
  'Canada': '🇨🇦',
  'Mexico': '🇲🇽',
  'UK': '🇬🇧',
  'United Kingdom': '🇬🇧',
  'France': '🇫🇷',
  'Germany': '🇩🇪',
  'Italy': '🇮🇹',
  'Spain': '🇪🇸',
  'Portugal': '🇵🇹',
  'Netherlands': '🇳🇱',
  'Switzerland': '🇨🇭',
  'Austria': '🇦🇹',
  'Australia': '🇦🇺',
  'New Zealand': '🇳🇿'
};

function parseFilename(filename) {
  // Remove extension
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  
  // Split by " - " to separate title from location info
  const parts = nameWithoutExt.split(' - ');
  if (parts.length < 2) {
    return null; // Invalid format
  }
  
  const title = parts[0].trim();
  const locationInfo = parts.slice(1).join(' - '); // In case title has " - " in it
  
  // Split location info by commas and get the last part as year
  const locationParts = locationInfo.split(',').map(part => part.trim());
  if (locationParts.length < 3) {
    return null; // Need at least place, country, year
  }
  
  const year = locationParts[locationParts.length - 1];
  const country = locationParts[locationParts.length - 2];
  
  let place, state;
  if (locationParts.length === 4) {
    // Format: Place, State, Country, Year
    place = locationParts[0];
    state = locationParts[1];
  } else if (locationParts.length === 3) {
    // Format: Place, Country, Year
    place = locationParts[0];
    state = null;
  } else {
    // More complex format, combine middle parts as place
    place = locationParts.slice(0, -2).join(', ');
    state = null;
  }
  
  const flag = countryFlags[country] || '🌍';
  
  return {
    title,
    place,
    state,
    country,
    year,
    flag,
    fullLocation: state ? `${place}, ${state}` : place
  };
}

// Install required packages: npm install exifreader

const PHOTOS_DIR = './public/photos';
const OUTPUT_FILE = './public/photo-data.json';

async function generatePhotoData() {
  try {
    const photoFiles = fs.readdirSync(PHOTOS_DIR)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort();

    const photoData = [];

    for (let i = 0; i < photoFiles.length; i++) {
      const filename = photoFiles[i];
      const filepath = path.join(PHOTOS_DIR, filename);
      
      try {
        // Parse filename for structured data
        const parsedData = parseFilename(filename);
        
        if (!parsedData) {
          console.log(`⚠️  Skipping ${filename}: doesn't match expected format (Title - Place, State, Country, Year)`);
          continue;
        }
        
        // Try to read EXIF data for additional metadata (optional)
        let exifData = null;
        try {
          const buffer = fs.readFileSync(filepath);
          const tags = ExifReader.load(buffer);
          exifData = {
            dateTime: tags.DateTime?.description || tags.DateTimeOriginal?.description,
            gpsLat: tags.GPSLatitude?.description,
            gpsLng: tags.GPSLongitude?.description
          };
        } catch (exifError) {
          // EXIF data is optional, continue without it
        }
        
        // Generate photo object with parsed filename data
        const photo = {
          id: i + 1,
          src: `/photos/${filename}`,
          alt: parsedData.title,
          title: parsedData.title,
          place: parsedData.place,
          state: parsedData.state,
          country: parsedData.country,
          flag: parsedData.flag,
          year: parsedData.year,
          location: `${parsedData.flag} ${parsedData.fullLocation}`,
          description: parsedData.title,
          filename: filename,
          fullLocation: parsedData.fullLocation,
          exif: exifData
        };
        
        photoData.push(photo);
        console.log(`✅ Processed: ${parsedData.title} (${parsedData.fullLocation}, ${parsedData.country} ${parsedData.flag})`);
        
      } catch (error) {
        console.log(`❌ Error processing ${filename}:`, error.message);
      }
    }
    
    // Save to JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(photoData, null, 2));
    console.log(`\nGenerated photo data for ${photoData.length} photos`);
    console.log(`Data saved to: ${OUTPUT_FILE}`);
    
    return photoData;
    
  } catch (error) {
    console.error('Error generating photo data:', error);
  }
}

generatePhotoData(); 