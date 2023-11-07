Directory name (`infrastructure`) is maybe not the best but this is a place for some shared types not connected with any domain. Some cross-cutting concerns. Maybe it could be extracted outside of the `domain`? But the `domain` should rather be central part (other parts should depend on the domain - not the other way).

Should domain depend on the `infrastructure` or `utils` (`utils` would be rather bad directory name)? It is violation of onion architecture. But e.g. `id` can be a part of `domain/infrastructure`, isn't?
