<template>
  <div class="cloud upload">
    <button v-on:click="display">Test Cloudinary Display Images</button><br />
    <div id="cloud-images"></div>
    <div id="my-gallery"></div>
  </div>
</template>

<script>

export default {
    name: 'CloudinaryDisplayComponent',
    methods: {
        display(){
          // This is the product gallery display widget through Cloudinary
          // More documentation here: https://cloudinary.com/documentation/product_gallery
          const displayWidget = cloudinary.galleryWidget({
              container: "#cloud-images",
              // Setting the values from the .env file; could be done manually if preferred
              // These values can be obtained through the Cloudinary site
//              cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
              cloudName: "dzy111gp8",              
              // Full list of options for the parameters can be found here
              // Can be filtered by media type, image tags, etc 
              // https://cloudinary.com/documentation/product_gallery_reference#parameters
              // mediaAssets: [{tag: "cat"}]
              mediaType: "image"
            });

            console.log(displayWidget);

            const myGallery= cloudinary.galleryWidget({
           container: "#my-gallery",
          cloudName: "demo",
          mediaAssets: [
            {tag: "electric_car_product_gallery_demo"}, // by default mediaType: "image"
            {tag: "electric_car_product_gallery_demo", mediaType: "video"}, 
            {tag: "electric_car_360_product_gallery_demo", mediaType: "spin"}
  ]
});

myGallery.render();

            displayWidget.render();

        }
    }
}
</script>

<style>

</style>