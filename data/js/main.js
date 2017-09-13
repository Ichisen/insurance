/**
 * Created by egor on 13.09.2017.
 */


$('.main-message-tab').click(function(elem){
	var tabName = $(elem.currentTarget).attr('data-tab-name');

	$('.main-message-tab').removeClass('active-tab');
	$('.left-content-tab').removeClass('active-content-tab');

	$(elem.currentTarget).addClass('active-tab');
	$('.left-content-tab[data-tab-name='+tabName+']').addClass('active-content-tab');
});