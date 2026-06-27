# TRIDENT SHIELD CTF App

Applicazione statica per gestire lo scenario CTF "Operazione TRIDENT SHIELD".

## Uso

Aprire `index.html` nel browser. Non servono server, dipendenze o installazioni.

## Funzioni

- 7 moduli didattici piu missione finale
- Challenge CTF con evidenze, task, suggerimenti progressivi e validazione flag
- Tooltip contestuali `?` per orientarsi tra materiali, evidenze, task, domini e generazione flag
- Flag dinamiche composte dalle quattro soluzioni di dominio: `FLAG{CYBER_INFORMATION_COGNITIVE_PHYSICAL}`
- Pacchetti CTF reali nella cartella `ctf/`
- File simulati: log SOC, email, IOC, YARA, MITRE mapping, dump testuali, PCAP summary, inject wargame, dataset OSINT/AIS/social
- Guida istruttore con soluzioni in `instructor/solutions.md`
- Dashboard con punteggio complessivo
- Scoreboard squadre integrata: Cavour, Garibaldi, Trieste, Vespucci
- Ogni nave ha 4 score dominio: Cyber, Information, Cognitive, Physical
- Score riepilogativo nave calcolato come somma dei 4 score dominio
- Le navi partono integre: nessuna componente e persa all'avvio
- Timer CTF da 20 minuti: se la flag non viene validata in tempo, la nave perde i componenti dei domini non risolti
- Punteggio automatico collegato alla risoluzione dei domini e alla validazione delle flag
- Calcolo finale pesato:
  - Mission Success: 30%
  - Detection Time: 20%
  - Incident Response: 20%
  - Cyber-Social Impact Reduction: 20%
  - Team Coordination: 10%
- Salvataggio automatico dello stato in `localStorage`

## Struttura CTF

- `ctf/m01-attack-map/`: log SOC, social media, HUMINT, satellite report, email phishing
- `ctf/m02-cti/`: IOC, YARA, MITRE ATT&CK mapping, Kill Chain
- `ctf/m03-red-blue/`: carte Red Team, carte Blue Team, scoring sheet
- `ctf/m04-malware-analysis/`: strings, output Volatility, PCAP summary sicuro
- `ctf/m05-wargaming/`: inject, ruoli, matrice decisionale
- `ctf/m06-hybrid-warfare/`: Telegram, X, AIS, cyber log, OSINT imagery notes
- `ctf/m07-generative-ai/`: analisi deepfake, phishing LLM, worksheet verifica fonti
- `ctf/final-mission/`: brief finale, scorecard, evidence bundle index
