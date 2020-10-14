#!/bin/bash
docker build -t reactui .
docker run  -p 443:443 --rm reactui