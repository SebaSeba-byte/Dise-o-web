@echo off
set PATH=C:\Program Files\nodejs;%PATH%
cd /d "%~dp0frontend"
echo Iniciando servidor de desarrollo Montessori Store...
npm run dev
