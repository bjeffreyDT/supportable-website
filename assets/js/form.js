document.getElementById('Phone').addEventListener('input', function(event) {
    let input = event.target;
    let inputValue = input.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (inputValue.length > 0) {
      // Format the phone number as per your preference
      inputValue = '(' + inputValue.substring(0, 3) + ') ' + inputValue.substring(3, 6) + '-' + inputValue.substring(6, 10);
    }

    input.value = inputValue;
  });

// // Select the button
// var button = d3.select("#contact-button");

// // Select the form
// var form = d3.select("#contact-form");

// // Create event handlers for clicking the button or pressing the enter key
// button.on("click", runEnter);
// form.on("submit", runEnter);

// // Create the function to run for both events
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // Get the value property of the full name
//     var firstName = d3.select("#fname");
//     var firstName = firstName.property("value");
//     console.log(firstName);

//     // Get the value property of the full name
//     var lastName = d3.select("#lname");
//     var lastName = lastName.property("value");
//     console.log(lastName);

//     // Get the value property of the full name
//     var jobTitle = d3.select("#title");
//     var jobTitle = jobTitle.property("value");
//     console.log(jobTitle);

//     // Get the value property of the full name
//     var company = d3.select("#company");
//     var company = company.property("value");
//     console.log(company);

//     // Get the value property of the full name
//     var email = d3.select("#email");
//     var email = email.property("value");
//     console.log(email);

//     // Get the value property of the full name
//     var phone = d3.select("#phone");
//     var phone = phone.property("value");
//     console.log(phone);

//     // Get the value property of the full name
//     var message = d3.select("#message");
//     var message = message.property("value");
//     console.log(message);

//     formData = {
//         "First_Name": firstName,
//         "Last_Name": lastName,
//         "Designation": jobTitle,
//         "Company": company,
//         "Email": email,
//         "Phone": phone,
//         "Message_from_Webform": message
//     }
// }

function checkMandatory5231866000013824041() {
    var mndFileds = new Array('Company', 'Last Name');
    var fldLangVal = new Array('Company', 'Last\x20Name');
    for (i = 0; i < mndFileds.length; i++) {
        var fieldObj = document.forms['WebToLeads5231866000013824041'][mndFileds[i]];
        if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                if (fieldObj.type == 'file') {
                    alert('Please select a file to upload.');
                    fieldObj.focus();
                    return false;
                }
                alert(fldLangVal[i] + ' cannot be empty.');
                fieldObj.focus();
                return false;
            } else if (fieldObj.nodeName == 'SELECT') {
                if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                    alert(fldLangVal[i] + ' cannot be none.');
                    fieldObj.focus();
                    return false;
                }
            } else if (fieldObj.type == 'checkbox') {
                if (fieldObj.checked == false) {
                    alert('Please accept  ' + fldLangVal[i]);
                    fieldObj.focus();
                    return false;
                }
            }
            try {
                if (fieldObj.name == 'Last Name') {
                    name = fieldObj.value;
                }
            } catch (e) { }
        }
    }
    var urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
        var webform = document.getElementById('webform');
        var service = urlparams.get('service');
        var smarturlfield = document.createElement('input');
        smarturlfield.setAttribute('type', 'hidden');
        smarturlfield.setAttribute('value', service);
        smarturlfield.setAttribute('name', 'service');
        webform.appendChild(smarturlfield);
    }
    document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
}

function tooltipShow5231866000013824041(el) {
    var tooltip = el.nextElementSibling;
    var tooltipDisplay = tooltip.style.display;
    if (tooltipDisplay == 'none') {
        var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
        for (i = 0; i < allTooltip.length; i++) {
            allTooltip[i].style.display = 'none';
        }
        tooltip.style.display = 'block';
    } else {
        tooltip.style.display = 'none';
    }
}