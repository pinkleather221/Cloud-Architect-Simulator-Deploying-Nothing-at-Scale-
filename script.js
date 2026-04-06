let pods = 0;

function log(message) {
  const logs = document.getElementById("logs");
  logs.innerHTML += "<p>> " + message + "</p>";
  logs.scrollTop = logs.scrollHeight;
}

function deploy() {
  log("Initializing deployment...");
  log("Connecting to 47 regions...");
  log("Talking to Kubernetes...");
  log("Convincing containers to cooperate...");

  setTimeout(() => {
    document.getElementById("status").innerText =
      "Status: ✅ Deployment successful | ❌ No application found";

    pods = Math.floor(Math.random() * 1000);
    document.getElementById("pods").innerText = "Pods: " + pods;

    log("Deployment completed with zero impact.");
  }, 1500);
}

function scale() {
  const values = ["999999", "∞", "🧍‍♂️"];
  let i = 0;

  const interval = setInterval(() => {
    document.getElementById("pods").innerText = "Pods: " + values[i];
    i++;
    if (i >= values.length) clearInterval(interval);
  }, 500);

  document.getElementById("cpu").innerText =
    "CPU Usage: 0% (Ultimate optimization achieved)";

  log("Your app now has more servers than users (0 users detected).");
}

function optimize() {
  const messages = [
    "AI has detected your app is unnecessary.",
    "Deleting project for better performance...",
    "Optimization complete: Nothing remains."
  ];

  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("cpu").innerText = "CPU Usage: -10%";
  log(msg);
}

function brew() {
  log("Brewing coffee...");
  log("Error.");
  log("Reversing polarity...");
  log("Error.");
  log("Consulting barista AI...");
  log("Error.");

  document.getElementById("status").innerText =
    "418 I'm a teapot ☕";

  log("Please respect my identity.");
}

function deleteProd() {
  document.getElementById("status").innerText =
    "Production already deleted.";

  log("We saved you the stress.");
}

function changeRegion(region) {
  log("Switching to region: " + region);
  log("Latency increased due to poor life choices.");
}

function randomBilling() {
  const bill = document.getElementById("bill");

  setInterval(() => {
    bill.innerText = "Billing: $" + (Math.random() * 1000000).toFixed(2);

    setTimeout(() => {
      bill.innerText = "Billing: $0.00";
    }, 1000);
  }, 5000);
}

function randomMessages() {
  const messages = [
    "Your infrastructure is thriving without purpose.",
    "Kubernetes is confused.",
    "Scaling... please lower your expectations.",
    "Cloud bill avoided successfully.",
    "You are the problem."
  ];

  setInterval(() => {
    alert(messages[Math.floor(Math.random() * messages.length)]);
  }, 15000);
}

// initialize chaos
randomBilling();
randomMessages();