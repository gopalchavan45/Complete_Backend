import { ImageKit } from "@imagekit/nodejs/client.js";
const imageKitInstance = new ImageKit({
   
    privateKey: "private_EB6x4XXgBrifxVt/JMO0UQUScbU=",
    
});

async function uploadImage(buffer) {
    try {
        const response = await imageKitInstance.files.upload({
            file: buffer.toString("base64"),
            fileName: "image.jpg"
        });
        return response.url;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}
export default uploadImage;