module.exports.loop = function () {
    for (let index in Game.creeps) {
        console.log(index);
    }
};