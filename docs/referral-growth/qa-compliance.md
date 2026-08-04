# Affiliate Attribution QA and Compliance Protocol

## Purpose

Verify the complete chain:

`campaign → click → signup → trial → activation → payment → approved commission → payout`

A dashboard number is not proof of revenue until it reconciles with the program statement and the received payout.

---

# Tracking convention

## UTM fields

```text
utm_source      channel or partner
utm_medium      email | linkedin | telegram | youtube | webinar | referral
utm_campaign    rge_agency_revenue_os_YYYYMM
utm_content     plc1 | plc2 | plc3 | diagnostic | webinar | case-study
utm_term        optional ICP segment
```

## Internal IDs

- `contact_id` — CRM-generated stable identifier;
- `campaign_touch_id` — unique event or link identifier;
- `diagnostic_id` — generated on diagnostic submission;
- `partner_program` — HighLevel, Thinkific, beehiiv, GetResponse;
- `partner_click_id` — program-specific click/sub ID when supported;
- `commission_id` — partner-dashboard commission record;
- `payout_id` — payment statement identifier.

Do not store passwords, tax IDs or full payment details in the CRM or repository.

---

# Test matrix

| ID | Scenario | Expected evidence | Failure response |
|---|---|---|---|
| ATTR-001 | New visitor with full UTM completes diagnostic | UTM stored with diagnostic record | block launch and fix persistence |
| ATTR-002 | Visitor returns without UTM | original eligible attribution retained according to consent and policy | document overwrite rule |
| ATTR-003 | Affiliate link clicked | click visible in partner dashboard or supported tracking log | check link, domain and blockers |
| ATTR-004 | Trial created | lead/trial appears under the correct partner | contact affiliate support with evidence |
| ATTR-005 | Trial becomes paid | commission record appears after stated processing delay | wait documented SLA, then escalate |
| ATTR-006 | Customer upgrades | correct base/split commission treatment | compare program policy and statement |
| ATTR-007 | Customer refunds/cancels | commission reverses consistently | reconcile reason and amount |
| ATTR-008 | Duplicate click or signup | no duplicate lead or commission expectation | deduplicate internal analytics |
| ATTR-009 | Cross-device signup | behaviour documented; no unsupported claim | treat as attribution limitation |
| ATTR-010 | Cookie blocked/cleared | no attribution assumed | use permitted first-party/sub-ID methods only |
| PAY-001 | Approved commission reaches payout threshold | payout scheduled according to program cycle | verify tax/payout onboarding |
| PAY-002 | Payout received | bank/PayPal amount matches statement net of fees | create reconciliation incident |
| CMP-001 | Partner CTA rendered | disclosure is visible near CTA | block release |
| CMP-002 | Email contains partner link | disclosure is clear in the email | block send |
| CMP-003 | Video recommendation | spoken and written disclosure near link | edit before publication |
| CMP-004 | Opt-out received | contact suppressed from future outreach | investigate any repeat send |

---

# Prelaunch gate

## Program

- [ ] Application approved.
- [ ] Current program terms saved with date.
- [ ] Prohibited promotion methods reviewed.
- [ ] Self-referral rule reviewed.
- [ ] Trademark and paid-search restrictions reviewed.
- [ ] Commission rate, duration, cookie window and payout schedule verified.

## Identity and payout

- [ ] Legal account owner entered personal/entity details.
- [ ] Required tax form completed by the owner.
- [ ] Payout provider account verified.
- [ ] Minimum payout threshold understood.
- [ ] Country and currency fees understood.

## Experience

- [ ] Partner link opens the intended page.
- [ ] Mobile and desktop path tested.
- [ ] Disclosure appears before or beside the CTA.
- [ ] Alternative/non-affiliate route remains available where appropriate.
- [ ] No guaranteed income claim.
- [ ] No fake countdown or fabricated stock/capacity claim.

## Data

- [ ] Consent text matches actual data use.
- [ ] Privacy and retention owner assigned.
- [ ] UTM and internal IDs stored correctly.
- [ ] Webhook has authentication or a secret where supported.
- [ ] Logs do not contain credentials or sensitive payout data.
- [ ] Data deletion and opt-out requests can be honoured.

---

# Weekly reconciliation

Create one row per program and week:

- clicks;
- trials;
- activated trials;
- paid customers;
- expected commission;
- dashboard commission;
- approved commission;
- paid commission;
- refunds/reversals;
- difference;
- owner and resolution date.

## Tolerance

- count mismatch tolerance: zero for paid customers;
- monetary tolerance: only documented rounding or provider fees;
- unresolved mismatch age: maximum one payout cycle before escalation.

---

# Incident severity

## Critical

- wrong affiliate account credited at scale;
- partner link routes to phishing or an unintended domain;
- credentials or tax/payment data exposed;
- continued messaging after opt-out;
- undisclosed paid recommendation in an active campaign.

Action: stop campaign, preserve evidence, notify owner and remediate before restart.

## High

- paid sale absent after the documented attribution delay;
- duplicate or misleading messages sent;
- CRM and payment status disagree;
- webhook silently drops leads.

## Medium

- UTM missing but lead identity remains known;
- dashboard delay within payout SLA;
- non-critical copy or layout issue.

---

# Evidence package for affiliate support

When a commission is missing, provide only permitted data:

1. program and affiliate account ID;
2. click date/time and tracking URL without exposing secrets;
3. referral/customer identifier permitted by the program;
4. trial and payment date;
5. screenshots or exported dashboard records;
6. expected result based on the saved program terms;
7. exact discrepancy;
8. request for investigation.

Never send a customer password, full card/bank details, tax ID or unrelated personal data.

---

# Compliance baseline

This protocol is an operational baseline, not legal advice. Before scaling across jurisdictions, obtain professional review for:

- advertising and endorsement disclosure;
- privacy, cookies and analytics consent;
- direct marketing and electronic communications;
- consumer cancellation/refund rules;
- tax treatment of affiliate and service income;
- sanctions and payment-provider restrictions.

Use the strictest applicable rule when a campaign serves several markets and segmentation is not reliable.
