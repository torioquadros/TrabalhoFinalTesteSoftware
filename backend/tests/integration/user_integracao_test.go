package integration

import (
	"backend/database"
	"backend/routes"
	"net/http"
	"net/http/httptest"
	"testing"
	"context"
	"github.com/gin-gonic/gin"
)

func TestGetUsers(t *testing.T) {
err := database.Connect()
if err != nil {
t.Fatal(err)  
}

gin.SetMode(gin.TestMode)

router := gin.Default() 
routes.SetupRoutes(router)

req, _ := http.NewRequest("GET", "/users", nil)
w := httptest.NewRecorder()

router.ServeHTTP(w, req)

if w.Code != http.StatusOK {
	t.Errorf(
		"esperado status %d, recebido %d",
		http.StatusOK,
		w.Code,
	)
}
}

func TestDatabaseConnection(t *testing.T) {
err := database.Connect()
if err != nil {
t.Fatal(err)
}

var result int

err = database.DB.QueryRow(
	context.Background(),
	"SELECT 1",
).Scan(&result)

if err != nil {
	t.Fatal(err)
}

if result != 1 {
	t.Errorf("esperado 1, recebido %d", result)
}
}