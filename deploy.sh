npm run build         
git add -f dist
git commit -m "update dist"
git push origin `git subtree split --prefix dist master`:gh-pages --force