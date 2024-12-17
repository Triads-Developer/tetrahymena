#!/bin/bash

sftp greg@research-stage.artsci.wustl.edu:/home/greg/TRIADS/tetrahymena/public <<EOF
put -r ./build/*
exit
EOF

