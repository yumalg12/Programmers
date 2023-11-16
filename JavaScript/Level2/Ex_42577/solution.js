function solution(phone_book) {
    let hash = {};
    phone_book.forEach(e=>hash[e] = true);
    for (let phone of phone_book) {
        for (let i = 0; i < phone.length; i++) {
            if (hash[phone.substring(0,i)]) return false;
        }
    }
    return true;
}

// 위 풀이는 시간복잡도가 O(n*m)인데, 시간복잡도가 O(n log n)인 풀이를 발견했다.
// function solution(phoneBook) {
//     return !phoneBook.sort().some((t,i)=> {
//         if(i === phoneBook.length -1) return false;
//         return phoneBook[i+1].startsWith(phoneBook[i]);        
//     })
// }

// 잘 외워둬야지.. some 메서드 응용법과 startWith 메서드의 사용..