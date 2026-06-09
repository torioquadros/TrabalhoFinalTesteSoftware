package unit

import (

	"backend/handlers"
	"testing"

)

func TestValidateName_Empty(t *testing.T) {
	if handlers.ValidateName("") {
		t.Error("nome vazio deveria ser inválido")
	}
}
