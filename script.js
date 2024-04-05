const boxes = document.querySelectorAll('.info-box');

boxes.forEach((box) => {
    const colorId = box.id;
    box.style.backgroundColor = colorId;
});