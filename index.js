// function pow

function pow(num , powNum) {
    if(num < 0)
    {
        num = num ** powNum;
        return (-num);
    }
    else {
        return num ** powNum;
    }
};

console.log(pow(88 , 2));

let btn = document.getElementById('go-now');

btn.onclick = function() {
    location.href = ""
}