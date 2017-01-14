module.exports.loop = function () {
    for (let index in Game.creeps) {
        let creep = Game.creeps[index];
        if (creep.carry.energy < creep.carryCapacity) {
            const sources = creep.room.find(FIND_SOURCES);
            const source = sources[0];

            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        } else {
            const spawn = Game.spawns['Spawn1'];
            if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        }
    }
};