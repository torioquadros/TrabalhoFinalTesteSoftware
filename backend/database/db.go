package database

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5"
)

var DB *pgx.Conn

func Connect() error {
	var err error

	DB, err = pgx.Connect(
		context.Background(),
		"postgres://postgres:Banban05!@localhost:5432/TestesSoftwares",
	)

	if err != nil {
		return err
	}

	fmt.Println("Banco conectado com sucesso!")
	return nil
}
