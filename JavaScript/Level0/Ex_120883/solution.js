function solution([id,pw], db) {
    let dbMap = new Map();
    db.forEach(e=>dbMap.set(e[0], e[1]));
    return dbMap.get(id)? dbMap.get(id) === pw? 'login': 'wrong pw': 'fail';
}