.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## Clean up the lib folder for building
	@rm -rf lib

build: clean ## Compile ES6 files to JS
	@NODE_ENV=production ./node_modules/.bin/babel \
		--out-dir=lib \
		--stage=0 \
		--ignore=*.test.js \
		./src

watch: ## Continuously compile ES6 files to JS
	@NODE_ENV=production ./node_modules/.bin/babel \
		--out-dir=lib \
		--stage=0 \
		--ignore=*.test.js \
		--watch \
		./src
