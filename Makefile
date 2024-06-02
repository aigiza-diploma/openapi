TOKEN:=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

download_schema:
	@curl https://$(TOKEN)@raw.githubusercontent.com/aigiza-diploma/strapi/master/src/extensions/documentation/documentation/1.0.0/full_documentation.json -o schema.json

generate:
	yarn openapi -i schema.json -o gen/

all: download_schema generate