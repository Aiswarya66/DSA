function addStrings(num1: string, num2: string): string {
    let n1= num1.length-1;
    let n2= num2.length-1;
    let carry = 0;
    let result= '';
    while(n1>=0||n2>=0||carry>0){
        if(n1>=0){
            carry+=Number(num1[n1]);
            n1--;
        }
        if(n2>=0){
            carry+=Number(num2[n2]);
            n2--;
        }
        result=carry%10+result;
        carry = Math.floor(carry/10);
    }
    return result;
};
