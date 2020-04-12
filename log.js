function validateForm () {
    var x = document.forms['myForm']['fname'].value
    var pw=document.forms['myForm']['password'].value
    if (x != '000000' && pw!='000000') {
      alert('Wrong log in messsage!')
      return false;
    }
    else{
        window.open("log-index.html");
    }
  }