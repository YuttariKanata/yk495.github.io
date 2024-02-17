


function taufix(a,pr){

    //数の下準備
    let tau = new BigNumber(5).sqrt(2);
    tau = BigNumber(3).minus(tau);
    tau = BigNumber(tau).div(2);    //tau = (3 - sqrt(5))/2

    let arr = new Array(Number(pr)+1);
    arr[a] = BigNumber(tau).pow(a); //arr[a] = tau^a

    for(let i = Number(a)+1; i <= pr; i++){
        arr[i] = BigNumber(arr[i-1]).times(tau);    //arr[i] = arr[i-1]*tau
    }

    return arr;

}

function phifix(a,pr){

    let mphi = new BigNumber(5).sqrt(2);
    mphi = BigNumber(mphi).plus(1);
    mphi = BigNumber(mphi).div(2);      //mphi =  (1 + sqrt(5))/2
    mphi = BigNumber(mphi).negated();   //mphi = -(1 + sqrt(5))/2

    let arr = new Array(Number(pr)+1);
    arr[a] = BigNumber(mphi).pow(a);    //arr[a] = mphi^a

    for(let i = Number(a)+1; i <= pr; i++){
        arr[i] = BigNumber(arr[i-1]).times(mphi);    //arr[i] = arr[i-1]*mphi
    }

    return arr;
}



function MFSzeta2(inputs){

    
    var results = [];//結果を返す箱

    
    let p = Number(inputs[10].value);//上限     inputs[0 ~ 9]が変数

    

    let u = 0;
    let flag = 0;
    for (u = 0; u < 10; u++) {
        if (inputs[u].value != 0) {
            flag++;
        }
    }
    let r = Number(flag);//0でないものの数 -> 変数の個数
    let a = Number(inputs[11].value);//下限の値。



    let Fibarray  = fibfix(p+r);  //Fnが格納されている   Fibarray[n] = Fn
    let Tauarray  = taufix(a,p+r);  //tauが格納されている  Tauarray[n] = Tau^n
    let Mphiarray = phifix(a,p+r);  //-phiが格納されている Fibarray[n] = (-phi)^n

    let MpFibarray = new Array(p+r+1);
    for(u = a; u <= p+r; u++){
        MpFibarray[u] = Fibarray[u].times(Mphiarray[u]);    //mphi と Fib を先に掛け算しておく。掛け算したものしか使わないからね。
    }


    Fibarray  = null;
    Mphiarray = null;
    //いらなくなったので消す。配列の解放。


    if(r == 1){
        let i1=0;
        let y1;
        
        let s1 = (-1)*(Number(inputs[0].value));//先に-1を掛けておく

        let sum = new BigNumber(0);

        for(i1 = 1+a; i1 <= p; i1++){
            y1 = MpFibarray[i1].pow(s1);
            y1 = Tauarray[i1].times(y1);
            
            sum = sum.plus(y1);
        }
        results.push(sum.toString());

        return results;
    }




    

    let array1 = new Array(p-a-1);　//要素数p-a-1の配列(array)を作成

    let inputarr = new Array(10);   //変数を入れる箱

    for(let x1 = 0; x1 < 10; x1++){
        inputarr[x1] = (-1)*(Number(inputs[x1].value));
    }//すべてマイナスにする

    let first = new BigNumber(0);
    let add1 = new BigNumber(MpFibarray[p+r-2]).pow(inputarr[r-1]);
    add1 = Tauarray[p+r-2].times(add1);
    let add2 = new BigNumber(MpFibarray[p+r-1]).pow(inputarr[r-1]);
    add1 = Tauarray[p+r-1].times(add2);
    first = add1.plus(add2);//最初の項だけ手動で計算する
    array1[p-a-2] = first;

    for(u = p-a-3; u >= 0; u--){
        add1 = MpFibarray[u+a+r].pow(inputarr[r-1]);
        add1 = Tauarray[u+a+r].times(add1);
        
        first = first.plus(add1);

        array1[u] = first;
    }//最初の配列を完成させる
    
    let bef = Fibarray[p+r-1].pow(inputarr[r-1]);
    bef = Tauarray[p+r-1].times(inputarr[r-1]);

    /*console.log(p);
    console.log(r);
    console.log(inputarr[r-1]);
    console.log(bef.toString());
    console.log("hay1");
    for(u = 0; u <= p-a-2; u++){

        console.log(array1[u].toString());
    }s*/
    let coc;

    coc = coreMFZSV(array1,inputarr[r-2],p,r-2,a,bef,MpFibarray,Tauarray);

    //console.log("hay2");

    /*for(u = 0; u <= p-a-2; u++){
        
        console.log(coc.arr[u].toString());
    }*/

    for(u = r-3; u >= 0; u--){
        coc = coreMFZSV(coc.arr,inputarr[u],p,u,a,coc.before,MpFibarray,Tauarray);       //THIS IS THE CORE.



    }

    let answer = coc.arr[0];

    results.push(answer.toString());

    
    return results;


}

function coreMFZSV(arr,msi1,p,i,a,before,fib,tau){ 


    let outarr = new Array(Number(p)-Number(a)-1);

    let an = 0;
    let d = BigNumber(0);
    let sum = BigNumber(0);
    an = Number(p)-Number(a)-2;     //setting

    d = BigNumber(fib[an+Number(a)+Number(i)+1]).pow(msi1);//糧
    d = tau[an+Number(a)+Number(i)+1].times(d);
    d = d.times(arr[an]);//ここで前の奴と掛け算してる
    
    let buf = BigNumber(fib[Number(p)+Number(i)]).pow(msi1);//今回
    buf = tau[Number(p)+Number(i)].times(buf);
    buf = buf.times(before);//今回＊前回

    let bef = buf;

    sum = d.plus(buf);//それが、最初の糧となるわけさ。こいつを加える。

    outarr[an] = sum;    //最初の糧を加えた奴を新規登録する


    for(an = p-a-3; an >= 0; an--){
        

        d = BigNumber(fib[an+Number(a)+Number(i)+1]).pow(msi1);//掛け算する糧を作る
        d = tau[an+Number(a)+Number(i)+1].times(d);
        d = d.times(arr[an]);

        sum = d.plus(sum);//糧の完成。前の登録者と合体。

        outarr[an] = sum;//新たな新規登録者ができる。


    }//登録者をすべて登録完了。

    //返すのは登録者リストとbeforeだけかな？
    return {arr: outarr, before: bef};
}