// document.getElementById("header").innerHTML = `
//   <div class="navbar">
//     <div class="logo-title">
//       <img src="images/logo1.png" alt="College Logo" class="logo">
//       <h1>Sw. Narendra Singh Mahavidyalaya</h1>
//     </div>
//     <div class="menu-toggle" id="menu-toggle">☰</div>
//     <nav id="nav">
//       <ul>
//         <li><a href="index.html">Home</a></li>
//         <li><a href="about.html">About </a></li>
//         <li><a href="courses.html">Courses</a></li>
//         <li><a href="notices.html">Notices</a></li>
//         <li><a href="gallery.html">Gallery</a></li>
//         <li><a href="contact.html">Contact</a></li>
//       </ul>
//     </nav>
//   </div>
// `;
// NAVBAR: Toggle menu on mobile + close on link click
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    menuToggle.addEventListener('click', ()=> menu.classList.toggle('active'));
    // close menu when link clicked (mobile)
    document.querySelectorAll('a[data-link]').forEach(a=>{
      a.addEventListener('click', ()=> menu.classList.remove('active'));
    });

    // Smooth scroll for same-page anchors (if used later)
    document.querySelectorAll('a[href^="#"]').forEach(link=>{
      link.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth'});
      });
    });
document.getElementById("footer").innerHTML = `
  <p>&copy; 2025 Sw. Narendra Singh Mahavidyalaya | All Rights Reserved</p>
`;

// Hamburger Toggle
// common.js

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  // Toggle button click
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // On scroll, remove 'active' (close menu)
  window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});
