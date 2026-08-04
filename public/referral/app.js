const CONTACT_EMAIL = "safal0645@protonmail.com";
const REVIEW_WEBHOOK = ""; // Add a HighLevel/Formspree webhook later. Mailto is the safe fallback.

const questions = [
  { id: "source", label: "Do all leads enter one system of record?", hint: "Not scattered across chats, sheets and personal inboxes.", risk: "Fragmented lead capture", options: [[0,"No"],[5,"Partly"],[10,"Yes"]] },
  { id: "response", label: "What is your typical first-response time?", hint: "Measure from lead creation to the first meaningful reply.", risk: "Slow first response", options: [[0,"More than 1 hour"],[5,"5–60 minutes"],[10,"Under 5 minutes"]] },
  { id: "owner", label: "Is every new lead assigned to a clear owner?", hint: "The owner and assignment time should be visible.", risk: "Unowned leads", options: [[0,"No"],[5,"Sometimes"],[10,"Always"]] },
  { id: "qualification", label: "Do you use a consistent qualification process?", hint: "The same core questions, fields and exit criteria.", risk: "Inconsistent qualification", options: [[0,"No"],[5,"Informal"],[10,"Documented"]] },
  { id: "followup", label: "How many structured follow-ups happen after no reply?", hint: "Across useful channels, without spam.", risk: "Weak follow-up", options: [[0,"0–1"],[5,"2–4"],[10,"5+"]]},
  { id: "booking", label: "Can qualified leads book without back-and-forth messaging?", hint: "Calendar rules, time zones and confirmations included.", risk: "Booking friction", options: [[0,"No"],[5,"Partly"],[10,"Yes"]]},
  { id: "reminders", label: "Are reminders and rescheduling automated?", hint: "Including no-show prevention.", risk: "No-show leakage", options: [[0,"No"],[5,"Basic reminders"],[10,"Full sequence"]]},
  { id: "recovery", label: "Do you run a no-show recovery sequence?", hint: "A defined path back to booking.", risk: "No-show recovery missing", options: [[0,"No"],[5,"Manual"],[10,"Automated"]]},
  { id: "proposal", label: "Is the next step after a sales call triggered automatically?", hint: "Proposal, tasks, reminders and ownership.", risk: "Post-call handoff failure", options: [[0,"No"],[5,"Partly"],[10,"Yes"]]},
  { id: "reactivation", label: "Do you reactivate old qualified leads?", hint: "With segment-specific, permission-aware campaigns.", risk: "Dormant pipeline ignored", options: [[0,"Never"],[5,"Occasionally"],[10,"Systematically"]]},
  { id: "attribution", label: "Can you trace each paid customer to a source and campaign?", hint: "UTM, CRM and payment data agree.", risk: "Broken attribution", options: [[0,"No"],[5,"Mostly"],[10,"Yes"]]},
  { id: "qa", label: "Do you routinely test automations and reconcile reports?", hint: "Broken links, routing, duplicate messages, commissions and payouts.", risk: "Automation and revenue QA gap", options: [[0,"No"],[5,"After incidents"],[10,"On schedule"]]}
];

const questionsRoot = document.querySelector("#questions");
const form = document.querySelector("#diagnosticForm");
const result = document.querySelector("#result");
const error = document.querySelector("#formError");
let latestPlan = "";

questions.forEach((q, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "question";
  wrapper.innerHTML = `
    <p>${index + 1}. ${q.label}<small>${q.hint}</small></p>
    <label>
      <span class="sr-only">Answer question ${index + 1}</span>
      <select name="${q.id}" required>
        <option value="">Choose…</option>
        ${q.options.map(([score, text]) => `<option value="${score}">${text}</option>`).join("")}
      </select>
    </label>`;
  questionsRoot.appendChild(wrapper);
});

