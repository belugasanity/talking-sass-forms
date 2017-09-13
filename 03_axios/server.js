// module.exports = function (req, res) {
//   var data = '';
  
//   req.on('data', function (chunk) {
//     data += chunk;
//   });

//   req.on('end', function () {
//     console.log('POST data received');
//     res.writeHead(200, {
//       'Content-Type': 'text/json'
//     });
//     res.write(JSON.stringify(data));
//     res.end();
//   });
// };


//////////////////////

document.getElementById('post').onclick = function(){
  console.log("click");
  // var qs = require(['../../qs/dist/qs']);
  var params = new URLSearchParams();
  params.append(name, document.getElementById('name').value);
  params.append(email, document.getElementById('email').value);
  params.append(message, document.getElementById('message').value);

  axios.post('http://dgm3760.austinbroadhead.com/proj2/talking-sass-forms/03_axios/contact.php',
  params).then(function(response){
    console.log("done");
    console.log('response', response);
    document.getElementById('formMessages').innerHTML = "Success";
  });
}


// console - "qs.stringify is not a function"
// qs.stringify({
//       name: document.getElementById('name').value,
//       email: document.getElementById('email').value,
//       message: document.getElementById('message').value

//   })