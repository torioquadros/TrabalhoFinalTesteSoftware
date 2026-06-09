package handlers

import (
	"context"
	"backend/database"
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	rows, err := database.DB.Query(
    context.Background(),
    "SELECT id, name FROM users",
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	var users []models.User
	for rows.Next() {
		var user models.User
		err := rows.Scan(&user.ID, &user.Name)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		users = append(users, user)
	}
	if err = rows.Err(); err != nil {
	c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	return
	}
	
	c.JSON(http.StatusOK, users)
}

func CreateUser(c *gin.Context) {
	var user models.User

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	if user.Name == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "nome é obrigatório",
		})
		return
	}

	_, err := database.DB.Exec(
		context.Background(),
		"INSERT INTO users(name) VALUES($1)",
		user.Name,
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "Usuário criado com sucesso",
	})
}



func DeleteUser(c *gin.Context) {
	id := c.Param("id")

	_, err := database.DB.Exec(
		context.Background(),
		"DELETE FROM users WHERE id = $1",
		id,
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Usuário excluído com sucesso",
	})
}