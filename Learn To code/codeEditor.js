function update(){
  var Website = document.getElementById('output');
  var frameDoc = Website.contentDocument || Website.contentWindow.document;
  var w = document.getElementById("htmlCode").value;
  Website.contentWindow.document.write(w);
}
emmet.require('textarea').setup({
    pretty_break: true, // enable formatted line breaks (when inserting
                        // between opening and closing tag)
    use_tab: true       // expand abbreviations by Tab key
});
