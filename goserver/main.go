package main

import (
    "log"
    "net/http"
)

func main() {
    // Register the homeHandler function for the root route
    http.HandleFunc("/", homeHandler)

    // Start the server on port 8080
    log.Println("Server starting on :8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func enableCors(w http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Orgin", "*")
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    enableCors(&w)
	
	// Send a response back to the client
    w.Write([]byte("hello from go server"))
}
