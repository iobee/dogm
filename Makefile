TESTS = $(shell find test -type f -name "*.test.js")
TEST_TIMEOUT = 5000
MOCHA_REPORTER = spec

NPM_REGISTRY = ""

all: test

install: 
	@npm install $(NPM_REGISTRY)

pretest:
	@echo "start pretest"
	@if ! test -f config.js; then \
		cp config.default.js config.js;\
	fi

test: install pretest
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
	--reporter $(MOCHA_REPORTER) \
	-r should \
	--timeout $(TEST_TIMEOUT) \
	$(TESTS)

.PHONY: install test

