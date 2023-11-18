export default{
    data() {
        return{
            uploadWidget: {}
        }
    },
    launchUploadWidget(){
        // the Cloudinary widget is technically part of the window, so the calls shown in the  
        this.uploadWidget = cloudinary.createUploadWidget({
            // Setting the values from the .env file; could be done manually if preferred
            // cloudName does not need to be set; this is set in the CloudView.vue
            // uploadPreset has a 
            uploadPreset: import.meta.env.VUE_APP_CLOUDINARY_CLOUD_UPLOAD,
            // sources allows us to choose where the Cloudinary app gets files from
            // in this case, going to only allow file upload, URL, or camera image
            sources: ['local', 'url', 'camera']
        }, (error, result) => { 
            if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                console.log("Image URL: " + result.info.url);
            }  
        });

        this.uploadWidget.open();
    }
}