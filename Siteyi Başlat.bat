@echo off
cd /d "%~dp0"
title Özür ve Gelecek Protokolü - Yerel Sunucu
echo Site başlatılıyor. Bu pencereyi açık bırakın.
echo Tarayıcıda http://localhost:5173 adresini açın.
echo Sunucuyu durdurmak için bu pencereyi kapatın veya Ctrl+C tuşlarına basın.
echo.
npm run dev
pause
