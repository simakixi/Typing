const letter = {
    "あ" : ["A"],
    "い" : ["I"],
    "う" : ["U"],
    "え" : ["E"],
    "お" : ["O"],
    "か" : ["KA"],
    "き" : ["KI"],
    "く" : ["KU"],
    "け" : ["KE"],
    "こ" : ["KO"],
    "さ" : ["SA"],
    "し" : ["SI","SHI"],
    "す" : ["SU"],
    "せ" : ["SE"],
    "そ" : ["SO"],
    "た" : ["TA"],
    "ち" : ["TI","CHI"],
    "つ" : ["TU","TSU"],
    "て" : ["TE"],
    "と" : ["TO"],
    "な" : ["NA"],
    "に" : ["NI"],
    "ぬ" : ["NU"],
    "ね" : ["NE"],
    "の" : ["NO"],
    "は" : ["HA"],
    "ひ" : ["HI"],
    "ふ" : ["HU","FU"],
    "へ" : ["HE"],
    "ほ" : ["HO"],
    "ま" : ["MA"],
    "み" : ["MI"],
    "む" : ["MU"],
    "め" : ["ME"],
    "も" : ["MO"],
    "や" : ["YA"],
    "ゆ" : ["YU"],
    "よ" : ["YO"],
    "ら" : ["RA"],
    "り" : ["RI"],
    "る" : ["RU"],
    "れ" : ["RE"],
    "ろ" : ["RO"],
    "わ" : ["WA"],
    "を" : ["WO"],
    "ん" : ["NN"],    //例外処理
    "ー" : ["ー"],
    "きゃ" : ["KYA"],
    "きゅ" : ["KYU"],
    "きょ" : ["KYO"],
    "しゃ" : ["SYA","SHA"],
    "しゅ" : ["SYU","SHU"],
    "しょ" : ["SYO","SHO"],
    "ちゃ" : ["TYA","CHA","CYA"],
    "ちゅ" : ["TYU","CHU","CYU"],
    "ちょ" : ["TYO","CHO","CYO"],
    "にゃ" : ["NYA"],
    "にゅ" : ["NYU"],
    "にょ" : ["NYO"],
    "ひゃ" : ["HYA"],
    "ひゅ" : ["HYU"],
    "ひょ" : ["HYO"],
    "みゃ" : ["MYA"],
    "みゅ" : ["MYU"],
    "みょ" : ["MYO"],
    "りゃ" : ["RYA"],
    "りゅ" : ["RYU"],
    "りょ" : ["RYO"],
    "が" : ["GA"],
    "ぎ" : ["GI"],
    "ぐ" : ["GU"],
    "げ" : ["GE"],
    "ご" : ["GO"],
    "ざ" : ["ZA"],
    "じ" : ["ZI","JI"],
    "ず" : ["ZU"],
    "ぜ" : ["ZE"],
    "ぞ" : ["ZO"],
    "だ" : ["DA"],
    "ぢ" : ["DI"],
    "づ" : ["DU"],
    "で" : ["DE"],
    "ど" : ["DO"],
    "ば" : ["BA"],
    "び" : ["BI"],
    "ぶ" : ["BU"],
    "べ" : ["BE"],
    "ぼ" : ["BO"],
    "ぱ" : ["PA"],
    "ぴ" : ["PI"],
    "ぷ" : ["PU"],
    "ぺ" : ["PE"],
    "ぽ" : ["PO"],
    "ゔぁ" : ["VA"],
    "ゔぃ" : ["VI"],
    "ゔ" : ["VU"],
    "ゔぇ" : ["VE"],
    "ゔぉ" : ["VO"],
    "ぎゃ" : ["GYA"],
    "ぎゅ" : ["GYU"],
    "ぎょ" : ["GYO"],
    "じゃ" : ["ZYA","JA","JYA"],
    "じゅ" : ["ZYU","JU","JYU"],
    "じょ" : ["ZYO","JO","JYO"],
    "ぢゃ" : ["DYA"],
    "ぢゅ" : ["DYU"],
    "ぢょ" : ["DYO"],
    "びゃ" : ["BYA"],
    "びゅ" : ["BYU"],
    "びょ" : ["BYO"],
    "ぴゃ" : ["PYA"],
    "ぴゅ" : ["PYU"],
    "ぴょ" : ["PYO"],
    "ぁ" : ["LA","XA"],
    "ぃ" : ["LI","XI"],
    "ぅ" : ["LU","XU"],
    "ぇ" : ["LE","XE"],
    "ぉ" : ["LO","XO"],
    "っ" : ["LTU","XTU"], //例外処理
    "ゃ" : ["LYA","XYA"],
    "ゅ" : ["LYU","XYU"],
    "ょ" : ["LYO","XYO"],
    //ここからはテスト無し
    "！" : ["!"],
    "？" : ["?"],
    "、" : [","],
    "。" : ["."],
    "（" : ["("],
    "）" : [")"],
    "＜" : ["<"],
    "＞" : [">"],
    "「" : ["["],
    "」" : ["]"]
}
var Question = [] //問題文を一文字ずつひらがなに分けて格納
var QuestionLatin = [];   //問題文を一文字ずつローマ字に分けたものを格納
var part = [];  //現在入力中の文字のローマ字をすべて格納する(if文判定のため)。こいつに入ってる要素を付けたり消したりすることでどうにかする
var nextpart = [];
const kanji = ["世界"];
const word = ["せかい","さんご"];
var partcount = 0;

Question = word[0].split("");
console.log("ひらがな:"+Question);
for(i=0;i<Question.length;i++){
    QuestionLatin[i] = letter[Question[i]][0];
}
console.log("ローマ字:"+QuestionLatin);

for(i=0;i<letter[Question[0]].length;i++){
    part[i] = letter[Question[0]][i];
}
console.log(part);

document.addEventListener('keydown', function(event) {  //キー入力を受け取る
    key = event.key.toUpperCase();  //キー入力を大文字にして代入する
    check(key); //入力した文字をチェックする
});

function check(input){
    if(input==part[0].charAt(partcount)){
        console.log("あってるで");
        partcount++;
    }
}