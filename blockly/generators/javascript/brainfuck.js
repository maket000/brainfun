Blockly.JavaScript['brack'] = function(block) {
    var code = "[" + Blockly.JavaScript.statementToCode(block, 'NAME') + "]";
    return code;
};

Blockly.JavaScript['pt_inc'] = function(block) {
    var code = ">" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['pt_inc_c'] = function(block) {
    var code = ">" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['pt_dec'] = function(block) {
    var code = "<" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['pt_dec_c'] = function(block) {
    var code = "<" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bt_inc'] = function(block) {
    var code = "+" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bt_inc_c'] = function(block) {
    var code = "+" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bt_dec'] = function(block) {
    var code = "-" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bt_dec_c'] = function(block) {
    var code = "-" + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bf_out'] = function(block) {
    var code = "." + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bf_out_c'] = function(block) {
    var code = "." + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bf_in'] = function(block) {
    var code = "," + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};

Blockly.JavaScript['bf_in_c'] = function(block) {
    var code = "," + Blockly.JavaScript.statementToCode(block, 'NAME');
    return code;
};
