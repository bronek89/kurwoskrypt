(function () {
    var
            alltexts = function (n) {
                var result = [
                ];
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
                if (typeof (callback) !== 'function') {
                    throw new TypeError(callback + ' is not a function!');
                }
                var len = a.length;
                for (var i = 0; i < len; i++) {
                    callback.call(thisArg, a[i], i, a)
                }
            };
    function beautify(str, what, items) {
        cont = str.split(' ');
        forEach(cont, function(value, key){
            cont[key] = cont[key].replace(what, items[Math.floor(Math.random() * items.length)]);
        });
        return cont.join(' ');
    }
    ;
    var synonyms = function (insert) {
        insert = beautify(insert, 'popsuł', ['rozjebał', 'rozpierdolił', 'rozkurwił']);
        insert = beautify(insert, 'zepsuł', ['rozjebał', 'rozpierdolił', 'rozkurwił']);
        insert = beautify(insert, 'uderzył', ['przypierdolił', 'pierdolnął', 'przykirwił']);
        insert = beautify(insert, 'zniszczył', ['rozjebał', 'rozpierdolił', 'rozkurwił']);
        insert = beautify(insert, 'popsut', ['rozjeban', 'rozpierdolon', 'rozkurwion']);
        insert = beautify(insert, 'tragedia', ['chujnia', 'kutasówa']);
        insert = beautify(insert, 'potrąciło', ['pierdolnęło']);
        insert = beautify(insert, 'potrąciła', ['pierdolnęła']);
        insert = beautify(insert, 'potrącił', ['pierdolnął']);
        insert = beautify(insert, 'wtargnął', ['wjebał', 'wpierdolił']) + ' się';
        insert = beautify(insert, 'wtargnęł', ['wjebał', 'wpierdolił']) + ' się';
        insert = beautify(insert, 'olicja', ['sy']);
        insert = beautify(insert, 'zmarł', ['zdechł']);
        insert = beautify(insert, 'umarł', ['zdechł']);
        insert = beautify(insert, 'relacjonował', ['napierdalał', 'nakurwiał']);

        return insert;
    };
    forEach(alltexts(document.body), function (element) {
        if (Math.random() * 1 > 0.0) {
            var t = synonyms(element.textContent).split(' ');
            
            forEach(t, function (val, k) {
                if (val.length > 1 && k > 0 && Math.random() * 1 > 0.77) {
                    var mixed = [
                        'się',
                        'i',
                        'z',
                        'o',
                        'po',
                        'przed',
                    ];
                    if (typeof [k + 1] != 'undefined' && mixed.indexOf(t[k + 1]) == -1 && [t[k - 1], t[k], t[k + 1]].indexOf('kurwa') == -1) {
                        t[k] = 'kurwa ' + val;
                    }
                }
            });
            try {
                element.textContent = t.join(' ');
            } catch (e) {
            }
        }
    });
})();

