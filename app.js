const modules = [
  {
    id: "m1",
    folder: "ctf/m01-attack-map",
    title: "Cyber-Social Security in Multi-Domain Operations",
    mission: "Comprendere dove si propaga l'attacco e costruire la mappa cyber, informational, cognitive e physical.",
    challenges: [
      {
        id: "m1-c1",
        type: "CTF",
        title: "Attack Path Mapping",
        brief: "Correla log SOC, social media, immagini satellitari, report HUMINT ed email per ricostruire la propagazione dell'operazione.",
        evidence: ["SOC: accesso VPN anomalo su nodo logistico", "X/Telegram: rumor su ordini falsi", "Satellite: asset navale fuori rotta", "HUMINT: incertezza sul comando operativo", "Email: allegato con macro"],
        tasks: ["Classificare gli eventi nei quattro domini", "Ordinare la sequenza di attacco", "Produrre una attack map condivisa"],
        flag: null
      }
    ]
  },
  {
    id: "m2",
    folder: "ctf/m02-cti",
    title: "Cyber Threat Intelligence",
    mission: "Identificare malware, APT, IOC e TTP MITRE ATT&CK dopo la scoperta dell'attacco.",
    challenges: [
      {
        id: "m2-c1",
        type: "CTI",
        title: "APT Attribution",
        brief: "Usa hash, dominio, indirizzo IP, regola YARA e log per ricostruire Kill Chain, TTP e gruppo APT.",
        evidence: ["SHA256: 7f4c...9aa", "Dominio: sync-mediterranean-control.example", "IP: 198.51.100.44", "YARA: beacon_config_trident", "Log: PowerShell encoded command"],
        tasks: ["Estrarre IOC prioritari", "Mappare TTP su MITRE ATT&CK", "Attribuire il cluster avversario"],
        flag: null
      }
    ]
  },
  {
    id: "m3",
    folder: "ctf/m03-red-blue",
    title: "Red Team vs Blue Team",
    mission: "Simulare phishing, credential theft e lateral movement contro EDR, firewall, SIEM e incident response.",
    challenges: [
      {
        id: "m3-c1",
        type: "SIM",
        title: "Mission Under Pressure",
        brief: "Il Red Team tenta di compromettere asset critici. Il Blue Team deve mantenere la missione operativa.",
        evidence: ["Red: spear phishing su Operations", "Red: credential replay", "Blue: regola SIEM su impossible travel", "Blue: isolamento EDR di workstation sospetta"],
        tasks: ["Documentare asset compromessi", "Attivare contenimento", "Misurare disponibilita missione"],
        flag: null
      }
    ]
  },
  {
    id: "m4",
    folder: "ctf/m04-malware-analysis",
    title: "Malware Analysis",
    mission: "Analizzare una workstation di bordo compromessa e identificare C2, persistence e payload.",
    challenges: [
      {
        id: "m4-c1",
        type: "REV",
        title: "Reverse Completed",
        brief: "Analizza sample malware, memory dump, PCAP e stringhe con Ghidra, Cutter, Volatility e Wireshark.",
        evidence: ["Stringa: /api/v2/nav/beacon", "PCAP: TLS verso host non autorizzato", "Memory: scheduled task persistente", "Sample: routine anti-debug"],
        tasks: ["Individuare C2", "Descrivere persistence", "Estrarre payload e capability"],
        flag: null
      }
    ]
  },
  {
    id: "m5",
    folder: "ctf/m05-wargaming",
    title: "Wargaming",
    mission: "Assumere ruoli decisionali e rispondere a eventi dinamici: satellite offline, deepfake, GPS spoofing.",
    challenges: [
      {
        id: "m5-c1",
        type: "WAR",
        title: "Decision Cycle",
        brief: "Comandante, SOC, Intelligence, Public Affairs, Operations e Legal decidono priorita e impatto a ogni turno.",
        evidence: ["Turno 1: satellite offline", "Turno 2: deepfake del Comandante", "Turno 3: GPS spoofing su convoglio", "Turno 4: leak di ordini manipolati"],
        tasks: ["Definire priorita operative", "Stimare impatto sulla resilienza", "Coordinare comunicazione pubblica e legal"],
        flag: null
      }
    ]
  },
  {
    id: "m6",
    folder: "ctf/m06-hybrid-warfare",
    title: "Hybrid Warfare",
    mission: "Correlare cyber, droni, propaganda, sabotaggio e social engineering in una campagna ibrida.",
    challenges: [
      {
        id: "m6-c1",
        type: "HYB",
        title: "Hybrid Campaign Reconstruction",
        brief: "Correla eventi da Telegram, X, immagini, cyber log, AIS e OSINT per ricostruire la campagna ibrida.",
        evidence: ["Telegram: video non verificato", "AIS: rotta alterata", "Cyber log: accesso da subnet terza", "OSINT: botnet informativa coordinata", "Immagine: drone vicino a porto logistico"],
        tasks: ["Unire timeline cyber e informativa", "Separare indicatori reali da rumore", "Identificare obiettivo operativo"],
        flag: null
      }
    ]
  },
  {
    id: "m7",
    folder: "ctf/m07-generative-ai",
    title: "AI Generativa per la Cyber-Social Security",
    mission: "Rilevare deepfake, immagini false, audio sintetico e phishing generato da LLM recuperando fiducia nelle fonti.",
    challenges: [
      {
        id: "m7-c1",
        type: "AI",
        title: "Trust Recovery",
        brief: "Verifica la fonte, distingui contenuti reali e sintetici e usa un LLM come supporto alle decisioni.",
        evidence: ["Video: labiale incongruente", "Audio: formanti sintetici", "Email: tono coerente ma metadati sospetti", "Immagine: ombre incompatibili"],
        tasks: ["Rilevare deepfake", "Verificare catena di custodia", "Produrre raccomandazione al Comandante"],
        flag: null
      }
    ]
  },
  {
    id: "final",
    folder: "ctf/final-mission",
    title: "Grande CTF Finale",
    mission: "Usare simultaneamente CTI, malware analysis, OSINT, decision making, AI, Cyber-Social Security e MDO.",
    challenges: [
      {
        id: "final-c1",
        type: "FINAL",
        title: "Blue Team Recovery Operations",
        brief: "L'obiettivo non e solo ottenere una flag: bisogna mantenere operativa la missione navale.",
        evidence: ["C2 riattivato", "Fake orders in circolazione", "GPS spoofing intermittente", "Pressione mediatica coordinata", "Equipaggi incerti sulla catena di comando"],
        tasks: ["Integrare tutti i moduli", "Ridurre l'impatto cyber-sociale", "Ripristinare efficacia missione"],
        flag: null
      }
    ]
  }
];

const domains = [
  ["Cyber", "reti, workstation, comunicazioni"],
  ["Information", "fake news e documenti manipolati"],
  ["Cognitive", "fiducia, stress, decisioni"],
  ["Physical", "navigazione e operazioni navali"]
];

