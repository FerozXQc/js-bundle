const prompt = require('prompt-sync')();

ROWS = 3;
COLS = 3;

const SYMBOLS_COUNT = {
    A:2,
    B:3,
    C:4,
    D:5
}

const SYMBOLS_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}

const input = () => {
   
    while(true){
        const a = prompt('write input: ');
        let aNum = parseInt(a);
        if(isNaN(aNum) || aNum<=50 || aNum>100){
            console.log('try again.');
            }
            else{
                return aNum;
            }
        }  
    }

    const lines = () => {
   
        while(true){
            const b = prompt('write no of lines(1-3): ');
            const lineNum = parseInt(b);
            if(isNaN(lineNum) || lineNum<=0 || lineNum>3){
                console.log('try again.');
                }
                else{
                    return lineNum;
                }
            }  
        }

        const bettingAmt = (depAmt, NoOfLines) => {
   
            while(true){
                const c = prompt('write input: ');
                const bet = parseInt(c);
                if(isNaN(bet) || bet<=0 || bet>depAmt / NoOfLines){
                    console.log('try again.');
                    }
                    else{
                        return bet;
                    }
                }  
            }

            const spin = () => {
                const symbols = [];
                for(const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
                    for(let i = 0; i<count; i++){
                        symbols.push(symbol);
                    }
                } 

                const reel = [];
                for(let i = 0; i<COLS; i++){
                    const reelSymbols = [...symbols];
                    reel.push([]);
                    for(let j = 0; j<ROWS; j++){
                        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
                        const selectedNum = reelSymbols[randomIndex];
                        reel[i].push(selectedNum);
                        reelSymbols.splice(randomIndex, 1);
                        
                    }
                    
                }
                return reel
                
            }

        const transpose = (reel) => {
            const transposes = [];
            for(let i = 0; i<ROWS; i++){
                transposes.push([]);
                for(let j=0;j<COLS;j++){
                    transposes[i].push(reel[j][i]);
                }
            }
            return transposes
        }

        const printRows = (transposes) => {
            for( const transpose of transposes){
                let rowStr = '';
                for(const[i, symbol] of transpose.entries()){
                    rowStr += symbol;
                    if(i != transpose.length - 1){
                        rowStr += ' | ';
                    }
                }
                
                console.log(rowStr)
            }
        }

        const getWinning = () => {
            
        }

const depAmt = input();
const NoOfLines = lines();
const bet = bettingAmt(depAmt, NoOfLines);
const poopoo = spin();
const peepee = transpose(poopoo);
console.log(poopoo);
console.log(peepee);
const rows = printRows(peepee)





