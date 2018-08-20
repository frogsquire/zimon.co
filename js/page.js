$(document).ready(function() { 
		var toLoad = window.location.hash; 
		if(!toLoad || $(toLoad).length<=0) {
			toLoad = "#welcome";
		}
		$(toLoad).show(); 

		$(document).on("click", ".header-link", function(e){
			e.preventDefault();
			$(".content-section:visible").hide();
			var location = $(this).attr('href'); 
			$(location).show(); 
		});

		$(document).on("click", "#all", function(e) {
			e.preventDefault(); 
			$(".content-section").each(function() {
				$(this).show(); 
			}); 
		});
});
