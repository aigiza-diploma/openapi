TOKEN:=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

download_schema:
	@curl https://$(TOKEN)@raw.githubusercontent.com/aigiza-diploma/strapi/master/src/extensions/documentation/documentation/1.0.0/full_documentation.json -o schema.json

clean_dst:
	rm -rf src/*

generate:
	yarn openapi-ts

publish:
	yarn version --patch
	git add .
	git commit -m "dev"
	git push origin master

all: clean_dst download_schema generate publish
