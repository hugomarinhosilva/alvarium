package bootstrap

type App struct {
	Name string
}

func New(name string) App {
	return App{Name: name}
}

