ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
ace.require('ace/ext/settings_menu').init(editor);

if (localStorage.getItem("mode") === null) {localStorage.setItem("mode", "ace/mode/python");}
if (localStorage.getItem("wallpaper") === null) {localStorage.setItem("wallpaper", "light1");}

var defaultContent = get_default_content(localStorage.getItem("mode"));
var editorSession = [];

editor.setOptions({
    enableBasicAutocompletion: true, // the editor completes the statement when you hit Ctrl + Space
    enableLiveAutocompletion: true, // the editor completes the statement while you are typing
    enableSnippets: true,
    showPrintMargin: false, // hides the vertical limiting strip
    fixedWidthGutter: true,
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    highlightActiveLine: false,
});


editor.setTheme(localStorage.getItem("theme"));
editor.setFontSize(localStorage.getItem("fontSize"));
editor.setHighlightGutterLine(localStorage.getItem("showGutter"));

if (localStorage.getItem("theme") === "ace/theme/dracula") {
    document.getElementById("theme-icon").setAttribute("class", "fa fa-moon");
    toggle_theme();
}

editorSession[0] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editor.setSession(editorSession[0]);
editorSession[1] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[2] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[3] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[4] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[5] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[6] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[7] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[8] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));
editorSession[9] = ace.createEditSession(defaultContent, localStorage.getItem("mode"));

document.querySelector("body").style.backgroundImage = 'url("colour-code/img/' + localStorage.getItem("wallpaper") + '.jpg")';