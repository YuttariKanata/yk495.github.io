// calculator.js

function fib(n) {
    let Fibarray = new Array(n + 1);

    Fibarray[0] = new BigNumber(1);
    Fibarray[1] = new BigNumber(1);
    for (let y0 = 2; y0 <= n; y0++) {
        Fibarray[y0] = Fibarray[y0 - 1].plus(Fibarray[y0 - 2]);
    }

    return Fibarray;
}

function MFZV(inputs) {
    var results = [];
    let d = 2;
    let n = inputs[10].value;
    let p = 0;
    let flag = 0;
    for (p = 0; p < 10; p++) {
        if (inputs[p].value != 0) {
            flag++;
        }
    }
    d = flag;
    let Fibarray = fib(n);

    // ロジックを次元ごとに記述
    // この部分は元の calculate 関数内のロジックを移動

    if(d === 1){//1次元配列の時
        let i1=0;
        let y1;
        let d1 = new BigNumber(0);
        
        let s1 = inputs[0].value;

        let sum = new BigNumber(0);

        for(i1 = 1; i1 <= n; i1++){
            y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
            d1 = BigNumber(1).dividedBy(y1);
            sum = sum.plus(d1);
        }
        results.push(sum.toString());
    }else if(d === 2){//2次元配列の時

        let y1=0;
        let y2=0;
        let y3;
        let y4;
        let y5;
        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let sum = new BigNumber(0);
        for(y1 = 1; y1 <= n; y1++){
            for(y2 = y1 + 1; y2 <= n; y2++){
                y3 = Fibarray[y1-1].pow(s1);    //F_y1 ^ s1
                y4 = Fibarray[y2-1].pow(s2);    //F_y2 ^ s2
                y5 = y3.times(y4);
                y5 = new BigNumber(1).dividedBy(y5);
                sum = sum.plus(y5);
            }
        }
        results.push(sum.toString());
    }else if(d === 3){//3次元配列の時

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
                    y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                    y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                    y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                    d1 = y1.times(y2);
                    d2 = d1.times(y3);
                    d1 = BigNumber(1).dividedBy(d2);
                    sum = sum.plus(d1);
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 4){//4次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n-2; i1++){
            for(i2 = i1 + 1; i2 <= n-1; i2++){
                for(i3 = i2 + 1; i3 <= n; i3++){
                    for(i4 = i3 + 1; i4 <= n; i4++){
                        y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                        y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                        y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                        y4 = Fibarray[i4-1].pow(s4);    //F_i4 ^ s4
                        d1 = y1.times(y2);
                        d1 = d1.times(y3);
                        d1 = d1.times(y4);
                        d1 = BigNumber(1).dividedBy(d1);
                        sum = sum.plus(d1);
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 10){//10次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let i9=0;
        let i10=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let y9;
        let y10;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;
        let s9 = inputs[8].value;
        let s10 = inputs[9].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n-9; i1++){
            for(i2 = i1 + 1; i2 <= n-8; i2++){
                for(i3 = i2 + 1; i3 <= n-7; i3++){
                    for(i4 = i3 + 1; i4 <= n-6; i4++){
                        for(i5 = i4 + 1; i5 <= n-5; i5++){
                            for(i6 = i5 + 1; i6 <= n-4; i6++){
                                for(i7 = i6 + 1; i7 <= n-3; i7++){
                                    for(i8 = i7 + 1; i8 <= n-2; i8++){
                                        for(i9 = i8 + 1; i9 <= n-1; i9++){
                                            for(i10 = i9 + 1; i10 <= n; i10++){
                                                y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                                                y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                                                y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                                                y4 = Fibarray[i4-1].pow(s4);    //F_i4 ^ s4
                                                y5 = Fibarray[i5-1].pow(s5);
                                                y6 = Fibarray[i6-1].pow(s6);
                                                y7 = Fibarray[i7-1].pow(s7);
                                                y8 = Fibarray[i8-1].pow(s8);
                                                y9 = Fibarray[i9-1].pow(s9);
                                                y10 = Fibarray[i10-1].pow(s10);
                                                d1 = y1.times(y2);
                                                d1 = d1.times(y3);
                                                d1 = d1.times(y4);
                                                d1 = d1.times(y5);
                                                d1 = d1.times(y6);
                                                d1 = d1.times(y7);
                                                d1 = d1.times(y8);
                                                d1 = d1.times(y9);
                                                d1 = d1.times(y10);
                                                d1 = BigNumber(1).dividedBy(d1);
                                                sum = sum.plus(d1);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 9){//9次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let i9=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let y9;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;
        let s9 = inputs[8].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n-8; i1++){
            for(i2 = i1 + 1; i2 <= n-7; i2++){
                for(i3 = i2 + 1; i3 <= n-6; i3++){
                    for(i4 = i3 + 1; i4 <= n-5; i4++){
                        for(i5 = i4 + 1; i5 <= n-4; i5++){
                            for(i6 = i5 + 1; i6 <= n-3; i6++){
                                for(i7 = i6 + 1; i7 <= n-2; i7++){
                                    for(i8 = i7 + 1; i8 <= n-1; i8++){
                                        for(i9 = i8 + 1; i9 <= n; i9++){
                                            y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                                            y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                                            y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                                            y4 = Fibarray[i4-1].pow(s4);    //F_i4 ^ s4
                                            y5 = Fibarray[i5-1].pow(s5);
                                            y6 = Fibarray[i6-1].pow(s6);
                                            y7 = Fibarray[i7-1].pow(s7);
                                            y8 = Fibarray[i8-1].pow(s8);
                                            y9 = Fibarray[i9-1].pow(s9);
                                            d1 = y1.times(y2);
                                            d1 = d1.times(y3);
                                            d1 = d1.times(y4);
                                            d1 = d1.times(y5);
                                            d1 = d1.times(y6);
                                            d1 = d1.times(y7);
                                            d1 = d1.times(y8);
                                            d1 = d1.times(y9);
                                            d1 = BigNumber(1).dividedBy(d1);
                                            sum = sum.plus(d1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 8){//8次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-7; i1++){
            for(i2 = i1 + 1; i2 <= n-6; i2++){
                for(i3 = i2 + 1; i3 <= n-5; i3++){
                    for(i4 = i3 + 1; i4 <= n-4; i4++){
                        for(i5 = i4 + 1; i5 <= n-3; i5++){
                            for(i6 = i5 + 1; i6 <= n-2; i6++){
                                for(i7 = i6 + 1; i7 <= n-1; i7++){
                                    for(i8 = i7 + 1; i8 <= n; i8++){
                                        y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                                        y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                                        y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                                        y4 = Fibarray[i4-1].pow(s4);    //F_i4 ^ s4
                                        y5 = Fibarray[i5-1].pow(s5);
                                        y6 = Fibarray[i6-1].pow(s6);
                                        y7 = Fibarray[i7-1].pow(s7);
                                        y8 = Fibarray[i8-1].pow(s8);
                                        d1 = y1.times(y2);
                                        d1 = d1.times(y3);
                                        d1 = d1.times(y4);
                                        d1 = d1.times(y5);
                                        d1 = d1.times(y6);
                                        d1 = d1.times(y7);
                                        d1 = d1.times(y8);
                                        d1 = BigNumber(1).dividedBy(d1);
                                        sum = sum.plus(d1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 7){//7次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-6; i1++){
            for(i2 = i1 + 1; i2 <= n-5; i2++){
                for(i3 = i2 + 1; i3 <= n-4; i3++){
                    for(i4 = i3 + 1; i4 <= n-3; i4++){
                        for(i5 = i4 + 1; i5 <= n-2; i5++){
                            for(i6 = i5 + 1; i6 <= n-1; i6++){
                                for(i7 = i6 + 1; i7 <= n; i7++){
                                        y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                                        y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                                        y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                                        y4 = Fibarray[i4-1].pow(s4);    //F_i4 ^ s4
                                        y5 = Fibarray[i5-1].pow(s5);
                                        y6 = Fibarray[i6-1].pow(s6);
                                        y7 = Fibarray[i7-1].pow(s7);
                                        d1 = y1.times(y2);
                                        d1 = d1.times(y3);
                                        d1 = d1.times(y4);
                                        d1 = d1.times(y5);
                                        d1 = d1.times(y6);
                                        d1 = d1.times(y7);
                                        d1 = BigNumber(1).dividedBy(d1);
                                        sum = sum.plus(d1);
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 6){//6次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-5; i1++){
            for(i2 = i1 + 1; i2 <= n-4; i2++){
                for(i3 = i2 + 1; i3 <= n-3; i3++){
                    for(i4 = i3 + 1; i4 <= n-2; i4++){
                        for(i5 = i4 + 1; i5 <= n-1; i5++){
                            for(i6 = i5 + 1; i6 <= n; i6++){
                                y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                                y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                                y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                                y4 = Fibarray[i4-1].pow(s4);    //F_i4 ^ s4
                                y5 = Fibarray[i5-1].pow(s5);
                                y6 = Fibarray[i6-1].pow(s6);
                                d1 = y1.times(y2);
                                d1 = d1.times(y3);
                                d1 = d1.times(y4);
                                d1 = d1.times(y5);
                                d1 = d1.times(y6);
                                d1 = BigNumber(1).dividedBy(d1);
                                sum = sum.plus(d1);
                                
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 5){//5次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-4; i1++){
            for(i2 = i1 + 1; i2 <= n-3; i2++){
                for(i3 = i2 + 1; i3 <= n-2; i3++){
                    for(i4 = i3 + 1; i4 <= n-1; i4++){
                        for(i5 = i4 + 1; i5 <= n; i5++){
                            y1 = Fibarray[i1-1].pow(s1);    //F_i1 ^ s1
                            y2 = Fibarray[i2-1].pow(s2);    //F_i2 ^ s2
                            y3 = Fibarray[i3-1].pow(s3);    //F_i3 ^ s3
                            y4 = Fibarray[i4-1].pow(s4);    //F_i4 ^ s4
                            y5 = Fibarray[i5-1].pow(s5);
                            d1 = y1.times(y2);
                            d1 = d1.times(y3);
                            d1 = d1.times(y4);
                            d1 = d1.times(y5);
                            d1 = BigNumber(1).dividedBy(d1);
                            sum = sum.plus(d1);
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }

    return results;
}

function MZV(inputs) {
    var results = [];
    let d = 2;
    let n = inputs[10].value;
    let p = 0;
    let flag = 0;
    for (p = 0; p < 10; p++) {
        if (inputs[p].value != 0) {
            flag++;
        }
    }
    d = flag;
    

    // ロジックを次元ごとに記述
    // この部分は元の calculate 関数内のロジックを移動

    if(d === 1){//1次元配列の時
        let i1=0;
        let y1;
        let d1 = new BigNumber(0);
        
        let s1 = inputs[0].value;

        let sum = new BigNumber(0);

        for(i1 = 1; i1 <= n; i1++){
            y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
            d1 = BigNumber(1).dividedBy(y1);
            sum = sum.plus(d1);
        }
        results.push(sum.toString());
    }else if(d === 2){//2次元配列の時

        let y1=0;
        let y2=0;
        let y3;
        let y4;
        let y5;
        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let sum = new BigNumber(0);
        for(y1 = 1; y1 <= n; y1++){
            for(y2 = y1 + 1; y2 <= n; y2++){
                y3 = BigNumber(y1).pow(s1);    //y1 ^ s1
                y4 = BigNumber(y2).pow(s2);    //y2 ^ s2
                y5 = y3.times(y4);
                y5 = new BigNumber(1).dividedBy(y5);
                sum = sum.plus(y5);
            }
        }
        results.push(sum.toString());
    }else if(d === 3){//3次元配列の時

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
    }else if(d === 4){//4次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n-2; i1++){
            for(i2 = i1 + 1; i2 <= n-1; i2++){
                for(i3 = i2 + 1; i3 <= n; i3++){
                    for(i4 = i3 + 1; i4 <= n; i4++){
                        y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                        y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                        y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                        y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                        d1 = y1.times(y2);
                        d1 = d1.times(y3);
                        d1 = d1.times(y4);
                        d1 = BigNumber(1).dividedBy(d1);
                        sum = sum.plus(d1);
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 10){//10次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let i9=0;
        let i10=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let y9;
        let y10;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;
        let s9 = inputs[8].value;
        let s10 = inputs[9].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n-9; i1++){
            for(i2 = i1 + 1; i2 <= n-8; i2++){
                for(i3 = i2 + 1; i3 <= n-7; i3++){
                    for(i4 = i3 + 1; i4 <= n-6; i4++){
                        for(i5 = i4 + 1; i5 <= n-5; i5++){
                            for(i6 = i5 + 1; i6 <= n-4; i6++){
                                for(i7 = i6 + 1; i7 <= n-3; i7++){
                                    for(i8 = i7 + 1; i8 <= n-2; i8++){
                                        for(i9 = i8 + 1; i9 <= n-1; i9++){
                                            for(i10 = i9 + 1; i10 <= n; i10++){
                                                y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                                y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                                y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                                y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                                y5 = BigNumber(i5).pow(s5);
                                                y6 = BigNumber(i6).pow(s6);
                                                y7 = BigNumber(i7).pow(s7);
                                                y8 = BigNumber(i8).pow(s8);
                                                y9 = BigNumber(i9).pow(s9);
                                                y10 = BigNumber(i10).pow(s10);
                                                d1 = y1.times(y2);
                                                d1 = d1.times(y3);
                                                d1 = d1.times(y4);
                                                d1 = d1.times(y5);
                                                d1 = d1.times(y6);
                                                d1 = d1.times(y7);
                                                d1 = d1.times(y8);
                                                d1 = d1.times(y9);
                                                d1 = d1.times(y10);
                                                d1 = BigNumber(1).dividedBy(d1);
                                                sum = sum.plus(d1);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 9){//9次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let i9=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let y9;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;
        let s9 = inputs[8].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n-8; i1++){
            for(i2 = i1 + 1; i2 <= n-7; i2++){
                for(i3 = i2 + 1; i3 <= n-6; i3++){
                    for(i4 = i3 + 1; i4 <= n-5; i4++){
                        for(i5 = i4 + 1; i5 <= n-4; i5++){
                            for(i6 = i5 + 1; i6 <= n-3; i6++){
                                for(i7 = i6 + 1; i7 <= n-2; i7++){
                                    for(i8 = i7 + 1; i8 <= n-1; i8++){
                                        for(i9 = i8 + 1; i9 <= n; i9++){
                                            y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                            y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                            y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                            y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                            y5 = BigNumber(i5).pow(s5);
                                            y6 = BigNumber(i6).pow(s6);
                                            y7 = BigNumber(i7).pow(s7);
                                            y8 = BigNumber(i8).pow(s8);
                                            y9 = BigNumber(i9).pow(s9);
                                            d1 = y1.times(y2);
                                            d1 = d1.times(y3);
                                            d1 = d1.times(y4);
                                            d1 = d1.times(y5);
                                            d1 = d1.times(y6);
                                            d1 = d1.times(y7);
                                            d1 = d1.times(y8);
                                            d1 = d1.times(y9);
                                            d1 = BigNumber(1).dividedBy(d1);
                                            sum = sum.plus(d1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 8){//8次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-7; i1++){
            for(i2 = i1 + 1; i2 <= n-6; i2++){
                for(i3 = i2 + 1; i3 <= n-5; i3++){
                    for(i4 = i3 + 1; i4 <= n-4; i4++){
                        for(i5 = i4 + 1; i5 <= n-3; i5++){
                            for(i6 = i5 + 1; i6 <= n-2; i6++){
                                for(i7 = i6 + 1; i7 <= n-1; i7++){
                                    for(i8 = i7 + 1; i8 <= n; i8++){
                                        y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                        y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                        y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                        y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                        y5 = BigNumber(i5).pow(s5);
                                        y6 = BigNumber(i6).pow(s6);
                                        y7 = BigNumber(i7).pow(s7);
                                        y8 = BigNumber(i8).pow(s8);
                                        d1 = y1.times(y2);
                                        d1 = d1.times(y3);
                                        d1 = d1.times(y4);
                                        d1 = d1.times(y5);
                                        d1 = d1.times(y6);
                                        d1 = d1.times(y7);
                                        d1 = d1.times(y8);
                                        d1 = BigNumber(1).dividedBy(d1);
                                        sum = sum.plus(d1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 7){//7次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-6; i1++){
            for(i2 = i1 + 1; i2 <= n-5; i2++){
                for(i3 = i2 + 1; i3 <= n-4; i3++){
                    for(i4 = i3 + 1; i4 <= n-3; i4++){
                        for(i5 = i4 + 1; i5 <= n-2; i5++){
                            for(i6 = i5 + 1; i6 <= n-1; i6++){
                                for(i7 = i6 + 1; i7 <= n; i7++){
                                        y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                        y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                        y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                        y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                        y5 = BigNumber(i5).pow(s5);
                                        y6 = BigNumber(i6).pow(s6);
                                        y7 = BigNumber(i7).pow(s7);
                                        d1 = y1.times(y2);
                                        d1 = d1.times(y3);
                                        d1 = d1.times(y4);
                                        d1 = d1.times(y5);
                                        d1 = d1.times(y6);
                                        d1 = d1.times(y7);
                                        d1 = BigNumber(1).dividedBy(d1);
                                        sum = sum.plus(d1);
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 6){//6次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-5; i1++){
            for(i2 = i1 + 1; i2 <= n-4; i2++){
                for(i3 = i2 + 1; i3 <= n-3; i3++){
                    for(i4 = i3 + 1; i4 <= n-2; i4++){
                        for(i5 = i4 + 1; i5 <= n-1; i5++){
                            for(i6 = i5 + 1; i6 <= n; i6++){
                                y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                y5 = BigNumber(i5).pow(s5);
                                y6 = BigNumber(i6).pow(s6);
                                d1 = y1.times(y2);
                                d1 = d1.times(y3);
                                d1 = d1.times(y4);
                                d1 = d1.times(y5);
                                d1 = d1.times(y6);
                                d1 = BigNumber(1).dividedBy(d1);
                                sum = sum.plus(d1);
                                
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 5){//5次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n-4; i1++){
            for(i2 = i1 + 1; i2 <= n-3; i2++){
                for(i3 = i2 + 1; i3 <= n-2; i3++){
                    for(i4 = i3 + 1; i4 <= n-1; i4++){
                        for(i5 = i4 + 1; i5 <= n; i5++){
                            y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                            y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                            y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                            y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                            y5 = BigNumber(i5).pow(s5);
                            d1 = y1.times(y2);
                            d1 = d1.times(y3);
                            d1 = d1.times(y4);
                            d1 = d1.times(y5);
                            d1 = BigNumber(1).dividedBy(d1);
                            sum = sum.plus(d1);
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }

    return results;
}




function MZSV(inputs) {
    var results = [];
    let d = 2;
    let n = inputs[10].value;
    let p = 0;
    let flag = 0;
    for (p = 0; p < 10; p++) {
        if (inputs[p].value != 0) {
            flag++;
        }
    }
    d = flag;
    

    // ロジックを次元ごとに記述
    // この部分は元の calculate 関数内のロジックを移動

    if(d === 1){//1次元配列の時
        let i1=0;
        let y1;
        let d1 = new BigNumber(0);
        
        let s1 = inputs[0].value;

        let sum = new BigNumber(0);

        for(i1 = 1; i1 <= n; i1++){
            y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
            d1 = BigNumber(1).dividedBy(y1);
            sum = sum.plus(d1);
        }
        results.push(sum.toString());
    }else if(d === 2){//2次元配列の時

        let y1=0;
        let y2=0;
        let y3;
        let y4;
        let y5;
        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let sum = new BigNumber(0);
        for(y1 = 1; y1 <= n; y1++){
            for(y2 = y1; y2 <= n; y2++){
                y3 = BigNumber(y1).pow(s1);    //y1 ^ s1
                y4 = BigNumber(y2).pow(s2);    //y2 ^ s2
                y5 = y3.times(y4);
                y5 = new BigNumber(1).dividedBy(y5);
                sum = sum.plus(y5);
            }
        }
        results.push(sum.toString());
    }else if(d === 3){//3次元配列の時

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
        for(i1 = 1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
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
    }else if(d === 4){//4次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
                    for(i4 = i3; i4 <= n; i4++){
                        y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                        y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                        y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                        y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                        d1 = y1.times(y2);
                        d1 = d1.times(y3);
                        d1 = d1.times(y4);
                        d1 = BigNumber(1).dividedBy(d1);
                        sum = sum.plus(d1);
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 10){//10次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let i9=0;
        let i10=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let y9;
        let y10;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;
        let s9 = inputs[8].value;
        let s10 = inputs[9].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
                    for(i4 = i3; i4 <= n; i4++){
                        for(i5 = i4; i5 <= n; i5++){
                            for(i6 = i5; i6 <= n; i6++){
                                for(i7 = i6; i7 <= n; i7++){
                                    for(i8 = i7; i8 <= n; i8++){
                                        for(i9 = i8; i9 <= n; i9++){
                                            for(i10 = i9; i10 <= n; i10++){
                                                y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                                y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                                y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                                y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                                y5 = BigNumber(i5).pow(s5);
                                                y6 = BigNumber(i6).pow(s6);
                                                y7 = BigNumber(i7).pow(s7);
                                                y8 = BigNumber(i8).pow(s8);
                                                y9 = BigNumber(i9).pow(s9);
                                                y10 = BigNumber(i10).pow(s10);
                                                d1 = y1.times(y2);
                                                d1 = d1.times(y3);
                                                d1 = d1.times(y4);
                                                d1 = d1.times(y5);
                                                d1 = d1.times(y6);
                                                d1 = d1.times(y7);
                                                d1 = d1.times(y8);
                                                d1 = d1.times(y9);
                                                d1 = d1.times(y10);
                                                d1 = BigNumber(1).dividedBy(d1);
                                                sum = sum.plus(d1);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 9){//9次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let i9=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let y9;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;
        let s9 = inputs[8].value;

        let sum = new BigNumber(0);
        for(i1 = 1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
                    for(i4 = i3; i4 <= n; i4++){
                        for(i5 = i4; i5 <= n; i5++){
                            for(i6 = i5; i6 <= n; i6++){
                                for(i7 = i6; i7 <= n; i7++){
                                    for(i8 = i7; i8 <= n; i8++){
                                        for(i9 = i8; i9 <= n; i9++){
                                            y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                            y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                            y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                            y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                            y5 = BigNumber(i5).pow(s5);
                                            y6 = BigNumber(i6).pow(s6);
                                            y7 = BigNumber(i7).pow(s7);
                                            y8 = BigNumber(i8).pow(s8);
                                            y9 = BigNumber(i9).pow(s9);
                                            d1 = y1.times(y2);
                                            d1 = d1.times(y3);
                                            d1 = d1.times(y4);
                                            d1 = d1.times(y5);
                                            d1 = d1.times(y6);
                                            d1 = d1.times(y7);
                                            d1 = d1.times(y8);
                                            d1 = d1.times(y9);
                                            d1 = BigNumber(1).dividedBy(d1);
                                            sum = sum.plus(d1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 8){//8次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let i8=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let y8;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;
        let s8 = inputs[7].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
                    for(i4 = i3; i4 <= n; i4++){
                        for(i5 = i4; i5 <= n; i5++){
                            for(i6 = i5; i6 <= n; i6++){
                                for(i7 = i6; i7 <= n; i7++){
                                    for(i8 = i7; i8 <= n; i8++){
                                        y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                        y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                        y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                        y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                        y5 = BigNumber(i5).pow(s5);
                                        y6 = BigNumber(i6).pow(s6);
                                        y7 = BigNumber(i7).pow(s7);
                                        y8 = BigNumber(i8).pow(s8);
                                        d1 = y1.times(y2);
                                        d1 = d1.times(y3);
                                        d1 = d1.times(y4);
                                        d1 = d1.times(y5);
                                        d1 = d1.times(y6);
                                        d1 = d1.times(y7);
                                        d1 = d1.times(y8);
                                        d1 = BigNumber(1).dividedBy(d1);
                                        sum = sum.plus(d1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 7){//7次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let i7=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let y7;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;
        let s7 = inputs[6].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
                    for(i4 = i3; i4 <= n; i4++){
                        for(i5 = i4; i5 <= n; i5++){
                            for(i6 = i5; i6 <= n; i6++){
                                for(i7 = i6; i7 <= n; i7++){
                                        y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                        y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                        y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                        y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                        y5 = BigNumber(i5).pow(s5);
                                        y6 = BigNumber(i6).pow(s6);
                                        y7 = BigNumber(i7).pow(s7);
                                        d1 = y1.times(y2);
                                        d1 = d1.times(y3);
                                        d1 = d1.times(y4);
                                        d1 = d1.times(y5);
                                        d1 = d1.times(y6);
                                        d1 = d1.times(y7);
                                        d1 = BigNumber(1).dividedBy(d1);
                                        sum = sum.plus(d1);
                                }
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 6){//6次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let i6=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let y6;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;
        let s6 = inputs[5].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
                    for(i4 = i3; i4 <= n; i4++){
                        for(i5 = i4; i5 <= n; i5++){
                            for(i6 = i5; i6 <= n; i6++){
                                y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                                y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                                y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                                y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                                y5 = BigNumber(i5).pow(s5);
                                y6 = BigNumber(i6).pow(s6);
                                d1 = y1.times(y2);
                                d1 = d1.times(y3);
                                d1 = d1.times(y4);
                                d1 = d1.times(y5);
                                d1 = d1.times(y6);
                                d1 = BigNumber(1).dividedBy(d1);
                                sum = sum.plus(d1);
                                
                            }
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }else if(d === 5){//5次元配列の時

        let i1=0;
        let i2=0;
        let i3=0;
        let i4=0;
        let i5=0;
        let y1;
        let y2;
        let y3;
        let y4;
        let y5;
        let d1 = new BigNumber(0);

        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        let s4 = inputs[3].value;
        let s5 = inputs[4].value;

        let sum = new BigNumber(0);
        for(i1 =      1; i1 <= n; i1++){
            for(i2 = i1; i2 <= n; i2++){
                for(i3 = i2; i3 <= n; i3++){
                    for(i4 = i3; i4 <= n; i4++){
                        for(i5 = i4; i5 <= n; i5++){
                            y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
                            y2 = BigNumber(i2).pow(s2);    //i2 ^ s2
                            y3 = BigNumber(i3).pow(s3);    //i3 ^ s3
                            y4 = BigNumber(i4).pow(s4);    //i4 ^ s4
                            y5 = BigNumber(i5).pow(s5);
                            d1 = y1.times(y2);
                            d1 = d1.times(y3);
                            d1 = d1.times(y4);
                            d1 = d1.times(y5);
                            d1 = BigNumber(1).dividedBy(d1);
                            sum = sum.plus(d1);
                        }
                    }
                }
            }
        }
        results.push(sum.toString());
    }

    return results;
}
