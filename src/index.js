const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array_size = 10;
    let tmp_slice = [];
    let tmp_mor = [];
    let out= [];
    for (let i = 0; i < expr.length; i += array_size){
        tmp_slice.push(expr.slice(i, i + array_size));
    }

    for (let i = 0; i < tmp_slice.length; i++){
        let num_to_mor_tmp = [];
        let morse = '';
        if (tmp_slice[i][0] === '*'){
            tmp_mor.push(' ');
            continue;
        }else{

            for (let j = 0; j < tmp_slice[i].length; j += 2){
                if (tmp_slice[i].slice(j, j + 2) === '00'){
                    continue;
                }else{
                    num_to_mor_tmp.push(tmp_slice[i].slice(j, j + 2));
                }
            }
            for (let j = 0; j < num_to_mor_tmp.length; j++){            
                if (num_to_mor_tmp[j] === '10'){
                    morse += '.';
                }else{
                    morse += '-';
                }
            }            
            tmp_mor.push(morse);
        }
    }
    for (let i = 0; i < tmp_mor.length; i++){
        if (tmp_mor[i] === ' '){
            out.push(tmp_mor[i]);
        }else{
            out.push(MORSE_TABLE[tmp_mor[i]]);
        }
    }
    
    return out.join('');    
}

module.exports = {
    decode
}
