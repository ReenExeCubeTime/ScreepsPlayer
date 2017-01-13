module.exports.loop = function () {
    for (let index in Game.creeps) {
        console.log(index);
        let creep = Game.creeps[index];
        creep.say(`Some say`);

        const sources = creep.room.find(FIND_SOURCES);
        const source = sources[0];

        if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
            console.log('need walk');
        }
    }
};