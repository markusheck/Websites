<?
$mail_empfaenger="sirawalder@gmx.de";
$mail_absender=$_POST["email"];
$betreff="Kontakt-Anforderung Magnetschmuck";
$field_firstname = $_POST["firstname"];
$field_lastname = $_POST["lastname"];
$field_street = $_POST["street"];
$field_postal_code = $_POST["postal_code"];
$field_city = $_POST["city"];
$field_phone = $_POST["phone"];
$field_nachricht = $_POST["nachricht"];

$text="
Vorname:   $field_firstname
Nachname:  $field_lastname
Strasse:   $field_street
PLZ:       $field_postal_code 
Stadt:     $field_city 
Telefon:   $field_phone 
Nachricht: $field_nachricht
";
while(list($name,$value)=each($HTTP_POST_VARS)) {
$text.="$name: $value\n";
}
mail($mail_empfaenger, $betreff, $text,"from:$mail_absender");
header("Location: http://www.schmuck-der-wirkt.de/thanks.html");
?>