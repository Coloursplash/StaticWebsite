var beautify = ace.require("ace/ext/beautify");
var activeWallpaperId = 1;
var maxWallpaperId = 4;

function get_default_content(lang) {
    defaultContent = {"c": "\n\
// ColourCode - the best online IDE\n\
\n\
#include<stdio.h>\n\
\n\
int main()\n\
{\n\
    printf(\"Welcome to ColourCode! Happy Coding :)\");\n\
    return 0;\n\
}\n\
",
        "cpp": "\n\
// ColourCode - the best online IDE\n\
\n\
#include<iostream>\n\
\n\
using namespace std;\n\
\n\
int main()\n\
{\n\
    cout<<\"Welcome to ColourCode! Happy Coding :)\";\n\
    return 0;\n\
}\n\
",
        "python": "\n\
# ColourCode\n\
\n\
print('Welcome to ColourCode! Happy Coding :)')\n\
",
        "php": "<?php\n\
\n\
// ColourCode - the best online IDE\n\
\n\
echo \"Welcome to ColourCode! Happy Coding :)\";\n\
",
        "java": "\n\
// ColourCode - the best online IDE\n\
\n\
public class Main\n\
{\n\
    public static void main(String[] args) {\n\
        System.out.println(\"Welcome to ColourCode! Happy Coding :)\");\n\
    }\n\
}\n\
",
        "ruby": "\n\
# ColourCode\n\
\n\
puts 'Welcome to ColourCode! Happy Coding :)'\n\
",
        "golang": "\n\
// ColourCode - the best online IDE\n\
\n\
package main\n\
\n\
import \"fmt\"\n\
\n\
func main() {\n\
    fmt.Println(\"Welcome to ColourCode! Happy Coding :)\")\n\
}\n\
",
        "javascript": "main.js",
        "rlang": "\n\
# ColourCode\n\
\n\
print('Welcome to ColourCode! Happy Coding :)')\n\
",
        "bash": "\n\
# ColourCode\n\
\n\
echo \"Welcome to ColourCode! Happy Coding :)\"\n\
"};
    return lang.slice(9) in defaultContent ? defaultContent[lang.slice(9)]: "\nColourCode - the best online IDE";
}

function show_ace_settings() {
    editor.showSettingsMenu();
}

function show_about_popup() {
    document.getElementById("popwrap").classList.add("open");
}

function close_about_popup() {
    document.getElementById("popwrap").classList.remove("open");
}

function toggle_theme() {
    icon = document.getElementById("theme-icon");
    if (icon.getAttribute("class") === "fa fa-moon") {
        icon.setAttribute("class", "fa fa-sun");
        editor.setTheme("ace/theme/dracula");
        localStorage.setItem("theme", "ace/theme/dracula");

        document.querySelector("body").style.setProperty("--button-bg-color", "#282a36");
        document.querySelector("body").style.setProperty("--border-color", "1px solid black");
        document.querySelector("body").style.setProperty("--icon-color", "white");
    } else {
        icon.setAttribute("class", "fa fa-moon");
        editor.setTheme("ace/theme/textmate");
        localStorage.setItem("theme", "ace/theme/textmate");

        document.querySelector("body").style.setProperty("--button-bg-color", "white");
        document.querySelector("body").style.setProperty("--border-color", "1px solid #d2d6de");
        document.querySelector("body").style.setProperty("--icon-color", "black");
    }

    theme = document.getElementById("theme-icon").getAttribute("class") === "fa fa-moon" ? "light": "dark";
    document.querySelector("body").style.backgroundImage = 'url("colour-code/img/' + theme + activeWallpaperId + '.jpg")';
    localStorage.setItem("wallpaper", theme + activeWallpaperId);
}

function focus_mode() {
    document.getElementById("editor").requestFullscreen();
}

function beautify_file() {
    beautify.beautify(editor.session);
}

function open_file() {
    readFile = function(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            editor.setValue(contents);
        }
        reader.readAsText(file);
    }
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";
    fileInput.onchange = readFile;
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
}

function change_wallpaper() {
    theme = document.getElementById("theme-icon").getAttribute("class") === "fa fa-moon" ? "light": "dark";
    activeWallpaperId++;
    if (activeWallpaperId > maxWallpaperId) {activeWallpaperId = 1;}
    document.querySelector("body").style.backgroundImage = 'url("colour-code/img/' + theme + activeWallpaperId + '.jpg")';
    localStorage.setItem("wallpaper", theme + activeWallpaperId);
}

function show_save_code_modal() {
    
}

function change_tab(tabId) {
    // TabId will be one higher than the editorSession index
    editor.setSession(editorSession[tabId - 1]);
    document.getElementById("tab-identifier").innerHTML = "Tab " + tabId;
}