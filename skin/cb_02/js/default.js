$(document).ready(function() {
	$('body').on('hidden.bs.modal', '.modal', function() {
		$(this).removeData('bs.modal');
	});
	/* -------------------------------------------
	$('.minPrice').mask('000,000,000,000,000', {
		reverse: true
	});
	$('.maxPrice').mask('000,000,000,000,000', {
		reverse: true
	});
	$('#minPrice').mask('000,000,000,000,000', {
		reverse: true
	});
	$('#maxPrice').mask('000,000,000,000,000', {
		reverse: true
	});*/
	/* ------------------------------------------- */
	sendLeadPreset();
	/* ------------------------------------------- */
	var $form = $('#searchLiveForm'),
		origForm = $form.serialize();
	$('#searchLiveForm :input').on('change input', function() {
		var formParams = $("#searchLiveForm").serialize();
		searchLive(formParams);
	});
	/* ------------------------------------------- */
	$('#searchLiveFormSubmit').click(function() {
		var formParams = $("#searchLiveForm").serialize();
		$("#propertyResult").hide("fast");
		searchLive(formParams);
		$('html, body').animate({
			scrollTop: $("#propertyAgentOffice").offset().top
		}, 500);
		$("#propertyResult").show("fast");
	});
	/* ------------------------------------------- */
	$("#quick_search_advanced_link").click(function() {
		var activeForm = $("#quick_search_active_form").val();
		var formParams = "";
		$("#" + activeForm + " :input").each(function() {
			formParams += $(this).attr("name") + '=' + $(this).val() + "&";
		});
		window.location.href = "/real-estate/search/?" + formParams;
	});
	/* ------------------------------------------- */
	if ($('#historyGoBackBtn').val()) {
		if (history.length) {
			$('#historyGoBackBtn').show('fast');
		} else {
			$('#historyGoBackBtn').hide('fast');
		}
	}
	$('#historyGoBackBtn').click(function() {
		if (history.length) {
			history.back();
		}
	});
	/* ------------------------------------------- */
	function searchLive(data) {
			var generalSearch = $("#generalSearch").val();
			var minPrice = $("#minPrice").val();
			var maxPrice = $("#maxPrice").val();
			var propertyCity = $("#propertyCity").val();
			var addParams = '';
			localStorage.setItem('generalSearch', generalSearch);
			localStorage.setItem('minPrice', minPrice);
			localStorage.setItem('maxPrice', maxPrice);
			localStorage.setItem('propertyCity', propertyCity);
			if (data != undefined) {
				addParams = data;
			} else {
				addParams = 'generalSearch=' + generalSearch + '&minPrice=' + minPrice + '&maxPrice=' + maxPrice;
			}
			if ((addParams != '') || (minPrice != '') || (maxPrice != '')) {
				$(".property").show('fast');
				if ($(window).scrollTop() < 5) {
					$('html, body').animate({
						scrollTop: $("#pageTitle1").offset().top
					}, 500);
				}
				var searchUrl = "/real-estate/search?" + addParams;
				window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);
				if ($("#quick_search_advanced_link").length == 1) {
					$("#quick_search_advanced_link").attr("href", searchUrl)
				}
				var params = 'function=website/property/generalSearch&' + addParams;
				apiCall(params, 'searchLive');
				localStorage.setItem('lastSearchProperty', params);
			} else {
				$(".property").hide('fast');
			}
		}
		/**
		 * [description]
		 * @param  {[type]} ){		var formParams    [description]
		 * @return {[type]}          [description]
		 */
	$('#saveUserSearch').click(function() {
		var formParams = $("#searchLiveForm").serialize();
		formParams += "&function=website/property/saveUserSearch";
		apiCall(formParams, 'saveUserSearch');
		$("#saveUserSearchDone").show("fast");
	});
	/**
	 * [description]
	 * @param  {[type]} ){		var formParams    [description]
	 * @return {[type]}          [description]
	 */
	$('#saveUserProperty').click(function() {
		var propertyId = $("#propertyId").val();
		var propertyNum = $("#propertyNum").val();
		var formParams = "&function=website/property/saveUserProperty&propertyNum=" + propertyNum + "&propertyId=" + propertyId;
		apiCall(formParams, 'saveUserProperty');
		$("#saveUserPropertyDone").show("fast");
	});
	/* ------------------------------------------------------------------------------ */
	$("#quickSearch_btn_sale").click(function() {
		quickSearchMenu('sale');
	});
	$("#quickSearch_btn_rent").click(function() {
		quickSearchMenu('rent');
	});
	$("#quickSearch_btn_location").click(function() {
		quickSearchMenu('location');
	});
	$("#quickSearch_btn_office").click(function() {
		quickSearchMenu('office');
	});

	function quickSearchMenu(type) {
			var btns = ['quickSearch_btn_sale', 'quickSearch_btn_rent', 'quickSearch_btn_location', 'quickSearch_btn_office'];
			var forms = ['quickSearch_form_sale', 'quickSearch_form_rent', 'quickSearch_form_location', 'quickSearch_form_office'];
			$.each(btns, function(key, value) {
				var current_type = "quickSearch_btn_" + type;
				if (value == current_type) {
					$("#" + value).addClass("btn-default");
					$("#" + value).removeClass("btn-disabled");
				} else {
					$("#" + value).addClass("btn-disabled");
					$("#" + value).removeClass("btn-default");
				}
			});
			$.each(forms, function(key, value) {
				var current_type = "quickSearch_form_" + type;
				if (value == current_type) {
					$("#" + value).show("fast");
					$("#" + value).removeClass("displayNoneImportant");
					$("#quick_search_active_form").val(value);
				} else {
					$("#" + value).hide("fast");
					$("#" + value).addClass("displayNoneImportant");
				}
			});
			var formParams = $("#searchLiveForm").serialize();
			// searchLive(formParams);
		}
		/* ------------------------------------------------------------------------------ */
	$("#propertyState").change(function() {
		var formParams = $("#searchLiveForm").serialize();
		formParams += '&function=page/select2&inputId=propertyCity&codeCategory=propertyCity';
		apiCall(formParams, 'propertyCity');
	});
	/* ------------------------------------------------------------------------------ */
	$("#propertyAgentOffice").change(function() {
		var formParams = $("#searchLiveForm").serialize();
		formParams += '&function=page/select2&inputId=propertyAgentName&codeCategory=propertyAgent';
		apiCall(formParams, 'propertyAgentName');
	});
});

