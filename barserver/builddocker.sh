#!/bin/bash
docker build -t backend .
docker run  -p 8080:8080 --rm backend