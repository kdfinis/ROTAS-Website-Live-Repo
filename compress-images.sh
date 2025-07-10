#!/bin/bash

# Image Compression Script for ROTAS Website
# This script compresses all images to reduce file sizes for faster loading

echo "🚀 Starting image compression for ROTAS Website..."

# Create backup directory
BACKUP_DIR="public/assets-backup-$(date +%Y%m%d-%H%M%S)"
echo "📦 Creating backup in: $BACKUP_DIR"
cp -r public/assets "$BACKUP_DIR"

# Function to compress images
compress_images() {
    local folder="$1"
    local quality="$2"
    local max_width="$3"
    
    echo "🖼️  Compressing images in: $folder"
    
    # Find all JPG/JPEG/PNG files
    find "$folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
        # Get original file size
        original_size=$(stat -f%z "$file")
        original_size_mb=$(echo "scale=2; $original_size / 1048576" | bc)
        
        # Skip if file is already small enough (< 500KB)
        if [ "$original_size" -lt 512000 ]; then
            echo "  ⏭️  Skipping $(basename "$file") - already small ($(echo "scale=1; $original_size_mb" | bc)MB)"
            continue
        fi
        
        # Create temporary file
        temp_file="${file}.tmp"
        
        # Compress image
        if [[ "$file" == *.png ]]; then
            # PNG compression
            convert "$file" -strip -quality "$quality" -resize "${max_width}x>" "$temp_file"
        else
            # JPEG compression
            convert "$file" -strip -quality "$quality" -resize "${max_width}x>" "$temp_file"
        fi
        
        # Check if compression was successful
        if [ -f "$temp_file" ]; then
            # Get new file size
            new_size=$(stat -f%z "$temp_file")
            new_size_mb=$(echo "scale=2; $new_size / 1048576" | bc)
            
            # Calculate compression ratio
            compression_ratio=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
            
            # Replace original with compressed version
            mv "$temp_file" "$file"
            
            echo "  ✅ $(basename "$file"): ${original_size_mb}MB → ${new_size_mb}MB (${compression_ratio}% reduction)"
        else
            echo "  ❌ Failed to compress: $(basename "$file")"
        fi
    done
}

# Compress different types of images with appropriate settings

echo ""
echo "🏠 Compressing Villa Images..."
compress_images "public/assets/images/villa/living-room" 85 1920
compress_images "public/assets/images/villa/bedrooms-bathrooms" 85 1920
compress_images "public/assets/images/villa/exterior" 85 1920
compress_images "public/assets/images/villa/poolside" 85 1920
compress_images "public/assets/images/villa/panoramic" 85 2560

echo ""
echo "🫒 Compressing Olive Grove Images..."
compress_images "public/assets/images/orchards" 85 1920

echo ""
echo "🏡 Compressing Estate Images..."
compress_images "public/assets/images/estate" 85 1920

echo ""
echo "📊 Final Statistics:"
echo "=================="

# Count total images
total_images=$(find public/assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l | tr -d ' ')
echo "Total images: $total_images"

# Calculate total size
total_size=$(find public/assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec stat -f%z {} + | awk '{sum += $1} END {print sum}')
total_size_mb=$(echo "scale=2; $total_size / 1048576" | bc)
echo "Total size: ${total_size_mb}MB"

# Count large images (>1MB)
large_images=$(find public/assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec stat -f%z {} + | awk '$1 > 1048576 {count++} END {print count}')
echo "Images >1MB: $large_images"

echo ""
echo "🎉 Image compression completed!"
echo "💾 Backup saved in: $BACKUP_DIR"
echo "🌐 Your website should now load much faster!" 