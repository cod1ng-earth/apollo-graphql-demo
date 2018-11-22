CONTAINER_SERVER=graphql-server
CONTAINER_CLIENT=graphql-client

MAKE = make --no-print-directory
DOCKER = docker
DOCKER_COMPOSE = docker-compose

UNAME := $(shell uname)

#COLORS
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
CYAN_BG := $(shell tput -Txterm setab 6)

RESET  := $(shell tput -Txterm sgr0)

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
# A category can be added with @category
HELP_FUN = \
	%help; \
	while(<>) { push @{$$help{$$2 // 'options'}}, [$$1, $$3] if /^([a-zA-Z\-]+)\s*:.*\#\#(?:@([a-zA-Z\-]+))?\s(.*)$$/ }; \
	print "usage: make [target]\n\n"; \
	for (sort keys %help) { \
	print "${WHITE}$$_:${RESET}\n"; \
	for (@{$$help{$$_}}) { \
	$$sep = " " x (32 - length $$_->[0]); \
	print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
	}; \
	print "\n"; }

ifeq (composer-update,$(firstword $(MAKECMDGOALS)))
    PACKAGES =
    ifdef packages
        PACKAGES := $(packages)k
    endif
endif

help: ##@other Show this help.
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)
.PHONY: help

init-app: ##@development init app
	$(DOCKER_COMPOSE) up -d
.PHONY: init-app

start: ##@development start servers
	$(DOCKER_COMPOSE) up -d
.PHONY: start

stop: ##@development stop servers
	$(DOCKER_COMPOSE) stop -t 1
.PHONY: stop

restart: ##@development restart servers
	$(MAKE) stop
	$(MAKE) start
.PHONY: restart

clean: ##@development stop and remove containers
	$(DOCKER_COMPOSE) down --remove-orphans
.PHONY: clean

setup: ##@development Create dev enviroment
	$(DOCKER_COMPOSE) build
	$(MAKE) start
.PHONY: setup

rebuild: ##@development removes images
	$(DOCKER_COMPOSE) down --rmi all
	$(MAKE) setup
.PHONY: rebuild

yarn-install: ##@development run 'yarn install'
	$(DOCKER_COMPOSE) exec $(CONTAINER_CLIENT) yarn install
	$(DOCKER_COMPOSE) exec $(CONTAINER_SERVER) yarn install
.PHONY: yarn-install

cli-client: ##@development get shell in client container
	$(DOCKER_COMPOSE) exec $(CONTAINER_CLIENT) sh
.PHONY: cli-client

cli-server: ##@development get shell in server container
	$(DOCKER_COMPOSE) exec $(CONTAINER_SERVER) sh
.PHONY: cli-server

logs: ##@development show server logs
	$(DOCKER_COMPOSE) logs -f
.PHONY: logs
