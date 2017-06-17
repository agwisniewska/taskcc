/**
 * Function gets a text and based on provided pattern return an exact part of this text
 *
 * @param {String} text.
 * @return {String} spell.
 *
 */
function cutProperExpression(text) {
    var regex = /fe.*ai/g;
    var spell = regex.exec(text);
    return spell !== null ? spell[0] : "";
}

/**
 * Function gets an spell and counts damage based on provided subspells
 *
 * @param {String} spell.
 * @return {Number} damage.
 *
 */
function getDamage(spell) {
    var damage = 0;
    var dict = {
        'daine': 7, 'dai': 5, 'aine': 4, 'jee': 3,
        'ain': 3, 'je': 2, 'ne': 2, 'ai': 2, 'fe': 1
    };

    for (var key in dict) {
        var regExp = new RegExp(key, "g");
        var count = (spell.match(regExp) || []).length;
        spell = spell.replace(regExp, '');
        damage += (dict[key] * count);
    }

    return damage - spell.length;
}

exports.damage = function (spellString) {
    if ((spellString.match(new RegExp("fe", "g")) || []).length > 1) {
        return 0
    }

    spellString = cutProperExpression(spellString);
    var damage = getDamage(spellString);
    return damage > 0 ? damage : 0;
};
