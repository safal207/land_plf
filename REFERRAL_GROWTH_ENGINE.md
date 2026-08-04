# Referral Growth Engine v1

A QA-led partner revenue system built around education, implementation and recurring SaaS commissions.

## Live asset

After the branch is merged and the existing Vite/GitHub Pages deployment runs, the static diagnostic will be available at:

`/land_plf/referral/index.html`

The landing page is intentionally **vendor-neutral** until a real affiliate account and tracking link have been approved. It captures a business problem first, not a click.

## First market

Small marketing agencies, consultants and education businesses that:

- already generate 50–1,000 leads per month;
- use several disconnected tools;
- lose leads through slow response, weak follow-up and no-show leakage;
- cannot reconcile source, CRM, payment and partner commission data.

## Core offer

**AI Agency Revenue OS — 10-day implementation sprint**

Deliverables:

1. Revenue process and causal leak map.
2. Baseline metrics and data-quality check.
3. One complete lead-to-booking automation.
4. Reminder and no-show recovery sequence.
5. Old-lead reactivation segment.
6. Attribution and affiliate revenue QA.
7. Fourteen-day measurement plan.

## Revenue stack

The business model has three layers:

1. **Diagnostic** — free, creates evidence and qualifies the lead.
2. **Implementation sprint** — paid professional service.
3. **Partner commission** — disclosed recurring or fixed commission when the chosen platform is a genuine fit.

Partner commission is never the reason to recommend an unsuitable product.

## Primary partner thesis

| Program | Current verified headline | Best audience | Role |
|---|---:|---|---|
| HighLevel | 40% recurring; 5% tier-two | agencies and consultants | primary recurring engine |
| Thinkific | 30% lifetime recurring; Plus pays $150/month | experts and education businesses | education vertical |
| beehiiv | up to 60% for one year | newsletter operators and creators | content vertical |
| GetResponse | starts at 40% for 12 months, up to 60% | email and webinar buyers | lower-friction alternative |

Terms were checked against official program pages on **2026-08-04**. Re-check before every campaign launch.

## Repository map

```text
public/referral/
  index.html               customer-facing diagnostic
  styles.css               responsive presentation
  app.js                   score, risks, local storage and lead handoff

docs/referral-growth/
  strategy.md              causal graph, economics and KPIs
  application-packet.md    ready-to-paste partner applications
  plf-launch.md            PLC scripts, emails and webinar structure
  outreach.md              direct messages and discovery call script
  qa-compliance.md         attribution QA and disclosure rules

data/referral-growth/
  program-scorecard.csv    current partner comparison
  lead-pipeline.csv        operating CRM template
  experiment-log.csv       learning and causal evidence log
```

## Activation gates

Do not send paid or organic traffic to a partner offer until all gates pass:

- affiliate application approved;
- payout profile and tax forms complete;
- unique tracking link stored in a secrets/password manager;
- self-referral and prohibited promotion rules reviewed;
- landing-page disclosure visible next to partner CTA;
- click → trial → paid attribution tested;
- CRM fields and UTM convention active;
- refund, cancellation and payout reconciliation owner assigned.

## First 30-day target

- 30 qualified conversations;
- 10 completed diagnostics;
- 5 implementation calls;
- 2 paid pilots;
- 1 partner conversion with verified attribution;
- zero spam complaints and zero undisclosed partner links.

This target is an operating hypothesis, not an income promise.
