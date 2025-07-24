//your app logic
        append(app, "", "over") /* reset app */
        append(app, gen(header, "appheader", 'Header content', 'header'));
        append(app, gen(main, "appmain", 'Main content', 'appmain container'));
        append(app, gen(footer, "appfooter", "Footer content", 'container'));


        append(appmain, gen(section, "hero", "", "hero"))

        // load(["./header.js", "./script.js", "./footer.js","./style.css"])// load js and css files
        append(hero, [gen(h1, "", "Hello GeneratorJs"), gen(p, "", "Yes, just Three functions for frontend."), gen(span, "", ["gen", "append", "load"]), gen(p, "", "And Three Optional functions."), gen(span, "", ["log", "getfile", "loadscss"])])

load("./style.scss")