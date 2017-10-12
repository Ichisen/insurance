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

$('.services-cell').hover( function(event){
	var $cell = $(event.currentTarget);
	$cell.find('.services-cell-preview').fadeOut( 500 );
	$cell.find('.services-cell-review').fadeIn( 500 );
}, function(event){
	var $cell = $(event.currentTarget);
	$cell.find('.services-cell-review').fadeOut( 500 );
	$cell.find('.services-cell-preview').fadeIn( 500 );
} );