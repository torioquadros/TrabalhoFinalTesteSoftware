package unit

import (
	"testing"
	"backend/handlers"
	"github.com/stretchr/testify/assert"
)

func TestValidateName_Empty(t *testing.T) { 
	assert.False(t, handlers.ValidateName(""))
}

func TestValidateName(t *testing.T) { 
	assert.True(t, handlers.ValidateName("vitorio"))
}

func TestValidateName_Spaces(t *testing.T) {
	assert.False(t, handlers.ValidateName("   "))
}