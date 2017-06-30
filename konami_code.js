const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', e=>{
    var key = parseInt(e.which||e.detail);
    if(key === code[index]){
      index++;
    }else{
      index = 0;
    }
    if(index >= code.length){
      alert('Secret!');
      index = 0;
    }
  });
}

//init();
