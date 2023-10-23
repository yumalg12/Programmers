function solution(participant, completion) {
  const resMap = new Map();

  for (const p of participant) {
      resMap.set(p, (resMap.get(p) || 0) + 1);
  }

  for (const c of completion) {
      resMap.set(c, resMap.get(c) - 1);
      if (resMap.get(c) === 0) resMap.delete(c);
  }

  return resMap.keys().next().value;
}