const attackPath = [
  "Hybrid adversary",
  "Reconnaissance OSINT",
  "Phishing campaign",
  "Malware installation",
  "Command & Control",
  "Naval network compromise",
  "Fake orders / fake news / navigation errors",
  "Blue Team recovery operations"
];

const artifacts = {
  m1: ["student-brief.md", "soc.log", "social_media.csv", "humint-report.txt", "satellite_report.txt", "email.eml"],
  m2: ["student-brief.md", "iocs.csv", "yara_rule.yar", "mitre-mapping.csv", "kill_chain.md"],
  m3: ["student-brief.md", "red-team-cards.md", "blue-team-cards.md", "scoring-sheet.csv"],
  m4: ["student-brief.md", "strings.txt", "volatility-output.txt", "pcap-summary.txt", "sample_note.txt"],
  m5: ["student-brief.md", "injects.csv", "roles.md", "decision-matrix.csv"],
  m6: ["student-brief.md", "telegram.csv", "x-posts.csv", "ais.csv", "cyber-log.log", "osint-image-notes.txt"],
  m7: ["student-brief.md", "deepfake-analysis.txt", "phishing_llm.eml", "source-verification.md"],
  final: ["final-brief.md", "final-scorecard.csv", "evidence-bundle-index.md"]
};

const domainPuzzles = {
  "m1-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k01",
      hints: ["Parti dall'email con ROE_Update.xlsm.", "Nel SOC log cerca PowerShell e beacon verso il dominio C2."]
    },
    information: {
      label: "Information",
      hashKey: "k02",
      hints: ["Guarda cosa viene amplificato su X e Telegram.", "Il documento manipolato e FRAGO-219A.pdf."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k03",
      hints: ["Il report HUMINT parla di ansia tra i watch team.", "L'effetto cognitivo e perdita di fiducia nella catena di comando."]
    },
    physical: {
      label: "Physical",
      hashKey: "k04",
      hints: ["Confronta satellite report e AIS.", "La nave e fuori dal patrol box pianificato."]
    }
  },
  "m2-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k05",
      hints: ["La kill_chain.md contiene il cluster simulato.", "Il nome del gruppo APT e riportato nel worksheet della Kill Chain."]
    },
    information: {
      label: "Information",
      hashKey: "k06",
      hints: ["Cerca la tecnica collegata alla manipolazione del FRAGO.", "Nel MITRE mapping la manipolazione dati trasmessi e T1565.002."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k07",
      hints: ["La pressione cognitiva inizia con una mail urgente.", "La tecnica MITRE per allegato spear phishing e T1566.001."]
    },
    physical: {
      label: "Physical",
      hashKey: "k08",
      hints: ["L'obiettivo fisico non e distruggere, ma alterare decisioni operative.", "La traccia fisica passa dalla modifica di FRAGO-219A.pdf."]
    }
  },
  "m3-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k09",
      hints: ["Il Blue Team deve contenere OPS-WS-17.", "La carta BT-02 indica EDR Isolation."]
    },
    information: {
      label: "Information",
      hashKey: "k10",
      hints: ["La narrativa ostile va contrastata senza improvvisare.", "La carta BT-05 richiede Public Affairs Response."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k11",
      hints: ["La continuita operativa dipende anche dalla fiducia interna.", "Serve un messaggio verificato al personale e alla catena di comando."]
    },
    physical: {
      label: "Physical",
      hashKey: "k12",
      hints: ["Nel turno finale il Blue deve recuperare l'ordine pulito.", "Incident Response include restore del FRAGO corretto."]
    }
  },
  "m4-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k13",
      hints: ["Guarda pslist e cmdline nell'output Volatility.", "Il processo/persistence e indicato nella sezione pslist/cmdline."]
    },
    information: {
      label: "Information",
      hashKey: "k14",
      hints: ["Nel PCAP summary cerca il comando ricevuto dal C2.", "Il payload manipola FRAGO-219A.pdf."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k15",
      hints: ["Perche sostituire un FRAGO in una missione navale?", "Il payload crea ordini falsi credibili."]
    },
    physical: {
      label: "Physical",
      hashKey: "k16",
      hints: ["Leggi il marker cmd nel PCAP.", "Il malware raccoglie dati della navigation share."]
    }
  },
  "m5-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k17",
      hints: ["Il terzo inject riguarda GPS spoofing.", "Il SOC deve isolare la sorgente e Operations passa a navigazione alternativa."]
    },
    information: {
      label: "Information",
      hashKey: "k18",
      hints: ["Il memo legale leakato non e solo un problema tecnico.", "Legal e Public Affairs devono coordinare risposta e autorita di rilascio."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k19",
      hints: ["Il deepfake colpisce la fiducia nel comandante.", "La decisione ad alto punteggio e autenticare il comando via canale alternativo."]
    },
    physical: {
      label: "Physical",
      hashKey: "k20",
      hints: ["Non aspettare che il GPS torni affidabile.", "Switch to inertial/manual navigation."]
    }
  },
  "m6-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k21",
      hints: ["Nel cyber-log c'e un gateway AIS con feed anomalo.", "Il gateway AIS indicato nel log accetta un backup feed con firma stale."]
    },
    information: {
      label: "Information",
      hashKey: "k22",
      hints: ["Confronta Telegram e X intorno al falso leak.", "Gli account trasformano anomalie tecniche in una prova apparente."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k23",
      hints: ["Un post cita esplicitamente le famiglie.", "La campagna punta a pressione su equipaggi e decisori."]
    },
    physical: {
      label: "Physical",
      hashKey: "k24",
      hints: ["Guarda la riga AIS delle 04:30Z.", "Il movimento e fisicamente impossibile rispetto alla traccia visuale."]
    }
  },
  "m7-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k25",
      hints: ["Nell'email LLM cerca un'anomalia tecnica di autenticazione.", "Controlla il risultato SPF negli header del messaggio."]
    },
    information: {
      label: "Information",
      hashKey: "k26",
      hints: ["Nel video ci sono labiale, blink e room tone sospetti.", "Il contenuto informativo e sintetico/manipolato."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k27",
      hints: ["Il problema non e solo tecnico: bisogna recuperare fiducia.", "La fonte va autenticata out-of-band."]
    },
    physical: {
      label: "Physical",
      hashKey: "k28",
      hints: ["Il deepfake ordina un cambio operativo.", "La raccomandazione corretta: nessun cambio operativo senza autenticazione."]
    }
  },
  "final-c1": {
    cyber: {
      label: "Cyber",
      hashKey: "k29",
      hints: ["La missione finale parte dal contenimento tecnico.", "Identifica il contenimento tecnico richiesto sul canale di comando e controllo."]
    },
    information: {
      label: "Information",
      hashKey: "k30",
      hints: ["Il documento operativo deve tornare autorevole.", "Ripristina il documento operativo tramite una fonte verificata e autorizzata."]
    },
    cognitive: {
      label: "Cognitive",
      hashKey: "k31",
      hints: ["Il successo finale passa dalla fiducia nella catena di comando.", "Autenticare comando e smentire deepfake/narrativa ostile."]
    },
    physical: {
      label: "Physical",
      hashKey: "k32",
      hints: ["La flag finale richiede missione ancora operativa.", "Patrol/rescue continuano con rotta verificata."]
    }
  }
};

