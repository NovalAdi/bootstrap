const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (title, message1, message2, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="hore alert alert-${type} fade show" role="alert">`,
        `   <h4 class="alert-heading">${title}</h4>`,
        `   <p>${message1}</p>`,
        '   <hr>',
        `   <div class="alert-dismissible" role="alert">`,
        `       <div>${message2}</div>`,
        // id="close-trigger" trigger to close
        '       <button type="button" id="close-trigger" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '   </div>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Alert', 'Nice, you triggered this alert message!', 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.', 'success')

        // TImer for auto close
        setTimeout(function() {
            document.getElementById('close-trigger').click();
        }, 5000);
    })
}