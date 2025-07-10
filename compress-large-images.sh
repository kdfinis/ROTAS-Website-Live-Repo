#!/bin/bash

# Additional compression for remaining large images
echo "🎯 Compressing remaining large images..."

# List of large images to compress further
large_images=(
    "public/assets/images/villa/panoramic/panoramic-19.jpg"
    "public/assets/images/villa/panoramic/panoramic-17.jpg"
    "public/assets/images/villa/panoramic/panoramic-18.jpg"
    "public/assets/images/villa/panoramic/panoramic-12.jpg"
    "public/assets/images/villa/panoramic/panoramic-20.jpg"
    "public/assets/images/villa/panoramic/panoramic-11.jpg"
    "public/assets/images/villa/panoramic/lot1-panoramic-05.jpg"
    "public/assets/images/villa/panoramic/lot1-panoramic-02.jpg"
    "public/assets/images/villa/panoramic/lot1-panoramic-01.jpg"
)

for image in "${large_images[@]}"; do
    if [ -f "$image" ]; then
        # Get original size
        original_size=$(stat -f%z "$image")
        original_size_mb=$(echo "scale=2; $original_size / 1048576" | bc)
        
        # Create temporary file
        temp_file="${image}.tmp"
        
        # More aggressive compression for panoramic images
        magick "$image" -strip -quality 75 -resize "2048x>" "$temp_file"
        
        if [ -f "$temp_file" ]; then
            # Get new size
            new_size=$(stat -f%z "$temp_file")
            new_size_mb=$(echo "scale=2; $new_size / 1048576" | bc)
            
            # Calculate compression ratio
            compression_ratio=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
            
            # Replace original
            mv "$temp_file" "$image"
            
            echo "  ✅ $(basename "$image"): ${original_size_mb}MB → ${new_size_mb}MB (${compression_ratio}% reduction)"
        else
            echo "  ❌ Failed to compress: $(basename "$image")"
        fi
    fi
done

echo "🎉 Additional compression completed!" 