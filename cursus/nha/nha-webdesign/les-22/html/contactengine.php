<?php

$Mailnaam = "NHA Webdesign Les 22";
$EmailFrom = "slaygen@gmail.com";
$EmailTo = "slaygen@gmail.com";
$Subject = "Formulier NHA Webdesign Les 22";
$Naam = Trim(stripslashes($_POST['naam'])); 
$Telefoon = Trim(stripslashes($_POST['Telefoon'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Adres = Trim(stripslashes($_POST['Adres'])); 
$Bericht = Trim(stripslashes($_POST['Bericht'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "Een bezoeker heeft de volgende gegevens opgegeven: \n"; 
$Body .= "\n";
$Body .= "Naam en achternaam: ";
$Body .= $Naam;
$Body .= "\n";
$Body .= "Telefoon: ";
$Body .= $Telefoon;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Adres: ";
$Body .= $Adres;
$Body .= "\n";
$Body .= "Bericht: ";
$Body .= $Bericht;
$Body .= "\n";

// send email 
$success = mail("$EmailTo", "$Subject", "$Body", "From: $Mailnaam <$EmailFrom>", "-f$EmailFrom");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=bedankt.htm\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>
