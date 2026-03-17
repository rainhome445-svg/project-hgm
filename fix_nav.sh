#!/bin/bash

# Array of all HTML files
FILES="index.html learn.html news.html learn-ui.html people.html interview.html about.html market.html future.html"

for file in $FILES; do
  echo "Processing $file..."
  
  # Note: The text might have slight variations (e.g. "About Me" vs "About"), but standard nav items are:
  # Beranda, News, Learn, People, About Me

  # Replace Beranda
  sed -i 's|href="#"\(>Beranda\)|href="index.html"\1|g' "$file"
  sed -i 's|href="#"\(.*>Beranda\)|href="index.html"\1|g' "$file"

  # Replace News
  sed -i 's|href="#"\(>News\)|href="news.html"\1|g' "$file"
  sed -i 's|href="#"\(.*>News\)|href="news.html"\1|g' "$file"
  
  # Replace Learn
  sed -i 's|href="#"\(>Learn\)|href="learn.html"\1|g' "$file"
  sed -i 's|href="#"\(.*>Learn\)|href="learn.html"\1|g' "$file"
  
  # Replace People
  sed -i 's|href="#"\(>People\)|href="people.html"\1|g' "$file"
  sed -i 's|href="#"\(.*>People\)|href="people.html"\1|g' "$file"
  
  # Replace About Me
  sed -i 's|href="#"\(>About Me\)|href="about.html"\1|g' "$file"
  sed -i 's|href="#"\(.*>About Me\)|href="about.html"\1|g' "$file"

done
echo "Done!"
