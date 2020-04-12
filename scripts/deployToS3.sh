echo "Cleaning the bucket $1"
aws --profile=eurolink s3 rm $1 --recursive

echo "Syncing gzipped files to bucket $1"
aws --profile=eurolink s3 sync ./public/ $1 \
--exclude "*" \
--include "*.html" --acl public-read --cache-control max-age=31556926,public --content-encoding gzip \
--include "*.js" --acl public-read --cache-control max-age=31556926,public --content-encoding gzip \
--include "*.css" --acl public-read --cache-control max-age=31556926,public --content-encoding gzip \
--include "*.svg" --acl public-read --cache-control max-age=31556926,public --content-encoding gzip \
--delete \

echo "Syncing non-gzipped files to bucket $1"
aws --profile=eurolink s3 sync ./public/ $1 --acl public-read --cache-control max-age=31556926,public