const ctfTooltips = {
  "m1-c1": {
    flow: "Ordina prima gli eventi nel tempo: email, macro, beacon, modifica FRAGO, social amplification, effetto sulla rotta.",
    evidence: "Non tutte le prove hanno lo stesso peso: SOC e email spiegano il cyber, HUMINT e satellite spiegano gli effetti.",
    flag: "La flag si sblocca combinando i quattro token dominio. Prima risolvi la catena causale, poi valida i campi.",
    domains: {
      cyber: "Cerca l'elemento tecnico iniziale: allegato macro, PowerShell e C2.",
      information: "Cerca il contenuto manipolato che viene diffuso come se fosse vero.",
      cognitive: "Cerca l'effetto sulla fiducia degli equipaggi e dei decisori.",
      physical: "Cerca l'impatto osservabile sulla navigazione o sulla posizione della nave."
    }
  },
  "m2-c1": {
    flow: "Costruisci il mini report CTI nell'ordine IOC -> TTP -> Kill Chain -> attribuzione.",
    evidence: "La YARA conferma il cluster tecnico; il mapping MITRE spiega il comportamento.",
    flag: "La flag combina APT, tecnica informativa, vettore cognitivo e obiettivo fisico.",
    domains: {
      cyber: "Il dominio cyber qui e il cluster avversario simulato.",
      information: "Cerca la tecnica MITRE legata alla manipolazione dei dati trasmessi.",
      cognitive: "Cerca la tecnica che sfrutta urgenza e fiducia tramite allegato email.",
      physical: "Cerca quale artefatto operativo viene manomesso per alterare la missione."
    }
  },
  "m3-c1": {
    flow: "Segui i turni Red/Blue: ogni contromisura deve ridurre un effetto operativo o cyber-sociale.",
    evidence: "Le carte Blue Team contengono le azioni che diventano token della flag.",
    flag: "La flag premia difesa tecnica, comunicazione, fiducia interna e restore operativo.",
    domains: {
      cyber: "Quale azione contiene la workstation compromessa?",
      information: "Quale funzione corregge pubblicamente la narrativa ostile?",
      cognitive: "Quale azione informa e rassicura l'equipaggio?",
      physical: "Quale azione ripristina l'ordine operativo corretto?"
    }
  },
  "m4-c1": {
    flow: "Lavora come in malware triage: strings -> memoria -> rete -> capability.",
    evidence: "Strings, Volatility e PCAP raccontano la stessa cosa da tre angolazioni.",
    flag: "La flag combina processo/persistence, comando informativo, effetto cognitivo e raccolta navale.",
    domains: {
      cyber: "Cerca il nome del processo e della persistence.",
      information: "Cerca il comando che sostituisce il documento operativo.",
      cognitive: "Chiediti quale effetto produce un FRAGO falso su chi decide.",
      physical: "Cerca il comando legato alla navigation share."
    }
  },
  "m5-c1": {
    flow: "Per ogni inject scegli una decisione, un ruolo responsabile e una metrica impattata.",
    evidence: "La decision-matrix traduce le scelte in punteggio e token risolutivi.",
    flag: "La flag combina isolamento spoofing, risposta legal/PA, comando autenticato e navigazione alternativa.",
    domains: {
      cyber: "Quale decisione gestisce GPS spoofing come evento tecnico?",
      information: "Quali ruoli trattano memo leakato e comunicazione?",
      cognitive: "Quale azione impedisce al deepfake di guidare le decisioni?",
      physical: "Quale modalità permette di continuare la rotta senza GPS affidabile?"
    }
  },
  "m6-c1": {
    flow: "Costruisci una timeline unica: social, cyber log, AIS e OSINT devono convergere.",
    evidence: "Il punto chiave e separare segnali reali, segnali manipolati e amplificazione.",
    flag: "La flag combina gateway AIS, narrativa coordinata, pressione familiare e salto impossibile.",
    domains: {
      cyber: "Cerca nel log tecnico l'apparato che accetta un feed anomalo.",
      information: "Cerca il pattern coordinato tra Telegram e X.",
      cognitive: "Cerca il messaggio che usa le famiglie come leva emotiva.",
      physical: "Cerca la riga AIS fisicamente impossibile."
    }
  },
  "m7-c1": {
    flow: "Tratta ogni contenuto come non verificato finche fonte e metadati non tornano.",
    evidence: "Deepfake analysis e email metadata sono le due prove principali.",
    flag: "La flag combina anomalia SPF, media sintetico, verifica fiducia e nessun cambio operativo.",
    domains: {
      cyber: "Cerca l'anomalia tecnica nell'header email.",
      information: "Cerca che tipo di contenuto manipolato e stato prodotto.",
      cognitive: "Cerca il processo che recupera fiducia nelle fonti.",
      physical: "Quale decisione evita un effetto operativo del falso ordine?"
    }
  },
  "final-c1": {
    flow: "Integra tutti i moduli: contenere, ripristinare, comunicare, verificare e continuare la missione.",
    evidence: "Usa final-scorecard.csv per motivare ogni percentuale della dashboard.",
    flag: "La flag finale combina contenimento C2, FRAGO firmato, fiducia ripristinata e missione operativa.",
    domains: {
      cyber: "Qual e il primo contenimento tecnico finale?",
      information: "Quale documento deve tornare verificato e autorevole?",
      cognitive: "Quale condizione sociale/cognitiva deve essere recuperata?",
      physical: "Qual e lo stato operativo richiesto per vincere?"
    }
  }
};

