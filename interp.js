// MUAHAHAHAHAHAAAAAAA
// Larissa Ulitsky
// Sunday, October 4, 2015

function incMP(ptr, inc) {
	var mp = ptr;
	mp += inc;
	
	while (mp < 0) {
		console.log("N");
		mp += 30000;
	}
	while (mp >= 30000) {
		console.log("M");
		mp -= 30000;
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

function interp(pgm, inp) {
	var pp = 0;                  // program pointer
	var pp_stack = [];           // stack of program pointer values, for looping
	var sp = 0;                  // stack pointer for pp_stack
	var pl = pgm.length          // length of program
	var ip = 0;                  // input pointer
	var mem = [];                // memory array
	var mp = 0;                  // memory pointer
	var out = ""                 // output string, NOT ACTUALLY NEEDED
	
	mem[30000] = 0;
	for (i=0; i<30000; i++) {
		mem[i] = 0;
	}
	
	while (pp < pl) {
		var exp = pgm.charAt(pp);
		switch (exp) {
			case '>':  // increment memory pointer
				mp = incMP(mp, 1);
//				move_ptr(mp);
			break;
			
			case '<':  // decrement memory pointer
				mp = incMP(mp, -1);
//				move_ptr(mp);
			break;
			
			case '+':  // increment memory value
				mem[mp] = incMem(mem[mp], 1);
//				change_val(mp, mem[mp]);
			break;
			
			case '-':  // decrement memory value
				mem[mp] = incMem(mem[mp], -1);
//				change_val(mp, mem[mp]);
			break;
			
			case '.':  // send output character
//				put_out(String.fromCharCode(mem[mp]));
				out += String.fromCharCode(mem[mp]);
			break;
			
			case ',':  // set memory value to input character
				mem[mp] = incMem(mem[mp], -1 * mem[mp]);
				mem[mp] = incMem(mem[mp], getIn(inp, ip));
				ip++;
//				change_val(mp, mem[mp]);
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
