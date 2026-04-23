package main

import (
	"log"

	"github.com/hugomarinhosilva/alvarium/apps/agent/internal/bootstrap"
)

func main() {
	app := bootstrap.New("alvarium-agent")

	log.Printf("%s started", app.Name)
}

