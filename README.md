# TRIDENT SHIELD CTF App

Applicazione statica per gestire lo scenario CTF "Operazione TRIDENT SHIELD".

Static application for running the "Operation TRIDENT SHIELD" CTF scenario.

## Uso / Usage

Aprire `index.html` per la overview. Le pagine nave sono:

- `index-cavour.html`
- `index-garibaldi.html`
- `index-trieste.html`
- `index-vespucci.html`

Open `index.html` for the overview. The ship-specific pages are:

- `index-cavour.html`
- `index-garibaldi.html`
- `index-trieste.html`
- `index-vespucci.html`

Su GitHub Pages la overview pubblica e:

`https://vitabarl.github.io/trident-shield-ctf/index.html`

On GitHub Pages, the public overview is:

`https://vitabarl.github.io/trident-shield-ctf/index.html`

## Funzioni / Features

- 7 moduli didattici piu missione finale.
- 7 training modules plus final mission.
- Challenge CTF con evidenze, task, suggerimenti progressivi e validazione flag.
- CTF challenges with evidence, tasks, progressive hints, and flag validation.
- Tooltip contestuali `?` per orientarsi tra materiali, evidenze, task, domini e generazione flag.
- Contextual `?` tooltips to guide students through materials, evidence, tasks, domains, and flag generation.
- Flag dinamiche composte dalle quattro soluzioni di dominio: `FLAG{CYBER_INFORMATION_COGNITIVE_PHYSICAL}`.
- Dynamic flags composed from the four domain solutions: `FLAG{CYBER_INFORMATION_COGNITIVE_PHYSICAL}`.
- Scoreboard integrata per Cavour, Garibaldi, Trieste e Vespucci.
- Integrated scoreboard for Cavour, Garibaldi, Trieste, and Vespucci.
- Ogni nave ha 4 score dominio: Cyber, Information, Cognitive, Physical.
- Each ship has 4 domain scores: Cyber, Information, Cognitive, Physical.
- Le navi partono integre e perdono componenti solo se la flag non viene validata entro 20 minuti.
- Ships start intact and lose components only if the flag is not validated within 20 minutes.
- Overview con risultato delle 4 navi, componenti persi, punteggio e registro eventi.
- Overview with the result of the 4 ships, lost components, score, and event log.
- Link diretto da ogni nave alla relativa pagina dettaglio.
- Direct link from each ship to its dedicated detail page.
- Salvataggio automatico dello stato in `localStorage`.
- Automatic state saving in `localStorage`.

## Struttura CTF / CTF Structure

- `ctf/m01-attack-map/`: log SOC, social media, HUMINT, satellite report, email phishing.
- `ctf/m01-attack-map/`: SOC logs, social media, HUMINT, satellite report, phishing email.
- `ctf/m02-cti/`: IOC, YARA, MITRE ATT&CK mapping, Kill Chain.
- `ctf/m02-cti/`: IOCs, YARA, MITRE ATT&CK mapping, Kill Chain.
- `ctf/m03-red-blue/`: carte Red Team, carte Blue Team, scoring sheet.
- `ctf/m03-red-blue/`: Red Team cards, Blue Team cards, scoring sheet.
- `ctf/m04-malware-analysis/`: strings, output Volatility, PCAP summary sicuro.
- `ctf/m04-malware-analysis/`: strings, Volatility output, safe PCAP summary.
- `ctf/m05-wargaming/`: inject, ruoli, matrice decisionale.
- `ctf/m05-wargaming/`: injects, roles, decision matrix.
- `ctf/m06-hybrid-warfare/`: Telegram, X, AIS, cyber log, OSINT imagery notes.
- `ctf/m06-hybrid-warfare/`: Telegram, X, AIS, cyber log, OSINT imagery notes.
- `ctf/m07-generative-ai/`: analisi deepfake, phishing LLM, worksheet verifica fonti.
- `ctf/m07-generative-ai/`: deepfake analysis, LLM phishing, source verification worksheet.
- `ctf/final-mission/`: brief finale, scorecard, evidence bundle index.
- `ctf/final-mission/`: final brief, scorecard, evidence bundle index.

## Punteggio / Scoring

Il punteggio nave e la somma dei quattro domini. Ogni dominio corretto assegna punti alla nave attiva.

The ship score is the sum of the four domains. Each correct domain awards points to the active ship.

La valutazione finale usa le dimensioni:

The final evaluation uses these dimensions:

- Mission Success: 30%
- Detection Time: 20%
- Incident Response: 20%
- Cyber-Social Impact Reduction: 20%
- Team Coordination: 10%

## Soluzioni / Solutions

Le soluzioni non sono mostrate nei materiali studente. Se il repository GitHub Pages e pubblico, non pubblicare i materiali istruttore.

Solutions are not shown in the student materials. If the GitHub Pages repository is public, do not publish instructor-only materials.

Materiali istruttore:

Instructor-only materials:

- `instructor/solutions.md`
- `Guida_Risoluzione_TRIDENT_SHIELD_CTF.pptx`
