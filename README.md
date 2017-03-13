# markdweet
Simple markdown tweeter

The idea is simple: _Write some markdown, tweak its appereance, and tweet it as an image._

## Dependencies:

* [angular-markdown-directive](https://github.com/btford/angular-markdown-directive)
* [resizable-directive](https://github.com/Reklino/angular-resizable)
* [Markdown css themes](https://github.com/markdowncss/markdowncss.github.io) with little tweaks
* [DOM to image](https://github.com/tsayen/dom-to-image)
* [File saver](https://github.com/eligrey/FileSaver.js/")
* [Nancy](https://github.com/NancyFx/Nancy) for backend api.


## Enabling deployment to Azure

`npm install -g kuduscript`

then

`kuduscript -y --aspNetCore myproject.fsproj`

(as seen on [StackOverflow](http://stackoverflow.com/questions/42267330/how-do-i-git-deploy-an-fsproj-based-f-project-to-azure))