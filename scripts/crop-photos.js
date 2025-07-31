const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PHOTOS_DIR = './public/photos';
const OUTPUT_DIR = './public/photos'; // Will overwrite originals, or change to create copies

async function cropPhotosTo4x5() {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const photoFiles = fs.readdirSync(PHOTOS_DIR)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort();

    if (photoFiles.length === 0) {
      console.log('No photo files found in', PHOTOS_DIR);
      return;
    }

    console.log(`Found ${photoFiles.length} photos to crop to 4:5 ratio...\n`);

    for (const filename of photoFiles) {
      try {
        const inputPath = path.join(PHOTOS_DIR, filename);
        const outputPath = path.join(OUTPUT_DIR, filename);
        
        // Get image metadata
        const { width, height } = await sharp(inputPath).metadata();
        
        // Calculate 4:5 crop dimensions
        const targetRatio = 4 / 5; // width/height for 4:5
        let cropWidth, cropHeight, left, top;
        
        if (width / height > targetRatio) {
          // Image is too wide, crop width
          cropHeight = height;
          cropWidth = Math.round(height * targetRatio);
          left = Math.round((width - cropWidth) / 2);
          top = 0;
        } else {
          // Image is too tall, crop height
          cropWidth = width;
          cropHeight = Math.round(width / targetRatio);
          left = 0;
          top = Math.round((height - cropHeight) / 2);
        }
        
        // Crop and save
        await sharp(inputPath)
          .extract({ 
            left: left, 
            top: top, 
            width: cropWidth, 
            height: cropHeight 
          })
          .jpeg({ quality: 90 }) // High quality output
          .toFile(outputPath);
        
        console.log(`✅ Cropped: ${filename} (${width}x${height} → ${cropWidth}x${cropHeight})`);
        
      } catch (error) {
        console.log(`❌ Error cropping ${filename}:`, error.message);
      }
    }
    
    console.log(`\n🎉 Finished cropping ${photoFiles.length} photos to 4:5 ratio!`);
    console.log('📁 Cropped photos saved to:', OUTPUT_DIR);
    
  } catch (error) {
    console.error('Error during cropping process:', error);
  }
}

// Add script to package.json if run directly
if (require.main === module) {
  cropPhotosTo4x5();
}

module.exports = cropPhotosTo4x5;