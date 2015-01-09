(function () {
    var
            alltexts = function (n) {
                var result = [];
                if (n) {
                    n = n.firstChild;
                    while (n !== null) {
                        if (n.nodeType === 3) {
                            result.push(n);
                        } else {
                            result = result.concat(alltexts(n));
                        }
                        n = n.nextSibling;
                    }
                }
                return result;
            },
            forEach = function (a, callback, thisArg) {
                if (typeof (callback) !== "function") {
                    throw new TypeError(callback + " is not a function!");
                }
                var len = a.length;
                for (var i = 0; i < len; i++) {
                    callback.call(thisArg, a[i], i, a)
                }
            };

    forEach(alltexts(document.body), function (element) {
        if (Math.random() * 1 > 0.62) {
            var t = element.textContent.split(' ');
            forEach(t, function (val, k) {
                if (val.length > 1 && k > 0 && Math.random() * 1 > 0.67) {
                    t[k] = 'kurwa ' + val;
                }
            });
            try {
                element.textContent = t.join(' ');
            } catch (e) {
            }
        }
    });
})();