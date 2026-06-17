package main

import (
	"backend/database"
	"backend/routes"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	err := database.Connect()
	if err != nil {
		log.Fatal(err)
	}

	r := gin.Default()

	r.Use(cors.Default())

	routes.SetupRoutes(r)

	r.Run(":8080")
}