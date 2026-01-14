fetch("navbar.html")
  .then(res => res.text())
  .then(html => {
    // 1. แปะ Navbar ลงไปในหน้าเว็บ
    document.getElementById("navbar").innerHTML = html;

    // 2. 🔥 หลังจากแปะเสร็จ ให้เช็คทันทีว่าอยู่หน้าไหน
    const currentUrl = window.location.href; // ลิงก์ของหน้าปัจจุบัน
    const navLinks = document.querySelectorAll('.nav-center a, .nav-item'); // ปุ่มเมนูทั้งหมด

    navLinks.forEach(link => {
      // ถ้าลิงก์ของปุ่ม ตรงกับ ลิงก์หน้าปัจจุบัน
      if (link.href === currentUrl) {
        link.classList.add('active'); // เติม Class active (เพื่อให้ CSS ทำงาน)
      }
    });

  });