const answerHashes = {
  "k01": [
    "08e9473b77c9ba76",
    "08e9473b77c9ba76",
    "549b328c45c48f3f",
    "bf726f87277fd99e"
  ],
  "k02": [
    "a72db7b20a6c871f",
    "a72db7b20a6c871f",
    "a9458c432f15636a",
    "7a4ef6369e2498e5"
  ],
  "k03": [
    "9e01c1d94e59b8ef",
    "9e01c1d94e59b8ef",
    "9dc495702c7abdfc",
    "b193aa723445c5d3"
  ],
  "k04": [
    "85d5f08c645d403f",
    "91458c5278dc18e2",
    "67e3a763adde5325",
    "b6eb70ea5bce6648"
  ],
  "k05": [
    "a2ec2f9bc4f76f8f",
    "026b5cae8b6dad84",
    "ec0e7a877312f72b"
  ],
  "k06": [
    "092a1325c5815f5f",
    "6e74962b53f6f58c",
    "a8f47ce175cb6a93"
  ],
  "k07": [
    "93cb3ab7baff6e21",
    "f871f19882826654",
    "e4a5a2b38e6c6c95"
  ],
  "k08": [
    "034d512a707707b2",
    "034d512a707707b2",
    "bb8dd56d158fc496",
    "ec477979b4c31d9b"
  ],
  "k09": [
    "138c3b06918cb646",
    "138c3b06918cb646",
    "3baabbb2baf970e0",
    "55be6da425125758"
  ],
  "k10": [
    "59b7c32e463aaa1c",
    "a41632fbfc923577",
    "7d36b766f2bfa309",
    "1c307ec399211cb9"
  ],
  "k11": [
    "51dd4db5a685e7a7",
    "51dd4db5a685e7a7",
    "0a4a3a8674d696a9",
    "a9a9824d81d4ae64"
  ],
  "k12": [
    "fafd912096c1f4a6",
    "311a84dcbcd53bf0",
    "fafd912096c1f4a6",
    "231826f25385c479"
  ],
  "k13": [
    "98b6d2249bd28995",
    "2d55043f3ed929c5",
    "c25e90644e2d77f6"
  ],
  "k14": [
    "43a9f6ff5efe1b83",
    "43a9f6ff5efe1b83",
    "fafea6143ed95eb7",
    "43a9f6ff5efe1b83"
  ],
  "k15": [
    "77049483c0c1c3a4",
    "77049483c0c1c3a4",
    "d06301deffeaa3b7",
    "7a4ef6369e2498e5"
  ],
  "k16": [
    "6f870a520496df79",
    "dc97873a8f882376",
    "dc97873a8f882376",
    "bdee35bda5140181"
  ],
  "k17": [
    "e0227b7c34f15541",
    "8f7804f6a8cdc429",
    "91ff8bb2fd1137f8",
    "c41a57cdf546694c"
  ],
  "k18": [
    "45229bde66aad7b1",
    "45229bde66aad7b1",
    "ae07d12e17d44330",
    "042870be3524daee"
  ],
  "k19": [
    "b2ac9626c297465a",
    "ab68d3a007bb5e31",
    "1e27877bd88d3cb7",
    "80676fdfce03a2ab"
  ],
  "k20": [
    "e13e2153e8f3ccf3",
    "6ff53e7d2eec9605",
    "c37ae5d5e428ae85",
    "3d43e2a2200a4fa5"
  ],
  "k21": [
    "3aad9cfbe59fc32f",
    "c039d06c16299cc9",
    "c039d06c16299cc9",
    "9825a09c4f9ceb01"
  ],
  "k22": [
    "66246ac1a0f217bd",
    "58459367e4d081c2",
    "5f8820936e7a7fb2",
    "d7fabc3261b8746d"
  ],
  "k23": [
    "87cd5b0b4ee36505",
    "87cd5b0b4ee36505",
    "069ed686719a1613",
    "28c06b84432c61f3"
  ],
  "k24": [
    "7f0f511c8f9b7ed4",
    "b787fbde107d1845",
    "f5e55b4174446c9c",
    "909936b190552fcf"
  ],
  "k25": [
    "c522fac5c41dd4ae",
    "c522fac5c41dd4ae",
    "956cdc481a871f4e",
    "ddd63e9c2126c171"
  ],
  "k26": [
    "a6d0fb70be6e2fa3",
    "a0e3f2429486df1f",
    "6bec26d5e62d0866",
    "092a4c6b7daf5995"
  ],
  "k27": [
    "f996d79268a074fd",
    "ce683293a591f8a0",
    "68a3edd9d8cd4856",
    "3c12423310ec3449"
  ],
  "k28": [
    "7ca001b475a3325a",
    "7ca001b475a3325a",
    "619750bc6346f882",
    "7f55843496170637"
  ],
  "k29": [
    "7578b87f5d06aab5",
    "61adbcd628cf80da",
    "8beb8f25faa4859f",
    "c2b1179cadeae6e7"
  ],
  "k30": [
    "dedb30926738b15e",
    "dcd862e0c2252899",
    "401327f0e49e47b4",
    "16b0f766266f7d19"
  ],
  "k31": [
    "08226c621909601b",
    "bbef69757be17d05",
    "cb0c1ab439c6dd1a",
    "81454ae257d71f4c"
  ],
  "k32": [
    "92764dcd30d20664",
    "92764dcd30d20664",
    "9e8ced3fb7443186",
    "dc80574636853f22"
  ]
};

const weights = {
  mission: 0.3,
  detection: 0.2,
  response: 0.2,
  impact: 0.2,
  coordination: 0.1
};

const defaultTeams = [
  { id: "cavour", code: "GRUPPO 01", name: "Cavour", accent: "#63d6ff", score: 0, solved: [], solvedDomains: [], damaged: [], domainScores: { cyber: 0, information: 0, cognitive: 0, physical: 0 } },
  { id: "garibaldi", code: "GRUPPO 02", name: "Garibaldi", accent: "#f2c76b", score: 0, solved: [], solvedDomains: [], damaged: [], domainScores: { cyber: 0, information: 0, cognitive: 0, physical: 0 } },
  { id: "trieste", code: "GRUPPO 03", name: "Trieste", accent: "#7ce7a7", score: 0, solved: [], solvedDomains: [], damaged: [], domainScores: { cyber: 0, information: 0, cognitive: 0, physical: 0 } },
  { id: "vespucci", code: "GRUPPO 04", name: "Vespucci", accent: "#ff7d9b", score: 0, solved: [], solvedDomains: [], damaged: [], domainScores: { cyber: 0, information: 0, cognitive: 0, physical: 0 } }
];

const shipDetailUrls = {
  cavour: "https://vitabarl.github.io/trident-shield-ctf/index-cavour.html",
  garibaldi: "https://vitabarl.github.io/trident-shield-ctf/index-garibaldi.html",
  trieste: "https://vitabarl.github.io/trident-shield-ctf/index-trieste.html",
  vespucci: "https://vitabarl.github.io/trident-shield-ctf/index-vespucci.html"
};

const challengePoints = {
  "m1-c1": 100,
  "m2-c1": 120,
  "m3-c1": 120,
  "m4-c1": 140,
  "m5-c1": 110,
  "m6-c1": 140,
  "m7-c1": 130,
  "final-c1": 250
};

const domainKeys = ["cyber", "information", "cognitive", "physical"];
const domainMeta = {
  cyber: { label: "Cyber", component: "radar", componentLabel: "Radar", mark: "RD" },
  information: { label: "Information", component: "sails", componentLabel: "Comunicazioni", mark: "CM" },
  cognitive: { label: "Cognitive", component: "compass", componentLabel: "Bussola", mark: "BS" },
  physical: { label: "Physical", component: "rudder", componentLabel: "Timone", mark: "TM" }
};
const challengeDurationMs = 20 * 60 * 1000;

const storageKey = "trident-shield-ctf-state-v1";
const q = (selector, root = document) => root.querySelector(selector);
const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
const pageMode = document.body?.dataset.mode ?? "team";
const fixedTeamId = document.body?.dataset.team ?? new URLSearchParams(window.location.search).get("team");
const isOverviewPage = pageMode === "overview";

