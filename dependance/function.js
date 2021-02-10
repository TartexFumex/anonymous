function envoyer_message() {
    if((document.getElementById("message").value == "Entrez le message") || (document.getElementById("message").value == "")){
      alert("Veuillez entrer un message")
    }
    else if(document.getElementById("name").value == ""){
      document.getElementById("name").value == "anonymous"
    }
    else{
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/808749607935803433/iDA7DEScA0sCp8sfQUAdHvnfp8U8f1eRIn9d3qkvAxPWRXna2LOl457_hnr9J71uRE5r");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      content: document.getElementById("message").value,
      username: document.getElementById("name").value,
    }

    request.send(JSON.stringify(params));
    alert("message envoyé!")
    document.getElementById("message").value = "Entrez le message";
  }}
  
  function click_entry_name(){
    document.getElementById("name").value = "";
  }
  function click_entry_msg(){
    document.getElementById("message").value = "";
  }
  