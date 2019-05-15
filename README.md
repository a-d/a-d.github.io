# deafflow.com
My Jekyll blog with GitHub Pages. Click [here](http://deafflow.com).

## Build

Use Docker to run the project:
```
# build
docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll jekyll build

# serve and watch
docker run --name a-d --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll jekyll serve --watch --drafts
```
