function changeNbValue(newValue) {

   document.getElementById('nbValue').value = newValue;
   return true;
}

function verifForm(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.email);
   var ageOk = verifAge(f.age);
   
   if(pseudoOk && mailOk && ageOk)
      return true;
   else
   {
      alert("Please fill correctly all the form");
      return false;
   }
}

function verifText(champ)
{
    var regex = /^[a-zA-Z]*$/;
    if(!regex.test(champ.value) || champ.value.length < 2)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}


function verifRegex(champ, regex)
{
   var verification = new RegExp(regex);
   if(!verification.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifNum(champ)
{
    var regex = /^[0-9]*$/;
    if(!regex.test(champ.value) || champ.value.length < 2 || champ.value.length > 25)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifTextNum(champ)
{
    var regex = /^[a-zA-Z0-9]*$/;
    if(!regex.test(champ.value) || champ.value.length < 2)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}