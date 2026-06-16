package unit

import (
	"testing"
	"backend/handlers"
	"github.com/stretchr/testify/assert"
)

func TestValidateName_Empty(t *testing.T) { 
	assert.False(t, handlers.ValidateName(""))
	assert.True(t, handlers.ValidateName("vitorio"))
}