function sendLeadPreset() {
		var userName = localStorage.getItem('userName');
		var userPhone = localStorage.getItem('userPhone');
		var userEmail = localStorage.getItem('userEmail');
		var userMessage = localStorage.getItem('userMessage');
		if (userName != 'undefined') {
			if ($('.userName').val() == '') {
				$('.userName').val(userName);
			}
		}
		if (userPhone != 'undefined') {
			if ($('.userPhone').val() == '') {
				$('.userPhone').val(userPhone);
			}
		}
		if (userEmail != 'undefined') {
			if ($('.userEmail').val() == '') {
				$('.userEmail').val(userEmail);
			}
		}
		if (userMessage != 'undefined') {
			if ($('.userMessage').val() == '') {
				$('.userMessage').val(userMessage);
			}
		}
	}
	/**
	 * [sendLeadValidate description]
	 * @param  {[type]} formId [description]
	 * @return {[type]}        [description]
	 */

function sendLeadValidate(formId) {
		var captchaCount = 0;
		var userName = $('.userName', '#' + formId);
		var userPhone = $('.userPhone', '#' + formId);
		var userEmail = $('.userEmail', '#' + formId);
		var userMessage = $('.userMessage', '#' + formId);
		showLeadResult('loading', '');
		/* ---------------------------------- */
		if (userName.val().length < "3") {
			showLeadResult('error', "Please add your full name.");
			userName.addClass('inputError');
			userName.focus();
			return false;
		} else {
			userName.removeClass('inputError');
			showLeadResult('loading', '');
		}
		/* ---------------------------------- */
		if ((userEmail.val().length < 6) || (userEmail.val().indexOf("@") < 0) || (userEmail.val().indexOf(".") < 0) || (userEmail.val().trim().indexOf(" ") > 0)) {
			showLeadResult('error', "Please add a valid Email Address.");
			userEmail.addClass('inputError');
			userEmail.focus();
			return false;
		} else {
			userEmail.removeClass('inputError');
			showLeadResult('loading', '');
		}
		/* ---------------------------------- */
		if (userMessage.val().length < 3) {
			showLeadResult('error', "Please tell us more about how can we help you?");
			userMessage.addClass('inputError');
			userMessage.focus();
			return false;
		} else {
			userMessage.removeClass('inputError');
			showLeadResult('loading', '');
		}
		/* ---------------------------------- */
		$(".userCaptcha").each(function() {
			++captchaCount;
		});
		/* ---------------------------------- */
		if (captchaCount > 0) {
			var userCaptcha = $('.userCaptcha', '#' + formId);
			if (userCaptcha.val().length != 3) {
				showLeadResult('error', "Please type the verification code.");
				userCaptcha.addClass('inputError');
				userCaptcha.focus();
				return false;
			} else {
				userCaptcha.removeClass('inputError');
				showLeadResult('loading', '');
			}
		}
		/* ---------------------------------- */
		localStorage.setItem('userName', userName.val());
		localStorage.setItem('userPhone', userPhone.val());
		localStorage.setItem('userEmail', userEmail.val());
		localStorage.setItem('userMessage', userMessage.val());
		return true;
	}
	/**
	 * [sendLead description]
	 * @param  {[type]} formObj [description]
	 * @return {[type]}         [description]
	 */

