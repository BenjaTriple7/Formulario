
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


const alertButton = document.getElementById('liveAlertBtn')
if (alertButton) {
  alertButton.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    appendAlert('Tu nombre bien hijueputa es ' + nombre, 'success')
  })
}

// Popover

document.addEventListener("DOMContentLoaded", function () {
  let popoverBtn = document.getElementById("popoverBtn");
  let popoverInstance = null;

  popoverBtn.addEventListener("click", function () {
    let apellido = document.getElementById("apellido").value;
    popoverBtn.setAttribute("data-bs-content", `Tu apellido bien bellako es ${apellido}`);

    if (!popoverInstance) {
      popoverInstance = new bootstrap.Popover(popoverBtn);
      popoverInstance.show();
    } else {
      popoverInstance.hide();
      popoverInstance.dispose();
      popoverInstance = null;
    }
  });
});



// Toast



const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger && toastLiveExample) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    // Esta línea obtiene o crea una instancia de Toast de Bootstrap asociada al elemento 'toastLiveExample'.
  // Si ya existe una instancia para ese elemento, la reutiliza; si no, crea una nueva.
  // Esto permite mostrar notificaciones tipo "toast" usando las funcionalidades de Bootstrap.

    toastTrigger.addEventListener('click', () => {
        let edad = document.getElementById("edad").value;
        // Busca el elemento con la clase 'toast-body' dentro del toast
        let toastBody = toastLiveExample.querySelector('.toast-body');
        if (toastBody) {
            toastBody.textContent = `Tu edad bien bellaka es ${edad} años`;
        }
        toastBootstrap.show();
    });
}



// Offcanvas


const offcanvasTrigger = document.getElementById('offcanvasBtn');
const offcanvasElement = document.getElementById('offcanvasExample');

if (offcanvasTrigger && offcanvasElement) {
    const offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);

    offcanvasTrigger.addEventListener('click', () => {
        let ciudad = document.getElementById("ciudad").value;
        // Busca el elemento con la clase 'offcanvas-body' dentro del offcanvas
        let offcanvasBody = offcanvasElement.querySelector('.offcanvas-body');
        if (offcanvasBody) {
            offcanvasBody.textContent = `Tu ciudad bien cabrona es ${ciudad}`;
        }
        offcanvasInstance.show();
    });
}


// carrousel


carouselItems.forEach((item, index) => {
    const img = item.getElementById('imagen');

});