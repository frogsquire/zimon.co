	$(document).ready(function() {

		$(document).on("click", "header > ul > li > a", function(event){
			event.preventDefault();
			var element = this;  
			var active_tab_selector = $('header > ul > li.active > a').attr('href');	
			var target_tab_selector = $(this).attr('href');
			load(element, active_tab_selector, target_tab_selector); 
	     });

		function load(element, active, toLoad) {
			var actived_nav = $('header > ul > li.active');
			actived_nav.removeClass('active');
			$(element).parents('li').addClass('active');
			$(active).removeClass('active');
			$(active).addClass('hide');
			$(toLoad).removeClass('hide');
			$(toLoad).addClass('active');
		}
	  });