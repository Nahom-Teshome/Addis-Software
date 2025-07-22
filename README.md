My webpack setup includes an entry file, an output, which is the same as webpacks default output,except for the file name, 3 loaders ,a plugin and a devserver for quick refresh and ease of development.
The first loader i used is the bable-loader, and it was used to transpile js and jsx syntax/files into common js syntax that can be understood by older browsers.
The sencond one is an array of loaders, which are read from right to left, and used to interpret css, @import statements inside of css and to allow postcss configuration, the three loaders are style-loader, css-loader and postcss-loader.
The last rule i set up was one that hanldles png/svg file formats and it's job is to treat png and svg files as separate assets and output them in the build directory.
The plugins i used is the HtmlWebpackPlugin, whose job it is to create the html  file that will server the bundled file.

AI was used to understand some foreign topics but use not used to generate code.