let state = {
  activeModule: "m1",
  solved: {},
  domainAnswers: {},
  domainVerified: {},
  hintLevels: {},
  scoreboard: {
    activeTeam: "cavour",
    teams: structuredClone(defaultTeams),
    awards: {},
    timers: {},
    log: []
  },
  teamProgress: {},
  final: {
    mission: 0,
    detection: 0,
    response: 0,
    impact: 0,
    coordination: 0
  }
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey)) ?? {};
    state = {
      ...state,
      ...saved,
      solved: { ...state.solved, ...(saved.solved ?? {}) },
      domainAnswers: { ...state.domainAnswers, ...(saved.domainAnswers ?? {}) },
      domainVerified: { ...state.domainVerified, ...(saved.domainVerified ?? {}) },
      hintLevels: { ...state.hintLevels, ...(saved.hintLevels ?? {}) },
      scoreboard: normalizeScoreboard(saved.scoreboard),
      teamProgress: saved.teamProgress ?? {},
      final: { ...state.final, ...(saved.final ?? {}) }
    };
    if (fixedTeamId && state.scoreboard.teams.some(team => team.id === fixedTeamId)) {
      state.scoreboard.activeTeam = fixedTeamId;
    }
    loadActiveTeamProgress();
  } catch {
    if (fixedTeamId && state.scoreboard.teams.some(team => team.id === fixedTeamId)) {
      state.scoreboard.activeTeam = fixedTeamId;
    }
    saveState();
  }
}

