	var verifyCallback = function(response) {
	        alert(response);
	      };
	      var widgetId1;
	      var widgetId2;
	      var widgetId3;
	      var onloadCallback = function() {
	        // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
	        // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
	        widgetId1 = grecaptcha.render('captcha1', {
	          'sitekey' : '6LeOmgsTAAAAAG1AY7hRTrqjlkBfjKwX3dItwh8P',
	          'theme' : 'light'
	        });
	        widgetId2 = grecaptcha.render('captcha2', {
	          'sitekey' : '6LeOmgsTAAAAAG1AY7hRTrqjlkBfjKwX3dItwh8P',
	          'theme' : 'light'
	        });
	        widgetId3 = grecaptcha.render('captcha3', {
	          'sitekey' : '6LeOmgsTAAAAAG1AY7hRTrqjlkBfjKwX3dItwh8P',
	          'theme' : 'light'
	        });
	        /*widgetId3 = grecaptcha.render('g-recaptcha', {
	          'sitekey' : '6LeOmgsTAAAAAG1AY7hRTrqjlkBfjKwX3dItwh8P',
	          'theme' : 'light'
	        });*/
	        /*grecaptcha.render('example3', {
	          'sitekey' : 'your_site_key',
	          'callback' : verifyCallback,
	          'theme' : 'dark'
	        });*/
	      };
	      /*$("#comentario1").focus(function(){
	      	console.log(grecaptcha.getResponse(widgetId1));
	      	
	      });*/
