SENTRY_AUTH_TOKEN=143888df77f847e2bc71c8c6c09745fb68adc38d777e4416b58855e6f6ec5b59
SENTRY_ORG=nkc-ex
SENTRY_PROJECT=nkc-ex

REACT_APP_RELEASE_VERSION=`sentry-cli releases propose-version`


setup_release: create_release upload_sourcemaps associate_commits

create_release: 
	sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(REACT_APP_RELEASE_VERSION)

upload_sourcemaps: 
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(REACT_APP_RELEASE_VERSION)\
		upload-sourcemaps --url-prefix "~/static/js" --validate build/static/js --rewrite
associate_commits:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(REACT_APP_RELEASE_VERSION)
