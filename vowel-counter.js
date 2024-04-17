const str = "Hey Js! I am Noushad";
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowel(data){
    let count = 0;

    data.toLowerCase().split("").forEach(ch => {
        vowels.includes(ch) && count++;
    })

    return count;
}

console.log(countVowel(str))