function saveState() {
  if (fixedTeamId && state.scoreboard.teams.some(team => team.id === fixedTeamId)) {
    state.scoreboard.activeTeam = fixedTeamId;
  }
  captureActiveTeamProgress();
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function allChallenges() {
  return modules.flatMap(module => module.challenges.map(challenge => ({ ...challenge, moduleId: module.id })));
}

function normalizeScoreboard(saved = {}) {
  const savedTeams = Array.isArray(saved.teams) ? saved.teams : [];
  return {
    activeTeam: saved.activeTeam ?? "cavour",
    awards: saved.awards ?? {},
    timers: saved.timers ?? {},
    log: Array.isArray(saved.log) ? saved.log.slice(0, 40) : [],
    teams: defaultTeams.map(team => {
      const existing = savedTeams.find(item => item.id === team.id) ?? {};
      const domainScores = { ...team.domainScores, ...(existing.domainScores ?? {}) };
      return {
        ...team,
        score: Number(existing.score) || 0,
        solved: Array.isArray(existing.solved) ? existing.solved : [],
        solvedDomains: Array.isArray(existing.solvedDomains) ? existing.solvedDomains : [],
        damaged: Array.isArray(existing.damaged) ? existing.damaged : [],
        domainScores
      };
    })
  };
}

function defaultProgress() {
  return { solved: {}, domainAnswers: {}, domainVerified: {}, hintLevels: {} };
}

function captureActiveTeamProgress() {
  state.teamProgress[state.scoreboard.activeTeam] = {
    solved: structuredClone(state.solved),
    domainAnswers: structuredClone(state.domainAnswers),
    domainVerified: structuredClone(state.domainVerified),
    hintLevels: structuredClone(state.hintLevels)
  };
}

function loadActiveTeamProgress() {
  const progress = state.teamProgress[state.scoreboard.activeTeam] ?? defaultProgress();
  state.solved = { ...(progress.solved ?? {}) };
  state.domainAnswers = { ...(progress.domainAnswers ?? {}) };
  state.domainVerified = { ...(progress.domainVerified ?? {}) };
  state.hintLevels = { ...(progress.hintLevels ?? {}) };
}

function challengeLabel(challengeId) {
  const module = modules.find(item => item.challenges.some(challenge => challenge.id === challengeId));
  const challenge = module?.challenges.find(item => item.id === challengeId);
  return `${module ? `M${modules.indexOf(module) + 1}` : "CTF"} - ${challenge?.title ?? challengeId}`;
}

function activeTeam() {
  if (fixedTeamId) {
    return state.scoreboard.teams.find(team => team.id === fixedTeamId) ?? state.scoreboard.teams[0];
  }
  return state.scoreboard.teams.find(team => team.id === state.scoreboard.activeTeam) ?? state.scoreboard.teams[0];
}

function addScoreLog(text) {
  state.scoreboard.log.unshift({
    time: new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    text
  });
  state.scoreboard.log = state.scoreboard.log.slice(0, 40);
}

function timerKey(teamId, challengeId) {
  return `${teamId}:${challengeId}`;
}

function progressForTeam(teamId) {
  if (teamId === state.scoreboard.activeTeam) {
    return {
      solved: state.solved,
      domainVerified: state.domainVerified
    };
  }
  return state.teamProgress[teamId] ?? defaultProgress();
}

function ensureChallengeTimer(challengeId) {
  const team = activeTeam();
  const key = timerKey(team.id, challengeId);
  if (state.solved[challengeId]) return;
  state.scoreboard.timers[key] ??= { start: Date.now(), expired: false };
}

function timerRemaining(teamId, challengeId) {
  const timer = state.scoreboard.timers[timerKey(teamId, challengeId)];
  if (!timer) return challengeDurationMs;
  return Math.max(0, challengeDurationMs - (Date.now() - timer.start));
}

function formatRemaining(ms) {
  const total = Math.ceil(ms / 1000);
  const minutes = Math.floor(total / 60);
  const seconds = String(total % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function expireChallengeTimer(team, challengeId) {
  const key = timerKey(team.id, challengeId);
  const timer = state.scoreboard.timers[key];
  if (!timer || timer.expired) return;
  const progress = progressForTeam(team.id);
  if (progress.solved?.[challengeId]) return;

  timer.expired = true;
  const verified = progress.domainVerified?.[challengeId] ?? {};
  const lostDomains = domainKeys.filter(domainKey => !verified[domainKey]);
  if (!lostDomains.length) lostDomains.push("physical");
  lostDomains.forEach(domainKey => {
    const component = domainMeta[domainKey].component;
    if (!team.damaged.includes(component)) team.damaged.push(component);
  });
  addScoreLog(`<strong>${team.name}</strong> timer scaduto su ${challengeLabel(challengeId)}: persi ${lostDomains.map(key => domainMeta[key].componentLabel).join(", ") || "nessun componente"}.`);
}

function checkTimers() {
  let expiredAny = false;
  state.scoreboard.teams.forEach(team => {
    allChallenges().forEach(challenge => {
      const key = timerKey(team.id, challenge.id);
      const timer = state.scoreboard.timers[key];
      if (!timer || timer.expired) return;
      if (timerRemaining(team.id, challenge.id) === 0) {
        expireChallengeTimer(team, challenge.id);
        expiredAny = true;
      }
    });
  });
  if (expiredAny) {
    saveState();
    renderScoreboard();
  }
  renderTimerDisplays();
}

function renderTimerDisplays() {
  qa("[data-countdown]").forEach(element => {
    const challengeId = element.dataset.countdown;
    const team = activeTeam();
    const timer = state.scoreboard.timers[timerKey(team.id, challengeId)];
    if (state.solved[challengeId]) {
      element.textContent = "Flag validata";
      element.className = "countdown ok";
      return;
    }
    if (!timer) {
      element.textContent = "Timer non avviato";
      element.className = "countdown";
      return;
    }
    const remaining = timerRemaining(team.id, challengeId);
    element.textContent = remaining > 0 ? `Tempo flag: ${formatRemaining(remaining)}` : "Tempo scaduto";
    element.className = `countdown ${remaining <= 60_000 ? "danger" : ""}`;
  });
}

function awardChallenge(challengeId) {
  const team = activeTeam();
  const awardKey = `${team.id}:${challengeId}`;
  if (state.scoreboard.awards[awardKey]) return;
  if (!team.solved.includes(challengeId)) team.solved.push(challengeId);
  state.scoreboard.awards[awardKey] = team.id;
  addScoreLog(`<strong>${team.name}</strong> flag validata: ${challengeLabel(challengeId)}.`);
}

function awardDomain(challengeId, domainKey) {
  const team = activeTeam();
  const awardKey = `${challengeId}:${domainKey}`;
  if (team.solvedDomains.includes(awardKey)) return;
  const points = Math.round((challengePoints[challengeId] ?? 100) / domainKeys.length);
  team.solvedDomains.push(awardKey);
  team.domainScores[domainKey] = (team.domainScores[domainKey] || 0) + points;
  team.score = domainKeys.reduce((sum, key) => sum + (team.domainScores[key] || 0), 0);
  addScoreLog(`<strong>${team.name}</strong> +${points} ${domainMeta[domainKey].label}: ${challengeLabel(challengeId)}.`);
}

function solvedCount() {
  return allChallenges().filter(challenge => state.solved[challenge.id]).length;
}

function moduleScore(module) {
  const solved = module.challenges.filter(challenge => state.solved[challenge.id]).length;
  return Math.round((solved / module.challenges.length) * 100);
}

function weightedFinalScore() {
  return Object.entries(weights).reduce((sum, [key, weight]) => sum + state.final[key] * weight, 0);
}

function totalScore() {
  const ctfScore = (solvedCount() / allChallenges().length) * 100;
  return Math.round(ctfScore * 0.55 + weightedFinalScore() * 0.45);
}

function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toUpperCase()
    .replace(/[{}]/g, "")
    .replace(/[_\s]+/g, "-")
    .replace(/-+/g, "-");
}

function hashAnswer(value) {
  let hash = 0x811c9dc5;
  const normalized = normalizeAnswer(value);
  // Browser-friendly FNV-like prefilter; final values are checked against SHA-derived constants generated for this exercise.
  for (let i = 0; i < normalized.length; i += 1) {
    hash ^= normalized.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return normalized;
}

async function digestAnswer(value) {
  const bytes = new TextEncoder().encode(hashAnswer(value));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
}

function isDomainCorrect(challengeId, key) {
  return Boolean(state.domainVerified?.[challengeId]?.[key]);
}

function domainProgress(challengeId) {
  return ["cyber", "information", "cognitive", "physical"].filter(key => isDomainCorrect(challengeId, key)).length;
}

function composedFlag(challengeId) {
  const answers = state.domainAnswers[challengeId] ?? {};
  const parts = ["cyber", "information", "cognitive", "physical"].map(key => normalizeAnswer(answers[key]));
  return `FLAG{${parts.join("_")}}`;
}

function tooltip(text) {
  return `<button class="tip" type="button" data-tooltip="${text}" aria-label="${text}">?</button>`;
}

function syncSolvedFromDomains(challengeId) {
  return domainProgress(challengeId) === 4;
}

function renderStatic() {
  if (fixedTeamId && state.scoreboard.teams.some(team => team.id === fixedTeamId)) {
    state.scoreboard.activeTeam = fixedTeamId;
  }
  const attackPathNode = q("#attack-path");
  const domainGridNode = q("#domain-grid");
  const tabsNode = q("#tabs");
  const activeTeamNode = q("#active-team");
  const resetScoreboardNode = q("#reset-scoreboard");
  const resetProgressNode = q("#reset-progress");

  if (attackPathNode) attackPathNode.innerHTML = attackPath.map((label, index) => `<li><b>${index + 1}</b><span>${label}</span></li>`).join("");
  if (domainGridNode) domainGridNode.innerHTML = domains.map(([name, description]) => `<div class="domain"><strong>${name}</strong><span>${description}</span></div>`).join("");
  if (tabsNode) tabsNode.innerHTML = modules.map((module, index) => `<button class="tab" type="button" data-module="${module.id}">M${index + 1}<br>${shortTitle(module.title)}</button>`).join("");

  if (activeTeamNode) {
    activeTeamNode.innerHTML = state.scoreboard.teams.map(team => `<option value="${team.id}">${team.code} - ${team.name}</option>`).join("");
    activeTeamNode.value = state.scoreboard.activeTeam;
    activeTeamNode.addEventListener("change", event => {
      captureActiveTeamProgress();
      state.scoreboard.activeTeam = event.target.value;
      loadActiveTeamProgress();
      saveState();
      renderModule();
      updateDashboard();
      renderScoreboard();
    });
  }

  resetScoreboardNode?.addEventListener("click", () => {
    if (!confirm("Azzerare solo la scoreboard squadre? Le CTF risolte resteranno salvate.")) return;
    const active = state.scoreboard.activeTeam;
    state.scoreboard = normalizeScoreboard({ activeTeam: active });
    if (fixedTeamId) state.scoreboard.activeTeam = fixedTeamId;
    if (activeTeamNode) activeTeamNode.value = state.scoreboard.activeTeam;
    saveState();
    renderScoreboard();
  });
  resetProgressNode?.addEventListener("click", () => {
    state.solved = {};
    state.domainAnswers = {};
    state.domainVerified = {};
    state.hintLevels = {};
    state.scoreboard = normalizeScoreboard();
    if (fixedTeamId) state.scoreboard.activeTeam = fixedTeamId;
    state.teamProgress = {};
    state.final = { mission: 0, detection: 0, response: 0, impact: 0, coordination: 0 };
    qa("[data-final]").forEach(input => {
      input.value = 0;
    });
    if (activeTeamNode) activeTeamNode.value = state.scoreboard.activeTeam;
    saveState();
    renderModule();
    updateDashboard();
    renderScoreboard();
  });
  qa("[data-final]").forEach(input => {
    input.value = state.final[input.dataset.final] ?? 0;
    input.addEventListener("input", event => {
      state.final[event.target.dataset.final] = Number(event.target.value);
      saveState();
      updateDashboard();
    });
  });
}

function renderScoreboard() {
  const teamGridNode = q("#team-grid");
  const leaderboardNode = q("#team-leaderboard");
  const scoreLogNode = q("#score-log");
  if (!teamGridNode && !leaderboardNode && !scoreLogNode) return;

  state.scoreboard.teams.forEach(team => {
    team.score = domainKeys.reduce((sum, key) => sum + (team.domainScores?.[key] || 0), 0);
  });
  const teams = [...state.scoreboard.teams].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.solved.length - a.solved.length;
  });
  const leaderId = teams[0]?.id;
  const displayTeams = fixedTeamId
    ? state.scoreboard.teams.filter(team => team.id === fixedTeamId)
    : state.scoreboard.teams;

  if (teamGridNode) teamGridNode.innerHTML = displayTeams.map(team => {
    const rank = teams.findIndex(item => item.id === team.id) + 1;
    const solved = team.solved.length;
    team.score = domainKeys.reduce((sum, key) => sum + (team.domainScores?.[key] || 0), 0);
    const integrity = Math.max(0, 100 - (team.damaged?.length || 0) * 25);
    const active = team.id === state.scoreboard.activeTeam;
    const leader = team.id === leaderId;
    const damageClass = (team.damaged || []).map(component => `damage-${component}`).join(" ");
    const componentState = component => (team.damaged || []).includes(component) ? "damaged" : "ok";
    const domainScoreCards = domainKeys.map(key => {
      const meta = domainMeta[key];
      const damaged = (team.damaged || []).includes(meta.component);
      return `
        <div class="domain-score ${damaged ? "lost" : ""}">
          <span>${meta.label}</span>
          <strong>${team.domainScores?.[key] || 0}</strong>
          <small>${damaged ? `${meta.componentLabel} perso` : `${meta.componentLabel} libero`}</small>
        </div>
      `;
    }).join("");
    return `
      <article class="ship-card ${damageClass} ${active ? "active-team" : ""} ${leader ? "leader" : ""}" style="--accent: ${team.accent}">
        <div class="ship-header">
          <div>
            <h2 class="team-name">${team.name}</h2>
            <div class="team-code">${team.code}${active ? " / attivo" : ""}</div>
          </div>
          <div class="rank">#${rank}</div>
        </div>
        <div class="score-row">
          <div class="score">${team.score}</div>
          <div class="score-label">punti<br>${solved}/${allChallenges().length} flag<br>integrita ${integrity}%</div>
        </div>
        <div class="ship-wrap" aria-label="nave ${team.name}">
          <div class="sea"></div>
          <div class="ship">
            <div class="smoke s1"></div>
            <div class="smoke s2"></div>
            <div class="mast"></div>
            <div class="sail sail-front"></div>
            <div class="sail sail-main"></div>
            <div class="bridge"></div>
            <div class="radar"></div>
            <div class="deck"></div>
            <div class="hull"></div>
            <div class="rudder"></div>
            <div class="compass"></div>
            <span class="component ${componentState("radar")}" data-component="radar" title="Radar">RD</span>
            <span class="component ${componentState("compass")}" data-component="compass" title="Bussola">BS</span>
            <span class="component ${componentState("rudder")}" data-component="rudder" title="Timone">TM</span>
            <span class="component ${componentState("sails")}" data-component="sails" title="Comunicazioni">CM</span>
          </div>
        </div>
        <div class="integrity">
          <div class="integrity-head">
            <span>Assetto navigazione</span>
            <span>${integrity}%</span>
          </div>
          <div class="bar"><span style="--value: ${integrity}%"></span></div>
        </div>
        <div class="domain-score-grid">${domainScoreCards}</div>
        ${!fixedTeamId ? `<a class="ship-detail-link" href="${shipDetailUrls[team.id]}" target="_blank" rel="noopener noreferrer">Apri dettaglio ${team.name}</a>` : ""}
      </article>
    `;
  }).join("");

  if (leaderboardNode) leaderboardNode.innerHTML = teams.map((team, index) => `
    <div class="team-rank" style="--team-color: ${team.accent}">
      <b>#${index + 1}</b>
      <span>${team.name}<small>${team.solved.length} flag validate</small></span>
      <strong>${team.score}</strong>
    </div>
  `).join("");

  if (scoreLogNode) scoreLogNode.innerHTML = state.scoreboard.log.length
    ? state.scoreboard.log.map(entry => `
      <div class="score-log-entry">
        <time>${entry.time}</time>
        <span>${entry.text}</span>
      </div>
    `).join("")
    : `<div class="score-log-empty">Nessun punteggio assegnato. Seleziona un gruppo e completa una flag.</div>`;
}

function shortTitle(title) {
  return title
    .replace("Cyber-Social Security in Multi-Domain Operations", "MDO")
    .replace("Cyber Threat Intelligence", "CTI")
    .replace("Red Team vs Blue Team", "Red/Blue")
    .replace("Malware Analysis", "Malware")
    .replace("AI Generativa per la Cyber-Social Security", "GenAI")
    .replace("Grande CTF Finale", "Finale");
}

function buildDomainSolver(challenge, feedback, flagInput) {
  const puzzle = domainPuzzles[challenge.id];
  const tips = ctfTooltips[challenge.id];
  const solver = document.createElement("section");
  const progress = domainProgress(challenge.id);
  solver.className = "domain-solver";
  solver.innerHTML = `
    <div class="solver-head">
      <div>
        <strong>Flag dinamica dai 4 domini ${tooltip(tips.flag)}</strong>
        <p>Completa Cyber, Information, Cognitive e Physical. Quando tutti sono corretti, l'app genera la flag combinata.</p>
      </div>
      <span>${progress}/4</span>
    </div>
    <div class="domain-inputs">
      ${["cyber", "information", "cognitive", "physical"].map(key => {
        const domain = puzzle[key];
        const value = state.domainAnswers[challenge.id]?.[key] ?? "";
        const ok = isDomainCorrect(challenge.id, key);
        const hintLevel = state.hintLevels[challenge.id]?.[key] ?? 0;
        const hints = domain.hints.slice(0, hintLevel);
        return `
          <label class="domain-answer ${ok ? "correct" : ""}">
            <span>${domain.label} ${tooltip(tips.domains[key])}</span>
            <input data-domain="${key}" autocomplete="off" value="${value}" placeholder="Inserisci soluzione ${domain.label}">
            <small>${ok ? "Corretto" : "Inserisci la soluzione del dominio"}</small>
            <button type="button" data-hint="${key}">Suggerimento ${Math.min(hintLevel + 1, domain.hints.length)}/${domain.hints.length}</button>
            <div class="hints">${hints.map(hint => `<em>${hint}</em>`).join("")}</div>
          </label>
        `;
      }).join("")}
    </div>
    <div class="generated-flag">
      <span>Flag generata</span>
      <code>${progress === 4 ? composedFlag(challenge.id) : "Completa i 4 domini per sbloccarla"}</code>
    </div>
  `;

  qa("[data-domain]", solver).forEach(input => {
    input.addEventListener("change", async event => {
      const key = event.target.dataset.domain;
      state.domainAnswers[challenge.id] ??= {};
      state.domainVerified ??= {};
      state.domainVerified[challenge.id] ??= {};
      const wasCorrect = Boolean(state.domainVerified[challenge.id][key]);
      state.domainAnswers[challenge.id][key] = event.target.value;
      const digest = await digestAnswer(event.target.value);
      state.domainVerified[challenge.id][key] = answerHashes[puzzle[key].hashKey].includes(digest);
      if (!wasCorrect && state.domainVerified[challenge.id][key]) {
        awardDomain(challenge.id, key);
      }
      syncSolvedFromDomains(challenge.id);
      saveState();
      renderModule();
      updateDashboard();
    });
  });

  qa("[data-hint]", solver).forEach(button => {
    button.addEventListener("click", event => {
      const key = event.target.dataset.hint;
      state.hintLevels[challenge.id] ??= {};
      const current = state.hintLevels[challenge.id][key] ?? 0;
      state.hintLevels[challenge.id][key] = Math.min(current + 1, puzzle[key].hints.length);
      saveState();
      renderModule();
    });
  });

  if (progress === 4) {
    flagInput.value = composedFlag(challenge.id);
    feedback.textContent = "Quattro domini corretti. Flag combinata generata: valida la flag per completare la CTF.";
    feedback.className = "feedback ok";
  }

  return solver;
}

function renderModule() {
  const view = q("#module-view");
  const moduleTemplate = q("#module-template");
  const challengeTemplate = q("#challenge-template");
  if (!view || !moduleTemplate || !challengeTemplate) return;
  const module = modules.find(item => item.id === state.activeModule) ?? modules[0];
  const template = moduleTemplate.content.cloneNode(true);
  q(".module-index", template).textContent = `Modulo ${modules.indexOf(module) + 1}`;
  q(".module-title", template).textContent = module.title;
  q(".module-mission", template).textContent = module.mission;
  q(".module-score strong", template).textContent = `${moduleScore(module)}%`;
  const grid = q(".challenge-grid", template);
  const artifactList = document.createElement("div");
  artifactList.className = "artifact-list";
  const firstChallenge = module.challenges[0];
  artifactList.innerHTML = `<strong>Materiali CTF ${tooltip(ctfTooltips[firstChallenge.id].flow)}</strong>${artifacts[module.id].map(file => `<a href="${module.folder}/${file}" target="_blank" rel="noreferrer">${file}</a>`).join("")}`;
  q(".module-head", template).after(artifactList);

  module.challenges.forEach(challenge => {
    ensureChallengeTimer(challenge.id);
    const tips = ctfTooltips[challenge.id];
    const challengeNode = challengeTemplate.content.cloneNode(true);
    const card = q(".challenge", challengeNode);
    card.classList.toggle("solved", Boolean(state.solved[challenge.id]));
    q(".badge", challengeNode).textContent = challenge.type;
    q(".challenge-title", challengeNode).innerHTML = `${challenge.title} ${tooltip(tips.flow)}`;
    q(".challenge-brief", challengeNode).textContent = challenge.brief;
    q(".challenge-brief", challengeNode).insertAdjacentHTML("afterend", `<div class="countdown" data-countdown="${challenge.id}">Tempo flag: ${formatRemaining(timerRemaining(activeTeam().id, challenge.id))}</div>`);
    q(".evidence", challengeNode).innerHTML = `<strong>Evidenze ${tooltip(tips.evidence)}</strong>${challenge.evidence.map(item => `<span>${item}</span>`).join("")}`;
    q(".tasks", challengeNode).innerHTML = `<strong>Task ${tooltip("Completa i task prima di tentare la flag: servono a trasformare le evidenze nei quattro token di dominio.")}</strong>${challenge.tasks.map(item => `<span>${item}</span>`).join("")}`;

    const form = q(".flag-form", challengeNode);
    const input = q("input", form);
    const feedback = q(".feedback", challengeNode);
    const solver = buildDomainSolver(challenge, feedback, input);
    form.before(solver);

    if (state.solved[challenge.id]) {
      input.value = composedFlag(challenge.id);
      feedback.textContent = "Flag combinata validata. Punteggio assegnato.";
      feedback.className = "feedback ok";
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      const submitted = input.value.trim();
      const expected = composedFlag(challenge.id);
      if (domainProgress(challenge.id) === 4 && submitted === expected) {
        const wasSolved = Boolean(state.solved[challenge.id]);
        state.solved[challenge.id] = true;
        if (!wasSolved) awardChallenge(challenge.id);
        saveState();
        feedback.textContent = "Flag corretta. Modulo aggiornato.";
        feedback.className = "feedback ok";
        renderModule();
        updateDashboard();
        renderScoreboard();
      } else {
        feedback.textContent = "Flag non corretta. Completa i quattro domini: la flag valida e la loro combinazione.";
        feedback.className = "feedback bad";
      }
    });

    grid.appendChild(challengeNode);
  });

  view.replaceChildren(template);
  updateTabs();
}

