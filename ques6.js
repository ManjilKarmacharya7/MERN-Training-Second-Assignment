const checkPrime = () => {
    let input = document.getElementById("number").value;
    let result = "is a prime number";

    if (input < 2) {
        result = "not a prime number";
    } else {
        for (let i = 2; i < input; i++) {
            if (input % i == 0) {
                result = "not a prime number";
                break;
            }
        }
    }
    document.getElementById("result").innerHTML = `Result: ${result}`;
}
