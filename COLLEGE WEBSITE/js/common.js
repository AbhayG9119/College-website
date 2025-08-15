document.getElementById("header").innerHTML = `
  <div class="navbar">
    <div class="logo-title">
      <img src="images/logo1.png" alt="College Logo" class="logo">
      <h1>Sw. Narendra Singh Mahavidyalaya</h1>
    </div>
    <div class="menu-toggle" id="menu-toggle">☰</div>
    <nav id="nav">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="notices.html">Notices</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
`;

document.getElementById("footer").innerHTML = `
  <p>&copy; 2025 Sw. Narendra Singh Mahavidyalaya | All Rights Reserved</p>
`;

// Hamburger Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
