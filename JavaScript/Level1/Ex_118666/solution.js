function solution(survey, choices) {
    let res = {
        'R':0, 'T':0,
        'C':0, 'F':0,
        'J':0, 'M':0,
        'A':0, 'N':0
    };
    
    survey.forEach((q,i)=>{
        const [n, y] = q;
        switch (choices[i]) {
            case 1: res[n]+=3; break;
            case 2: res[n]+=2; break;
            case 3: res[n]+=1; break;
            case 5: res[y]+=1; break;
            case 6: res[y]+=2; break;
            case 7: res[y]+=3; break;
        }
    })
        
    const { R, T, C, F, J, M, A, N } = res;
    return (
        (R >= T? 'R': 'T')+
        (C >= F? 'C': 'F')+
        (J >= M? 'J': 'M')+
        (A >= N? 'A': 'N')
    )
}