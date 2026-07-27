$env:Path = "C:\Program Files\Git\cmd;" + $env:Path

git config --global user.name "GABLIAM STUDIO"
git config --global user.email "contacto@gabliamstudio.com"

# Check status
Write-Host "Git Status:"
git status

# Add all files
git add .

# Commit
git commit -m "Sprint 4 - eCommerce y Carrito Funcional con Zustand"

# Create develop branch
git branch -M main
git checkout -b develop

Write-Host "Ramas actuales:"
git branch
