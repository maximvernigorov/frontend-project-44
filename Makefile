install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
make prettier:
	npx prettier --write .
brain-even:
	node bin/brain-even.js
link:
	npm link