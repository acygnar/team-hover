(function () {
  console.log("work");
  const images = [];
  images[0] = "img/1.jpg";
  images[1] = "img/2.jpg";
  images[2] = "img/3.jpg";
  images[3] = "img/4.jpg";
  images[4] = "img/5.jpg";
  images[5] = "img/6.jpg";
  images[6] = "img/7.jpg";
  images[7] = "img/7.jpg";
  images[8] = "img/8.jpg";
  images[9] = "img/9.jpg";
  images[10] = "img/10.jpg";
  images[11] = "img/11.jpg";
  images[12] = "img/12.jpg";
  images[13] = "img/13.jpg";
  images[14] = "img/14.jpg";
  images[15] = "img/15.jpg";
  images[16] = "img/16.jpg";
  images[17] = "img/17.jpg";
  images[18] = "img/18.jpg";
  images[19] = "img/19.jpg";
  images[20] = "img/20.jpg";
  images[21] = "img/21.jpg";
  images[22] = "img/22.jpg";
  images[23] = "img/23.jpg";
  images[24] = "img/24.jpg";
  images[25] = "img/25.jpg";
  images[26] = "img/26.jpg";
  images[27] = "img/27.jpg";
  images[28] = "img/28.jpg";
  images[29] = "img/29.jpg";
  images[30] = "img/30.jpg";

  const txt = document.querySelector(".team__member-txt");

  const hoverMember = () => {
    const img = document.querySelector(".team__member img");
    const member = document.querySelector(".team__member");

    let interval;
    let interval2;
    let i = 0;

    member.addEventListener("mouseover", function () {
      clearInterval(interval2);
      console.log(i);
      interval = setInterval(changeImage, 20);
      txt.innerHTML = txt.dataset.txt2;
    });

    member.addEventListener("mouseout", function () {
      clearInterval(interval);
      console.log(i);
      interval2 = setInterval(backImage, 20);
      txt.innerHTML = txt.dataset.txt1;
    });

    function changeImage() {
      console.log("changeImage");
      if (i < images.length) {
        img.src = images[i];
        i++;
      }
    }
    function backImage() {
      if (i > 0) {
        i--;
        console.log(i);
        img.src = images[i];
      }
      if (i === 0) {
        clearInterval(interval2);
      }
    }
  };
  hoverMember();
})();
