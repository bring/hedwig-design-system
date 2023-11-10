echo "post process"

echo ".hw-theme-posten {" > dist/web/final.css
cat dist/web/posten/tokens.css >> dist/web/final.css
echo "}" >> dist/web/final.css

echo ".hw-theme-bring {" >> dist/web/final.css
cat dist/web/bring/tokens.css >> dist/web/final.css
echo "}" >> dist/web/final.css