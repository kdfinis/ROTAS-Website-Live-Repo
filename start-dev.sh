#!/bin/bash

# ROTAS Estate Development Server Startup Script
# This script provides a stable development environment

echo "🚀 Starting ROTAS Estate Development Server..."

# Kill any existing Vite processes
echo "🔄 Cleaning up existing processes..."
pkill -f "vite" || true
sleep 2

# Clear node_modules cache if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server with stability options
echo "🌟 Starting development server on http://localhost:8080"
echo "📱 Network access: http://192.168.1.178:8080"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server with error handling
npm run dev:stable

# If the server crashes, restart it
echo "🔄 Server stopped. Restarting in 3 seconds..."
sleep 3
exec "$0" 