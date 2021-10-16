<?php
  if($_SERVER["REQUEST_METHOD"]== "GET"){
    echo "GET";
  }
  if($_SERVER["REQUEST_METHOD"]== "POST"){
    echo "POST";
  }
  if($_SERVER["REQUEST_METHOD"]== "PUT"){
    echo "PUT";
  }
  if($_SERVER["REQUEST_METHOD"]== "DELETE"){
    echo "DELETE";
  }
?>