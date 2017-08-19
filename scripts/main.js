var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/tree.jpg') {
    myImage.setAttribute('src','images/flash.jpg');
  } else {
    myImage.setAttribute('src','images/tree.jpg');
  }
}
