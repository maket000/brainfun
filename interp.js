// MUAHAHAHAHAHAAAAAAA
// Larissa Ulitsky
// Sunday, October 4, 2015

ARRAY_LEN = 30000
var mem = [];

function incMP(ptr, inc) {
	var mp = ptr;
	mp += inc;
	
	while (mp < 0) {
		console.log("N");
		mp += ARRAY_LEN;
	}
	while (mp >= 30000) {
		console.log("M");
		mp -= ARRAY_LEN;
	}
	
	return mp;
}

function incMem(cval, inc) {
	var val = cval;
	val += inc;
	
	while (val < 0) {
		console.log("K");
		val += 256;
	}
	while (val >= 256) {
		console.log("C");
		val -= 256;
	}
	
	return val;
}

function getIn(inp, ip) {
	if (ip >= inp.length) {
		return 0;
	} else {
		return inp.charCodeAt(ip);
	}
}

function findBlockEnd(pgm, pp) {
	var ptr = pp;
	var pc = 0;  // paren count
	var chr = 'a';  // for detecting parens
	
	do {
		chr = pgm.charAt(ptr);
		if (chr == '[') {
			pc++;
		}
		if (chr == ']') {
			pc--;
		}
		ptr++;
	} while (pc > 0);
	return ptr - 1;
}

function interp(pgm, inp, delay) {
	var pp = 0;                  // program pointer
	var pp_stack = [];           // stack of program pointer values, for looping
	var sp = 0;                  // stack pointer for pp_stack
	var pl = pgm.length          // length of program
	var ip = 0;                  // input pointer
	var mp = 0;                  // memory pointer
	var out = ""                 // output string, NOT ACTUALLY NEEDED
	
	for (i=0; i<ARRAY_LEN; i++) {
		mem[i] = 0;
	}
	
	while (pp < pl) {
		var exp = pgm.charAt(pp);
		switch (exp) {
			case '>':  // increment memory pointer
				mp = incMP(mp, 1);
				movePtr(mp);
			break;
			
			case '<':  // decrement memory pointer
				mp = incMP(mp, -1);
				movePtr(mp);
			break;
			
			case '+':  // increment memory value
				mem[mp] = incMem(mem[mp], 1);
				changeVal(mp, mem[mp]);
			break;
			
			case '-':  // decrement memorynnnn value
				mem[mp] = incMem(mem[mp], -1);
				changeVal(mp, mem[mp]);
			break;
			
			case '.':  // send output character
				printOut(String.fromCharCode(mem[mp]));
				out += String.fromCharCode(mem[mp]);
			break;
			
			case ',':  // set memory value to input character
				mem[mp] = incMem(mem[mp], -1 * mem[mp]);
				mem[mp] = incMem(mem[mp], getIn(inp, ip));
				ip++;
				changeVal(mp, mem[mp]);
			break;
			
			case '[':  // open while loop
				if (mem[mp] != 0) {
//					sp = pp_stack.push(pp) - 1;
					sp++;
					pp_stack[sp] = pp;
				} else {
					pp = findBlockEnd(pgm, pp);
				}
			break;
			
			case']':  // close while loop
				if (mem[mp] != 0) {
					pp = pp_stack[sp];
				} else {
					sp--;
				}
			break;
			
			default: put_out("WHAT DID YOU DO");
		}
		pp++;
	}
	return out;
}


function movePtr(ind) {
    mem_ind = (ind - 5) % ARRAY_LEN
    for (var i=0; i<11; i++) {
	mem_ind = (mem_ind + 1) % ARRAY_LEN;
        document.getElementById("array").rows[0].cells[i].innerHTML = mem_ind;
	document.getElementById("array").rows[1].cells[i].innerHTML = mem[mem_ind];
    }
}

function changeVal(ind, val) {
    document.getElementById("array").rows[1].cells[5].innerHTML = val;
}

function printOut(chr) {
    document.getElementById("bf-out").innerHTML += chr;
}
