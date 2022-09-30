// const elem = document.getElementById("body");
// console.log("Paso", elem);
// elem.addEventListener("onload", generaImg());
window.generaImg = function generaImg() {
  // alert("Cargar.......");
  // const imgTop = document.getElementById("imgTop");
  // imgTop.src="./assets/img/Picas1.png";

  let num = Math.floor((Math.random() * 13) + 1);
  let img = Math.floor((Math.random() * 4) + 1);
  let numCar = "";
  let archImgTop = '';
  let archImgBottom = '';

  const imgTop1 = document.getElementById("imgTop");
  imgTop1.src=archImgTop;

  const imgBottom1 = document.getElementById("imgBottom");
  imgBottom1.src=archImgBottom;

  const numFinal1 = document.querySelector("p");
  numFinal1.innerText = numCar;

  switch (num) {
      case 1:
          numCar = 'A';
          break;
      case 11:
          numCar = 'J';
          break;
      case 12:
          numCar = 'Q';
          break;
      case 13:
          numCar = 'K';
          break;
      default:
          numCar = num;
          break;
  }
  switch (img) {
      case 1:
          archImgTop = './assets/img/Picas1.png';
          archImgBottom = './assets/img/Picas2.png';
          break;
      case 2:
          archImgTop = './assets/img/Trebol1.png';
          archImgBottom = './assets/img/Trebol2.png';
          break;
      case 3:
          archImgTop = './assets/img/corazon1.png';
          archImgBottom = './assets/img/corazon2.png';
          break;
      case 4:
          archImgTop = './assets/img/rombo1.png';
          archImgBottom = './assets/img/rombo1.png';
          break;
      default:
          archImgTop = '';
          archImgBottom = '';
          break;
  }
  const imgTop = document.getElementById("imgTop");
  imgTop.src=archImgTop;

  const imgBottom = document.getElementById("imgBottom");
  imgBottom.src=archImgBottom;

  const numFinal = document.querySelector("p");
  numFinal.innerText = numCar;

}
