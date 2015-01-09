function alltexts(n){
    var result = [];
    if (n) {
        n = n.firstChild;
        while (n != null) {
            if (n.nodeType === 3) { 
				result.push(n);
			} else {
				result = result.concat(alltexts(n));
			}
			n = n.nextSibling;
        }
    }
    return result;
}

Array.prototype.forEach.call(alltexts(document.body), function (element) {
if (Math.random()*1 > 0.5) {
var t = element.textContent.split(' ');
t.forEach(function (val,k) {
if (val.length > 1 && k > 0 && Math.random()*1 > 0.6) {
    t[k] = 'kurwa ' + val;
}
});
try {
element.textContent = t.join(' ');
} catch (e) {}
}
});
