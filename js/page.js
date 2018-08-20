$(document).ready(function() {
		var allShown = false; 
		hideSections(); 
		load($(".header-name > a"), null, "#welcome");

		$(document).on("click", "header > ul > li > a", function(e){
			e.preventDefault();
			if(allShown) {
				hideSections(); 
				allShown = false; 
			}
			var element = this;  
			var active_tab_selector = $('header > ul > li.active > a').attr('href');	
			var target_tab_selector = $(this).attr('href');
			load(element, active_tab_selector, target_tab_selector); 
	     });

		$(document).on("click", "#all", function(e) {
			e.preventDefault(); 
			$(".content-section").each(function() {
				$(this).show(); 
			}); 
			allShown = true; 
		});

		function load(element, active, toLoad) {
			var actived_nav = $('header > ul > li.active');
			actived_nav.removeClass('active');
			$(element).parents('li').addClass('active');
			if(active) { 
				$(active).hide(); 
			}
			$(toLoad).show(); 
		}
});

var hideSections = function() {
	$(".content-section").each(function() {
			$(this).hide(); 
	}); 
}
