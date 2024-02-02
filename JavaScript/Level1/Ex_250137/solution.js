function solution(bandage, health, attacks) {
    const [bonustime, heal, bonus] = bandage;
    const maxHealth = health;
    let die = false;
    
    attacks.forEach((attack,i)=>{
        const [hittime, damage] = attack;
        const healtime = hittime - (i>0? attacks[i-1][0]: 0) - 1;
        const rate = ~~(healtime/bonustime);
        health = Math.min(health+healtime*heal+rate*bonus, maxHealth);
        health -= damage;
        if (health <= 0) return die = true;
    })
    
    if (die) return -1;
    
    return health;
}