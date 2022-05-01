@echo off
set /p can = "Do you want to install all dependencies ? (y/n)"
:install
npm install chalk@4.1.2 & npm install readline@1.3.0
if %can% == "y" goto :install