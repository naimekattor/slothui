// for navbar
const handleNavbar = () => {
  const mobileNav = document.querySelector(".mobile-nav");
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
};
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", handleNavbar);
const navCross = document.querySelector(".nav-cross");
navCross.addEventListener("click", handleNavbar);

const mobileNavList = document.querySelector(".mobile-nav-list");
mobileNavList.addEventListener("click", handleNavbar);

// for testimonial
const testimonialData = [
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
    author: "X. AE_A-13",
    title: "Product Designer, SlothUI",
    imageUrl: "../images/testimonial/img1.png",
    id: "1",
  },
  {
    rating: 4,
    text: "Posuere una nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
    author: "Azunyan U. Wu",
    title: "CEO, nextlife.ai",
    imageUrl: "../images/testimonial/img2.png",
    id: "2",
  },
  {
    rating: 4,
    text: "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Voluptat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi.",
    author: "Mechatronics Yl",
    title: "CTO, fm4win.ai",
    imageUrl: "../images/testimonial/img3.png",
    id: "3",
  },
  {
    rating: 4,
    text: "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
    author: "Oarack Babama",
    title: "Former President of US",
    imageUrl: "../images/testimonial/img4.png",
    id: "4",
  },
  {
    rating: 4,
    text: "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
    author: "Saylor Twift",
    title: "Famous Singer",
    imageUrl: "../images/testimonial/img5.png",
    id: "5",
  },
  {
    rating: 5,
    text: "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi.",
    author: "Asuna Yuuki",
    title: "Virtual Swordsman",
    imageUrl: "../images/testimonial/img6.png",
    id: "6",
  },
  {
    rating: 3,
    text: "Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna et pharetra pharetra massa.",
    author: "Boe Jiden",
    title: "Former President Of Canada",
    imageUrl: "../images/testimonial/img7.png",
    id: "7",
  },
  {
    rating: 4,
    text: "Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Nec nam aliquam sem et tortor consequat id porta nibh. Viverra suspendisse. Lacus sed viverra tellus in hac habitasse platea dictumst. Elit at imperdiet dui accumsan.",
    author: "Vermillion D. Gray",
    title: "CEO, hacklife.ai",
    imageUrl: "../images/testimonial/img8.png",
    id: "8",
  },
  {
    rating: 5,
    text: "Viverra accumsan in nisl nisi scelerisque eu. Vitae congue eu consequat ac felis donec.",
    author: "Zuckman Wu",
    title: "CEO, tech4life.ai",
    imageUrl: "../images/testimonial/img9.png",
    id: "9",
  },
];
const testimonialContainer = document.getElementById("testimonial-container");

function createTestimonialCard(testimonial) {
  const card = document.createElement("div");
  card.className = "testimonial-card";

  const header = document.createElement("div");
  header.className = "testimonial-header";

  const image = document.createElement("img");
  image.src = testimonial.imageUrl;
  image.alt = `${testimonial.author}'s profile picture`;

  const authorInfo = document.createElement("div");
  const author = document.createElement("h3");
  author.className = "testimonial-author";
  author.textContent = testimonial.author;

  const title = document.createElement("p");
  title.className = "testimonial-title";
  title.textContent = testimonial.title;

  authorInfo.appendChild(author);
  authorInfo.appendChild(title);

  header.appendChild(image);
  header.appendChild(authorInfo);

  const text = document.createElement("p");
  text.className = "testimonial-text";
  text.textContent = testimonial.text;

  const rating = document.createElement("div");
  rating.className = "testimonial-rating";
  for (let i = 0; i < testimonial.rating; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "&#9733;"; // Full star
    rating.appendChild(star);
  }
  for (let i = testimonial.rating; i < 5; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "&#9734;"; // Empty star
    rating.appendChild(star);
  }
  card.appendChild(rating);
  card.appendChild(text);
  card.appendChild(header);

  return card;
}
testimonialData.forEach((testimonial) => {
  const card = createTestimonialCard(testimonial);
  testimonialContainer.appendChild(card);
});

// For Accordian
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-icon");

  header.addEventListener("click", () => {
    // Close other open items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherIcon = otherItem.querySelector(".accordion-icon");
        otherContent.style.display = "none";
        otherIcon.classList.remove("open");
      }
    });

    // Toggle the current item
    content.style.display === "none" || content.style.display === ""
      ? (content.style.display = "block")
      : (content.style.display = "none");
    icon.classList.toggle("open");
  });
});
