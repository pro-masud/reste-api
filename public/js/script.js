const userphoto = document.querySelector(".userPhoto");
const userphotopreview = document.querySelector(".userPhotoPreview");

userphoto.onchange = (e) => {
  const imageUrl = URL.createObjectURL(e.target.files[0]);
  userphotopreview.setAttribute("src", imageUrl);
};