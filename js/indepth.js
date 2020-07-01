
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	$("#indepth_resultados").show();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "<img src='../images/preguntas/1.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Paco Gento",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Paolo Maldini",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cristiano Ronaldo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clarence Seedorf",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/2.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Atletico de Madrid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bayern de Múnich",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Manchester United",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Juventus",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/3.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Hugo Sánchez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Hector Herrera",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier Hernández",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Rafa Márquez",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/4.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Cristiano Ronaldo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Gareth Bale",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Liones Messi",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Samuel Eto'o",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/5.png'>",
				      "respuestas": [
				        {
				          "respuesta": "A. Del Piero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Paolo Maldini",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Patrice Evra",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Gianluigi Buffon",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/6.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Raúl González",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Sergio Ramos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cristiano Ronaldo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Iker Casillas",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/7.png'>",
				      "respuestas": [
				        {
				          "respuesta": "España",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Inglaterra",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Italia",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alemania",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/8.png'>",
				      "respuestas": [
				        {
							"respuesta": "España",
							"tipo": "true"
						  },
						  {
							"respuesta": "Inglaterra",
							"tipo": "false"
						  },
						  {
							"respuesta": "Italia",
							"tipo": "false"
						  },
						  {
							"respuesta": "Alemania",
							"tipo": "false"
						  }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/9.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Patrick Kluivert",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Lionel Messi",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Neymar",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Johan Cruyff",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/10.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Barcelona",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Milán",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Real Madrid",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Bayern de Múnich",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/11.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Paolo Maldini",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Cristiano Ronaldo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Patrice Evra",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clarence Seedorf",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/12.png'>",
				      "respuestas": [
				        {
				          "respuesta": "Josep Guardiola",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jose Mourinho",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alex Ferguson",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Zinédine Zidane",
				          "tipo": "true"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000 );
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				
				if(respuestas_num == preguntas.length){
					finish_test();
				}
				
			}
			
		});
		
		
});

function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if (aciertos <= 3) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/3.png'>");
		totalfb = "villamelon"
	} else if (aciertos > 3 && aciertos <= 6) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/2.png'>");
		totalfb = "sinpalabras";
	} else if (aciertos > 6 && aciertos <= 9) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/1.png'>");
		totalfb = "maso";
	} else if (aciertos > 9) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/0.png'>");
		totalfb = "champion";
	}

	$("#txt-result").text("Tuviste " + aciertos + " aciertos de 12 posibles");

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (totalfb == "villamelon") {
			text = encodeURIComponent("Villamelón le dicen");
		} else if (totalfb == "sinpalabras") {
			text = encodeURIComponent("Sin palabras");
		} else if (totalfb == "maso") {
			text = encodeURIComponent("Ahí la llevas");
		} else if (totalfb == "champion") {
			text = encodeURIComponent("La Champions eres tú");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/para-verdaderos-conocedores-de-la-champions");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuizz&url="+url+"?m="+totalfb,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/para-verdaderos-conocedores-de-la-champions?m="+totalfb);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});

	$("#indepth_whatsapp").click(function(){
		var text = "";
		if (totalfb == "villamelon") {
			text = encodeURIComponent("Villamelón le dicen");
		} else if (totalfb == "sinpalabras") {
			text = encodeURIComponent("Sin palabras");
		} else if (totalfb == "maso") {
			text = encodeURIComponent("Ahí la llevas");
		} else if (totalfb == "champion") {
			text = encodeURIComponent("La Champions eres tú");
		}

		var url = encodeURIComponent("http://juanfutbol.com/indepth/para-verdaderos-conocedores-de-la-champions?m="+totalfb);
		window.open("whatsapp://send?text="+url+" "+text);
	});
  	
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


