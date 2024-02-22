
















function AMZV(inputs,buttons){

    
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


    if(r == 1){
        let i1=0;
        let y1;

        let ipc = Number((buttons[0].value));
        if(ipc == 1){
            ipc = 1;
        }else{
            ipc = -1;
        }
        
        let s1 = (-1)*(Number(inputs[0].value));

        let sum = new BigNumber(0);

        for(i1 = 1+a; i1 <= p; i1++){
            y1 = BigNumber(i1).pow(s1);    //i1 ^ s1
            if(i1 % 2 == 1){
                y1 = BigNumber(y1).times(ipc);  //i1が奇数ならipcを掛ける
            }

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

    let ipcarr = new Array(10);
    for(x1 = 0; x1 < 10; x1 ++){
        if(buttons[x1]){
            ipcarr[x1] = 1;
        }else{
            ipcarr[x1] = -1;
        }
    }

    console.log(ipcarr);
    console.log(buttons);

    let first = new BigNumber(0);
    let add1 = new BigNumber(p+r-2).pow(inputarr[r-1]);
    if((p+r-2) % 2 == 1){
        add1 = add1.times(ipcarr[r-1]);
    }
    let add2 = new BigNumber(p+r-1).pow(inputarr[r-1]);
    if((p+r-1) % 2 == 1){
        add2 = add2.times(ipcarr[r-1]);
    }
    first = add1.plus(add2);
    array1[p-a-2] = first;

    for(u = p-a-3; u >= 0; u--){
        add1 = BigNumber(u+a+r).pow(inputarr[r-1]);
        if((u+a+r) % 2 == 1){
            add1 = add1.times(ipcarr[r-1]);
        }
        
        first = first.plus(add1);

        array1[u] = first;
    }
    
    let bef = BigNumber(p+r-1).pow(inputarr[r-1]);
    if((p+r-1) % 2 == 1){
        bef = bef.times(ipcarr[r-1]);
    }

    //console.log(p);
    //console.log(r);
    //console.log(inputarr[r-1]);
    //console.log(bef.toString());
    //console.log("hay1");
    
    /*for(u = 0; u <= p-a-2; u++){

        console.log(array1[u].toString());
    }*/
    let coc;

    console.log(array1);

    coc = coreAMZV(array1,inputarr[r-2],p,r-2,a,bef,ipcarr);

    console.log(coc.arr);

    //console.log("hay2");

    /*for(u = 0; u <= p-a-2; u++){
        
        console.log(coc.arr[u].toString());
    }*/

    for(u = r-3; u >= 0; u--){
        coc = coreAMZV(coc.arr,inputarr[u],p,u,a,coc.before,ipcarr);       //THIS IS THE CORE.


        console.log(coc.arr);
    }

    let answer = coc.arr[0];

    results.push(answer.toString());

    
    return results;


}

function coreAMZV(arr,msi1,p,i,a,before,ipcar){ 


    let outarr = new Array(Number(p)-Number(a)-1);

    let an = 0;
    let d = BigNumber(0);
    let sum = BigNumber(0);
    an = Number(p)-Number(a)-2;

    d = BigNumber(an+Number(a)+Number(i)+1).pow(msi1);//糧
    if((an+Number(a)+Number(i)+1) % 2 == 1){
        d = d.times(Number(ipcar[msi1]));
    }
    d = d.times(arr[an]);
    
    let buf = BigNumber(Number(p)+Number(i)).pow(msi1);//今回
    if((Number(p)+Number(i)) % 2 == 1){
        buf = buf.times(Number(ipcar[msi1]));
    }

    buf = buf.times(before);//今回＊前回

    let bef = buf;

    sum = d.plus(buf);//それが、最初の糧となるわけさ。こいつを加える。

    outarr[an] = sum;    //最初の糧を加えた奴を新規登録する


    for(an = p-a-3; an >= 0; an--){
        

        d = BigNumber(an+Number(a)+Number(i)+1).pow(msi1);//掛け算する糧を作る
        if((an+Number(a)+Number(i)+1) % 2 == 1){
            d = d.times(Number(ipcar[msi1]));
        }
        d = d.times(arr[an]);

        sum = sum.plus(d);//糧の完成。前の登録者と合体。

        outarr[an] = sum;//新たな新規登録者ができる。


    }//登録者をすべて登録完了。

    //返すのは登録者リストとbeforeだけかな？
    return {arr: outarr, before: bef};
}