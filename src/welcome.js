function submitData() {
  const name = document.getElementById("nameInput").value;
  const fn = document.getElementById("functionInput").value;
  document.getElementById("status").innerText = `Submitted: ${name} / ${fn}`;
}

VSS.init({ explicitNotifyLoaded: true, usePlatformScripts: true });

VSS.ready(() => {
  document.getElementById("status").innerText = "Extension Loaded ✅";
  VSS.notifyLoadSucceeded();
});
