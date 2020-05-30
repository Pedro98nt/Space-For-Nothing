let menuOpen = false;

function drawSpace1() {
  const canvas = document.getElementById("space");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(500, 0);
  ctx.bezierCurveTo(280, 150, 700, 240, 250, 500);
  ctx.lineTo(800, 500);
  ctx.lineTo(800, 0);

  ctx.closePath();

  ctx.strokeStyle = "#4d4d4d";
  ctx.fillStyle = "#4d4d4d";

  ctx.stroke();
  ctx.fill();
}

function drawSpace2() {
  const canvas = document.getElementById("space2");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(700, 200);
  ctx.bezierCurveTo(400, 120, 600, 350, 460, 500);
  ctx.lineTo(800, 500);
  ctx.lineTo(800, 0);

  ctx.closePath();

  ctx.strokeStyle = "#f7931e";
  ctx.fillStyle = "#f7931e";

  ctx.stroke();
  ctx.fill();
}

function drawSpace3() {
  const canvas = document.getElementById("space3");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(700, 300);
  ctx.bezierCurveTo(500, 200, 650, 350, 460, 500);
  ctx.lineTo(800, 500);
  ctx.lineTo(800, 0);

  ctx.closePath();

  ctx.strokeStyle = "#fba41c";
  ctx.fillStyle = "#fba41c";

  ctx.stroke();
  ctx.fill();
}

function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const menuBar = document.querySelector('.nothing-menu-bar');
  
  menuOpen = !menuOpen;
  
  if (menuOpen) {
    menuIcon.classList.add('menu-icon--open');
    menuBar.classList.add('nothing-menu-bar--open');
    return;
  }
  
  menuIcon.classList.remove('menu-icon--open');
  menuBar.classList.remove('nothing-menu-bar--open');
  return;
}

drawSpace1();
drawSpace2();
drawSpace3();