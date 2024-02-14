/*


function zeta(inputs){
    var results = [];
    let d=0;
    let n = inputs[10].value;//上限
    let p = 0;
    let flag = 0;
    for (p = 0; p < 10; p++) {
        if (inputs[p].value != 0) {
            flag++;
        }
    }
    d = flag;//0でないものの数

    if(d === 1){
        let n1 = 0;
        let p1;
        let d1;
        let sum = new BigNumber(0);
        let s1 = inputs[0].value;
        for(n1 = 1; n1 <= n; n1++){
            p1 = BigNumber(n1).pow(s1);
            d1 = BigNumber(1).dividedBy(p1);
            sum = sum.plus(d1);
        }
        results.push(sum.toString());

    } else if(d === 2){
        let n1 = 0;
        
        let p1;
        let p2;
        let d1;
        let d2;
        let sum1 = new BigNumber(0);
        let sum2 = new BigNumber(0);
        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        for(n1 = n; n1 >= 1; n--){
            p2 = BigNumber(n1+1).pow(s2);
            d2 = BigNumber(1).dividedBy(p2);
            sum2 = sum2.plus(d2);


            p1 = BigNumber(n1).pow(s1);
            d1 = BigNumber(1).dividedBy(p1);
            d1 = d1.times(sum2);
            sum1 = sum1.plus(d1);

        }
        results.push(sum1.toString());
    } else if(d === 3){
        let n1 = 0;
        
        let p1;
        let p2;
        let p3;
        let d1;
        let d2;
        let d3;
        let sum1 = new BigNumber(0);
        let sum2 = new BigNumber(0);
        let sum3 = new BigNumber(0);
        let s1 = inputs[0].value;
        let s2 = inputs[1].value;
        let s3 = inputs[2].value;
        
    }

    return results;
}

*/

function fibfix(n) {
    let Fibarray = new Array(Number(n) + 2);// 0 ~ n+1

    Fibarray[0] = new BigNumber(0);
    Fibarray[1] = new BigNumber(1);
    for (let y0 = 2; y0 <= Number(n)+1; y0++) {
        Fibarray[y0] = Fibarray[y0 - 1].plus(Fibarray[y0 - 2]);
    }

    return Fibarray;
}





function MFzeta2(inputs){

    
    var results = [];//結果を返す箱

    
    let p = Number(inputs[10].value);//上限     inputs[0 ~ 9]が変数

    let Fibarray = fibfix(p);

    let u = 0;
    let flag = 0;
    for (u = 0; u < 10; u++) {
        if (inputs[u].value != 0) {
            flag++;
        }
    }
    let r = Number(flag);//0でないものの数 -> 変数の個数


    if(r == 1){
        let i1=0;
        let y1;
        
        let s1 = (-1)*(Number(inputs[0].value));//先に-1を掛けておく

        let sum = new BigNumber(0);

        for(i1 = 1; i1 <= n; i1++){
            y1 = Fibarray[i1].pow(s1);    //F_i1 ^ -s1
            sum = sum.plus(y1);
        }
        results.push(sum.toString());

        return results;
    }




    let a = Number(inputs[11].value);//下限の値。

    let array1 = new Array(p-a-1);　//要素数p-a-1の配列(array)を作成

    let inputarr = new Array(10);   //変数を入れる箱

    for(let x1 = 0; x1 < 10; x1++){
        inputarr[x1] = (-1)*(Number(inputs[x1].value));
    }//すべてマイナスにする

    let first = new BigNumber(0);
    let add1 = new Fibarray[p+r-2].pow(inputarr[r-1]);
    let add2 = new Fibarray[p+r-1].pow(inputarr[r-1]);
    first = add1.plus(add2);
    array1[p-a-2] = first;

    for(u = p-a-3; u >= 0; u--){
        add1 = Fibarray[u+a+r].pow(inputarr[r-1]);
        
        first = first.plus(add1);

        array1[u] = first;
    }
    
    let bef = Fibarray[p+r-1].pow(inputarr[r-1]);

    //console.log(p);
    //console.log(r);
    //console.log(inputarr[r-1]);
    //console.log(bef.toString());
    //console.log("hay1");
    
    /*for(u = 0; u <= p-a-2; u++){

        console.log(array1[u].toString());
    }s*/
    let coc;

    coc = core(array1,inputarr[r-2],p,r-2,a,bef);

    //console.log("hay2");

    /*for(u = 0; u <= p-a-2; u++){
        
        console.log(coc.arr[u].toString());
    }*/

    for(u = r-3; u >= 0; u--){
        coc = core(coc.arr,inputarr[u],p,u,a,coc.before);       //THIS IS THE CORE.
    }

    let answer = coc.arr[0];

    results.push(answer.toString());

    
    return results;


}

function core(arr,msi1,p,i,a,before){ 


    let outarr = new Array(Number(p)-Number(a)-1);

    let an = 0;
    let d = BigNumber(0);
    let sum = BigNumber(0);
    an = Number(p)-Number(a)-2;

    d = Fibarray[an+Number(a)+Number(i)+1].pow(msi1);//糧
    d = d.times(arr[an]);
    
    let buf = Fibarray[Number(p)+Number(i)].pow(msi1);//今回
    buf = buf.times(before);//今回＊前回

    let bef = buf;

    sum = d.plus(buf);//それが、最初の糧となるわけさ。こいつを加える。

    outarr[an] = sum;    //最初の糧を加えた奴を新規登録する


    for(an = p-a-3; an >= 0; an--){
        

        d = Fibarray[an+Number(a)+Number(i)+1].pow(msi1);//掛け算する糧を作る
        d = d.times(arr[an]);

        sum = sum.plus(d);//糧の完成。前の登録者と合体。

        outarr[an] = sum;//新たな新規登録者ができる。


    }//登録者をすべて登録完了。

    //返すのは登録者リストとbeforeだけかな？
    return {arr: outarr, before: bef};
}