function classify(score) {
  if (score >= 85) return ["Strong system with optimisation opportunities", "Your foundations are solid. Focus on attribution accuracy, reactivation and controlled experiments."];
  if (score >= 65) return ["Working system with costly gaps", "You have a usable process, but several transitions still depend on people remembering what to do."];
  if (score >= 40) return ["Material revenue leakage", "Leads are likely being lost between response, follow-up, booking and post-call execution."];
  return ["Critical revenue leakage", "The process is too fragmented to scale safely. Fix ownership, response and follow-up before increasing traffic."];
}

function buildPlan(score, risks, values) {
  const top = risks.slice(0, 3).map((item, i) => `${i + 1}. ${item.risk}: current score ${item.score}/10`).join("\n");
  return `Agency Revenue Leak Score: ${score}/100\n\nTop priorities:\n${top}\n\n10-day action sequence:\nDay 1–2: map source → owner → response → booking → payment.\nDay 3: define SLA, required fields and exit criteria.\nDay 4–5: implement one lead-to-booking workflow.\nDay 6: add reminders and no-show recovery.\nDay 7: add old-lead reactivation segment.\nDay 8: verify UTM, CRM and payment attribution.\nDay 9: run QA scenarios and failure recovery tests.\nDay 10: establish baseline KPIs and weekly review.\n\nCompany: ${values.company || "Not provided"}\nLead volume: ${values.leadVolume}`;
}

function buildMailto(values, score, risks) {
  const subject = encodeURIComponent(`Revenue Leak Review — ${values.company || values.name}`);
  const body = encodeURIComponent(`Hi Alex,\n\nI completed the Agency Revenue Leak Score.\n\nName: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "Not provided"}\nLead volume: ${values.leadVolume}\nScore: ${score}/100\n\nTop risks:\n${risks.slice(0,3).map(r => `- ${r.risk} (${r.score}/10)`).join("\n")}\n\nPlease send me the 10-day implementation plan.\n`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

async function optionallySendWebhook(payload) {
  if (!REVIEW_WEBHOOK) return;
  const response = await fetch(REVIEW_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error("Lead webhook failed");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  error.textContent = "";

  if (!form.checkValidity()) {
    error.textContent = "Please answer all questions, provide a valid email and accept the consent statement.";
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const rawScore = questions.reduce((total, q) => total + Number(data.get(q.id)), 0);
  const score = Math.round((rawScore / 120) * 100);
  const risks = questions
    .map(q => ({ risk: q.risk, score: Number(data.get(q.id)) }))
    .sort((a, b) => a.score - b.score);
  const values = {
    name: String(data.get("name")),
    email: String(data.get("email")),
    company: String(data.get("company")),
    leadVolume: String(data.get("leadVolume"))
  };
  const [title, summary] = classify(score);
  latestPlan = buildPlan(score, risks, values);

  document.querySelector("#scoreValue").textContent = score;
  document.querySelector("#scoreRing").style.setProperty("--score", `${score}%`);
  document.querySelector("#resultTitle").textContent = title;
  document.querySelector("#resultSummary").textContent = summary;
  document.querySelector("#riskList").innerHTML = risks.slice(0, 3).map(r => `<li><strong>${r.risk}</strong> — ${r.score}/10</li>`).join("");
  document.querySelector("#requestReview").href = buildMailto(values, score, risks);

  try {
    await optionallySendWebhook({ ...values, score, risks: risks.slice(0, 3), submittedAt: new Date().toISOString() });
  } catch (webhookError) {
    console.error(webhookError);
  }

  localStorage.setItem("rge-latest-result", JSON.stringify({ ...values, score, risks, createdAt: new Date().toISOString() }));
  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#copyPlan").addEventListener("click", async () => {
  if (!latestPlan) return;
  await navigator.clipboard.writeText(latestPlan);
  const button = document.querySelector("#copyPlan");
  const original = button.textContent;
  button.textContent = "Copied";
  setTimeout(() => { button.textContent = original; }, 1600);
});
