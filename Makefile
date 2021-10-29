SHELL=/bin/bash

# Constants
DOCKER_COMPOSE ?= docker-compose

.PHONY: help
help:
	@echo "TODO"

.PHONY: dev
dev: # Launch dev server
	$(DOCKER_COMPOSE) build
	$(DOCKER_COMPOSE) up --remove-orphans -d
	@echo "You can access API with http://localhost:90/"
	@echo "You can access UI with http://localhost:3000/"

.PHONY: down
down: # Kill dev server
	$(DOCKER_COMPOSE) down -v
