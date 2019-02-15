#!/usr/bin/env bash

aws s3api put-bucket-website --bucket $S3_BUCKET --website-configuration file://.s3-config/websiteConfig.json --region ca-central-1

travis-ci-cloudfront-invalidation -a $AWS_ACCESS_KEY_ID -s $AWS_SECRET_ACCESS_KEY -c $CLOUDFRONT_ID -i '/*' -b $TRAVIS_BRANCH -p $TRAVIS_PULL_REQUEST

echo "After deploy script finished"