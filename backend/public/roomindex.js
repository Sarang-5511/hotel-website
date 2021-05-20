AOS.init({
    duration: 1200
  });

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  document.getElementById("checkin").valueAsDate= new Date();