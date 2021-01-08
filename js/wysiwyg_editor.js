/* 
 * WYSIWYG Editor - a basic WYSIWYG Editor
 * Copyright (c) 2019 vr-easy.com
 *
 */

function wysiwyg_editor(){
	
    window.onload = function(){
		var wysiwyg_textarea = document.getElementById( 'wysiwyg_textarea' );
		var controllersAPP = document.createElement( 'dvi' );
		controllersAPP.setAttribute( "id","wysiwyg_cont");
		controllersAPP.innerHTML = '<div id="wysiwyg_cont"><button class="wysiwygButt" onclick="wysiwyg_editor.underline()"><i class="fas fa-underline"></i>  </button>		<button class="wysiwygButt" onclick="wysiwyg_editor.link()"><i class="fas fa-paperclip"></i></button>		<button class="wysiwygButt" onclick="wysiwyg_editor.unlink()"><i class="fas fa-unlink"></i></button>		<button class="wysiwygButt" onclick="wysiwyg_editor.bold()"><i class="fas fa-bold"></i></button>		<button class="wysiwygButt" onclick="wysiwyg_editor.italic()"><i class="fas fa-italic"></i></button>		<select  class="wysiwygButt" onchange="wysiwyg_editor.fontsize(this.value)" >		  <option >Size</option>		  <option value="1">1</option>		  <option value="2">2</option>		  <option value="3">3</option>		  <option value="4">4</option>		  <option value="5">5</option>		  <option value="6">6</option>		  <option value="7">7</option>		</select>  		<select  class="wysiwygButt" onchange="wysiwyg_editor.fontcolor(this.value)" >		  <option >Color</option>		  <option value="Red">Red</option>		  <option value="Orange">Orange</option>		  <option value="Yellow">Yellow</option>		  <option value="Green">Green</option>		  <option value="Gray">Gray</option>		</select>		<br>		<iframe  onload="this.contentDocument.designMode = \'on\';" name="wysiwygEditor" id="wysiwygEditor" class="wysiwygEditor" style="width:100%;height:400px;border: 0;background: #f2f2f2; "  ></iframe>	</div>';
		wysiwyg_textarea.parentNode.insertBefore( controllersAPP, wysiwyg_textarea.nextSibling );
    }

    //Bold the selected text
    this.bold = function(){ 
		wysiwygEditor.document.execCommand("bold", false, null);
		wysiwyg_editor.displayhtml();
    } 

    //Italic the selected text
    this.italic = function(){
		wysiwygEditor.document.execCommand("italic", false, null);
		wysiwyg_editor.displayhtml();
    }  
	
    //Fontcolor the selected text
    this.fontcolor = function(x){
        wysiwygEditor.document.execCommand("forecolor", false, x);
		wysiwyg_editor.displayhtml();
    }
	
	//Fontsize the selected text
    this.fontsize = function(x){
        wysiwygEditor.document.execCommand("fontsize", false, x);
		wysiwyg_editor.displayhtml();
    }
	
    //Underline the selected text
    this.underline = function(){
        wysiwygEditor.document.execCommand("underline", false, null);
		wysiwyg_editor.displayhtml();
    }
   
    //unlink text  .
    this.unlink = function(){
		wysiwygEditor.document.execCommand("unlink", false, null);
		wysiwyg_editor.displayhtml();
    }
	
    //link text  .
    this.link = function(){
        var url = prompt("Enter the URL");
		wysiwygEditor.document.execCommand("createLink", false, url);
		wysiwyg_editor.displayhtml();
    }
   
    //Get output
    this.displayhtml = function(){
		document.getElementById('wysiwyg_textarea').value = window.frames['wysiwygEditor'].document.body.innerHTML;
	}

}