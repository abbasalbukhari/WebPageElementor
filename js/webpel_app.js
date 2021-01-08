/* 
 * Web Page Elementor - a basic web page builder
 * Copyright (c) 2019 vr-easy.com
 *
 */

function webp_elementor(){
	
	var Drawnelement;
	var selcItim;
 
	/*----------------------------------------------------------
	 * Run the App 
	 **/
	
	this.classToggleMIT = function(x , y ){
		
		x.classList.toggle('fa-angle-down');
		x.classList.toggle('fa-angle-up');

		if ( document.getElementById(y).style.display == "none" ){
			document.getElementById(y).style.display = "block";
		}else{
			document.getElementById(y).style.display = "none";
		}
		
	}
	
	/*----------------------------------------------------------
	 *
	 * ### Start App Function
	 * # Task of this Function
	 * - Create control buttons
	 * - Create the Items panel
	 * - Create the settings Items panel
	 *
	 **/

	window.onload = function(){
		
		/*----------------------------------------------------------
		 * Task 1 Create Control Buttons
		 **/
			 
		let control_buttons = document.createElement('div');
		control_buttons.setAttribute( "id", 	"control_buttons");
		control_buttons.innerHTML =                             '<button id="icon_items_panel"    class="icon_items_panel"             onclick="webp_elementor.StartEdit();"           > <i class="fa  fa-cubes" ></i></button>';
		control_buttons.innerHTML = control_buttons.innerHTML + '<button id="icon_cancel"         class="icon_cancel         disabled" onclick="" >                                      <i class="fas fa-times" ></i></button>';
		control_buttons.innerHTML = control_buttons.innerHTML + '<button id="icon_save_page"      class="icon_save_page      disabled" onclick="webp_elementor.savedata();"     >        <i class="fa fa-save"   ></i></button>';
			
		control_buttons.innerHTML = control_buttons.innerHTML + '<button id="icon_mobilrev"     class="icon_mobil_tap_desk  " onclick="webp_elementor.mobilrev();"     >       <i class="fas fa-mobile-alt"></i></button>';
		control_buttons.innerHTML = control_buttons.innerHTML + '<button id="icon_tablrew"      class="icon_mobil_tap_desk       " onclick="webp_elementor.tablrew();"     >       <i class="fas fa-tablet-alt"></i></button>';
		control_buttons.innerHTML = control_buttons.innerHTML + '<button id="icon_desktop"      class="icon_mobil_tap_desk      " onclick="webp_elementor.desktop();"     >       <i class="fas fa-desktop"></i></button>';
		document.getElementsByTagName("BODY")[0].appendChild(control_buttons);
			
	    /*----------------------------------------------------------
		 * Task 2 Create the Items panel
		
		let itemPanal = document.createElement('div');
		itemPanal.setAttribute( "id", 	"itemPanal");
		itemPanal.setAttribute( "class", 	"itemPanal");
		itemPanal.innerHTML = '<div class="heder" id="editPanal_heder" onmousedown="draggab = 1;"  onmousemove="webp_elementor.dragElement(document.getElementById(\'itemPanal\'));" onmouseup="draggab = 0;"  >		<i class="fa  fa-cubes"></i> WEBP Elementor 	</div>		<div class="body" >			<div class="row">			<p  >Row and Colum</p>			<div class="cul50"  > 				<div class="elem"  draggable="true" id="el_-1" ondragstart="webp_elementor.drag(event)"  > <i class="fas fa-expand"></i> <br> Container   </div>			</div>			<div class="cul50"  > 				<div class="elem"    draggable="true" id="el_0" ondragstart="webp_elementor.drag(event)"  > <i class="fas fa-expand"></i>    <br>  Full Container  </div>			</div>		</div>				<div class="row">			<div class="cul50"  > 				<div class="elem"  draggable="true" id="el_1" ondragstart="webp_elementor.drag(event)"  > <i class="fa fa-stop"></i> <br> row  </div>			</div>			<div class="cul50"  > 				<div class="elem"    draggable="true" id="el_2" ondragstart="webp_elementor.drag(event)"  > <i class="fa fa-stop"></i> <i class="fa fa-stop"></i>  <br>  2 colum</div>			</div>		</div>				<div class="row">			<div class="cul50"  > 				<div class="elem"   draggable="true" id="el_3" ondragstart="webp_elementor.drag(event)"  ><i class="fa fa-stop"></i>  <i class="fa fa-stop"></i> <i class="fa fa-stop"></i>  <br>  3 colum</div>			</div>			<div class="cul50"  > 				<div class="elem"  draggable="true" id="el_4" ondragstart="webp_elementor.drag(event)"  ><i class="fa fa-stop"></i>  <i class="fa fa-stop"></i>  <i class="fa fa-stop"></i>  <i class="fa fa-stop"></i>   <br>    4  colum </div>			</div>		</div>				<hr style="color: #fff;">				<div class="row">				<p class="editPanal_p"  >HTML Elemants</p>					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"   draggable="true" id="el_5" ondragstart="webp_elementor.drag(event)"  ><i class="fas fa-heading"></i>  <br> Heading </div>				    </div>					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"    draggable="true" id="el_6" ondragstart="webp_elementor.drag(event)"  ><i class="fas fa-paragraph"></i>  <br> Paragraph  </div>				    </div>		</div>				<div class="row">					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"  draggable="true" id="el_7" ondragstart="webp_elementor.drag(event)"  ><i class="far fa-image"></i>  <br> Image </div>				    </div>					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"   draggable="true" id="el_8" ondragstart="webp_elementor.drag(event)"  ><i class="fab fa-youtube"></i>  <br> Video  </div>				    </div>		</div>				<div class="row">					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"  draggable="true" id="el_9" ondragstart="webp_elementor.drag(event)"  ><i class="fas fa-map"></i>  <br> Map </div>				    </div>					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"  draggable="true" id="el_10" ondragstart="webp_elementor.drag(event)"  ><i class="fas fa-code"></i> <br> HTML Code  </div>				    </div>		</div>			<div class="row">					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"  draggable="true" id="el_11" ondragstart="webp_elementor.drag(event)"  ><i class="fas fa-table"></i>  <br> Table </div>				    </div>					<div class="cul50"  > 						<div class="elem"  ondrop="webp_elementor.drop(event)"  draggable="true" id="el_12" ondragstart="webp_elementor.drag(event)"  ><i class="fas fa-link"></i> <br> Link  </div>				    </div>		</div>	             	</div>	';
		document.getElementsByTagName("BODY")[0].appendChild(itemPanal); 
		 */
		
	    /*----------------------------------------------------------
		 * Task 3 Create the settings Items panel
		 
		let settingsPanal = document.createElement('div');
		settingsPanal.setAttribute( "id", 	"settingsPanal");
		settingsPanal.setAttribute( "class", 	"settingsPanal");
		settingsPanal.innerHTML = '<div class="heder" id="heder" onmousedown="draggab = 1;"  onmousemove="webp_elementor.dragElement(document.getElementById(\'settingsPanal\'));" onmouseup="draggab = 0;"  > <i class="fas fa-cogs"></i>  Element Properties  </div>		<div style="background: #fff;">			<button id="content_butt" class="taps_prop_butt active" onclick="webp_elementor.openSettingsTap(\'Content\');"> <i class="fas fa-edit"></i> Content</button>			<button id="styling_butt" class="taps_prop_butt" onclick="webp_elementor.openSettingsTap(\'Styling\')"> <i class="fas fa-broom"></i> Styling</button>		</div>	<div class="body">		<div class="row">			<div id="Content" class="taps" style="">				<p class="editPanal_p" >Content</p>				<input id="text_h" onkeyup="webp_elementor.liveEdit()" class="input_content" type="text"   placeholder="Titel ">												<!-- <textarea    class="input_content"    placeholder="Text Paragraph" style="height:273px"></textarea> -->			</div>			<div id="Styling" class="taps" style="display:none">							<p  class="editPanal_p"   >Font Size</p>				<input id="FontSize" onchange="webp_elementor.liveEdit3()" class="input_content" type="range" min="0" max="100">								<p class="editPanal_p" >Text Color</p>				<input id="TextColor"  onchange="webp_elementor.liveEdit2()" class="input_content_color"  type="color"   >								<p class="editPanal_p" >Background Color</p>				<input id="BackgroundColor" onchange="webp_elementor.liveEdit4()" class="input_content_color"  type="color"   >							</div>		</div>		</div>	<button class="delet_selc_element" > <i class="fas fa-trash-alt"></i> Delete Select Element</button>';
		document.getElementsByTagName("BODY")[0].appendChild(settingsPanal); 
		*/
		

		
  	}

	/*----------------------------------------------------------
	 *
	 * ### Start Edit Function
	 * # Task of this Function
	 * - Show the Edit panel
	 * - Enable another Icon ( icon_settings_panel , icon_cancel , icon_save_page )
	 *
	 **/
	 
	this.StartEdit = function(){
		
		/*----------------------------------------------------------
		 * Task 1 Show the Edit panel
		 **/
		
		var webpel_contenar = document.getElementById("webpel_contenar");
		webpel_contenar.contentEditable = "true"; 
		webpel_contenar.style.border = " 1px dotted  #000"; 
    
		var itemPanal = document.getElementById("itemPanal");
	    itemPanal.style.display  = "block"; 
		
		/*----------------------------------------------------------
		 * Task 2 Enable another Icon ( icon_settings_panel , icon_cancel , icon_save_page ) 
		 **/
		 
        var icon_items_panel = document.getElementById("icon_items_panel"); /* icon_settings_panel */
		icon_items_panel.classList.add("disabled");
		    
        var icon_cancel = document.getElementById("icon_cancel"); /* icon_cancel */
        icon_cancel.classList.remove("disabled");
		   
        var icon_save_page = document.getElementById("icon_save_page"); /* icon_save_page */
        icon_save_page.classList.remove("disabled");
		
		
		webp_elementor.remove_then_add_Classs('section_bordered_temp');
		webp_elementor.remove_then_add_Classs('bordered_temp');
    
	}
	
	/*----------------------------------------------------------
	 *
	 * ### Show Settings Panal Function
	 * # Task of this Function
	 * - show Settings Panal
	 *
	 **/
	 
	this.OpenSettingsPanal = function(){
		
		var elem = document.getElementById("settingsPanal");
	 
		elem.style.display  = "block";  
		 
	}
	
	/*----------------------------------------------------------
	 *
	 * ### Remove Element
	 * # Task of this Function
	 * - Remove Element
	 *
	 **/
	 
	this.removeElem = function(){
		document.getElementById(selcItim).remove();
		document.getElementById('settingsPanal').style.display='none';
	}	
 
	/*----------------------------------------------------------
	 *
	 * ### Save Data Function
	 * # Task of this Function
	 * - Save Page
	 *
	 **/
 
	this.savedata = function(){
		
		alert ( document.getElementById("webpel_contenar").outerHTML );
		
		var icon_items_panel = document.getElementById("icon_items_panel");
			icon_items_panel.classList.remove("disabled");
			
		var icon_cancel = document.getElementById("icon_cancel");
			icon_cancel.classList.add("disabled");
			
		var icon_save_page = document.getElementById("icon_save_page");
			icon_save_page.classList.add("disabled");
		
		var webpel_contenar = document.getElementById("webpel_contenar");
			webpel_contenar.contentEditable = "false"; 
			webpel_contenar.style.border = "0px solid red"; 

		var settingsPanal = document.getElementById("settingsPanal");
		settingsPanal.style.display  = "none"; 
		
		var itemPanal = document.getElementById("itemPanal");
		itemPanal.style.display  = "none"; 
	 
		
		webp_elementor.removeClasss('section_bordered');
		webp_elementor.removeClasss('bordered');
		
	}

	/*----------------------------------------------------------
	 *
	 * ### Remove Classs Function
	 * # Task of this Function
	 * - Remove Class bordered from all element
	 *
	 **/
	 
	this.removeClasss = function(clas) {

		var els = document.getElementsByClassName(clas)

		if ( clas == "section_bordered") els[0].classList.add('section_bordered_temp') ;
		if ( clas == "bordered") els[0].classList.add('bordered_temp') ;

		els[0].classList.remove(clas)
		if (els[0]) webp_elementor.removeClasss(clas);

	}

	/*----------------------------------------------------------
	 *
	 * ### Add Classs bordered Function
	 * # Task of this Function
	 * - Add Class bordered from all element
	 *
	 **/
	 
	this.remove_then_add_Classs = function(clas) {
		
		var els = document.getElementsByClassName(clas)
		
		if ( clas == "section_bordered_temp") els[0].classList.add('section_bordered') ;
		if ( clas == "bordered_temp") els[0].classList.add('bordered') ;
		
		els[0].classList.remove(clas)
		if (els[0]) webp_elementor.remove_then_add_Classs(clas);
		console.log('sssssssss');
	}

	/*----------------------------------------------------------
	 *
	 * ### mobilrev
	 * # Task of this Function
	 * - mobilrev
	 *
	 **/
	 
	this.mobilrev = function() {
		
		if ( document.getElementById("rev_ifram") )	document.getElementById("rev_ifram").remove();
		document.getElementById('webpel_contenar').style.display = 'block';
		//  webp_elementor.removeClasss('section_bordered');
		//  webp_elementor.removeClasss('bordered');
		iframeData = document.documentElement.innerHTML;
		
		var ifrm = document.createElement("iframe");
		ifrm.setAttribute( "id", 	"rev_ifram");
		ifrm.setAttribute( "class", 	"rev_ifram");
		ifrm.style.height = "500px";
		ifrm.style.width = "350px";
		ifrm.setAttribute( "srcdoc", 	iframeData  ); 
		document.body.appendChild(ifrm);

		document.getElementById('webpel_contenar').style.display = 'none';
	}

	/*----------------------------------------------------------
	 *
	 * ### tablrew
	 * # Task of this Function
	 * - tablrew
	 *
	 **/
	 
	this.tablrew = function() {

		if ( document.getElementById("rev_ifram") )	document.getElementById("rev_ifram").remove();
		document.getElementById('webpel_contenar').style.display = 'block';
		//  webp_elementor.removeClasss('section_bordered');
		//  webp_elementor.removeClasss('bordered');
		iframeData = document.documentElement.innerHTML;

		var ifrm = document.createElement("iframe");
		ifrm.setAttribute( "id", 	"rev_ifram");
		ifrm.setAttribute( "class", 	"rev_ifram");
		ifrm.style.height = "450px";
		ifrm.style.width = "799px";
		ifrm.setAttribute( "srcdoc", 	document.documentElement.innerHTML  ); 
		document.body.appendChild(ifrm);	

 		document.getElementById('webpel_contenar').style.display = 'none';

	}

	/*----------------------------------------------------------
	 *
	 * ### desktop
	 * # Task of this Function
	 * - desktop
	 *
	 **/
	 
	this.desktop = function() {
		if ( document.getElementById("rev_ifram") )	document.getElementById("rev_ifram").remove();
 		document.getElementById('webpel_contenar').style.display = 'block';
		//webp_elementor.remove_then_add_Classs('section_bordered_temp');
		//webp_elementor.remove_then_add_Classs('bordered_temp');
	}
	
	/*----------------------------------------------------------
	 *
	 * ### Open Taps in Settings Panal 
	 * # Task of this Function
	 * -
	 *
	 **/
 
	this.openSettingsTap = function(ele) {
		var i ;
		var x = document.getElementsByClassName("taps");
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}

		var ele = document.getElementById(ele);
		ele.style.display = "block";

		var content_butt = document.getElementById("content_butt")
		if(content_butt.classList.contains("active")){
			content_butt.classList.remove("active");
			}else{
			content_butt.classList.add("active");  
			}

		var styling_butt = document.getElementById("styling_butt");
		if (styling_butt.classList.contains("active")) {
			styling_butt.classList.remove("active");
			}else{
			styling_butt.classList.add("active");  
			} 

	}

	/*----------------------------------------------------------
	 *
	 * ### Moving Items Panel and Settings Panel 
	 * # Task of this Function
	 * - Moving Items Panel and Settings Panel
	 *
	 **/

	this.dragElement = function(elmnt) {

	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	  }else{
		elmnt.onmousedown = dragMouseDown;
	  }
	 
	  function dragMouseDown(e) {
	  if ( window.draggab == 1 ){
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
		}
	  }

	  function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	  }

	  function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	  }
	  
	}

	/*----------------------------------------------------------
	 *
	 * ### drag and drop functions 
	 * # Task of this Function
	 * - drag and drop function
	 *
	 **/
	
	/*----------------------------------------------------------
	* function 1
	**/

	this.allowDrop = function(ev) {
	  ev.preventDefault();
	}

	/*----------------------------------------------------------
	* function 2
	**/

	this.drag = function(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  console.log(ev.target.id);
	  window.Drawnelement = ev.target.id;
	}
	
	/*----------------------------------------------------------
	* function 3
	**/
		 
	this.drop = function(ev) {

	  ev.preventDefault();
	  var data = ev.dataTransfer.getData("text");
	  var nodeCopy = document.getElementById(data).cloneNode(true);
	  nodeCopy.id += "newId"; 
	  ev.target.appendChild(nodeCopy);

	  switch( window.Drawnelement ){
			/* Add Icon */
			case "el_icon_1":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fab fa-facebook-square"></i>'; 
			case "el_icon_2":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fab fa-youtube"></i>'; 
			case "el_icon_3":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-thumbs-up"></i>';  
			case "el_icon_4":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fab fa-instagram"></i>';  
			case "el_icon_5":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fab fa-apple"></i>';  
			case "el_icon_6":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-bell"></i>';  
			case "el_icon_7":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-bomb"></i>';  
			case "el_icon_8":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-camera"></i>';  
			case "el_icon_9":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-chart-line"></i>';  
			case "el_icon_10":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-caret-down"></i>';  
			case "el_icon_11":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-caret-left"></i>';  
			case "el_icon_12":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-caret-right"></i>';  
			case "el_icon_13":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-caret-up"></i>';  
			case "el_icon_14":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-check"></i>';  
			case "el_icon_15":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fas fa-bezier-curve "></i>';  
			case "el_icon_16":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-chart-pie "></i>';  
			case "el_icon_16":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-chess-king "></i>';  
			case "el_icon_17":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-cloud-meatball "></i>';  
			case "el_icon_18":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-cloud-rain "></i>';  
			case "el_icon_19":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fas fa-code-branch "></i>';  
			case "el_icon_20":	nodeCopy.outerHTML= '<i id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" class="fab fa-codepen "></i>';  
			/* End Add Icon */
			
			case "el_-1":	makeSection();
			case "el_0":	makeFullSection();
			case "el_1":	makeRow();
			case "el_2":	makeCul50(); 
			case "el_3":	makeCul33_33();
			case "el_4":	makeCull25(); 
			case "el_5":	makeH2();
			case "el_6":	makeP();  
			case "el_7":	makeImage();
			case "el_12":	nodeCopy.outerHTML= '<a href="https://www.vr-easy.com">Visit vr-easy.com!</a>'; 
			
			//////////////////

			case "el_8":	nodeCopy.outerHTML= '<div class="cul100 bordered"><iframe style="width: 100%;height: 400px;" src="https://www.youtube.com/embed/EtoXLMwXr74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>'; 
			case "el_9":	nodeCopy.outerHTML= '<div class="cul100 bordered"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.636251160322!2d13.439105384193793!3d52.48572147980768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84faff1c47a2b%3A0xd224f2579db2cd52!2sWeserstra%C3%9Fe+184%2C+12045+Berlin!5e0!3m2!1sar!2sde!4v1566072842447!5m2!1sar!2sde" style="width: 100%;height: 400px;" frameborder="0" style="border:0" allowfullscreen></iframe> </div>'; 
			case "el_10":	nodeCopy.outerHTML= '<iframe style="width: 100%;height: 400px;border: 0;" src="https://edit.vr-easy.com/tour/usr/180718-angermuende360/" border="0"   ></iframe>  ';
			case "el_11":	nodeCopy.outerHTML= ' <button id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" onmouseover="OnMouseIn (this)" onmouseout="OnMouseOut (this)" type="button" style="cursor: pointer;color: #fff;background: #662179;width: 130px;height: 35px;border-radius: 10px;border: 0;" >Click Me!</button> '; 

			case "el_13":	makeNavBar();
			case "el_14":	makeCard();
			case "el_15":	makeCardicon();
			case "el_16":	makeafooter();
		}

		/*----------------------------------------------------------
		 *
		 * ### Make Elements Function 
		 * # Task of this Function
		 * - Make Elements Function
		 *
		 **/

		function makeafooter(){
			nodeCopy.outerHTML= '<div class="footer">  <p>Footer</p> </div>';
		} 

		function makeCardicon(){
			nodeCopy.outerHTML= '<div class="card"> <div class="cul100 bordered"> </div>   <div class="cardcontainer">    <h4 id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" >  John Doe  </h4>     <p id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" >Architect & Engineer</p>   </div></div>';
		}

		function makeCard(){
			nodeCopy.outerHTML= '<div class="card">  <img id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">  <div class="cardcontainer">    <h4 id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" >  John Doe  </h4>     <p id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" >Architect & Engineer</p>   </div></div>';
		}
		
		function makeCull25(){
			nodeCopy.outerHTML= '<div class="row"> <div class="cul25 bordered"  >   </div>  <div class="cul25 bordered"  >  </div>    <div class="cul25 bordered"  >  </div>   <div class="cul25 bordered"  >  </div>      </div>';
		}
		
		function makeP(){
			nodeCopy.outerHTML= '<div class="cul100 bordered" style="text-align: center;"><p style="width:100%;padding: 0;margin: 0;" id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" >My first paragraph.</p> </div>'; 
		}
		
		function makeH2(){
			nodeCopy.outerHTML= '<div class="cul100 bordered" style="text-align: center;" > <h2  style="width:100%;padding: 0;margin: 0;" id="' + Math.random() + '" onClick="webp_elementor.clicked_item(this.id)" >My First Heading</h2>  </div>';  
		}
		
		function makeFullSection(){
			nodeCopy.outerHTML= '<section draggable="true" class="wbepe_section full section_bordered" >    </section> '; 
		}
		
		function makeSection(){
			nodeCopy.outerHTML= '<section  draggable="true" class="wbepe_section section_bordered" >    </section> '; 
		}
		
		function makeRow(){
			nodeCopy.outerHTML= '<div class="row">  <div class="cul100 bordered"  >   </div>  </div> '; 
		}
		
		function makeCul50(){
			nodeCopy.outerHTML= '<div class="row"> <div class="cul50 bordered"  >   </div>  <div class="cul50 bordered"  >   </div>  </div>';
		}
		
		function makeCul33_33(){
			nodeCopy.outerHTML= '<div class="row"> <div class="cul33_33 bordered"  >   </div>  <div class="cul33_33 bordered"  >   </div>  <div class="cul33_33 bordered"  >   </div>     </div>'; 
		}
		
		function makeImage(){
			nodeCopy.outerHTML= '<div class="cul100 bordered" style="text-align: center;"> <img id="' + Math.random() + '" style="width: 95%;" onClick="webp_elementor.clicked_item(this.id)" src="images/h.jpg"  style="width:100%;"> </div> '; 
		}
		
		function makeNavBar(){
			nodeCopy.outerHTML= '<div class="topnav" id="myTopnav">  <a href="#home" class="active">Home</a>  <a href="#news">News</a>  <a href="#contact">Contact</a>   <a href="#about">About</a>  <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a></div>'; 
		}

	}
	
	
	this.rgb2hex = function(rgb) {
		rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		return "#" + webp_elementor.hex(rgb[1]) + webp_elementor.hex(rgb[2]) + webp_elementor.hex(rgb[3]);
	}
	
	this.hex = function(x) {
	   return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
	}


	this.clicked_item = function(clicked_id){
		console.log(clicked_id);
		webp_elementor.OpenSettingsPanal();
		selcItim = document.getElementById(clicked_id).id ;
		v = document.getElementById(selcItim).innerHTML ;
		document.getElementById('text_h').value = v ;
		document.getElementById('FontSize').value =   document.getElementById(selcItim).style.fontSize.replace(/[^0-9]/g,'')    ;

		document.getElementById('liveEditwidth').value =   document.getElementById(selcItim).style.width.replace(/[^0-9]/g,'')    ;
		document.getElementById('liveEditHeight').value =   document.getElementById(selcItim).style.height.replace(/[^0-9]/g,'')    ;
		document.getElementById('liveEditBorRadius').value =   document.getElementById(selcItim).style.borderRadius.replace(/[^0-9]/g,'')    ;
		document.getElementById('liveEditMargin').value =   document.getElementById(selcItim).style.margin.replace(/[^0-9]/g,'')    ;
		document.getElementById('liveEditPadding').value =   document.getElementById(selcItim).style.padding.replace(/[^0-9]/g,'')    ;
		document.getElementById('TextColor').value = webp_elementor.rgb2hex(document.getElementById(selcItim).style.color) ;

		console.log( webp_elementor.rgb2hex(document.getElementById(selcItim).style.color)   );
	}
	
	this.liveEditContent = function(){
		console.log(selcItim);
		var v = document.getElementById('text_h').value ;
		document.getElementById(selcItim).innerHTML = v ;
	}
	
	this.TextColor = function(){
		console.log(selcItim);
		console.log(document.getElementById('TextColor').value + "color");

		var v = document.getElementById('TextColor').value ;
		document.getElementById(selcItim).style.color = v ;
	}
	
	this.FontSize = function(){
		console.log(selcItim);
		console.log(document.getElementById('FontSize').value + "color");

		var v = document.getElementById('FontSize').value ;
		document.getElementById(selcItim).style.fontSize  = v +'px' ;
	}
	
	this.BackgroundColor = function(){
		console.log(selcItim);
		console.log(document.getElementById('BackgroundColor').value + "color");

		var v = document.getElementById('BackgroundColor').value ;
		document.getElementById(selcItim).style.background   = v   ;
	}

	
	this.liveEditBorRadius = function(){
		console.log(selcItim);
		console.log(document.getElementById('liveEditBorRadius').value + "color");

		var v = document.getElementById('liveEditBorRadius').value ;
		document.getElementById(selcItim).style.borderRadius = v +'px'   ;
	}
	
	this.liveEditMargin = function(){
		console.log(selcItim);
		console.log(document.getElementById('liveEditMargin').value + "color");

		var v = document.getElementById('liveEditMargin').value ;
		document.getElementById(selcItim).style.margin  = v +'px'   ;
	}

	this.liveEditimgsrc = function(){
		console.log(selcItim);
		console.log(document.getElementById('liveEditimgsrc').value + "color");

		var v = document.getElementById('liveEditimgsrc').value ;
		document.getElementById(selcItim).src = v ;
	}

	this.liveEditParagraph = function(){
		console.log(selcItim);
		console.log(document.getElementById('liveEditParagraph').value + "color");

		var v = document.getElementById('liveEditParagraph').value ;
		document.getElementById(selcItim).innerHTML  = v ;
	}
	
	this.liveEditPadding  = function(){
		console.log(selcItim);
		console.log(document.getElementById('liveEditPadding').value + "color");

		var v = document.getElementById('liveEditPadding').value ;
		document.getElementById(selcItim).style.padding  = v +'px'   ;
	}	
	
	this.liveEditHeight  = function(){
		console.log(selcItim);
		console.log(document.getElementById('liveEditHeight').value + "color");

		var v = document.getElementById('liveEditHeight').value ;
		document.getElementById(selcItim).style.height  = v +'px'   ;
	}	
	
	this.liveEditwidth   = function(){
		console.log(selcItim);
		console.log(document.getElementById('liveEditwidth').value + "color");

		var v = document.getElementById('liveEditwidth').value ;
		document.getElementById(selcItim).style.width  = v +'px'   ;
	}	
	
	this.liveEditAlignLeft   = function(){
		document.getElementById(selcItim).parentElement.style.textAlign   = 'left'   ;
	}

	this.liveEditAlignCenter   = function(){
		document.getElementById(selcItim).parentElement.style.textAlign   = 'center'   ;
 	}
	
	this.liveEditAlignRight   = function(){
		document.getElementById(selcItim).parentElement.style.textAlign   = 'right'   ;
	}
}

 