function sendLeadSearch(formObj) {
		var sendLeadValidateResponse = false;
		var apiCallResponse = '';
		showLeadResult('loading', '');
		sendLeadValidateResponse = sendLeadValidate(formObj.id);
		if (!sendLeadValidateResponse) {
			return sendLeadValidateResponse;
		}
		/* ---------------------------------- */
		if ($('#searchParams').val()) {
			var searchParams = $('#searchParams').val().replace(new RegExp('&', 'g'), '|');
			/* ---------------------------------- */
			var params = $('#' + formObj.id).serialize();
			params += '&function=user/lead/search/insert&returnFormat=json&searchParams=' + searchParams;
			apiCallResponse = apiCall(params, 'sendLead');
		}
		return false;
	}
	/**
	 * [sendLead description]
	 * @param  {[type]} formObj [description]
	 * @return {[type]}         [description]
	 */

function sendLead(formObj) {
		var sendLeadValidateResponse = false;
		var apiCallResponse = '';
		showLeadResult('loading', '');
		sendLeadValidateResponse = sendLeadValidate(formObj.id);
		if (!sendLeadValidateResponse) {
			return sendLeadValidateResponse;
		}
		/* ---------------------------------- */
		var params = $('#' + formObj.id).serialize();
		params += '&function=user/lead/insert&returnFormat=json';
		apiCallResponse = apiCall(params, 'sendLead');
		return false;
	}
	/**
	 * [showLeadResult description]
	 * @param  {[type]} type    [description]
	 * @param  {[type]} message [description]
	 * @return {[type]}         [description]
	 */

function showLeadResult(type, message) {
		if (type == 'none') {
			$(".formMessage").hide("fast");
			$(".formMessageError").hide("fast");
			$(".formMessageOk").hide("fast");
			$(".formMessageLoading").hide("fast");
		}
		if (type == 'ok') {
			$(".formMessage").show("fast");
			$(".showErrorOk").html(message);
			$(".formMessageError").hide("fast");
			$(".formMessageOk").show("fast");
			$(".formMessageLoading").hide("fast");
		}
		if (type == 'error') {
			$(".formMessage").show("fast");
			$(".showError").html(message);
			$(".formMessageError").show("fast");
			$(".formMessageOk").hide("fast");
			$(".formMessageLoading").hide("fast");
		}
		if (type == 'loading') {
			$(".formMessage").show("fast");
			$(".formMessageError").hide("fast");
			$(".formMessageOk").hide("fast");
			$(".formMessageLoading").show("fast");
		}
	}
	/**
	 * @param data
	 * @param action
	 */

function apiCall(data, action) {
	var url = '/api/';
	data += '&format=html&token=1';
	$.ajax({
		type: "POST",
		url: url,
		data: data,
		success: function(response) {
			if (action == 'searchLive') {
				$("#propertyResult").html(response);
			} else if (action == 'sendLead') {
				var responseObj = JSON.parse(response);
				if (responseObj.result == 'error') {
					showLeadResult('error', responseObj.data);
				} else {
					showLeadResult('ok', "");
				}
			} else if (action == 'propertyCity') {
				$("#propertyCityReplace").html(response);
				$("#propertyCity").select2();
			} else if (action == 'propertyAgentName') {
				$("#propertyAgentNameReplace").html(response);
				$("#propertyAgentName").select2();
			}
		}
	});
}
