const fs = require('fs');

// Cloudinary URLs provided by user
const cloudinaryUrls = {
  "Before the Bell Rings": "https://res.cloudinary.com/digjqqfju/image/upload/a_auto/v1753943337/Before_the_Bell_Rings_-_Chokling_Monastery_Himachal_India_2020_owjhjg.jpg",
  "Dance of Fire and Flesh": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944906/Dance_of_Fire_and_Flesh_-_Rajadamnern_Stadium_Bangkok_Thailand_2025_vj1gqy.jpg",
  "Face of the Frontier": "https://res.cloudinary.com/digjqqfju/image/upload/a_auto/v1753943339/Face_of_the_Frontier_-_Thang_Ladakh_India_2023_dgjmap.jpg",
  "Flames for the Infinite": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944884/Flames_for_the_Infinite_-_Varanasi_Uttar_Pradesh_India_2023_veajfe.jpg",
  "Grace Beneath the Spire": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944853/Grace_Beneath_the_Spire_-_Wat_Arun_Bankok_Thailand_2025_lfwkgk.jpg",
  "Oars Through Memory": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944970/Oars_Through_Memory_-_Srinagar_Kashmir_India_2022_f9pru8.jpg",
  "Peace Between Peaks": "https://res.cloudinary.com/digjqqfju/image/upload/v1753943339/Peace_Between_Peaks_-_Diskit_Monastery_Ladakh_2023_cwvvsg.jpg",
  "Petals, Prayers, and Paper Lanterns": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944929/Petals_Prayers_and_Paper_Lanterns_-_Talat_Noi_Chinatown_Thailand_2025_tfanfh.jpg",
  "Reflections of Solitude": "https://res.cloudinary.com/digjqqfju/image/upload/a_auto/v1753943338/Reflections_of_Solitude_-_Nubra_Valley_Ladakh_India_2023_z9uajz.jpg",
  "Sentinel of the Silence": "https://res.cloudinary.com/digjqqfju/image/upload/v1753943339/Sentinel_of_the_Silence_-_Pulga_Valley_Ladakh_India_2023_an9eri.jpg",
  "Still Lake, Moving Soul": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944818/Still_Lake_Moving_Soul_-_Dal_Lake_Kashmir_India_2022_jewiky.jpg",
  "Stillness Beyond the Clouds": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944789/Stillness_Beyond_the_Clouds_-_Stok_Ladakh_India_2023_anwnep.jpg",
  "Sun-Dried Heritage": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944757/Sun-Dried_Heritage_-_Turtuk_Ladakh_India_2023_mokrvl.jpg",
  "The River Remembers": "https://res.cloudinary.com/digjqqfju/image/upload/v1753943339/The_River_Remembers_-_Kasol_Himachal_India_2020_zofbmg.jpg",
  "Tied to the Wind, Bound to the Moment": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944672/Tied_to_the_Wind_Bound_to_the_Moment_-_Sinquerim_Beach_Goa_India_2024_wylfxk.jpg",
  "Weightless in the Wind": "https://res.cloudinary.com/digjqqfju/image/upload/v1753943340/Weightless_in_the_Wind_-_Bir_Himachal_India_2020_pni1sk.jpg",
  "Where Blue Holds Its Breath": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944729/Where_Blue_Holds_Its_Breath_-_Nang_Yuan_Island_Koh_Tao_Thailand_2025_njo1lh.jpg",
  "Where Heaven Touches Earth": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944611/Where_Heaven_Touches_Earth_-_Sonamarg_Kashmir_India_2022_mfjbi8.jpg",
  "Where the River Forgets the Land": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944705/Where_the_River_Forgets_the_Land_-_Cola_Beach_Goa_India_2024_e8lonu.jpg",
  "Where the Sky Drinks Blue": "https://res.cloudinary.com/digjqqfju/image/upload/v1753943340/Where_the_Sky_Drinks_Blue_-_Pangong_Tso_Ladakh_India_2023_xm4fhf.jpg",
  "Whispers in the Pines": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944568/Whispers_in_the_Pines_-_Gulmarg_Kashmir_India_2022_abwfvv.jpg",
  "Wood Carves the Infinite": "https://res.cloudinary.com/digjqqfju/image/upload/v1753944320/Wood_Carves_the_Infinite_-_Sanctuary_of_Truth_Pattaya_Thailand_2025_axhigd.jpg"
};

function updatePhotoUrls() {
  try {
    // Read current photo data
    const photoData = JSON.parse(fs.readFileSync('./public/photo-data.json', 'utf8'));
    
    let updatedCount = 0;
    
    // Update each photo's src URL
    photoData.forEach(photo => {
      if (cloudinaryUrls[photo.title]) {
        photo.src = cloudinaryUrls[photo.title];
        updatedCount++;
        console.log(`✅ Updated: ${photo.title}`);
      } else {
        console.log(`⚠️  No URL found for: ${photo.title}`);
      }
    });
    
    // Write updated photo data
    fs.writeFileSync('./public/photo-data.json', JSON.stringify(photoData, null, 2));
    
    console.log(`\n🎉 Successfully updated ${updatedCount} photos with Cloudinary URLs!`);
    console.log('📁 Updated photo-data.json');
    
  } catch (error) {
    console.error('❌ Error updating URLs:', error.message);
  }
}

// Run the update
updatePhotoUrls();