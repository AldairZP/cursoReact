import type { GiphyRandomResponse } from "../data/giphy.reponse";

const API_KEY = "fqYmUuFdO2BizH5B7FUJYhrgneLivFNI";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

// myRequest // sin interfaces
//   .then((response) => response.json())
//   .then((data) => {
//     const imageUrl = data.data.images.original.url;
//     console.log(imageUrl);
//     const imgElement = document.createElement("img");
//     imgElement.src = imageUrl
//     document.body.append(imgElement)
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement("img");
    imgElement.src = url
    document.body.append(imgElement)

}


myRequest
  .then((response) => response.json())
  .then(({data}: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl)
  })
  .catch((err) => {
    console.error(err);
  });
