/*

	jquery.currentmenu.js
	--
	とりあえずの試作
	なんとなく動作が安定してきたらプラグイン化する
	-> 依存ライブラリ 
		[ Purl (A JavaScript URL parser) v2.3.1 ]
		https://github.com/allmarkedup/purl

*/
(function($,undefined){
$(function(){

	//対象の要素
	var $menu = $("ul");

	//purl
	var purl = $.url("http://hoge.com/a/a-2.html");

	// URLのディレクトリ（配列）
	var segment = purl.segment();

	// URLのファイル名
	var file = purl.attr("file");

	// URLにファイル名が無ければindex.htmlとして追加
	if(!file) {
	    file = "index.html"
	    segment[segment.length]="index.html";
	}

	// URLのディレクトリ数 ＝ メニューのUL要素の入れ子数
	var current_tree = $menu.eq(segment.length-2);

	// 当該のUL要素からaのhref属性とURLのファイル名のマッチするものを探す
	var current_item = current_tree.children("li").filter(function(i){
	    var _needle = $.url($(this).find('a').attr('href')).attr("file") ? $.url($(this).find('a').attr('href')).attr("file") : "index.html";
	    return (_needle === file);
	});

	current_item.addClass("current_menu_item");

});
})(jQuery)