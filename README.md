# Cloudinary Vue Demo

## Purpose
In the final capstones for Tech Elevator, I've encountered groups that use the Cloudinary API for image uploading. I found there were a few points of confusion (primarily, whether you needed to use npm to install Cloudinary packages or not). I also wanted to play around with Vue 3 (the curriculum has just switched over, so we're using Vite now).

I chose to implement this without the npm install, and also chose to use the unsigned upload option. It would definitely be more secure to use the signed version, but that would require setting up an endpoint on a server application, and I wanted to keep this focused on the front-end.

## Pre-requisites
In order to run this, there are a few pre-requisites. This should be platform-independent and run on Windows, MacOS, or Linux. Please ensure you have, or install, the following tools:
* [Visual Studio Code](https://code.visualstudio.com/)
  * Not required, but I suggest adding in the [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension
* [Node/NPM](https://nodejs.org/en/download)
* [Windows Terminal](https://apps.microsoft.com/detail/9N0DX20HK701?hl=en-us&gl=US)
* [Git Bash](https://git-scm.com/downloads)
  * During installation, select the option to add a Git Bash profile to your Windows Terminal

## What changes do you need to make?
The main change you need to make is to the file **.env** in the main root directory. This contains environment variables. I created two that are important:
* **VITE_CLOUDINARY_CLOUD_NAME** : You can acquire this by signing up for a free account at Cloudinary. This indicates the cloud name you are using (basically, a folder). Unless you are doing extra work on the back-end to handle signed uploads, you can safely ignore the API Key and API Secret values. You can access this from the [Cloudinary Account Settings](https://console.cloudinary.com/settings/account) page. Note: a free account is limited, and you can only have a single cloud name per account. The cloud name can be copied and pasted, it will be a short character string. 
* **VITE_CLOUDINARY_CLOUD_UPLOAD** : You can choose to set certain options (in our case, the main thing to set is "unsigned" - [but there are a ton of cool features to explore](https://cloudinary.com/documentation/upload_presets) )! This will be a short character string.
 
## How do you run it?
After you clone this from Git, open the folder in Visual Studio Code. Open a Terminal window and run **npm install** (this only needs to be done once for the project). 

You can start the Vite web server by running **npm run dev** 
This will start a server on your computer on port 5173. 

## What are the important files?
| FILE | Description |
----------------------
| .env | Contains the cloud name and upload settings |
| src/App.vue | Main Vue file; contains link to Cloudinary view and Cloudinary CSS settings |
| .src/views/CloudView.vue | Central view that collates the Cloudinary components (right now, only upload component is added) - the view isn't required, but it helps modularize it |
| .src/components/CloudUploadComponent.vue | The code to handle the cloudinary upload  |
