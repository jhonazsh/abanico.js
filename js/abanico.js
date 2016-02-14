/*!
 * abanico.js 0.1.0
 * autor: Jhon Felipe Medina Zapata
 */

(function($){

	var word = [];
	var ind = 0;
	var band = 0;
	var indList = 0;
	var datofocus;

	$.fn.abanico = function(d,key){

		return this.each(function(){
			if(d){
				
				$(this).keyup(function(e){
					var este = $(this);
						
					var inputDato = este.val();
					if(inputDato!=''){
						$('.list-abanico').html('');
							if(ind==0){
								html = '<div class="results"></div>';
								$('.content-abanico').append(html);
								$('.results').css({
									'background-color':'rgb(255, 245, 245)',
									'position':'absolute',
									'z-index':'1'
								}).append('<ul class="list-abanico"><ul>');
								$('.list-abanico').css({
									'list-style':'none',
									'padding':'0px',
									'margin':'0px'
								});	
							}
							ind=ind+1;
							var longInputDato = inputDato.length; 
							for(var i=0; i<d.length; i++){
								var inputDatoComp = inputDato.toLowerCase();
								var dataComp = d[i][key].substr(0,longInputDato).toLowerCase();
								if(inputDatoComp==dataComp){
									$('.list-abanico').append('<li class="item-list-abanico">'+d[i][key]+'</li>');	
								}
							}
							$('.item-list-abanico').css({
								'padding':'3px 9px',
								'border-bottom':'1px solid #ccc',
								'border-left':'1px solid #ccc',
								'border-right':'1px solid #ccc'
							}).mouseover(function(){
								$(this).css({'background-color':'#ccc','cursor':'pointer'});
								este.val($(this).text());
							}).mouseout(function(){
								$(this).css({'background-color':''});
							});
							if(e.which==40){
								if(indList==$('.item-list-abanico').length){
									indList=0;
								}
								if(indList<$('.item-list-abanico').length){
									$('.item-list-abanico').eq(indList).css({
										'background-color':'#ccc'
									});
									datofocus = $('.item-list-abanico').eq(indList).text();
								}
								indList++;
							}
							if(e.which==38){
								indList--;
								if(indList==0){
									indList=$('.item-list-abanico').length;
								}
								if(indList>-1){
									$('.item-list-abanico').eq(indList-1).css({
										'background-color':'#ccc'
									});
									datofocus = $('.item-list-abanico').eq(indList).text();
								}
							}
							if(e.which==13){
								este.val(datofocus);
								$('.list-abanico').html('');
							}
							if(e.which!=40 && e.which!=38){
								indList=0;
							}
					}
					else{
						$('.list-abanico').html('');
					}
				});
			}
			
		});
	}
})(jQuery);