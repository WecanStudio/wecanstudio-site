<?php
/**
 * Created by PhpStorm.
 * User: WhiteBlue
 * Date: 15/3/15
 * Time: 下午9:11
 */


function redirect($url){
    header('location:http://'.$url);
}


if(isset($_POST)){
    if((is_null($_POST['name']))||(is_null($_POST['email']))||(is_null($_POST['content']))){
        echo 'no content';
        redirect(dirname($_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF']).'/index.html');
        die();
    }

    $name=htmlspecialchars($_POST['name']);
    $email=htmlspecialchars($_POST['email']);
    $content=htmlspecialchars($_POST['content']);

    $my_t=getdate(date("U"));

    $file = fopen("content.txt", "a+") or die("Unable to open file!");
    fwrite($file,'name : '.$name.PHP_EOL);
    fwrite($file,'email : '.$email.PHP_EOL);
    fwrite($file,'content : '.$content.PHP_EOL);
    fwrite($file,PHP_EOL);
    fwrite($file,"$my_t[weekday], $my_t[month] $my_t[mday], $my_t[year]".PHP_EOL);
    fclose($file);


    redirect(dirname($_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF']).'/index.html');
    die();
}





