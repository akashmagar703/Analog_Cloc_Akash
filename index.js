(function(i, s, o, g, r, a, m) {
    if (i[r]) return;
    i[r] =
        i[r] ||
        function() {
            (i["dataLayer"] = i["dataLayer"] || []).push(arguments);
        };
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(
    window,
    document,
    "script",
    "https://www.googletagmanager.com/gtag/js?id=UA-85417367-1",
    "gtag"
);
gtag("js", new Date());
gtag("config", "UA-85417367-1");