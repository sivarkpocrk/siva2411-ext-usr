/* ---------- panel logic ---------- */
let workItemId = null;

function submitData() {
  const name = document.getElementById("nameInput").value.trim();
  const fn   = document.getElementById("functionInput").value.trim();

  const status = document.getElementById("status");
  if (workItemId) {
    status.innerText = `✅ Submitted for User Story #${workItemId}: ${name} / ${fn}`;
    status.style.color = "green";
  } else {
    status.innerText = `⚠️ Work item ID not found. ${name} / ${fn}`;
    status.style.color = "red";
  }
}

/* ---------- SDK bootstrap ---------- */
VSS.init({ explicitNotifyLoaded: true, usePlatformScripts: true });

VSS.ready(() => {
  // pick up the work-item ID from context
  const cfg = VSS.getConfiguration();
  if (cfg && cfg.workItemInfo && cfg.workItemInfo.id) {
    workItemId = cfg.workItemInfo.id;
  }

  document.getElementById("status").innerText = "Extension Loaded ✅";
  VSS.notifyLoadSucceeded();
});

/* ---------- button wire-up ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitBtn").addEventListener("click", submitData);
});

/* ---------- REQUIRED: register the contribution ----------
   The string *must* match the “id” field in vss-extension.json
   (welcome-panel) and MUST contain no spaces. */
VSS.register("Test-AI-Gen-Panel", {});   //  <<< keep this last
