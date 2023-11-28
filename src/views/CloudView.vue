<template>
  <div class="about">
    <h1>Demonstration of Cloudinary Features</h1>
    <cloud-upload-component />
  </div>
</template>

<script>
// @ is an alias to /src
import CloudUploadComponent from '@/components/CloudUploadComponent.vue'

export default {
  name: 'CloudView',
  components: {
    CloudUploadComponent,
  },
  data(){
      return{
      }
  },
  created() {
  }
  
}
</script>