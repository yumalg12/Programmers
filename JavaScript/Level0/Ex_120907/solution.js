function solution(quiz) {
    return quiz.map(e=>{
        let [x,op,y,eq,z] = e.split(' ');
        return (op === "+"
                    ?Number(x)+Number(y) === Number(z)
                    :Number(x)-Number(y) === Number(z))
                ?"O": "X";
    });
}