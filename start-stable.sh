#!/bin/bash

# ROTAS Estate Stable Development Server
# Enhanced stability with error handling and memory management

echo "🚀 Starting ROTAS Estate Development Server (Stable Mode)..."

# Function to cleanup processes
cleanup() {
    echo "🔄 Cleaning up processes..."
    pkill -f "vite" 2>/dev/null || true
    pkill -f "node.*vite" 2>/dev/null || true
    sleep 3
}

# Function to check if port is in use
check_port() {
    if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️  Port 8080 is in use. Cleaning up..."
        cleanup
    fi
}

# Function to start server with retry logic
start_server() {
    local max_attempts=3
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        echo "🔄 Attempt $attempt of $max_attempts to start server..."
        
        # Start server in background
        npm run dev > server.log 2>&1 &
        local server_pid=$!
        
        # Wait for server to start
        sleep 5
        
        # Check if server is responding
        if curl -s http://localhost:8080 > /dev/null 2>&1; then
            echo "✅ Server started successfully on http://localhost:8080"
            echo "📱 Network access: http://192.168.1.178:8080"
            echo "📋 Server PID: $server_pid"
            echo "📄 Logs: server.log"
            echo ""
            echo "Press Ctrl+C to stop the server"
            echo ""
            
            # Monitor server health
            while kill -0 $server_pid 2>/dev/null; do
                sleep 10
                if ! curl -s http://localhost:8080 > /dev/null 2>&1; then
                    echo "⚠️  Server stopped responding. Restarting..."
                    kill $server_pid 2>/dev/null || true
                    break
                fi
            done
            
            return 0
        else
            echo "❌ Attempt $attempt failed. Server not responding."
            kill $server_pid 2>/dev/null || true
            attempt=$((attempt + 1))
            sleep 5
        fi
    done
    
    echo "❌ Failed to start server after $max_attempts attempts"
    return 1
}

# Main execution
trap cleanup EXIT

# Initial cleanup
cleanup

# Check port
check_port

# Verify dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start server with retry logic
if start_server; then
    # Keep script running
    wait
else
    echo "💥 Server failed to start. Check server.log for details."
    exit 1
fi 