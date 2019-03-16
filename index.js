module.exports = function no_more_clover_spam(mod){
    mod.hook('S_SYSTEM_MESSAGE',1,(p) =>{
        let sm = mod.parseSystemMessage(p.message).id;
        if(sm == 'SMT_GOLDENBELL_MESSAGE') return false;
    });
}