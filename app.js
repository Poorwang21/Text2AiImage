// const token = "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";
// const inputTxt = document.getElementById("input");
// const images = [
//   document.getElementById("image1"),
//   document.getElementById("image2"),
//   document.getElementById("image3"),
//   document.getElementById("image4")
// ];
// const button = document.getElementById("btn");

// async function query(variation) {
//   return fetch("https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image", {
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//     method: "POST",
//     body: JSON.stringify({ "inputs": `${inputTxt.value} ${variation}` })
//   })
//   .then(response => response.blob())
//   .then(result => URL.createObjectURL(result));
// }

// button.addEventListener('click', async function() {
//   images.forEach(image => image.src = "loader.gif"); // Show loader for all images
//   const variations = ["A", "B", "C", "D"]; // Adding variations
//   Promise.all(variations.map((variation) => query(variation))).then(responses => {
//     responses.forEach((response, index) => {
//       images[index].src = response;
//     });
//   });
// });




const tocken= "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"
const inputTxt = document.getElementById("input")
const image= document.getElementById("image")
const button = document.getElementById("btn")

async function query() {
    image.src="loader.gif"
    const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
            headers: {
                Authorization: `Bearer ${tocken}`
                //"Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({"inputs":inputTxt.value}),
        }
    );
    const result = await response.blob();
    return result;
}
button.addEventListener('click',async function () {
    query().then((response) => {
        // Use image
        const objectURL =URL.createObjectURL(response)
        image.src= objectURL
    });
})

