function login() {
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;
    if (validateEmail(email, pass))
        goTo('main');
}

function validateEmail(email, pass) {
    if (email === 'janet@seb.se')
        if(pass === 'janet123')
            return(true);
        else {
            alert('Password is incorrect');
            return(false);
        }

    if (email === 'admin@seb.se') 
        if(pass === 'admin123')
            return(true);
        else {
            alert('Password is incorrect');
            return(false);
        }
    
    if (email === 'egill@seb.se') 
        if(pass === 'egill123')
            return(true);
        else {
            alert('Password is incorrect');
            return(false);
        }
    
    if (email === 'iosif@seb.se') 
        if(pass === 'iosif123')
            return(true);
        else {
            alert('Password is incorrect');
            return(false);
        }

    alert('Email not found')
    return(false);
}

// function submitRequest() {
//     window.location.href = 'submittedPage.html';
// }

function selectRole(role) {
    switch(role) {
        case 'role1':
            window.location.href = 'eventPlanningRequest.html';
            break;
        case 'role2':
            window.location.href = 'reviewRequest.html';
            break;
        case 'role3':
            window.location.href = 'reviewRequest2.html';
            break;
    }
}

// function goToMain() {
//     window.location.href = 'main.html';    
// }

function goTo(page) {
    switch(page) {
        case 'main':
            window.location.href = 'main.html';
            break;
        case 'eventReq':
            window.location.href = 'eventPlanningRequest.html';
            break;
        case 'clientReq':
            window.location.href = 'clientRequest.html';
            break;
        case 'login':
            window.location.href = 'login.html';
            break;
        case 'sub1':
            window.location.href = 'subPage1.html';
            break;
        case 'sub2':
            window.location.href = 'subPage2.html';
            break;
        case 'review':
            window.location.href = 'reviewRequest.html';
            break;
        case 'sub3':
            window.location.href = 'subPage3.html';
            break;
        case 'sub4':
            window.location.href = 'subPage4.html';
            break;
        case 'sub5':
            window.location.href = 'subPage5.html';
            break;
        case 'sub6':
            window.location.href = 'subPage6.html';
            break;
    }
}

function saveValue(key, value) {
    localStorage.setItem(key, value);
    // console.log('key: ' + key + "value: " + value);
}

function fetchData() {
    if (localStorage.getItem("cname") === null) {
        alert('No data to fetch!');
      }
      else {
          document.getElementById("r_cname").value= localStorage.getItem('cname');
          document.getElementById("r_etype").value= localStorage.getItem('etype');
          document.getElementById("r_from").value= localStorage.getItem('from');
          document.getElementById("r_to").value= localStorage.getItem('to');
          document.getElementById("r_guests").value= localStorage.getItem('guests');
          document.getElementById("r_budget").value= localStorage.getItem('budget');
      }
}

function fetchFinancialData() {
    if ((localStorage.getItem("cname") === null) || (localStorage.getItem("approved") === null)) {
        alert('No approved requests found');
      }
      else {
          document.getElementById("r_cname").value= localStorage.getItem('cname');
          document.getElementById("r_etype").value= localStorage.getItem('etype');
          document.getElementById("r_from").value= localStorage.getItem('from');
          document.getElementById("r_to").value= localStorage.getItem('to');
          document.getElementById("r_guests").value= localStorage.getItem('guests');
          document.getElementById("r_budget").value= localStorage.getItem('budget');
      }
}

function declineRequest() {
    // if ((localStorage.getItem("approved") === null)) {
    //     alert('No approved requests to decline');
    //     return;
    // }
    localStorage.clear();
    alert('Request declined and deleted');
    goTo('main');
}

function approveRequest() {
    if (localStorage.getItem("cname") === null) {
        alert('No request to approve');
      } else {
        localStorage.setItem('approved', 'yes');
        goTo('sub3');
    }
}

function sendToManager() {
    if (document.getElementById("cname").value == '') {
        alert('No request to send to manager');
      } else {
        localStorage.removeItem('approved');
        localStorage.removeItem('fApproved');
        goTo('sub1');
    }
}

function approveFinancialRequest() {
    if ((localStorage.getItem("cname") === null) || (localStorage.getItem("approved") === null)) {
        alert('No request to approve');
        return;
    }
    if (document.getElementById("r_rbudget").value == '') {
        if (confirm('Continue without revising budget?')) {
            localStorage.setItem('fApproved', 'yes');
            goTo('sub4');
        }
    } else {
        revisedBudget = document.getElementById("r_rbudget").value;
        oldBudget = localStorage.getItem("budget");
        diff = revisedBudget - oldBudget;
        if (diff > 0)
            if (confirm('Increase budget by ' + diff + 'SEK for a total of ' + revisedBudget + 'SEK?')) {
                localStorage.setItem('budget', revisedBudget);
                localStorage.setItem('fApproved', 'yes');
                goTo('sub5');
            }
        if (diff < 0)
            if (confirm('Decrease budget by ' + Math.abs(diff) + 'SEK for a total of ' + revisedBudget + 'SEK?')) {
                localStorage.setItem('budget', revisedBudget);
                localStorage.setItem('fApproved', 'yes');
                goTo('sub5');
            }
        if (diff == 0)
            if (confirm('Continue without revising budget?')) {
                localStorage.setItem('fApproved', 'yes');
                goTo('sub4'); 
            }
    }
}

function insertDetails() {
    client = localStorage.getItem('cname');
    date = localStorage.getItem('from');
    budget = localStorage.getItem('budget');

    string = "Event for " + client + ' planned at ' + date + ' for a budget of ' + budget + 'SEK';
    details = document.getElementById('details');
    details.innerHTML = string;
}

function createDetailedRequest() {
    if (localStorage.getItem('fApproved') === 'yes')
        goTo('clientReq');
    else
        alert('Request not yet approved by the financial manager');
}
