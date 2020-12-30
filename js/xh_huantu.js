
var hover_dir = {
	wrapper: $(".major-list")[0],
	box: $(".major-item"),
	target: $(".back-face"),
	bindEvent: function(){
		var mouse_pos, x, y, stop_bubble;
		for(var i = 0; i < hover_dir.box.length; i++){
			(function(n){
			    $.addEvent(hover_dir.box[n], "mouseover", function (event) {
			        
					event = $.getEvent(event);
					var relatedT = $.getRelatedTarget(event);
					
					if(!$.contains(hover_dir.box[n], relatedT)){
						var child = hover_dir.box[n].childNodes[0];
						$.stopPropagation(event);
					    $.removeClass(hover_dir.target[n], "to-left") ||
                        $.removeClass(hover_dir.target[n], "to-left23") ||
						$.removeClass(hover_dir.target[n], "to-right") ||
                        $.removeClass(hover_dir.target[n], "to-right23") ||
						$.removeClass(hover_dir.target[n], "to-top") ||
                        $.removeClass(hover_dir.target[n], "to-top02") ||
                        $.removeClass(hover_dir.target[n], "to-bottom02") ||
						$.removeClass(hover_dir.target[n], "to-bottom");
						x = event.pageX;
						y = event.pageY;
						mouse_pos = {"x": x, "y": y};
						var dir = $.get_dir(hover_dir.box[n], mouse_pos);
						switch(dir){
						    case "left":
						        if (n == 3 || n == 2) { $.addClass(hover_dir.target[n], "from-left23"); }
						        else { $.addClass(hover_dir.target[n], "from-left"); }
								
								break;
						    case "right":
						        if (n == 3 || n == 2) { $.addClass(hover_dir.target[n], "from-right23"); }
						        else { $.addClass(hover_dir.target[n], "from-right"); }
								break;
						    case "top":
						        if (n==0 ||n == 2) { $.addClass(hover_dir.target[n], "from-top02"); }
						        else { $.addClass(hover_dir.target[n], "from-top"); }
								
								break;
						    case "bottom":
						        if (n == 0 || n == 2) { $.addClass(hover_dir.target[n], "from-bottom02"); }
						        else { $.addClass(hover_dir.target[n], "from-bottom"); }
								
								break;
							default: break;
						}
					}
					
				});
				$.addEvent(hover_dir.box[n], "mouseout", function(event){
					event = $.getEvent(event);
					var relatedT = $.getRelatedTarget(event);
					if(!$.contains(hover_dir.box[n], relatedT)){
					    $.removeClass(hover_dir.target[n], "from-left") ||
                        $.removeClass(hover_dir.target[n], "from-left23") ||
						$.removeClass(hover_dir.target[n], "from-right") ||
                        $.removeClass(hover_dir.target[n], "from-right23") ||
						$.removeClass(hover_dir.target[n], "from-top") ||
                        $.removeClass(hover_dir.target[n], "from-top02") ||
                        $.removeClass(hover_dir.target[n], "from-bottom02") ||
						$.removeClass(hover_dir.target[n], "from-bottom");
						x = event.pageX;
						y = event.pageY;
						mouse_pos = {"x": x, "y": y};
						var dir = $.get_dir(hover_dir.box[n], mouse_pos);
						switch(dir){
						    case "left":
						        if (n == 3 || n == 2) { $.addClass(hover_dir.target[n], "to-left23"); }
						        else { $.addClass(hover_dir.target[n], "to-left"); }
								
								break;
						    case "right":
						        if (n == 3 || n == 2) { $.addClass(hover_dir.target[n], "to-right23"); }
						        else { $.addClass(hover_dir.target[n], "to-right"); }
								
								break;
						    case "top":
						        if (n==0 || n == 2) { $.addClass(hover_dir.target[n], "to-top02"); }
						        else { $.addClass(hover_dir.target[n], "to-top"); }
								break;
						    case "bottom":
						        if (n == 0 || n == 2) { $.addClass(hover_dir.target[n], "to-bottom02"); }
						        else { $.addClass(hover_dir.target[n], "to-bottom"); }
								
								break;
							default: break;
						}
					}	
				});
			})(i);
		}},
	init: function(){
		hover_dir.bindEvent();
	}
};
hover_dir.init();

