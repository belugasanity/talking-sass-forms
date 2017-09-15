//js for using axios to post to contact.php 

document.getElementById('post').onclick = function(){
  console.log("click");
  var params = new URLSearchParams();
  params.append('name', document.getElementById('name').value);
  params.append('email', document.getElementById('email').value);
  params.append('message', document.getElementById('message').value);
  console.log(params);

  axios.post('http://dgm3760.austinbroadhead.com/proj2/talking-sass-forms/03_axios/contact.php',
  params).then(function(response){
    console.log("done");
    console.log('response', response);
    document.getElementById('formMessages').innerHTML = "Message Sent!";
  });
}
