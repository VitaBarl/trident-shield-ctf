# Instructor Solutions - TRIDENT SHIELD

This guide is for instructors/facilitators only.

## Module 1

Expected path:
Email phishing -> macro execution -> C2 beacon -> FleetNavShare modification -> fake FRAGO amplification -> crew distrust -> navigation deviation.

Domain mapping:
- Cyber: VPN anomaly, macro, PowerShell, C2, file modification.
- Informational: fake FRAGO, X/Telegram amplification.
- Cognitive: crew anxiety, command distrust, family pressure.
- Physical: patrol vessel off planned box, AIS/visual mismatch.

Dynamic domain tokens:
- Cyber: `PHISHING-C2`
- Information: `FAKE-FRAGO`
- Cognitive: `CREW-DISTRUST`
- Physical: `NAV-DEVIATION`

Flag: `FLAG{PHISHING-C2_FAKE-FRAGO_CREW-DISTRUST_NAV-DEVIATION}`

## Module 2

APT cluster: `SEA-GHOST`.

Core IOC:
- SHA256 `91b4b87fb8bbf6e987abbb0c76b0ed1d0bb2010bb8120f4fdd91cf9cf0f6657c`
- `sync-mediterranean-control.example`
- `198.51.100.44`
- `/api/v2/nav/beacon`
- `Global\TridentCache`
- `TridentSync`

Dynamic domain tokens:
- Cyber: `SEA-GHOST`
- Information: `T1565.002`
- Cognitive: `T1566.001`
- Physical: `FRAGO-TAMPERING`

Flag: `FLAG{SEA-GHOST_T1565.002_T1566.001_FRAGO-TAMPERING}`

## Module 3

Blue Team must demonstrate:
- SIEM correlation
- EDR isolation
- firewall block
- credential revocation
- FRAGO restoration
- public correction

Dynamic domain tokens:
- Cyber: `EDR-ISOLATION`
- Information: `PA-CORRECTION`
- Cognitive: `CREW-BRIEF`
- Physical: `FRAGO-RESTORE`

Flag: `FLAG{EDR-ISOLATION_PA-CORRECTION_CREW-BRIEF_FRAGO-RESTORE}`

## Module 4

Expected findings:
- C2: `sync-mediterranean-control.example`, `198.51.100.44`, `/api/v2/nav/beacon`
- Persistence: `HKCU\Software\Microsoft\Windows\CurrentVersion\Run\TridentSync`
- Payload: collect nav share, replace `FRAGO-219A.pdf`

Dynamic domain tokens:
- Cyber: `TRIDENTSYNC`
- Information: `REPLACE-FRAGO`
- Cognitive: `FALSE-ORDERS`
- Physical: `NAVSHARE-COLLECT`

Flag: `FLAG{TRIDENTSYNC_REPLACE-FRAGO_FALSE-ORDERS_NAVSHARE-COLLECT}`

## Module 5

High-scoring decisions:
- authenticate command through alternate channel
- switch to inertial/manual navigation
- isolate affected workstation
- publish verified correction
- coordinate legal and PA response

Dynamic domain tokens:
- Cyber: `ISOLATE-SPOOFING`
- Information: `LEGAL-PA`
- Cognitive: `AUTH-COMMAND`
- Physical: `MANUAL-NAV`

Flag: `FLAG{ISOLATE-SPOOFING_LEGAL-PA_AUTH-COMMAND_MANUAL-NAV}`

## Module 6

Expected campaign:
Cyber compromise enables fake order manipulation. Social accounts amplify leaked material. AIS/GPS anomalies create technical proof-like hooks. Reused/manipulated imagery adds pressure. The operational goal is loss of mission effectiveness without direct kinetic engagement.

Dynamic domain tokens:
- Cyber: `AIS-GW`
- Information: `COORD-NARRATIVE`
- Cognitive: `FAMILY-PRESSURE`
- Physical: `IMPOSSIBLE-JUMP`

Flag: `FLAG{AIS-GW_COORD-NARRATIVE_FAMILY-PRESSURE_IMPOSSIBLE-JUMP}`

## Module 7

Expected conclusion:
The commander video is likely synthetic/manipulated. The email is likely LLM-assisted phishing with metadata anomalies and urgency framing. The correct response is source verification through official/out-of-band channels and careful LLM-assisted contradiction analysis.

Dynamic domain tokens:
- Cyber: `SPF-SOFTFAIL`
- Information: `SYNTH-MEDIA`
- Cognitive: `TRUST-VERIFY`
- Physical: `NO-WITHDRAWAL`

Flag: `FLAG{SPF-SOFTFAIL_SYNTH-MEDIA_TRUST-VERIFY_NO-WITHDRAWAL}`

## Final Mission

Pass conditions:
- mission score above 70
- all module flags solved
- final dashboard dimensions justified with evidence

Dynamic domain tokens:
- Cyber: `C2-BLOCKED`
- Information: `FRAGO-SIGNED`
- Cognitive: `TRUST-RESTORED`
- Physical: `MISSION-OPERATIONAL`

Flag: `FLAG{C2-BLOCKED_FRAGO-SIGNED_TRUST-RESTORED_MISSION-OPERATIONAL}`
