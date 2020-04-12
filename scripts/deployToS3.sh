echo "Cleaning the bucket $1"
aws --profile=eurolink s3 rm $1 --recursive

echo "Syncing gzipped files to bucket $1"
aws --profile=eurolink s3 sync ./public/ $1 \
--exclude "*" \
--include "*.html" --acl public-read --cache-control max-age=31556926,public \
--include "*.js" --acl public-read --cache-control max-age=31556926,public \
--include "*.css" --acl public-read --cache-control max-age=31556926,public \
--include "*.svg" --acl public-read --cache-control max-age=31556926,public \
--delete \

echo "Syncing non-gzipped files to bucket $1"
aws --profile=eurolink s3 sync ./public/ $1 --acl public-read --cache-control max-age=31556926,public
