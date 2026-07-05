import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SafeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def main():
    os.chdir(DIRECTORY)
    
    # Simple check to confirm the server matches the folder
    print(f"Starting Local DDoS Simulator Server...")
    print(f"Working Directory: {DIRECTORY}")
    print(f"Server Port: {PORT}")

    handler = SafeHTTPRequestHandler
    
    # Allow address reuse to prevent socket errors on fast restarts
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            url = f"http://localhost:{PORT}/index.html"
            print(f"\n=======================================================")
            print(f"DDoS Simulator is running at: {url}")
            print(f"Press CTRL+C to stop the server.")
            print(f"=======================================================\n")
            
            # Open browser window automatically
            webbrowser.open(url)
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping local server. Goodbye!")
        sys.exit(0)
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
