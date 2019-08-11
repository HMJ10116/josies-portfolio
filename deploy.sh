npm run build         
git add -f dist         #强制把dist文件夹提交到github
git commit -m "update dist"
git push origin `git subtree split --prefix dist master`:gh-pages --force