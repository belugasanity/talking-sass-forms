<?php
    //====================================================
    // Program : Fake send mail
    // Author : pouletfou at gmail
    // Description : save this file as /usr/sbin/sendmail
    //  and you can test your PHP applications using mail
    //  by looking at the /tmp/fakesendmail.log files.

	//	I AM NOT SURE IF THIS IS THE CORRECT PHP FILE WE SHOULD BE USING?
    //====================================================

    define('LOGFILE','/tmp/fakesendmail.log');

    $log = fopen (LOGFILE,'a+');

    fwrite($log,"\n".implode(' ',$argv).
     " called on : ".date('Y-m-d H:i:s')."\n");

    fwrite($log,file_get_contents("php://stdin"));
    fwrite($log,
"\n===========================================================\n");
    fclose($log);

?>