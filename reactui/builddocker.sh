#!/bin/bash
docker build -t reactui .
docker run  -p 80:80 --rm reactui