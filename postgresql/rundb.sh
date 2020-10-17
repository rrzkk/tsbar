#!/bin/bash
docker build -t postgresql .
docker run -d --name postgresql -p 5555:5432 postgresql