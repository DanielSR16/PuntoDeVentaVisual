 const{app, BrowserWindow} = require('electron');
let win;

function createWindow(){
    win=new BrowserWindow({width : 500, height : 500});
    win.resizable = false;
    win.loadFile("index.html");
}

app.on("ready",createWindow); 

