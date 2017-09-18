var DefaultDropDownText = "Please select...";
var DefaultDropDownValue = "0";

var DefaultMessageDropDownText = "ALL";
var DefaultMessageDropDownValue = "-1";

var IsDefaultDropDownEntryNeeded = true;

//here input ddlInput is of type dropdown
//please make sure to call this before filling any other entries
function VDAdminFillDefaultEntryForDropdown(ddlInput) {
    if ($(ddlInput) != null) {
        $(ddlInput).html('');
        $(ddlInput).append("<option value='" + DefaultDropDownValue + "'>" + DefaultDropDownText + "</option>");
        return ddlInput;
    }
}

function VDMessageFillDefaultEntryForDropdown(ddlInput) {
    if ($(ddlInput) != null) {
        $(ddlInput).html('');
        $(ddlInput).append("<option value='" + DefaultMessageDropDownValue + "'>" + DefaultMessageDropDownText + "</option>");
        return ddlInput;
    }
}

function RemoveBSAndTildaFromUrl(inputURL)//url be like Search/RunSearch etc
{
    var formattedURL = inputURL;

    while (formattedURL != null && formattedURL.length >= 1 && (formattedURL.substring(0, 1) == '/' || formattedURL.substring(0, 1) == '~' || formattedURL.substring(0, 1) == '.')) {
        formattedURL = formattedURL.replace(formattedURL.substring(0, 1), '');//replace first occurence
    }

    return formattedURL;
}

function getVDAbsoluteUrl(inputPartialUrl) {

    inputPartialUrl = RemoveBSAndTildaFromUrl(inputPartialUrl);

    var baseUrl = window.location.protocol + "//" + window.location.host + "/";

    return baseUrl + inputPartialUrl;

}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function setFormStatusMessage(formName, divcontainerName, isSuccess, message) {
    var container = $('#' + formName).find('#' + divcontainerName);
    if (container) {
        var messageDivSuccess = $(container).find('.alert-success');
        var messageDivError = $(container).find('.alert-danger');

        if (isSuccess) {
            $(container).show(); $(messageDivSuccess).show(); $(messageDivSuccess).html(message);
            $(messageDivError).hide();
        }
        else {
            $(container).show(); $(messageDivSuccess).hide();
            $(messageDivError).show(); $(messageDivError).html(message);
        }
    }
}

function getUrlJsonSync(url) {

    var jqxhr = $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        cache: false,
        async: false
    });

    // 'async' has to be 'false' for this to work
    var response = { valid: jqxhr.statusText, data: jqxhr.responseJSON };

    return response;
}

function postUrlJsonSync(url) {

    var jqxhr = $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        cache: false,
        async: false
    });

    // 'async' has to be 'false' for this to work
    var response = { valid: jqxhr.statusText, data: jqxhr.responseJSON };

    return response;
}

function HideFormStatusMessage(formName, divcontainerName) {
    var container = $('#' + formName).find('#' + divcontainerName);
    if (container) {
        $(container).hide();
    }
}

function getParameterByName(url, idtofindvaluefor) {
    idtofindvaluefor = idtofindvaluefor.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + idtofindvaluefor + "=([^&#]*)"),
        results = regex.exec(url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function VDShowAjaxLoadingContent(divName) {
    $('#' + divName).html('<h1 class="ajax-loading-animation" style=\'padding-left:10px;\'><i class="fa fa-cog fa-spin"></i> Loading...</h1>');
}

function VDShowAjaxLoadingContentSmall(divName) {
    $('#' + divName).html('<h1 class="ajax-loading-animation-small" style=\'padding-left:10px;\'><i class="fa fa-cog fa-spin"></i> Loading...</h1>');
}

function Clear_Form(containerName) {

    var eleName = '#' + containerName;

    $(eleName).find(':input').each(function () {

        var isdisabled = $(this).is(':disabled');

        switch (this.type) {
            case 'password':
            case 'select-multiple':
            case 'select-one':
            case 'text':
            case 'tel':
            case 'email':
            case 'textarea':
                $(this).val('');
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
        }
    });

    //hide form error area
    $(eleName).find('.VDFormError').hide();

    $(eleName).find('.has-error').each(function () {
        $(this).find('.has-error').remove();
        $(this).removeClass('has-error');
    });

    $(eleName).find('.has-success').each(function () {
        $(this).removeClass('has-success');
    });
}

function VDControlAllowOnlyAlphabets(kCode) {
    if ((kCode > 64 && kCode < 91) || (kCode > 96 && kCode < 123)) {
        return true;
    }
    else {
        event.keyCode = 0
        return false;
    }
};


function VDControlAllowOnlyAlphabetsWithSpace(kCode) {

    if ((kCode > 64 && kCode < 91) || (kCode > 96 && kCode < 123) || kCode == 32) {
        return true;
    }
    else {
        event.keyCode = 0
        return false;
    }
};

function AddCustomPageSelectionToKendoGrid(gridClientID) {

    var gridid = '#' + gridClientID;

    if ($(gridid)) {
        var pageSizes = [{ text: "5", value: 5 },
                        { text: "10", value: 10 }, { text: "25", value: 25 }, { text: "50", value: 50 },
                        { text: "100", value: 100 },
                        { text: "All", value: $(gridid).data("kendoGrid").dataSource.total() }];

        $(gridid).find('.k-pager-sizes select[data-role="dropdownlist"]').data('kendoDropDownList').setDataSource(new kendo.data.DataSource({ data: pageSizes }));

        $(gridid).data('kendoGrid').dataSource.bind('change', function () {
            var current = $(gridid).find('.k-dropdown span.k-input').text();
            if (current == $(gridid).data("kendoGrid").dataSource.total()) {
                $(".k-dropdown span.k-input").text('All');
            }
        });
    }
};

$(document).ready(function () {
});


