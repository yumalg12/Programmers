//Pseudo code
i=j=0? j 키우기
i=0, j=length? i 키우기
i=j=length? j 줄이기
i=length, j=0? i 1까지 줄이기
i=1, j=0? j 키우기
i=1, j=length-1? i 키우기
i=j=length-1? j 1까지 줄이기
i=length-1, j=1? i 2까지 줄이기
i=2, j=1? j 2까지 키우기
...반복


//console.log 있는 버전
function solution(n) {
    let answer=Array(n).fill().map(_=>Array(n));
    let num = 1;
    let repeat = 0;
    
    while(num <= n**2){
        //초기상태
        let i=j=repeat;
        console.log(answer, i, j, num);

        //j 늘리기
        console.log(i,j,"에서 j 늘리기 시작");
        while(j<n-repeat){
            answer[i][j++]=num++;
            console.log(answer, i, j, num);
        }

        //i 늘리기
        console.log(i,j,"에서 i 늘리기 시작");
        i++;
        while(i<n-repeat){
            answer[i++][n-1-repeat]=num++;       
            console.log(answer, i, j, num);
        }

        //j 줄이기
        console.log(i,j,"에서 j 줄이기 시작");
        i--;
        j-=2;
        while(j>=repeat){
            answer[n-1-repeat][j--]=num++;
            console.log(answer, i, j, num);
        }

        //i 줄이기
        console.log(i,j,"에서 i 줄이기 시작");
        j=repeat;
        i--;
        while(i>repeat){
            answer[i--][j]=num++;
            console.log(answer, i, j, num);
        }
        repeat++;
    }
    
    return answer;
}