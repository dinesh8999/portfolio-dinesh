## Quick Image Setup Script

# This script will help you add your profile image

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Profile Image Setup Helper" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

$publicFolder = "d:\portfolio-1\public"
$targetFile = "$publicFolder\profile.jpg"

Write-Host "Please follow these steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Right-click on the image in the VS Code chat" -ForegroundColor Green
Write-Host "2. Click 'Save Image As...'" -ForegroundColor Green
Write-Host "3. Save it to your Downloads or Desktop" -ForegroundColor Green
Write-Host "4. Come back here and enter the full path" -ForegroundColor Green
Write-Host ""

$imagePath = Read-Host "Enter the full path to your image (or drag and drop the file here)"

# Remove quotes if present
$imagePath = $imagePath.Trim('"')

if (Test-Path $imagePath) {
    Copy-Item $imagePath $targetFile -Force
    Write-Host ""
    Write-Host "✓ Success! Image copied to:" -ForegroundColor Green
    Write-Host "  $targetFile" -ForegroundColor White
    Write-Host ""
    Write-Host "Now refresh your browser at http://localhost:3000" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "✗ Error: File not found at $imagePath" -ForegroundColor Red
    Write-Host "Please check the path and try again" -ForegroundColor Yellow
}

Write-Host ""
Read-Host "Press Enter to exit"
