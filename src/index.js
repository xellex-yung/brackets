module.exports = function check(str, bracketsConfig) {

 let mas = str.split('');
 let newMas = [];

let isOpen;
let bracketPair;

    for (let bracket of mas)
    {
       for (let i of bracketsConfig)
       {
            if (bracket === i[0]) 
            {
                isOpen = true;
                bracketPair = i;
                break;
            }
            else if (bracket === i[1])
            {
                isOpen = false;
                bracketPair = i;
                break;
            }
       }
       if (isOpen)
       {
            if (bracketPair[0] == bracketPair[1] && newMas.length > 0)
            {
                let last = newMas.pop();
                if (last != bracket)
                {
                    newMas.push(last);
                    newMas.push(bracket);
                }
            }
            else
            {
                newMas.push(bracket);
            }
       }
       else
       {
           if (bracketPair[0] !== newMas.pop())
           {
               return false;
           }
       }
    }
    if(newMas.length !== 0)
    {
        return false;
    }
    return true;
 

}