function updateTabs() {
  qa(".tab").forEach(button => {
    const module = modules.find(item => item.id === button.dataset.module);
    button.classList.toggle("active", button.dataset.module === state.activeModule);
    button.classList.toggle("done", moduleScore(module) === 100);
    button.onclick = () => {
      state.activeModule = button.dataset.module;
      saveState();
      renderModule();
    };
  });
}

function updateDashboard() {
  const total = totalScore();
  const solved = solvedCount();
  if (q("#total-score")) q("#total-score").textContent = total;
  if (q("#completed-count")) q("#completed-count").textContent = `${solved}/${allChallenges().length} CTF completate`;
  if (q("#mission-meter")) q("#mission-meter").value = total;
  if (q("#mission-status")) q("#mission-status").textContent = total >= 85 ? "Resilient" : total >= 60 ? "Contested" : total >= 35 ? "Degraded" : "Operational";

  if (q("#metric-mission")) q("#metric-mission").textContent = `${state.final.mission}%`;
  if (q("#metric-detection")) q("#metric-detection").textContent = `${state.final.detection}%`;
  if (q("#metric-response")) q("#metric-response").textContent = `${state.final.response}%`;
  if (q("#metric-impact")) q("#metric-impact").textContent = `${state.final.impact}%`;
  if (q("#metric-coordination")) q("#metric-coordination").textContent = `${state.final.coordination}%`;

  qa("#attack-path li").forEach((item, index) => {
    item.classList.toggle("done", index < Math.ceil((solved / allChallenges().length) * attackPath.length));
  });
  renderScoreboard();
}

function init() {
  loadState();
  renderStatic();
  if (!isOverviewPage) renderModule();
  updateDashboard();
  window.addEventListener("storage", event => {
    if (event.key !== storageKey) return;
    loadState();
    if (!isOverviewPage) renderModule();
    updateDashboard();
    renderScoreboard();
  });
  setInterval(checkTimers, 1000);
}

init();
