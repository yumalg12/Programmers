function solution(new_id) {
    const cleaned = [...new_id.toLowerCase()].reduce((acc,e) => /^[a-zA-Z0-9\-_\.]$/.test(e)? acc+e: acc, '').replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '');; //1~4단계
    
    if (cleaned.length === 0) return 'aaa'; //5단계
    if (cleaned.length >= 16) return cleaned.slice(0,15).replace(/^\.|\.$/g, ''); //6단계
    if (cleaned.length <= 2) return cleaned+cleaned[cleaned.length-1].repeat(3-cleaned.length); //7단계
    
    return cleaned;
}