<?php
if(isset($_POST['email'])) {
	$email_to = 'mail@fosterthewulff.nl';

	$user_email = $_POST['email'];
	$reply_email = 'eline@fosterthewulff.nl';

	$email_subject = 'I drummer!'; 
	$email_message = '
		naam: '.$_POST['name'].'
		mailadres: '.$user_email.'
		leeftijd: '.$_POST['age'].'
	';

	$headers = 'From: '.$user_email."\r\n".
	'Reply-To: '.$user_email."\r\n".
	'X-Mailer: PHP/' . phpversion();

	mail($email_to, $email_subject, $email_message, $headers);


	$headers_from = 'From: '.$reply_email."\r\n".
	'Reply-To: '.$reply_email."\r\n".
	'X-Mailer: PHP/' . phpversion();

	mail($_POST['email'], 'Reactie van Foster the Wulff', 'Hey,

	Bedankt voor het invullen van het formulier op onze website van Foster the Wulff! Dit is een auto-reply. We nemen zo snel mogelijk persoonlijk contact met je op.
	
	Ondertussen, heb je onze muziek al beluisterd op SoundCloud (https://soundcloud.com/fosterthewulff)? Als het goed is staat er nu wel wat op. We hebben al heel veel meer muziek, maar dat is nog niet waardig genoeg voor op het grote internet. Maar als het goed is, heb je nu wel al een idee van wat voor muziek we maken.
	
	Hopelijk spreekt het je aan. 
	
	We spreken elkaar snel,
	
	Groetjes, Eline (en Rik)', $headers_from);
}
?>