$(document).ready(function($){
	$('.carousel').carousel({
	        interval: false,
	        pause: "true"
	    });
	 $("#poster-residencial" ).click(function() {
			  $('#poster-residencial').colorbox({
	            /*width:"910px", 
	            height:"510px",*/
	            width:"100%", 
	            height:"100%",
	            open:true, 
	            className: 'ubicar-cd'
	          });
			});
	  $("#poster-hogar" ).click(function() {
			  $('#poster-hogar').colorbox({
	            /*width:"910px", 
	            height:"510px",*/
	            width:"100%", 
	            height:"100%",
	            open:true, 
	            className: 'ubicar-cd'
	          });
			});
	  /*------------------code to unete trabajo form*/
	var allowed_file_size = "1048576";
var allowed_files = ['application/pdf'];
var border_color = "#C2C2C2"; //initial input border color

$("#formulario").submit(function(e){
    e.preventDefault(); //prevent default action 
	proceed = true;
	//simple input validation
	$($(this).find("input[data-required=true], textarea[data-required=true]")).each(function(){
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag              
            }   
	}).on("input", function(){ //change border color to original
		 $(this).css('border-color', border_color);
	});
	
	//check file size and type before upload, works in modern browsers
	if(window.File && window.FileReader && window.FileList && window.Blob){
		var total_files_size = 0;
		$(this.elements['file_attach[]'].files).each(function(i, ifile){
			if(ifile.value !== ""){ //continue only if file(s) are selected
                if(allowed_files.indexOf(ifile.type) === -1){ //check unsupported file
                    alert( ifile.name + " is unsupported file type!");
                    proceed = false;
                }
             total_files_size = total_files_size + ifile.size; //add file size to total size
			}
		}); 
       if(total_files_size > allowed_file_size){ 
            alert( "Make sure total file size is less than 1 MB!");
            proceed = false;
        }
	}
	
	//if everything's ok, continue with Ajax form submit
	if(proceed && grecaptcha.getResponse(widgetId1)!=""){ 
		var post_url = $(this).attr("action"); //get form action url
		var request_method = $(this).attr("method"); //get form GET/POST method
		var form_data = new FormData(this); //Creates new FormData object
		var redirec="";
		if (post_url.substring(0, 2) =="..") {
			redirec = "../enviar2.php";
		}
		else{
			redirec = "enviar2.php";
		}
		$.ajax({ //ajax form submit
			beforeSend:function(){
				$('#loadingForm2').show();
				$('#mens-enviado-err2').hide();
			},
			url : post_url,
			type: request_method,
			data : form_data,
			dataType : "json",
			contentType: false,
			cache: false,
			processData:false
		}).done(function(res){ //fetch server "json" messages when done
			if(res.type == "error"){
				$("#contact_results").html('<div class="error">'+ res.text +"</div>");
			}
			
			if(res.type == "done"){
				$("#contact_results").html('<div class="success">'+ res.text +"</div>");
				window.location.href=redirec;
			}
		});
	}else{
		$('#loadingForm2').hide();
		$('#mens-enviado-err2').show('slow');
		setTimeout(function(){$('#mens-enviado-err2').hide('slow');
		},3000);
	};
});
$("#formulario2").submit(function(e){
    e.preventDefault(); //prevent default action 
	proceed = true;
	//simple input validation
	$($(this).find("input[data-required=true], textarea[data-required=true]")).each(function(){
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag              
            }   
	}).on("input", function(){ //change border color to original
		 $(this).css('border-color', border_color);
	});
	
	//check file size and type before upload, works in modern browsers
	if(window.File && window.FileReader && window.FileList && window.Blob){
		var total_files_size = 0;
		$(this.elements['file_attach[]'].files).each(function(i, ifile){
			if(ifile.value !== ""){ //continue only if file(s) are selected
                if(allowed_files.indexOf(ifile.type) === -1){ //check unsupported file
                    alert( ifile.name + " is unsupported file type!");
                    proceed = false;
                }
             total_files_size = total_files_size + ifile.size; //add file size to total size
			}
		}); 
       if(total_files_size > allowed_file_size){ 
            alert( "Make sure total file size is less than 1 MB!");
            proceed = false;
        }
	}
	
	//if everything's ok, continue with Ajax form submit
	if(proceed && grecaptcha.getResponse(widgetId3)!=""){ 
		var post_url = $(this).attr("action"); //get form action url
		var request_method = $(this).attr("method"); //get form GET/POST method
		var form_data = new FormData(this); //Creates new FormData object
		var redirec="";
		if (post_url.substring(0, 2) =="..") {
			redirec = "../enviar2.php";
		}
		else{
			redirec = "enviar2.php";
		}
		$.ajax({ //ajax form submit
			beforeSend:function(){
				$('#loadingForm3').show();
				$('#mens-enviado-err3').hide();
			},
			url : post_url,
			type: request_method,
			data : form_data,
			dataType : "json",
			contentType: false,
			cache: false,
			processData:false
		}).done(function(res){ //fetch server "json" messages when done
			if(res.type == "error"){
				$("#contact_results").html('<div class="error">'+ res.text +"</div>");
			}
			
			if(res.type == "done"){
				$("#contact_results").html('<div class="success">'+ res.text +"</div>");
				window.location.href=redirec;
			}
		});
	}else{
		$('#loadingForm3').hide();
		$('#mens-enviado-err3').show('slow');
		setTimeout(function(){$('#mens-enviado-err3').hide('slow');
		},3000);
	};
});
	  /**/
	  /*------------------code to unete trabajo form*/
	/* $("#contacto-form-ft").validate({rules:{msg:{minlength:20}},
	submitHandler:function(){
		var nombre1=$('#nombre1').val();
var email1=$('#email1').val();
var comentario1=$('#comentario1').val();

if(grecaptcha.getResponse(widgetId2)!=""){
	alert('widgetId2'+widgetId2);
	$.ajax({beforeSend:function(){$('#loadingForm').show();
$('#mens-enviado').hide();
$('#mens-enviado-err2').hide();
},type:"post",url:'enviar2.php',data:{nombre1:nombre1,email1:email1,comentario1:comentario1},success:function(){$('#contacto-form-ft')[0].reset();
$('#loadingForm').hide();
$('#mens-enviado').show('slow');
setTimeout(function(){$('#mens-enviado').hide('slow');
},3000);
},error:function(){alert('Hubo algún error en el envío del formulario.');
$('#loadingForm').hide();
$('#mens-enviado-err').show('slow');
setTimeout(function(){$('#mens-enviado-err').hide('slow');
},3000);
}});
}else{$('#loadingForm').hide();
$('#mens-enviado-err').show('slow');
setTimeout(function(){$('#mens-enviado-err').hide('slow');
},3000);
};
}});*/
	  /**/
	$('.portafolio').click(function(){$('.formulario-cv').slideToggle('slow');});$('.bolsa').click(function(){$('.formulario-cv2').slideToggle('slow');});$.extend($.validator.messages, {required: "Favor de completar este campo.",email: "Favor de completar con un email válido"});$(".form-cv input[type=file]").on("change", function(){$(this).hide();var file = this.files[0].name;var dflt = $(this).attr("placeholder");if($(this).val()!=""){$(this).next().text(file);} else {$(this).next().text(dflt);}});$('.nota').click(function(){$('#ciudades1').slideToggle('slow');});$('.chihuahua').click(function(){$('#chihuahua').slideToggle('slow');if($(this).hasClass('activo-ac')){$('.chihuahua').removeClass('activo-ac');}else{$('.chihuahua').addClass('activo-ac');}});$('.leon').click(function(){$('#leon').slideToggle('slow');if($(this).hasClass('activo-ac')){$('.leon').removeClass('activo-ac');}else{$('.leon').addClass('activo-ac');}});$('.cuauhtemoc').click(function(){$('#cuauhtemoc').slideToggle('slow');if($(this).hasClass('activo-ac')){$('.cuauhtemoc').removeClass('activo-ac');}else{$('.cuauhtemoc').addClass('activo-ac');}});$('.hermosillo').click(function(){$('#hermosillo').slideToggle('slow');if($(this).hasClass('activo-ac')){$('.hermosillo').removeClass('activo-ac');}else{$('.hermosillo').addClass('activo-ac');}});$('.paso').click(function(){$('#paso').slideToggle('slow');if($(this).hasClass('activo-ac')){$('.paso').removeClass('activo-ac');}else{$('.paso').addClass('activo-ac');}});function justNumbers(e){var keynum=window.event?window.event.keyCode:e.which;if(keynum==8)return true;return/\d/.test(String.fromCharCode(keynum));}var num=80;$(window).bind('scroll',function(){if($(window).scrollTop()>num){$('#menu-head-sticky').addClass('fixed');$('.superior').hide();$('#menu-head-sticky').show();}else{$('#menu-head-sticky').removeClass('fixed');$('#menu-head-sticky').hide();$('.superior').show();}});$('#myCarousel').carousel({interval:3000});$('[id^=carousel-selector-]').hover(function(){var id_selector=$(this).attr("id");var id=id_selector.substr(id_selector.length-1);id=parseInt(id);$('#myCarousel').carousel(id-1);$('[id^=carousel-selector-]').removeClass('selected');$(this).addClass('selected');});$('#myCarousel').on('slid.bs.carousel',function(e){var id=$('.item.active').data('slide-number');id=parseInt(id);$('[id^=carousel-selector-]').removeClass('selected');$('[id=carousel-selector-'+id+']').addClass('selected');});$('#myCarousel1').carousel({interval:3000});$('[id^=carousel-selector-]').hover(function(){var id_selector=$(this).attr("id");var id=id_selector.substr(id_selector.length-1);id=parseInt(id);$('#myCarousel1').carousel(id-1);$('[id^=carousel-selector-]').removeClass('selected');$(this).addClass('selected');});$('#myCarousel1').on('slid.bs.carousel',function(e){var id=$('.item.active').data('slide-number');id=parseInt(id);$('[id^=carousel-selector-]').removeClass('selected');$('[id=carousel-selector-'+id+']').addClass('selected');});$('#myCarousel2').carousel({interval:3000});$('[id^=carousel-selector-]').hover(function(){var id_selector=$(this).attr("id");var id=id_selector.substr(id_selector.length-1);id=parseInt(id);$('#myCarousel2').carousel(id-1);$('[id^=carousel-selector-]').removeClass('selected');$(this).addClass('selected');});$('#myCarousel2').on('slid.bs.carousel',function(e){var id=$('.item.active').data('slide-number');id=parseInt(id);$('[id^=carousel-selector-]').removeClass('selected');$('[id=carousel-selector-'+id+']').addClass('selected');});$('#myCarousel3').carousel({interval:3000});$('[id^=carousel-selector-]').hover(function(){var id_selector=$(this).attr("id");var id=id_selector.substr(id_selector.length-1);id=parseInt(id);$('#myCarousel3').carousel(id-1);$('[id^=carousel-selector-]').removeClass('selected');$(this).addClass('selected');});$('#myCarousel3').on('slid.bs.carousel',function(e){var id=$('.item.active').data('slide-number');id=parseInt(id);$('[id^=carousel-selector-]').removeClass('selected');$('[id=carousel-selector-'+id+']').addClass('selected');});$('.flexslider').flexslider({animation:"fade",directionNav:true,touch:true,controlNav:false,itemMargin:0});$('.flexslider-1').flexslider({animation:"slide",animationLoop:true,itemWidth:569,itemMargin:1,minItems:2,maxItems:2,move:0,directionNav:true,touch:true,controlNav:false,prevText:"Anterior",nextText:"Siguiente"});
	$(".inline").colorbox({inline:true,href:$(this).attr('href')});$("#slide1").click(function(){$("#slider1").show(500);$("#slider2").hide(500);
	$("#slider3").hide(500);$("#slider4").hide(500);});$("#slide2").click(function(){$("#slider1").hide(500);$("#slider2").show(500);$("#slider3").hide(500);$("#slider4").hide(500);});$("#slide3").click(function(){$("#slider1").hide(500);$("#slider2").hide(500);$("#slider3").show(500);$("#slider4").hide(500);});$("#slide4").click(function(){$("#slider1").hide(500);$("#slider2").hide(500);$("#slider3").hide(500);$("#slider4").show(500);});$("#contacto-form-home").validate({rules:{msg:{minlength:20}},submitHandler:function(){var email2=$('#email2').val();var celular2=$('#celular2').val();var comentario2=$('#comentario2').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-home.php',data:{email2:email2,celular2:celular2,comentario2:comentario2},success:function(){$('#contacto-form-home')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$("#contacto-form-2").validate({rules:{msg:{minlength:20}},submitHandler:function(){var email2=$('#email2').val();var celular2=$('#celular2').val();var comentario2=$('#comentario2').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process.php',data:{email2:email2,celular2:celular2,comentario2:comentario2},success:function(){$('#contacto-form-2')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$("#contacto-form-sonia").validate({rules:{msg:{minlength:20}},submitHandler:function(){var email2=$('#email2').val();var celular2=$('#celular2').val();var comentario2=$('#comentario2').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-rl.php',data:{email2:email2,celular2:celular2,comentario2:comentario2},success:function(){$('#contacto-form-sonia')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$("#contacto-form-vic").validate({rules:{msg:{minlength:20}},submitHandler:function(){var email2=$('#email2').val();var celular2=$('#celular2').val();var comentario2=$('#comentario2').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-vic.php',data:{email2:email2,celular2:celular2,comentario2:comentario2},success:function(){$('#contacto-form-vic')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$("#contacto-form-ft").validate({rules:{msg:{minlength:20}},submitHandler:function(){var nombre2=$('#nombre1').val();var email2=$('#email1').val();var comentario2=$('#comentario1').val();var plaza2=$('#plaza1').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-ft.php',data:{nombre2:nombre2,email2:email2,comentario2:comentario2,plaza2:plaza2},success:function(){$('#contacto-form-ft')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$.extend($.validator.messages,{required:"Favor de completar este campo.",email:"Favor de completar con un email válido"});$("#contacto-form-ficha-vic").validate({rules:{msg:{minlength:20}},submitHandler:function(){var nombre2=$('#nombre1').val();var email2=$('#email1').val();var comentario2=$('#comentario1').val();var plaza2=$('#plaza1').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-ft-vic.php',data:{nombre2:nombre2,email2:email2,comentario2:comentario2,plaza2:plaza2},success:function(){$('#contacto-form-ficha-vic')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$.extend($.validator.messages,{required:"Favor de completar este campo.",email:"Favor de completar con un email válido"});var currentLocation=window.location;$("#contacto-form-bretana").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo4').val();var archivo4='archivos/'+$('#archivo4').val();var email4=$('#email4').val();var celular4=$('#celular4').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-bretana')[0].reset();$('#loadingForm-docs').hide();if(currentLocation=="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/trento.php"){window.location.href="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/gracias.php";}},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-marsella").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo5').val();var archivo4='archivos/'+$('#archivo5').val();var email4=$('#email5').val();var celular4=$('#celular5').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-marsella')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-lyon").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo6').val();var archivo4='archivos/'+$('#archivo6').val();var email4=$('#email6').val();var celular4=$('#celular6').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();if(currentLocation=="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/trento.php"){window.location.href="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/gracias.php";}},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cversalles").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo9').val();var archivo4='archivos/'+$('#archivo9').val();var email4=$('#email9').val();var celular4=$('#celular9').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-versalles')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cartagena").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo3').val();var archivo4='archivos/'+$('#archivo3').val();var email4=$('#email3').val();var celular4=$('#celular3').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-cartagena')[0].reset();$('#loadingForm-docs').hide();if(currentLocation=="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/trento.php"){window.location.href="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/gracias.php";}},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-medellin").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo4').val();var archivo4='archivos/'+$('#archivo4').val();var email4=$('#email4').val();var celular4=$('#celular4').val();$.ajax({beforeSend:function(){$('#btnEnviar').hide();$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".')}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-medellin')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-roble").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo6').val();var archivo4='archivos/'+$('#archivo6').val();var email4=$('#email6').val();var celular4=$('#celular6').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-roble')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cedro").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo7').val();var archivo4='archivos/'+$('#archivo7').val();var email4=$('#email7').val();var celular4=$('#celular7').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-cedro')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-fresno").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo8').val();var archivo4='archivos/'+$('#archivo8').val();var email4=$('#email8').val();var celular4=$('#celular8').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-fresno')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-maple").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo9').val();var archivo4='archivos/'+$('#archivo9').val();var email4=$('#email9').val();var celular4=$('#celular9').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-maple')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-sicomoro").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo10').val();var archivo4='archivos/'+$('#archivo10').val();var email4=$('#email10').val();var celular4=$('#celular10').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-sicomoro')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-haya").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo11').val();var archivo4='archivos/'+$('#archivo11').val();var email4=$('#email11').val();var celular4=$('#celular11').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-haya')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cerezo").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo01').val();var archivo4='archivos/'+$('#archivo01').val();var email4=$('#email01').val();var celular4=$('#celular01').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-fresno-f").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo-f').val();var archivo4='archivos/'+$('#archivo-f').val();var email4=$('#email-f').val();var celular4=$('#celular-f').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-nogales").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo-n').val();var archivo4='archivos/'+$('#archivo-n').val();var email4=$('#email-n').val();var celular4=$('#celular-n').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-plazas").validate({rules:{msg:{minlength:20}},submitHandler:function(){var nombre2=$('#nombre1').val();var email2=$('#email1').val();var comentario2=$('#comentario1').val();var plaza2=$('#plaza1').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-plazas-comerciales.php',data:{nombre2:nombre2,email2:email2,comentario2:comentario2,plaza2:plaza2},success:function(){$('#contacto-form-plazas')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$.extend($.validator.messages,{required:"Favor de completar este campo.",email:"Favor de completar con un email válido"});$("#contacto-form-ficha-vic").validate({rules:{msg:{minlength:20}},submitHandler:function(){var nombre2=$('#nombre1').val();var email2=$('#email1').val();var comentario2=$('#comentario1').val();var plaza2=$('#plaza1').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-ft-vic.php',data:{nombre2:nombre2,email2:email2,comentario2:comentario2,plaza2:plaza2},success:function(){$('#contacto-form-ficha-vic')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$.extend($.validator.messages,{required:"Favor de completar este campo.",email:"Favor de completar con un email válido"});$("#contacto-form-bretana").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo4').val();var archivo4='archivos/'+$('#archivo4').val();var email4=$('#email4').val();var celular4=$('#celular4').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-bretana')[0].reset();$('#loadingForm-docs').hide();if(currentLocation=="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/trento.php"){window.location.href="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/gracias.php";}},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-marsella").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo5').val();var archivo4='archivos/'+$('#archivo5').val();var email4=$('#email5').val();var celular4=$('#celular5').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-marsella')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-lyon").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo6').val();var archivo4='archivos/'+$('#archivo6').val();var email4=$('#email6').val();var celular4=$('#celular6').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();if(currentLocation=="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/trento.php"){window.location.href="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/gracias.php";}},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cversalles").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo9').val();var archivo4='archivos/'+$('#archivo9').val();var email4=$('#email9').val();var celular4=$('#celular9').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-versalles')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cartagena").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo3').val();var archivo4='archivos/'+$('#archivo3').val();var email4=$('#email3').val();var celular4=$('#celular3').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-cartagena')[0].reset();$('#loadingForm-docs').hide();if(currentLocation=="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/trento.php"){window.location.href="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/gracias.php";}},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-medellin").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo4').val();var archivo4='archivos/'+$('#archivo4').val();var email4=$('#email4').val();var celular4=$('#celular4').val();$.ajax({beforeSend:function(){$('#btnEnviar').hide();$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-medellin')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-roble").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo6').val();var archivo4='archivos/'+$('#archivo6').val();var email4=$('#email6').val();var celular4=$('#celular6').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-roble')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cedro").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo7').val();var archivo4='archivos/'+$('#archivo7').val();var email4=$('#email7').val();var celular4=$('#celular7').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-cedro')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-fresno").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo8').val();var archivo4='archivos/'+$('#archivo8').val();var email4=$('#email8').val();var celular4=$('#celular8').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-fresno')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-maple").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo9').val();var archivo4='archivos/'+$('#archivo9').val();var email4=$('#email9').val();var celular4=$('#celular9').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-maple')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-sicomoro").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo10').val();var archivo4='archivos/'+$('#archivo10').val();var email4=$('#email10').val();var celular4=$('#celular10').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-sicomoro')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-haya").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo11').val();var archivo4='archivos/'+$('#archivo11').val();var email4=$('#email11').val();var celular4=$('#celular11').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-haya')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-cerezo").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo01').val();var archivo4='archivos/'+$('#archivo01').val();var email4=$('#email01').val();var celular4=$('#celular01').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-fresno-f").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo-f').val();var archivo4='archivos/'+$('#archivo-f').val();var email4=$('#email-f').val();var celular4=$('#celular-f').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();if(currentLocation=="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/trento.php"){window.location.href="https://web.archive.org/web/20171227000755/http://www.ctu.com.mx/leon/gracias.php";}},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$("#contacto-form-nogales").validate({rules:{msg:{minlength:20}},submitHandler:function(){var modelo4=$('#modelo-n').val();var archivo4='archivos/'+$('#archivo-n').val();var email4=$('#email-n').val();var celular4=$('#celular-n').val();$.ajax({beforeSend:function(){$('#loadingForm-docs').show();var windowName='userConsole';var popUp=window.open(archivo4,windowName);if(popUp==null||typeof(popUp)=='undefined'){alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a hacer clic en "Descargar archivo".');}else{popUp.focus();}},type:"post",url:'process-dw.php',data:{modelo4:modelo4,archivo4:archivo4,email4:email4,celular4:celular4},success:function(){$('#contacto-form-lyon')[0].reset();$('#loadingForm-docs').hide();},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm-docs').hide();}});}});$('#black-contents').css('display','block');$('.btn').css('display','block').removeClass('disabled');$('ul li').click(function(){$('#black-contents').css('display','block');if($(this).attr('id')=='3')$('#black-contents').css('display','block');});$(document).ready(function(){var offset=320;var duration=1000;$(window).scroll(function(){if(jQuery(this).scrollTop()>offset){jQuery('a.flecha-azul').fadeIn(duration);}else{jQuery('a.flecha-azul').fadeOut(duration);}});$('a.flecha-azul').click(function(event){event.preventDefault();$('html, body').animate({scrollTop:0},duration);return false;});});$('[data-toggle="tooltip"]').tooltip();$("#contacto-form-ft-sonia").validate({rules:{msg:{minlength:20}},submitHandler:function(){var nombre2=$('#nombre1').val();var email2=$('#email1').val();var comentario2=$('#comentario1').val();var plaza2=$('#plaza1').val();if(grecaptcha.getResponse(widgetId2)!=""){$.ajax({beforeSend:function(){$('#loadingForm').show();$('#mens-enviado').hide();$('#mens-enviado-err').hide();},type:"post",url:'process-ft-sonia.php',data:{nombre2:nombre2,email2:email2,comentario2:comentario2,plaza2:plaza2},success:function(){$('#contacto-form-ft-sonia')[0].reset();$('#loadingForm').hide();$('#mens-enviado').show('slow');setTimeout(function(){$('#mens-enviado').hide('slow');},3000);},error:function(){alert('Hubo algún error en el envío del formulario.');$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);}});}else{$('#loadingForm').hide();$('#mens-enviado-err').show('slow');setTimeout(function(){$('#mens-enviado-err').hide('slow');},3000);};}});$.extend($.validator.messages,{required:"Favor de completar este campo.",email:"Favor de completar con un email válido"});});
/*
     FILE ARCHIVED ON 00:07:55 Dec 27, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:30:45 Apr 08, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 261.797 (3)
  esindex: 0.013
  captures_list: 278.841
  CDXLines.iter: 10.266 (3)
  PetaboxLoader3.datanode: 185.093 (4)
  exclusion.robots: 0.324
  exclusion.robots.policy: 0.276
  RedisCDXSource: 2.703
  PetaboxLoader3.resolve: 250.654 (2)
  load_resource: 207.319
*/