#!/bin/bash

echo "Welcome to MOAIII's react-class-sass generator!"
pwd
# -h filename
# -n line number 
# -r recursive

# CLASSES=$(grep --exclude -n -h -r 'className' *)
# CLASSES=$(grep -r 'className' * | sed s/</ /)


FILES=$(grep -l -r 'className' *)
echo $FILES

# for file in $FILES
# do
#   FOCUSEDFILE=$file
#   echo $FOCUSEDFILE
  # echo $(grep --exclude -n 'className' $FOCUSEDFILE \
  #   | sed 's/<div//g' \
  #   | sed 's/<p//g' \
  #   | sed 's/<li//g' \
  #   | sed 's/<ul//g' \
  #   | sed 's/<h1//g' \
  #   | sed 's/<h2//g' \
  #   | sed 's/<h3//g' \
  #   | sed 's/<h4//g' \
  #   | sed 's/<h5//g' \
  #   | sed 's/<h6//g' \
  #   | sed 's/<a//g' \
  #   | sed 's/>//g' \
  #   | sed 's/className//g' \
  #   | sed 's/=//g')
  # echo ""
  # echo ""
# done