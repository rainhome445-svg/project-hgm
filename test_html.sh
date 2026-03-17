#!/bin/bash
FILES="index.html learn.html news.html learn-ui.html people.html interview.html about.html market.html future.html"
ERRORS=0

for file in $FILES; do
  if [ ! -f "$file" ]; then
    echo "ERROR: File $file is missing."
    ERRORS=$((ERRORS + 1))
  else
    # Simple check: Does it have a <body> tag?
    if ! grep -q "<body>\|<body " "$file"; then
      echo "ERROR: File $file does not have a <body> tag."
      ERRORS=$((ERRORS + 1))
    fi
    # Simple check: Does it have the Tailwind CSS script?
    if ! grep -q "tailwindcss.com" "$file"; then
      echo "ERROR: File $file is missing Tailwind CSS."
      ERRORS=$((ERRORS + 1))
    fi
  fi
done

if [ $ERRORS -eq 0 ]; then
  echo "SUCCESS: All HTML files passed basic structural checks."
else
  echo "FAILURE: Found $ERRORS errors."
fi
