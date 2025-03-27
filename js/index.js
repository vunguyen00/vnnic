function toggleDropdown(id) {
  const dropdownResources = document.getElementById("dropdown-resources");
  const dropdownInfra = document.getElementById("dropdown-infra");

  if (id === "dropdown-resources") {
    dropdownResources.classList.toggle("show");

    dropdownInfra.classList.remove("show");
  } else {
    dropdownInfra.classList.toggle("show");

    dropdownResources.classList.remove("show");
  }
}
function toggleMobileMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
function showStats(id, clickedLink) {
  // 1. Ẩn toàn bộ phần nội dung
  document.querySelectorAll(".stats-content").forEach((section) => {
    section.style.display = "none";
  });

  // 2. Hiển thị phần được chọn
  document.getElementById(id).style.display = "block";

  // 3. Đặt màu chữ của tất cả các link thành xám
  document.querySelectorAll(".nav.nav-pills a").forEach((a) => {
    a.style.color = "gray";
  });

  // 4. Tô màu xanh cho link vừa được click
  if (clickedLink) {
    clickedLink.style.color = "#0073e6";
  }
}

// Khi trang tải xong, mặc định hiển thị phần "Tên miền .vn" và tô màu xanh
document.addEventListener("DOMContentLoaded", function () {
  const defaultLink = document.querySelector('[data-target="domainStats"]');
  if (defaultLink) {
    showStats("domainStats", defaultLink);
  }
});
