const reviews = [
    {
      name: "Nirmal Gandher",
      role: "MERN Stack DEVELOPER",
      image: "assets/profile.jpeg",
      text: "Crafting dynamic web solutions with MongoDB, Express, React, and Node.js – turning ideas into scalable applications"
    },
    {
      name: "Anna Johnson",
      role: "UX DESIGNER",
      image: "assets/amna.jpg",
      text: "Crafting dynamic web solutions with MongoDB, Express, React, and Node.js – turning ideas into scalable applications."
    },
    {
      name: "Peter Brown",
      role: "SOFTWARE ENGINEER",
      image: "assets/img2.jpg",
      text: "Crafting dynamic web solutions with MongoDB, Express, React, and Node.js – turning ideas into scalable applications."
    },
    {
      name: "Emily Davis",
      role: "DATA ANALYST",
      image: "assets/img3.jpg",
      text: "Crafting dynamic web solutions with MongoDB, Express, React, and Node.js – turning ideas into scalable applications"
    },
    {
      name: "John Doe",
      role: "PRODUCT MANAGER",
      image: "assets/img4.jpg",
      text: "Crafting dynamic web solutions with MongoDB, Express, React, and Node.js – turning ideas into scalable applications."
    }
  ];
  
  let currentIndex = 0;
  
  const profileImg = document.querySelector(".profile-img");
  const nameText = document.querySelector(".name");
  const roleText = document.querySelector(".role");
  const reviewText = document.querySelector(".review-text");
  
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function updateReview(index) {
    const { name, role, image, text } = reviews[index];
    profileImg.src = image;
    nameText.textContent = name;
    roleText.textContent = role;
    reviewText.textContent = text;
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview(currentIndex);
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview(currentIndex);
  });
  
  // Initialize with the first review
  updateReview(currentIndex);
  