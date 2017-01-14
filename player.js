function loop() {
    let length = 0;
    for (let index in Game.creeps) {
        ++length;
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
    return length;
}

module.exports.loop = function () {
    if (loop() === 0) {
        for (let name in Game.spawns) {
            const spawn = Game.spawns[name];

            spawn.createCreep([MOVE, CARRY, WORK], `harvest${Date.now()}`);

            loop();
        }
    }
};