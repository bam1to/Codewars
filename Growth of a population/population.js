function nbYear(p0, percent, aug, p) {
    var populationAtStart = p0;
    for (var i = 0; populationAtStart < p; i++) {
    populationAtStart += populationAtStart * (percent / 100) + aug;
    }
    return i;
}

alert(nbYear(1500, 5, 100, 5000));