package integration

import (
	"backend/database"
	"backend/routes"
	"net/http"
	"net/http/httptest"
	"testing"
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