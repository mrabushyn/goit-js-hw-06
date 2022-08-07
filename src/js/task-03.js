const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const addImages = (images) => {
const listGallery = document.querySelector(".gallery");
const markup = images
    .map(
        (technology) =>
            `<li> <img 
            src=${technology.url} 
            alt='${technology.alt}' 
            width="860">
                        </li>`
    )
    .join("");

listGallery.insertAdjacentHTML("beforeend", markup);

const body = document.querySelector("body");
body.insertAdjacentHTML("beforebegin", "<style></style>");

const listStyle = document.querySelector(".gallery");
listStyle.style.listStyle = "none";
listStyle.style.padding = "15px";
console.log(body);
}
addImages(images);