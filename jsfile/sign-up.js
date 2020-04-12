function validateForm () {
    var x = document.forms['myForm']['fname'].value
    var pw=document.forms['myForm']['password'].value
    var cpw=document.forms['myForm']['cpassword'].value
    if (x != '000000' && pw!='000000' && cpw!="000000") {
      alert('Wrong log in messsage!')
      return false;
    }
    else{
        alert('Successfully!')
        window.open("logindex.html");
    }
  }