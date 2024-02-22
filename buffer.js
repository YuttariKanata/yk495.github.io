







function MZV3(inputs) {
    var results = [];
    let n = Number(inputs[3].value);
    
    
    

    let i1=0;
    let i2=0;
    let i3=0;
    let y1;
    let y2;
    let y3;
    let d1 = new BigNumber(0);
    let d2 = new BigNumber(0);
    
    let s1 = inputs[0].value;
    let s2 = inputs[1].value;
    let s3 = inputs[2].value;

    let sum = new BigNumber(0);
    for(i1 = 1; i1 <= n-2; i1++){
        for(i2 = i1 + 1; i2 <= n-1; i2++){
            for(i3 = i2 + 1; i3 <= n; i3++){
                y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                d1 = y1.times(y2);
                d2 = d1.times(y3);
                d1 = BigNumber(1).dividedBy(d2);
                sum = sum.plus(d1);
            }
        }
    }
    results.push(sum.toString());

    return results;
}