#!/bin/bash

# Build script for the Next.js CV template Docker image
# Uses IMAGE_TAG environment variable, defaults to 'latest' if not set

set -e

IMAGE_NAME="nextjs-cv-template"
IMAGE_TAG="${IMAGE_TAG:-latest}"
FULL_IMAGE_NAME="${IMAGE_NAME}:${IMAGE_TAG}"

echo "Building Docker image: ${FULL_IMAGE_NAME}"

docker build -t "${FULL_IMAGE_NAME}" .

# Also tag as 'latest' if a specific tag was provided
if [ "${IMAGE_TAG}" != "latest" ]; then
    echo "Also tagging as ${IMAGE_NAME}:latest"
    docker tag "${FULL_IMAGE_NAME}" "${IMAGE_NAME}:latest"
fi

echo "Build complete: ${FULL_IMAGE_NAME}"

