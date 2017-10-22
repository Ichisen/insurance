/**
 * Created by egor on 13.09.2017.
 */
PARAMS = {
	SENDMAILURL: './data/php/sendmail.php'
};

js = {
	is:{}//Типизация
};
/**
 * Возвращает функцию, которая возвращает true, если тип param равен type
 * ( предполагается примерно такой вызов: js.is.type('string')(someVar) )
 * @param {string} type
 * @return {function}
 */
js.is.type = function (type) {
	return function (param) { return (typeof(param) == type); };
};

/**
 * Проверяет является ли переданная в качестве параметра переменная строкой
 * @param {anyType} param переменная, тип которой проверяется
 * @return {bool} true - если param является строкой, false - если не является
 */
js.is.string = function (param) {
	return js.is.type('string')(param);
};


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

$('#mainFormButton').click(function(){
	var type = "main_message";
	var name = $('#mainFormName').val();
	var phone = $('#mainFormPhone').val();
	var urlTPL = '{mainURL}?type={type}&name={name}&phone={phone}';

	if(js.is.string(name) && js.is.string(phone) && name.length > 0 && phone.length > 0) {
		if(name.length > 1 && phone.length > 3) {
			var selfURL = urlTPL.replace('{mainURL}',PARAMS.SENDMAILURL)
									.replace('{type}',type)
									.replace('{name}',name)
									.replace('{phone}',phone);

			$.ajax({
				type: 'GET',
				url: selfURL,
				async: true,
				success: function() {
					$('#mainFormModalSend').modal('show');
				},
				error: function() {
					$('#mainFormModalError').modal('show');
				}
			});

		} else {
			$('#mainFormModalError').modal('show');
		}
	}
});