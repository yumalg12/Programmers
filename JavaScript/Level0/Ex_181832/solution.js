function solution(n) {
    let answer=Array(n).fill().map(_=>Array(n));
    let num = 1;
    let repeat = 0;
    
    while(num <= n**2){
        let i=j=repeat;

        while(j<n-repeat) answer[i][j++]=num++;
        
        i++;
        while(i<n-repeat) answer[i++][n-1-repeat]=num++;

        i--;
        j-=2;
        while(j>=repeat) answer[n-1-repeat][j--]=num++;

        j=repeat;
        i--;
        while(i>repeat) answer[i--][j]=num++;
        
        repeat++;
    }
    
    return answer;
}