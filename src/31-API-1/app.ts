// lev1_1

fetch("https://picsum.photos/v2/list")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(`Fehler: ${err}`));


// lev2_1

interface IPhoto {
  author: string
  download_url: string
  height: number
  id: string
  url: string
  width: number
}

fetch("https://picsum.photos/v2/list")
.then((res) => res.json())
.then((data: IPhoto[]) => {
    console.log(data);
    data.forEach(beitrag => {
        console.log(beitrag);

        const author = beitrag.author;
        const image = beitrag.download_url;

        // entweder so:
        // const wrapper = document.createElement("figure");

        // const imgOfBeitrag = document.createElement("img");
        // imgOfBeitrag.setAttribute("src", image);
        // wrapper.appendChild(imgOfBeitrag);

        // const authorOfBeitrag = document.createElement("figcaption");
        // authorOfBeitrag.textContent = author;
        // wrapper.appendChild(authorOfBeitrag);

        // document.querySelector("main").appendChild(wrapper);

        // oder so:
        const inhalt = `<figure><img src="${image}"><figcaption>${author}</figcaption></figure>`;
        document.querySelector("main")!.insertAdjacentHTML("beforeend", inhalt);
    });
})
.catch((err) => console.log(`Fehler: ${err}`));


// dummyjson API

interface IProduct {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    const products: IProduct[] = data.products;

    products.forEach(product => {
        const name = product.title;
        const description = product.description;
        // const category = product.category;
        const brand = product.brand;
        const price = product.price;
        // const image = product.images[0];

        const htmlNewProduct = `<article><h2>${name}</h2><h3>${brand}</h3><p>${description}</p><h5>${price}</h5></article>`;

        document.querySelector("section")!.insertAdjacentHTML("beforeend", htmlNewProduct);
    });
})
.catch((err) => console.log(`Fehler: ${err}`));


// fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
// .then(res => res.json())
// .then(console.log);