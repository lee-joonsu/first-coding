const images = ["0.jpg", "1.jpg", "2.jpg"]; //이 Array에 있는 이름들은 img 폴더에 있는 이미지들 이름임.

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; // 소스의 위치는 img 폴더의 chosenImage 변수에 있다는 의미.

document.body.appendChild(bgImage);