function getSpawn() {
    return Game.spawns['Spawn1'];
}

function createCreepHarvest() {
    const spawn = getSpawn();

    return spawn.createCreep([MOVE, CARRY, WORK], `harvest${Date.now()}`);
}

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
            const spawn = getSpawn();
            if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        }
    }
    return length;
}

module.exports.loop = function () {
    const creepCount = loop();

    if (creepCount === 0) {
        createCreepHarvest();

        loop();
    } else if (creepCount === 1) {
        createCreepHarvest();
    }
};