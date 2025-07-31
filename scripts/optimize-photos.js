const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PHOTOS_DIR = './public/photos';
const OUTPUT_DIR = './public/photos-optimized'; // Create optimized versions first

async function optimizePhotos() {
  try {
    // Create output directory
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

    console.log(`Found ${photoFiles.length} photos to optimize...\n`);

    for (const filename of photoFiles) {
      try {
        const inputPath = path.join(PHOTOS_DIR, filename);
        const outputPath = path.join(OUTPUT_DIR, filename);
        
        // Get original file size
        const originalStats = fs.statSync(inputPath);
        const originalSizeMB = (originalStats.size / (1024 * 1024)).toFixed(2);
        
        // Skip if already optimized
        if (fs.existsSync(outputPath)) {
          console.log(`⏭️  Skipping ${filename} (already optimized)`);
          continue;
        }
        
        // Optimize image
        await sharp(inputPath)
          .resize(1200, 1500, { // Max dimensions for 4:5 ratio
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ 
            quality: 85,
            progressive: true,
            mozjpeg: true
          })
          .toFile(outputPath);
        
        // Get optimized file size
        const optimizedStats = fs.statSync(outputPath);
        const optimizedSizeMB = (optimizedStats.size / (1024 * 1024)).toFixed(2);
        const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
        
        console.log(`✅ ${filename}`);
        console.log(`   ${originalSizeMB}MB → ${optimizedSizeMB}MB (${savings}% smaller)\n`);
        
      } catch (error) {
        console.log(`❌ Error optimizing ${filename}:`, error.message);
      }
    }
    
    console.log(`🎉 Finished optimizing ${photoFiles.length} photos!`);
    console.log(`📁 Optimized photos saved to: ${OUTPUT_DIR}`);
    console.log(`\n💡 To use optimized photos:`);
    console.log(`   1. Backup your originals: mv public/photos public/photos-original`);
    console.log(`   2. Use optimized versions: mv public/photos-optimized public/photos`);
    console.log(`   3. Regenerate data: npm run generate-photos`);
    
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

// Add script to package.json if run directly
if (require.main === module) {
  optimizePhotos();
}

module.exports = optimizePhotos;