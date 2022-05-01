@echo off
set /p can = "Do you want to uninstall all dependencies ? (y/n)"
:install
npm uninstall chalk & npm uninstall readline
if %can% == "y" goto :install
