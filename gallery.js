 function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("show");
    }
    function scrollLeft(rowId) {
      document.getElementById(rowId).scrollBy({
        left: -600,
        behavior: 'smooth'
      });
    }
    function scrollRight(rowId) {
      document.getElementById(rowId).scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }


function scrollGallery(direction) {
  const gallery = document.getElementById('gallery');
  const scrollAmount = 400; 
  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}