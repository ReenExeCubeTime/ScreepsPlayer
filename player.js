module.exports.loop = function () {
    for (let index in Game.creeps) {
        global.console.log(index);
        let creep = Game.creeps[index];
        creep.say(`Some say`);
    }
};