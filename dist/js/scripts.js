// declaration of global variable 'app'
window.app = {
  loader: document.querySelector("oa-loader"),
  toast: document.querySelector("oa-toast"),
  dialog: document.querySelector("oa-dialogs"),
  // this method was added because I had to invoke from the React hook
  viewCode() {
    const x = event.target,
      y = document.getElementById(`code-${x.dataset.id}`);
    this.closeAllCodes();
    y.classList.add("active");
    y.scrollIntoView();
    this.toast.show({
      message: "Please, for a more comprehensive info check the code.",
      type: "warning",
    });
  },
  closeAllCodes() {
    const x = document.querySelectorAll(".code");
    x.forEach((el) => {
      el.classList.remove("active");
    });
  },
};

const myApp = {
  showLoader() {
    // to turn on and after a second turn off the loader
    window.app.loader.show();
    setTimeout(() => {
      window.app.loader.hide();
    }, 1000);
  },
};
