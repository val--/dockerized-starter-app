SHELL=/bin/bash

# Constants
DOCKER_COMPOSE ?= docker-compose

.PHONY: help
help:
	@echo "TODO"

.PHONY: dev
dev: # Launch dev server
	$(DOCKER_COMPOSE) up --remove-orphans -d
	@echo "You can access API with http://localhost:90/"

.PHONY: down
down: # Kill dev server
	$(DOCKER_COMPOSE) down -v
