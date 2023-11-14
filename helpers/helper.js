  // create random string id function
  
  export const  generateRandomId = (length = 12) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }
  

   // create name slug function

  export const createSlug = (name) =>{
    // Remove leading and trailing whitespaces
    name = name.trim();
  
    // Replace spaces with hyphens and convert to lowercase
    const slug = name.replace(/\s+/g, '-').toLowerCase();
  
    return slug;
  }
  
  // // Example usage:
  // const productName = "My Awesome Product";
  // const productSlug = generateProductSlug(productName);
  // console.log(productSlug); // Output: "my-awesome-product"
  