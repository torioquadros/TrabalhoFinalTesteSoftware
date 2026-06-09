package routes

import (
	"backend/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.GET("/users", handlers.GetUsers)
	r.POST("/users", handlers.CreateUser)
	r.DELETE("/users/:id", handlers.DeleteUser)
}