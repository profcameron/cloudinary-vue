<template>
  <div class="cloud upload">
    <button v-on:click="upload">Test Cloudinary Upload</button><br />
  </div>
</template>

<script>
//import cloudService from '@/services/CloudService';

export default {
    name: 'CloudinaryUploadComponent',
    methods: {
        upload(){
          // This is the upload widget through Cloudinary; this demo uses an unsigned version for simplicity
          // This means anyone with some technical can look up our cloud name and upload to our demo site
          // Obviously not good from a security perspective!
          // We could set up an endpoint in a Java application to generate a signature if we wanted to be more
          // secure, but this demo is intended to show this as simply as possible.
          // More documentation here: https://cloudinary.com/documentation/upload_widget
          let uploadWidget = cloudinary.createUploadWidget({
              // Setting the values from the .env file; could be done manually if preferred
              // These values can be obtained through the Cloudinary site
              cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
              uploadPreset: import.meta.env.VITE_CLOUDINARY_CLOUD_UPLOAD,
              // sources allows us to choose where the Cloudinary app gets files from
              // in this case, going to only allow file upload, URL, or camera image
              // Full list can be found on the Cloudinary documentation site linked above
              sources: ['local', 'url', 'camera']
            }, (error, result) => { 
                if (!error && result && result.event === "success") { 
                    console.log('Done! Here is the image info: ', result.info); 
                    console.log("Image URL: " + result.info.url);
                    window.alert("Successful upload!");
                }
            });

            let text = "Allow access to Photos and Camera";
            if (confirm(text) == true) {
                console.log("Opening")
              uploadWidget.open();
            } else {
               alert("You canceled!");
             }
        }
    }
}
</script>

<style>

</style>