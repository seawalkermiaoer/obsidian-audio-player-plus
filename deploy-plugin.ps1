npm run build

# PowerShell script to deploy the Obsidian Audio Player Plus plugin files
# Copies main.js, manifest.json, and styles.css to the Obsidian plugin directory

# Define source and destination paths
$sourceDir = "e:\best\obsidian-audio-player-plus"
$destDir = "E:\des_glaneuses\DesGlaneuses\.obsidian\plugins\obsidian-audio-player-plus"

# Create destination directory if it doesn't exist
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
    Write-Output "Created directory: $destDir"
}

# Files to copy
$filesToCopy = @("main.js", "manifest.json", "styles.css")

# Copy each file to the destination directory
foreach ($file in $filesToCopy) {
    $sourcePath = Join-Path $sourceDir $file
    $destPath = Join-Path $destDir $file
    
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Output "Copied $file to $destDir"
    } else {
        Write-Error "Source file not found: $sourcePath"
    }
}

Write-Output "Plugin deployment completed!"