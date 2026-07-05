// ShieldCore Cybersecurity Sandbox - Complete Multi-Vector Lab Engine
document.addEventListener("DOMContentLoaded", () => {

    // ==================== STAEXL BRAND SIGNATURE ====================
    console.log("%c" +
        "\n  ╔═══════════════════════════════════════════╗\n" +
        "  ║   SHIELDCORE SECURITY LAB                 ║\n" +
        "  ║   Engineered by staexl systems             ║\n" +
        "  ║   Multi-Vector Cybersecurity Sandbox v1.1  ║\n" +
        "  ╚═══════════════════════════════════════════╝\n",
        "color: #00ccff; font-family: monospace; font-size: 11px; line-height: 1.6;");
    console.log("%c⚠ This is a sandboxed educational environment. No real attacks are performed.",
        "color: #ffcc00; font-size: 10px;");

    // ==================== TOAST NOTIFICATION SYSTEM ====================
    const toastContainer = document.getElementById("toast-container");

    function showToast(message, type = "info") {
        const toast = document.createElement("div");
        toast.className = `toast-item ${type}`;

        let icon = "ℹ️";
        if (type === "success") icon = "✅";
        else if (type === "error") icon = "❌";
        else if (type === "warning") icon = "⚠️";

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Micro-delay for slide-in animation
        setTimeout(() => {
            toast.classList.add("show");
        }, 10);

        // Remove toast after 4 seconds
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 4000);
    }

    // ==================== TERMINAL BOOT SEQUENCE ENGINE ====================
    const bootOverlay = document.getElementById("cyber-boot-overlay");
    const bootTerminalBody = document.getElementById("boot-terminal-body");
    const bootProgressInner = document.getElementById("boot-progress-inner");

    const bootLines = [
        { text: "╔══════════════════════════════════════════════════════╗", type: "cyan" },
        { text: "║  SHIELDCORE SECURITY LAB  •  staexl systems          ║", type: "brand" },
        { text: "║  Multi-Vector Cybersecurity Sandbox Engine v1.1.2    ║", type: "brand" },
        { text: "╚══════════════════════════════════════════════════════╝", type: "cyan" },
        { text: "", type: "cyan" },
        { text: "Copyright (c) 2026 staexl. All rights reserved.", type: "cyan" },
        { text: "Licensed for educational and research sandbox use only.", type: "cyan" },
        { text: "", type: "cyan" },
        { text: "[BIOS] POST check .............. OK", type: "success" },
        { text: "[BIOS] Core CPU registers mapped .............. OK", type: "success" },
        { text: "[NET] Scanning active sandbox network adapters...", type: "cyan" },
        { text: "[NET] Bound mock interface eth0 → 127.0.0.1:8080 .............. OK", type: "success" },
        { text: "[INIT] Loading L3/L4/L7 volumetric simulation parameters...", type: "cyan" },
        { text: "[INIT] DDoS attack vector matrix armed .............. OK", type: "success" },
        { text: "[INIT] Web vulnerability database seeded (SQLi/XSS/CSRF)...... OK", type: "success" },
        { text: "[WARN] Production DB root access: raw credentials (no salt)", type: "warning" },
        { text: "[INIT] Credential wordlist dictionary loaded (19 entries)...... OK", type: "success" },
        { text: "[INIT] Authentication lockout & MFA subsystems armed ......... OK", type: "success" },
        { text: "[NET] ARP poisoning intercept daemon started .............. OK", type: "success" },
        { text: "[INIT] Ransomware encryption filesystem tree initialized ..... OK", type: "success" },
        { text: "[INIT] Firewall event logging engine started .............. OK", type: "success" },
        { text: "", type: "cyan" },
        { text: "All 10 attack vectors loaded. 4 laboratory modules armed.", type: "success" },
        { text: "TRANSFERRING CONTROL TO SHIELDCORE SHELL → staexl//sandbox...", type: "brand" }
    ];

    let currentBootLineIndex = 0;

    function runBootSequence() {
        if (currentBootLineIndex < bootLines.length) {
            const lineData = bootLines[currentBootLineIndex];
            const div = document.createElement("div");
            div.className = `boot-line ${lineData.type}`;
            div.innerText = lineData.text;
            bootTerminalBody.appendChild(div);
            bootTerminalBody.scrollTop = bootTerminalBody.scrollHeight;

            currentBootLineIndex++;
            const progressPercent = Math.round((currentBootLineIndex / bootLines.length) * 100);
            bootProgressInner.style.width = `${progressPercent}%`;

            // Sequential scheduling
            setTimeout(runBootSequence, 120 + Math.random() * 80);
        } else {
            // End of boot sequence. Wait and fade out
            setTimeout(() => {
                bootOverlay.classList.add("fade-out");
                setTimeout(() => {
                    bootOverlay.remove();
                    showToast("ShieldCore Security Lab loaded. All systems nominal. // staexl", "success");
                }, 800);
            }, 600);
        }
    }

    // Initiate boot sequence
    runBootSequence();
    
    // ==================== TABS ROUTING LOGIC ====================
    const tabs = document.querySelectorAll(".nav-tab");
    const tabPanels = document.querySelectorAll(".tab-content-panel");
    let activeTabId = "ddos-tab";

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));
            
            tab.classList.add("active");
            const targetPanel = document.getElementById(tab.dataset.tab);
            targetPanel.classList.add("active");
            activeTabId = tab.dataset.tab;
            
            // Clear current operations when switching tabs to avoid overflow
            stopAllAttacks();
            updateEducationalContent();
            resizeCanvases();
        });
    });

    function stopAllAttacks() {
        ceaseFireDDoS();
        stopWebAttacks();
        stopAuthAttack();
        stopSysAttacks();
    }

    // ==================== GLOBAL HELPERS & METRICS ====================
    const globalStatusDot = document.getElementById("global-status-dot");
    const globalStatusText = document.getElementById("global-status-text");
    const uptimeCounter = document.getElementById("uptime-counter");
    const terminalLogs = document.getElementById("terminal-logs");
    const btnClearLogs = document.getElementById("btn-clear-logs");
    const btnExportLogs = document.getElementById("btn-export-logs");

    let startTime = Date.now();

    function emitLog(message, type = "system") {
        const timeStr = new Date().toLocaleTimeString();
        const line = document.createElement("div");
        line.className = `log-line ${type}`;
        line.innerText = `[${timeStr}] ${message}`;
        terminalLogs.appendChild(line);
        terminalLogs.scrollTop = terminalLogs.scrollHeight;
        while (terminalLogs.children.length > 80) {
            terminalLogs.removeChild(terminalLogs.firstChild);
        }
    }

    btnClearLogs.addEventListener("click", () => {
        terminalLogs.innerHTML = "";
        emitLog("Event logs cleared.");
    });

    btnExportLogs.addEventListener("click", () => {
        const logLines = Array.from(terminalLogs.querySelectorAll(".log-line")).map(line => line.innerText);
        if (logLines.length === 0) {
            showToast("No event logs available to export.", "warning");
            return;
        }
        const logText = logLines.join("\n");
        const blob = new Blob([logText], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `shieldcore-firewall-logs-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("System & Firewall event logs exported successfully.", "success");
    });

    // ==================== TAB 1: DDoS SIMULATOR ====================
    const selectDdosVector = document.getElementById("ddos-vector");
    const sliderBotCount = document.getElementById("bot-count");
    const valBotCount = document.getElementById("bot-count-val");
    const sliderAttackIntensity = document.getElementById("attack-intensity");
    const valAttackIntensity = document.getElementById("attack-intensity-val");
    const btnFireAttack = document.getElementById("btn-fire-attack");
    const btnResetAttack = document.getElementById("btn-reset-attack");
    
    const defRateLimit = document.getElementById("def-rate-limit");
    const defWaf = document.getElementById("def-waf");
    const defIpBlock = document.getElementById("def-ip-block");
    const defScrubbing = document.getElementById("def-scrubbing");
    
    const hudClients = document.getElementById("hud-clients");
    const hudBots = document.getElementById("hud-bots");
    const hudConn = document.getElementById("hud-conn");
    
    const statCpu = document.getElementById("stat-cpu");
    const statLatency = document.getElementById("stat-latency");
    const statSuccessRate = document.getElementById("stat-success-rate");
    
    const mapCanvas = document.getElementById("attack-map-canvas");
    const ctxMap = mapCanvas.getContext("2d");
    
    const chartBandwidthCanvas = document.getElementById("chart-bandwidth");
    const ctxBandwidth = chartBandwidthCanvas.getContext("2d");
    
    const chartConnectionsCanvas = document.getElementById("chart-connections");
    const ctxConnections = chartConnectionsCanvas.getContext("2d");

    // DDoS State
    let isDdosActive = false;
    let selectedDdosVector = "none";
    let botCount = parseInt(sliderBotCount.value);
    let attackIntensity = parseInt(sliderAttackIntensity.value);
    let ddosMitigations = { rateLimit: false, waf: false, ipBlock: false, scrubbing: false };

    // Telemetry Engine base variables
    let serverHealth = 100;
    let cpuLoad = 4.5;
    let connectionPool = 12;
    const maxConnections = 250;
    let currentLatency = 35.0;
    let currentBandwidth = 0.12;
    let successRate = 100.0;

    // Charts Histories
    const historyLimit = 40;
    let historyLegitBandwidth = Array(historyLimit).fill(0.12);
    let historyAttackBandwidth = Array(historyLimit).fill(0.0);
    let historyMitigatedBandwidth = Array(historyLimit).fill(0.0);
    let historyConnections = Array(historyLimit).fill(12);
    let historyLatency = Array(historyLimit).fill(35.0);

    // Canvas Node Layouts
    let serverNode = { x: 0, y: 0, r: 24, name: "SERVER" };
    let clientNodes = [];
    let botNodes = [];
    let packets = [];

    // DDoS Sliders listeners
    sliderBotCount.addEventListener("input", (e) => {
        botCount = parseInt(e.target.value);
        valBotCount.innerText = botCount;
        if (isDdosActive) recreateDdosNodes();
    });

    sliderAttackIntensity.addEventListener("input", (e) => {
        attackIntensity = parseInt(e.target.value);
        valAttackIntensity.innerText = attackIntensity;
    });

    selectDdosVector.addEventListener("change", (e) => {
        selectedDdosVector = e.target.value;
        btnFireAttack.disabled = selectedDdosVector === "none";
        updateEducationalContent();
    });

    btnFireAttack.addEventListener("click", () => {
        isDdosActive = true;
        btnFireAttack.style.display = "none";
        btnResetAttack.style.display = "inline-flex";
        selectDdosVector.disabled = true;
        emitLog(`LAUNCHING DDoS: Vector ${selectedDdosVector.toUpperCase()} active with ${botCount} bots.`, "alert");
        recreateDdosNodes();
        updateEducationalContent();
    });

    btnResetAttack.addEventListener("click", ceaseFireDDoS);

    function ceaseFireDDoS() {
        if (!isDdosActive) return;
        isDdosActive = false;
        btnFireAttack.style.display = "inline-flex";
        btnResetAttack.style.display = "none";
        selectDdosVector.disabled = false;
        botNodes = [];
        packets = packets.filter(p => !p.isAttack);
        emitLog("DDoS TERMINATED: Command sent to stop bot activity.", "success");
        updateEducationalContent();
    }

    // Defense checkboxes
    defRateLimit.addEventListener("change", (e) => { ddosMitigations.rateLimit = e.target.checked; emitLog(`Rate Limiting set to ${ddosMitigations.rateLimit ? "ENABLED" : "DISABLED"}`, "system"); updateEducationalContent(); });
    defWaf.addEventListener("change", (e) => { ddosMitigations.waf = e.target.checked; emitLog(`Layer 7 WAF set to ${ddosMitigations.waf ? "ENABLED" : "DISABLED"}`, "system"); updateEducationalContent(); });
    defIpBlock.addEventListener("change", (e) => { ddosMitigations.ipBlock = e.target.checked; emitLog(`IP Blacklisting set to ${ddosMitigations.ipBlock ? "ENABLED" : "DISABLED"}`, "system"); updateEducationalContent(); });
    defScrubbing.addEventListener("change", (e) => { ddosMitigations.scrubbing = e.target.checked; emitLog(`Cloud Scrubbing set to ${ddosMitigations.scrubbing ? "ENABLED" : "DISABLED"}`, "system"); updateEducationalContent(); });

    function recreateDdosNodes() {
        clientNodes = [];
        botNodes = [];
        const centerX = serverNode.x;
        const centerY = serverNode.y;
        const radius = Math.min(centerX, centerY) * 0.75;
        
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            clientNodes.push({ x: centerX + Math.cos(angle) * radius, y: centerY + Math.sin(angle) * radius, r: 6, pulse: Math.random() * Math.PI });
        }
        if (isDdosActive) {
            const displayBots = Math.min(botCount / 8, 45);
            for (let i = 0; i < displayBots; i++) {
                const angle = Math.random() * Math.PI * 2;
                const offsetRadius = radius * (1.1 + Math.random() * 0.35);
                botNodes.push({ x: centerX + Math.cos(angle) * offsetRadius, y: centerY + Math.sin(angle) * offsetRadius, r: 4.5, pulse: Math.random() * Math.PI });
            }
        }
    }

    // ==================== TAB 2: WEB APPLICATION LAB ====================
    const selectWebVector = document.getElementById("web-attack-vector");
    const webTemplatesContainer = document.getElementById("web-templates-container");
    const backendCodeView = document.getElementById("backend-code-view");
    const webConsoleOutput = document.getElementById("web-console-output");
    
    // Vulnerability frames
    const frameSqli = document.getElementById("frame-sqli");
    const frameXss = document.getElementById("frame-xss");
    const frameCsrf = document.getElementById("frame-csrf");
    
    // Defenses
    const defSqliPrep = document.getElementById("def-sqli-prep");
    const defXssEncode = document.getElementById("def-xss-encode");
    const defCsrfToken = document.getElementById("def-csrf-token");
    const defWebWaf = document.getElementById("def-web-waf");

    // Dynamic Search UI
    const sqliInput = document.getElementById("sqli-input");
    const btnSqliSubmit = document.getElementById("btn-sqli-submit");
    const sqliResultsTable = document.getElementById("sqli-results-table");

    // Guestbook UI
    const xssName = document.getElementById("xss-name");
    const xssComment = document.getElementById("xss-comment");
    const btnXssSubmit = document.getElementById("btn-xss-submit");
    const xssCommentsList = document.getElementById("xss-comments-list");

    // CSRF UI
    const csrfBankBalance = document.getElementById("csrf-bank-balance");
    const csrfBankTo = document.getElementById("csrf-bank-to");
    const csrfBankAmount = document.getElementById("csrf-bank-amount");
    const btnCsrfBankSubmit = document.getElementById("btn-csrf-bank-submit");
    const csrfTokenReadout = document.getElementById("csrf-token-readout");
    const btnCsrfMalicious = document.getElementById("btn-csrf-malicious");

    // XSS Popup Custom Alert
    const xssAlertOverlay = document.getElementById("xss-alert-overlay");
    const xssPopupPayload = document.getElementById("xss-popup-payload");
    const btnCloseXssAlert = document.getElementById("btn-close-xss-alert");

    // Mock Databases
    const mockDbVault = [
        { id: "1", client: "Acme Corp Core", secret: "VAULT_CODE: 9a87d00f", status: "Active" },
        { id: "2", client: "Halifax Corp Assets", secret: "VAULT_CODE: d298fa10", status: "Active" },
        { id: "3", client: "Starlight Storage", secret: "VAULT_CODE: 07f8a12e", status: "Suspended" }
    ];

    const mockDbUsers = [
        { username: "admin", role: "Super Administrator", token: "SESS_admin_auth_99aa88ff" },
        { username: "operator_bill", role: "L1 Operator", token: "SESS_bill_018fba90" }
    ];

    let commentsFeed = [
        { name: "Support Agent", comment: "Welcome to SecureVault support guestbook. Post suggestions below!" },
        { name: "John Doe", comment: "Nice dashboard design! Very fast loading." }
    ];

    let bankBalance = 10000.00;
    let csrfToken = "NONE";

    selectWebVector.addEventListener("change", (e) => {
        const val = e.target.value;
        // Swap active frame
        frameSqli.classList.remove("active");
        frameXss.classList.remove("active");
        frameCsrf.classList.remove("active");

        if (val === "sqli") frameSqli.classList.add("active");
        else if (val === "xss") frameXss.classList.add("active");
        else if (val === "csrf") frameCsrf.classList.add("active");

        loadWebTemplates(val);
        updateBackendCodeView();
        updateEducationalContent();
    });

    function emitWebConsole(msg, type = "system") {
        const line = document.createElement("div");
        line.className = `log-line ${type}`;
        line.innerText = msg;
        webConsoleOutput.appendChild(line);
        webConsoleOutput.scrollTop = webConsoleOutput.scrollHeight;
    }

    // Web attack templates loading
    function loadWebTemplates(vector) {
        webTemplatesContainer.innerHTML = "";
        let templates = [];
        
        if (vector === "sqli") {
            templates = [
                { name: "ID: 1 (Normal)", payload: "1" },
                { name: "Auth Bypass", payload: "1' OR '1'='1" },
                { name: "UNION Extract Users", payload: "1' UNION SELECT 'N/A', username, token, role FROM users--" },
                { name: "Error Injection", payload: "1' AND (SELECT 1 FROM users GROUP BY 1/0)--" }
            ];
        } else if (vector === "xss") {
            templates = [
                { name: "Normal Message", payload: "Hello, sandbox is working great!" },
                { name: "Cookie Theft Script", payload: "<script>stealCookies(document.cookie);</script>" },
                { name: "Img Error Exploit", payload: "<img src='x' onerror='exploitAlert();'>" }
            ];
        } else if (vector === "csrf") {
            templates = [
                { name: "Legitimate Transfer", payload: "To: operator_bill, Amount: 1500" },
                { name: "Malicious Click Link", payload: "Triggers bank transfer frame in bg" }
            ];
        }

        templates.forEach(t => {
            const btn = document.createElement("button");
            btn.className = "btn-template";
            btn.innerText = t.name;
            btn.addEventListener("click", () => {
                applyWebTemplate(vector, t.payload);
            });
            webTemplatesContainer.appendChild(btn);
        });
    }

    function applyWebTemplate(vector, payload) {
        if (vector === "sqli") {
            sqliInput.value = payload;
            emitWebConsole(`[INPUT] Loaded template: ${payload}`);
            updateBackendCodeView();
        } else if (vector === "xss") {
            xssName.value = "Hacker_Bot";
            xssComment.value = payload;
            emitWebConsole(`[INPUT] Loaded comment template: ${payload}`);
        } else if (vector === "csrf") {
            emitWebConsole(`[INPUT] CSRF simulated setup. Hacker link targets transfer API.`);
        }
    }

    // Backend dynamic query view update
    function updateBackendCodeView() {
        const vector = selectWebVector.value;
        let code = "";
        const inputVal = sqliInput.value || "1";

        if (vector === "sqli") {
            if (defSqliPrep.checked) {
                code = `// Secure Query Architecture (Prepared Statements)\n` +
                       `const query = "SELECT * FROM secret_vault WHERE record_id = ?";\n` +
                       `const stmt = db.prepare(query);\n` +
                       `const results = stmt.execute([ "${inputVal.replace(/"/g, '\\"')}" ]);`;
            } else {
                code = `// Vulnerable Dynamic Query Compilation\n` +
                       `const query = "SELECT * FROM secret_vault WHERE record_id = '${inputVal}';";\n` +
                       `const results = db.query(query);`;
            }
        } else if (vector === "xss") {
            if (defXssEncode.checked) {
                code = `// Secure Comment Output Encoding\n` +
                       `function render(input) {\n` +
                       `    return input.replace(/&/g, "&amp;")\n` +
                       `                .replace(/</g, "&lt;")\n` +
                       `                .replace(/>/g, "&gt;");\n` +
                       `}`;
            } else {
                code = `// Vulnerable Raw Reflection Output\n` +
                       `function render(comment) {\n` +
                       `    return "<div>" + comment + "</div>"; // Directly injected raw HTML\n` +
                       `}`;
            }
        } else if (vector === "csrf") {
            if (defCsrfToken.checked) {
                code = `// Secure Check: Stateful Anti-CSRF Token Matching\n` +
                       `app.post('/transfer', (req, res) => {\n` +
                       `    if (req.session.csrfToken !== req.body.csrf_token) {\n` +
                       `        return res.status(403).send("CSRF Token Verification Failed");\n` +
                       `    }\n` +
                       `    executeTransfer(req.body.to, req.body.amount);\n` +
                       `});`;
            } else {
                code = `// Vulnerable: Blind Cookie Authentication session check\n` +
                       `app.post('/transfer', (req, res) => {\n` +
                       `    // Trust browser cookies blindly\n` +
                       `    if (req.cookies.session_id) {\n` +
                       `        executeTransfer(req.body.to, req.body.amount);\n` +
                       `    }\n` +
                       `});`;
            }
        }

        backendCodeView.innerText = code;
    }

    // Defensive triggers updates
    defSqliPrep.addEventListener("change", () => { updateBackendCodeView(); emitLog(`Prepared Statements set to ${defSqliPrep.checked ? "ENABLED" : "DISABLED"}`, "system"); });
    defXssEncode.addEventListener("change", () => { updateBackendCodeView(); renderCommentsList(); emitLog(`XSS Input HTML Encoding set to ${defXssEncode.checked ? "ENABLED" : "DISABLED"}`, "system"); });
    defCsrfToken.addEventListener("change", () => { 
        updateBackendCodeView(); 
        csrfToken = defCsrfToken.checked ? "csrf_9f8c7b6a" : "NONE";
        csrfTokenReadout.innerText = `Anti-CSRF Token: ${csrfToken}`;
        csrfTokenReadout.className = defCsrfToken.checked ? "token-alert active" : "token-alert";
        emitLog(`Anti-CSRF Tokens set to ${defCsrfToken.checked ? "ENABLED" : "DISABLED"}`, "system"); 
    });
    defWebWaf.addEventListener("change", () => { emitLog(`Web WAF signature analysis set to ${defWebWaf.checked ? "ENABLED" : "DISABLED"}`, "system"); });

    sqliInput.addEventListener("input", updateBackendCodeView);
    sqliInput.addEventListener("keydown", (e) => { if (e.key === "Enter") btnSqliSubmit.click(); });

    // Execute SQLi query compiler
    btnSqliSubmit.addEventListener("click", () => {
        const rawInput = sqliInput.value.trim();
        if (!rawInput) return;

        emitWebConsole(`POST /admin/search HTTP/1.1\nHost: securevault.local\nPayload: id=${rawInput}`);

        // Check Web WAF
        if (defWebWaf.checked && (rawInput.toUpperCase().includes("UNION") || rawInput.toUpperCase().includes("SELECT") || rawInput.toUpperCase().includes("OR "))) {
            emitWebConsole(`[WAF BLOCK] Dropped request: SQL keyword signature detected in payload.`, "alert");
            emitLog(`[WAF ALERT] Blocked SQLi attempt from client IP 10.0.9.41`, "warning");
            renderSqliTable([]);
            return;
        }

        let queryOutput = "";
        let records = [];

        if (defSqliPrep.checked) {
            // Secure Query execution - treat input as literal ID
            emitWebConsole(`Executing Parameterized Statement: SELECT * FROM secret_vault WHERE record_id = ? [Value: "${rawInput}"]`);
            records = mockDbVault.filter(r => r.id === rawInput);
        } else {
            // Vulnerable evaluation logic - parse typical OR and UNION formats
            emitWebConsole(`Executing SQL Query: SELECT * FROM secret_vault WHERE record_id = '${rawInput}';`);
            
            const upperInput = rawInput.toUpperCase();
            if (upperInput.includes("' OR '1'='1") || upperInput.includes("' OR 1=1") || upperInput.includes("' OR 'a'='a")) {
                records = [...mockDbVault];
                emitLog(`[SECURITY ALERT] Successful Auth Bypass SQLi query executed on Database!`, "alert");
            } else if (upperInput.includes("UNION SELECT")) {
                // Return users database instead
                mockDbUsers.forEach(u => {
                    records.push({ id: "LEAK", client: u.username, secret: `Role: ${u.role} | Token: ${u.token}`, status: "COMPROMISED" });
                });
                emitLog(`[SECURITY ALERT] Union-Based Database extraction SQLi successful!`, "alert");
            } else if (upperInput.includes("GROUP BY 1/0") || upperInput.includes("1/0")) {
                records = [];
                emitWebConsole(`[DB ERROR] division by zero in group by statement query evaluation: select count(*) from users.`, "alert");
                emitLog(`[SECURITY WARNING] Error-based database scan query detected.`, "warning");
            } else {
                records = mockDbVault.filter(r => r.id === rawInput);
            }
        }

        renderSqliTable(records);
    });

    function renderSqliTable(records) {
        sqliResultsTable.querySelector("tbody").innerHTML = "";
        
        if (records.length === 0) {
            sqliResultsTable.querySelector("tbody").innerHTML = `<tr><td colspan="4" class="text-center text-muted">No records found.</td></tr>`;
            return;
        }

        records.forEach(r => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${r.id}</td><td>${r.client}</td><td class="text-warning">${r.secret}</td><td>${r.status}</td>`;
            sqliResultsTable.querySelector("tbody").appendChild(tr);
        });
    }

    // XSS comment posts
    btnXssSubmit.addEventListener("click", () => {
        const nameVal = xssName.value.trim() || "Anonymous";
        const commentVal = xssComment.value.trim();
        if (!commentVal) return;

        emitWebConsole(`POST /guestbook HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\nname=${nameVal}&comment=${commentVal}`);

        if (defWebWaf.checked && (commentVal.includes("<script>") || commentVal.includes("onerror"))) {
            emitWebConsole(`[WAF BLOCK] Blocked guestbook post: Script signature detected in payload.`, "alert");
            emitLog(`[WAF ALERT] Blocked XSS comment payload.`, "warning");
            return;
        }

        commentsFeed.push({ name: nameVal, comment: commentVal });
        xssComment.value = "";
        renderCommentsList();
        
        // Trigger simulated script execution
        if (!defXssEncode.checked) {
            if (commentVal.includes("<script>") || commentVal.includes("onerror")) {
                triggerXssPopup(commentVal);
            }
        }
    });

    xssComment.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); btnXssSubmit.click(); } });

    function renderCommentsList() {
        xssCommentsList.innerHTML = "";
        commentsFeed.forEach(c => {
            const div = document.createElement("div");
            div.className = "comment-item";
            
            let displayName = c.name;
            let displayComment = c.comment;
            if (defXssEncode.checked) {
                // HTML Entity encoding — encode both name and comment to prevent stored XSS
                displayName = displayName.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                displayComment = displayComment.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }

            div.innerHTML = `<div class="comment-meta"><span>By: ${displayName}</span><span>Just now</span></div><div class="comment-text">${displayComment}</div>`;
            xssCommentsList.appendChild(div);
        });
        xssCommentsList.scrollTop = xssCommentsList.scrollHeight;
    }

    function triggerXssPopup(payload) {
        xssPopupPayload.innerText = payload;
        xssAlertOverlay.style.display = "flex";
        emitLog(`[CRITICAL BREACH] Malicious XSS scripting executed in user session! Cookies harvested.`, "alert");
    }

    btnCloseXssAlert.addEventListener("click", () => {
        xssAlertOverlay.style.display = "none";
    });

    // CSRF Banking
    btnCsrfBankSubmit.addEventListener("click", () => {
        const to = csrfBankTo.value.trim();
        const amount = parseFloat(csrfBankAmount.value);
        if (!to || isNaN(amount) || amount <= 0) return;
        executeBankTransfer(to, amount, csrfToken);
    });

    function executeBankTransfer(to, amount, token) {
        emitWebConsole(`POST /transfer HTTP/1.1\nHost: vault-bank.local\nCookie: session_id=admin_sess_9a87d00f\ncsrf_token=${token}\nTo: ${to}&Amount: ${amount}`);

        if (defWebWaf.checked && token === "NONE" && selectWebVector.value === "csrf") {
            emitWebConsole(`[WAF BLOCK] Transfer request blocked due to anomalous cross-origin header checks.`, "alert");
            emitLog(`[WAF ALERT] Blocked suspicious CSRF transaction request.`, "warning");
            return;
        }

        if (defCsrfToken.checked && token !== "csrf_9f8c7b6a") {
            emitWebConsole(`[SERVER REJECT] HTTP 403 Forbidden - Missing or Invalid CSRF Verification Token.`, "alert");
            emitLog(`[SECURITY ALERT] Rejected unauthorized cross-site transaction request (no CSRF token).`, "warning");
            return;
        }

        if (amount > bankBalance) {
            emitWebConsole(`[SERVER REJECT] Insufficient funds for transaction.`, "alert");
            return;
        }

        bankBalance -= amount;
        csrfBankBalance.innerText = `$${bankBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        emitWebConsole(`[TRANSACTION COMPLETED] Transferred $${amount} to account [${to}] successfully.`, "success");
        emitLog(`[SYSTEM] Authorized transfer of $${amount} completed. New balance: $${bankBalance}`, "success");
    }

    // Trigger CSRF from the malicious site frame
    btnCsrfMalicious.addEventListener("click", () => {
        emitWebConsole(`[MALICIOUS TARGET CLICK] User clicked free PS5 promo link. Executing hidden request iframe: <img src="http://vault-bank.local/transfer?to=hacker_account_0x98f6&amount=3000">`);
        
        // Attack sends request. Notice: token is not populated by the external website (sends NONE or empty)
        executeBankTransfer("hacker_account_0x98f6", 3000.00, "NONE");
    });

    function stopWebAttacks() {
        xssAlertOverlay.style.display = "none";
    }

    // ==================== TAB 3: AUTH SECURITY LAB ====================
    const selectAuthVector = document.getElementById("auth-attack-vector");
    const sliderAuthSpeed = document.getElementById("auth-speed");
    const valAuthSpeed = document.getElementById("auth-speed-val");
    const btnAuthStart = document.getElementById("btn-auth-start");
    const btnAuthStop = document.getElementById("btn-auth-stop");
    
    const defAuthLockout = document.getElementById("def-auth-lockout");
    const defAuthCaptcha = document.getElementById("def-auth-captcha");
    const defAuthThrottle = document.getElementById("def-auth-throttle");
    const defAuthMfa = document.getElementById("def-auth-mfa");

    const loginPortalCard = document.getElementById("login-portal-card");
    const loginUsername = document.getElementById("login-username");
    const loginPassword = document.getElementById("login-password");
    const btnLoginSubmit = document.getElementById("btn-login-submit");
    
    const authLockoutOverlay = document.getElementById("auth-lockout-overlay");
    const authLockoutTimer = document.getElementById("lockout-timer");
    const authCaptchaContainer = document.getElementById("auth-captcha-container");
    const captchaCheckbox = document.getElementById("captcha-checkbox");
    
    const authMfaDialog = document.getElementById("auth-mfa-dialog");
    const mfaCodeInput = document.getElementById("mfa-code");
    const btnMfaSubmit = document.getElementById("btn-mfa-submit");

    const authScanOutput = document.getElementById("auth-scan-output");
    const authProgressFill = document.getElementById("auth-progress-fill");
    const authProgressText = document.getElementById("auth-progress-text");

    // Wordlists
    const leakedWordlist = [
        "123456", "password", "123456789", "qwerty", "12345", "admin", "welcome", "football", "ninja", "monkey",
        "secret", "shadow", "hacker", "dragon", "pass123", "charlie", "hunter2", "password123", "securevault"
    ];
    const correctPassword = "password123";

    let authCrackingSpeed = parseInt(sliderAuthSpeed.value);
    let isCrackingActive = false;
    let crackingInterval = null;
    let crackingIndex = 0;
    
    let failedAttemptsCount = 0;
    let isPortalLocked = false;
    let lockoutCountdown = 10;
    let lockoutTimerInterval = null;
    let captchaRequested = false;

    sliderAuthSpeed.addEventListener("input", (e) => {
        authCrackingSpeed = parseInt(e.target.value);
        valAuthSpeed.innerText = authCrackingSpeed;
        if (isCrackingActive) {
            restartAuthCracking();
        }
    });

    btnAuthStart.addEventListener("click", () => {
        isCrackingActive = true;
        btnAuthStart.style.display = "none";
        btnAuthStop.style.display = "inline-flex";
        crackingIndex = 0;
        emitLog(`[AUTHENTICATION] Automated dictionary credentials stuffing engaged.`, "alert");
        startAuthCracking();
    });

    btnAuthStop.addEventListener("click", stopAuthAttack);

    function stopAuthAttack() {
        isCrackingActive = false;
        btnAuthStart.style.display = "inline-flex";
        btnAuthStop.style.display = "none";
        
        if (crackingInterval) {
            clearInterval(crackingInterval);
            crackingInterval = null;
        }
        
        authMfaDialog.style.display = "none";
        loginPortalCard.style.filter = "none";
    }

    function startAuthCracking() {
        if (crackingInterval) clearInterval(crackingInterval);
        
        // Speed throttles: if IP throttling is active, force speed to 1 try/sec max
        let currentIntervalMs = 1000 / authCrackingSpeed;
        if (defAuthThrottle.checked) {
            currentIntervalMs = 1000; // force 1 per second
        }

        crackingInterval = setInterval(runCredentialsCheckStep, currentIntervalMs);
    }

    function restartAuthCracking() {
        if (isCrackingActive) {
            startAuthCracking();
        }
    }

    // Defense listener triggers
    defAuthLockout.addEventListener("change", (e) => { emitLog(`Account Lockout Policy set to ${e.target.checked ? "ENABLED" : "DISABLED"}`, "system"); });
    defAuthCaptcha.addEventListener("change", (e) => {
        emitLog(`CAPTCHA Verification set to ${e.target.checked ? "ENABLED" : "DISABLED"}`, "system");
        authCaptchaContainer.style.display = e.target.checked ? "flex" : "none";
        captchaCheckbox.checked = false;
    });
    defAuthThrottle.addEventListener("change", (e) => {
        emitLog(`IP Rate Limiting set to ${e.target.checked ? "ENABLED" : "DISABLED"}`, "system");
        restartAuthCracking();
    });
    defAuthMfa.addEventListener("change", (e) => { emitLog(`MFA Enforcement set to ${e.target.checked ? "ENABLED" : "DISABLED"}`, "system"); });

    function emitScanLog(msg, type = "system") {
        const line = document.createElement("div");
        line.className = `log-line ${type}`;
        line.innerText = msg;
        authScanOutput.appendChild(line);
        authScanOutput.scrollTop = authScanOutput.scrollHeight;
        while (authScanOutput.children.length > 50) {
            authScanOutput.removeChild(authScanOutput.firstChild);
        }
    }

    function runCredentialsCheckStep() {
        if (isPortalLocked) {
            emitScanLog(`[WAIT] Portal Locked. Throttling attempts...`, "warning");
            return;
        }

        if (defAuthCaptcha.checked && !captchaCheckbox.checked) {
            emitScanLog(`[BLOCKED] Login halted: CAPTCHA challenge not verified by robot.`, "alert");
            emitLog(`[SECURITY WARNING] Blocked automated login attempts due to CAPTCHA challenge.`, "warning");
            stopAuthAttack();
            return;
        }

        if (crackingIndex >= leakedWordlist.length) {
            emitScanLog(`[FINISHED] Finished scanning dictionary list. Target key not found.`, "warning");
            stopAuthAttack();
            return;
        }

        const currentPass = leakedWordlist[crackingIndex];
        crackingIndex++;
        
        // Update progress bar
        const pct = Math.round((crackingIndex / leakedWordlist.length) * 100);
        authProgressFill.style.width = `${pct}%`;
        authProgressText.innerText = `Progress: ${pct}% (${crackingIndex} / ${leakedWordlist.length} keys)`;

        // Visual credentials input mockup
        loginPassword.value = currentPass;
        
        emitScanLog(`[TRY] admin:${currentPass} -> Checking database signature...`);

        if (currentPass === correctPassword) {
            // Password matches! Check defense policies
            emitScanLog(`[SUCCESS] Credentials admin:${currentPass} matched!`, "success");
            
            if (defAuthMfa.checked) {
                // Interrupt login with MFA box
                emitScanLog(`[MFA INTERRUPT] MFA Verification requested. Waiting for authenticator code...`, "warning");
                emitLog(`[AUTHENTICATION] admin password guessed. Triggering MFA authentication challenge.`, "warning");
                
                if (crackingInterval) {
                    clearInterval(crackingInterval);
                    crackingInterval = null;
                }
                
                loginPortalCard.style.filter = "blur(3px)";
                authMfaDialog.style.display = "block";
            } else {
                emitLog(`[CRITICAL ALERT] Login Portal breached! Account 'admin' compromised.`, "alert");
                emitScanLog(`[UNLOCKED] Vault access granted!`, "success");
                stopAuthAttack();
            }
        } else {
            // Wrong credentials
            failedAttemptsCount++;
            emitScanLog(`[REJECT] Credentials admin:${currentPass} -> Access Denied.`, "alert");

            if (defAuthLockout.checked && failedAttemptsCount >= 3) {
                triggerLockoutState();
            }
        }
    }

    function triggerLockoutState() {
        isPortalLocked = true;
        failedAttemptsCount = 0;
        lockoutCountdown = 10;
        authLockoutOverlay.style.display = "flex";
        authLockoutTimer.innerText = lockoutCountdown;
        emitLog(`[LOCKOUT] Account 'admin' locked due to 3 consecutive failures.`, "warning");

        lockoutTimerInterval = setInterval(() => {
            lockoutCountdown--;
            authLockoutTimer.innerText = lockoutCountdown;
            if (lockoutCountdown <= 0) {
                clearInterval(lockoutTimerInterval);
                isPortalLocked = false;
                authLockoutOverlay.style.display = "none";
                emitLog(`[SYSTEM] Account 'admin' lockout expired. Portal active.`, "system");
            }
        }, 1000);
    }

    // Submit MFA code manually
    btnMfaSubmit.addEventListener("click", () => {
        const code = mfaCodeInput.value.trim();
        if (code === "123456" || code.length === 6) {
            authMfaDialog.style.display = "none";
            loginPortalCard.style.filter = "none";
            emitLog(`[AUTHENTICATION] admin MFA verification successful. Portal unlocked.`, "success");
            emitScanLog(`[UNLOCKED] MFA Passed. Vault accessed.`, "success");
            stopAuthAttack();
        } else {
            emitLog(`[AUTHENTICATION ALERT] Failed MFA token code: ${code}`, "warning");
            mfaCodeInput.value = "";
            mfaCodeInput.placeholder = "INVALID CODE";
        }
    });

    mfaCodeInput.addEventListener("keydown", (e) => { if (e.key === "Enter") btnMfaSubmit.click(); });
    loginPassword.addEventListener("keydown", (e) => { if (e.key === "Enter") btnLoginSubmit.click(); });

    // Manual Form Sign-in
    btnLoginSubmit.addEventListener("click", () => {
        const passwordVal = loginPassword.value;
        if (isPortalLocked) return;
        
        if (defAuthCaptcha.checked && !captchaCheckbox.checked) {
            showToast("Verification Required: Please solve the CAPTCHA challenge.", "warning");
            return;
        }

        if (passwordVal === correctPassword) {
            if (defAuthMfa.checked) {
                loginPortalCard.style.filter = "blur(3px)";
                authMfaDialog.style.display = "block";
            } else {
                emitLog(`[SYSTEM] Authorized admin sign-in successful.`, "success");
                showToast("Authentication Successful: Welcome, Administrator.", "success");
            }
        } else {
            failedAttemptsCount++;
            emitLog(`[WARNING] Failed administrative login attempt. password: ${passwordVal}`, "warning");
            
            if (defAuthLockout.checked && failedAttemptsCount >= 3) {
                triggerLockoutState();
            } else {
                showToast("Access Denied: Invalid Administrative Password.", "error");
            }
        }
    });

    // ==================== TAB 4: NETWORK & SYSTEM SECURITY LAB ====================
    const selectSysVector = document.getElementById("sys-attack-vector");
    const btnSysStart = document.getElementById("btn-sys-start");
    const btnSysStop = document.getElementById("btn-sys-stop");
    
    const defSysHttps = document.getElementById("def-sys-https");
    const defSysAntimalware = document.getElementById("def-sys-antimalware");
    const btnRestoreBackups = document.getElementById("btn-restore-backups");
    
    const sysVisTitle = document.getElementById("sys-vis-title");
    const mitmCanvas = document.getElementById("mitm-network-canvas");
    const ctxMitm = mitmCanvas.getContext("2d");
    
    const ransomwarePanel = document.getElementById("ransomware-panel");
    const ransomLockOverlay = document.getElementById("ransom-lock-overlay");
    const ransomFilesStats = document.getElementById("ransom-files-stats");
    const ransomFilesContainer = document.getElementById("ransom-files-container");
    const sysConsoleOutput = document.getElementById("sys-console-output");

    // Network & System States
    let activeSysVector = "mitm";
    let isSysAttackActive = false;
    let mitmPacketFlowTimer = 0;
    
    // File tree records
    let localFiles = [
        { name: "passwords.txt", size: "2 KB", type: "txt", state: "healthy" },
        { name: "tax_returns.pdf", size: "480 KB", type: "pdf", state: "healthy" },
        { name: "source_code.zip", size: "24 MB", type: "zip", state: "healthy" },
        { name: "server_config.yaml", size: "8 KB", type: "yaml", state: "healthy" },
        { name: "report.docx", size: "110 KB", type: "docx", state: "healthy" },
        { name: "database.db", size: "1.4 GB", type: "db", state: "healthy" },
        { name: "logo.png", size: "128 KB", type: "png", state: "healthy" },
        { name: "app_launcher.exe", size: "4.2 MB", type: "exe", state: "healthy" },
        { name: "web_index.html", size: "32 KB", type: "html", state: "healthy" }
    ];

    selectSysVector.addEventListener("change", (e) => {
        activeSysVector = e.target.value;
        stopSysAttacks();
        
        mitmCanvas.classList.remove("active");
        ransomwarePanel.classList.remove("active");

        if (activeSysVector === "mitm") {
            sysVisTitle.innerText = "Network Intercept Topology";
            mitmCanvas.classList.add("active");
        } else {
            sysVisTitle.innerText = "Production Local Filesystem";
            ransomwarePanel.classList.add("active");
            renderFileSystem();
        }
        updateEducationalContent();
    });

    function emitSysConsole(msg, type = "system") {
        const line = document.createElement("div");
        line.className = `log-line ${type}`;
        line.innerText = msg;
        sysConsoleOutput.appendChild(line);
        sysConsoleOutput.scrollTop = sysConsoleOutput.scrollHeight;
        while (sysConsoleOutput.children.length > 50) {
            sysConsoleOutput.removeChild(sysConsoleOutput.firstChild);
        }
    }

    btnSysStart.addEventListener("click", () => {
        isSysAttackActive = true;
        btnSysStart.style.display = "none";
        btnSysStop.style.display = "inline-flex";

        if (activeSysVector === "mitm") {
            emitLog(`[NETWORK] MitM ARP Poisoning exploit engaged on subnet.`, "alert");
            emitSysConsole(`[ARP POISON] Sending spoofed ARP replies: 10.0.4.1 is at 10.0.4.85 (Hacker MAC)...`, "alert");
        } else {
            emitLog(`[MALWARE] Automated Ransomware execution block initialized.`, "alert");
            emitSysConsole(`[WORM INJECTED] Executing ransomware.exe process on local shell...`, "alert");
            startRansomwareEncryption();
        }
        updateEducationalContent();
    });

    btnSysStop.addEventListener("click", stopSysAttacks);

    function stopSysAttacks() {
        if (!isSysAttackActive) return;
        isSysAttackActive = false;
        btnSysStart.style.display = "inline-flex";
        btnSysStop.style.display = "none";
        
        if (activeSysVector === "mitm") {
            emitLog(`[NETWORK] MitM ARP mapping cleared. Subnet topology restored.`, "success");
            emitSysConsole(`[ARP RESET] Broadcasting real MAC address configurations.`, "success");
        } else {
            emitLog(`[SYSTEM] Ransomware processes terminated.`, "system");
        }
        updateEducationalContent();
    }

    // Defensive check listeners
    defSysHttps.addEventListener("change", (e) => {
        emitLog(`HTTPS Protocol Negotiation set to ${e.target.checked ? "ENABLED" : "DISABLED"}`, e.target.checked ? "success" : "system");
        updateEducationalContent();
    });

    defSysAntimalware.addEventListener("change", (e) => {
        emitLog(`Endpoint Protection set to ${e.target.checked ? "ENABLED" : "DISABLED"}`, e.target.checked ? "success" : "system");
        if (e.target.checked && isSysAttackActive && activeSysVector === "ransom") {
            emitSysConsole(`[ANTIMALWARE DETECT] Flagged ransomware.exe signature! Terminated thread ID 8812.`, "success");
            emitLog(`[ENDPOINT SECURITY] Blocked and quarantined malicious ransomware worm.`, "success");
            stopSysAttacks();
        }
    });

    btnRestoreBackups.addEventListener("click", () => {
        emitLog(`[BACKUP RESTORE] Rebuilding local filesystem from snapshot.`, "success");
        emitSysConsole(`[REBUILD] Copying 9 directories back to local sector. Restoring DB configurations...`, "success");
        
        localFiles.forEach(f => f.state = "healthy");
        renderFileSystem();
        
        btnRestoreBackups.disabled = true;
        ransomLockOverlay.style.display = "none";
    });

    function renderFileSystem() {
        ransomFilesContainer.innerHTML = "";
        let encryptedCount = 0;

        localFiles.forEach(f => {
            const div = document.createElement("div");
            div.className = f.state === "locked" ? "file-node-item locked" : "file-node-item";
            
            let icon = "📄";
            if (f.type === "zip") icon = "📦";
            else if (f.type === "pdf") icon = "📕";
            else if (f.type === "db") icon = "🗄️";
            else if (f.type === "png") icon = "🖼️";
            else if (f.type === "html") icon = "🌐";
            else if (f.type === "exe") icon = "⚙️";

            if (f.state === "locked") {
                icon = "🔒";
                encryptedCount++;
            }

            div.innerHTML = `<span class="file-icon">${icon}</span><span class="file-name">${f.name}${f.state === 'locked' ? '.locked' : ''}</span>`;
            ransomFilesContainer.appendChild(div);
        });

        ransomFilesStats.innerText = `Files: ${localFiles.length} / Encrypted: ${encryptedCount}`;
    }

    function startRansomwareEncryption() {
        if (!isSysAttackActive || activeSysVector !== "ransom") return;

        // Check defensive Endpoint Protection
        if (defSysAntimalware.checked) {
            emitSysConsole(`[ANTIMALWARE REJECT] execution block blocked! ransomware.exe has been quarantined.`, "success");
            emitLog(`[ENDPOINT PROTECTION] Terminated zero-day payload signature.`, "success");
            stopSysAttacks();
            return;
        }

        // Encrypt files step-by-step
        let nextToEncrypt = localFiles.find(f => f.state === "healthy");
        if (nextToEncrypt) {
            nextToEncrypt.state = "locked";
            renderFileSystem();
            emitSysConsole(`[ENCRYPT] Locking C:\\Vault\\Production\\${nextToEncrypt.name} -> output: ${nextToEncrypt.name}.locked`);
            
            // Simultaneously exfiltrate files
            emitSysConsole(`[EXFIL] Uploading payload: ${nextToEncrypt.name} (Size: ${nextToEncrypt.size}) -> external server 185.22.4.91`, "warning");
            
            setTimeout(startRansomwareEncryption, 800);
        } else {
            // All encrypted! Show ransomware demand screen
            ransomLockOverlay.style.display = "flex";
            btnRestoreBackups.disabled = false;
            emitLog(`[CRITICAL SECURITY WARNING] All production files encrypted! Ransom demand registered.`, "alert");
            emitSysConsole(`[DEMAND BLOCKED] Ransomware installation completed. Host compromised.`, "alert");
            stopSysAttacks();
        }
    }

    // Visual ARP Nodes Coordinates
    let mitmNodes = {
        client: { x: 80, y: 150, name: "CLIENT" },
        router: { x: 380, y: 150, name: "GATEWAY ROUTER" },
        hacker: { x: 230, y: 240, name: "ATTACKER" }
    };
    let mitmPackets = [];

    // ==================== GLOBAL LOOPS & SCHEDULER ====================
    let lastClockUpdate = Date.now();
    let packetTimer = 0;
    
    function updateSimulation() {
        const now = Date.now();
        const delta = (now - lastClockUpdate) / 1000;
        lastClockUpdate = now;
        
        // Update Uptime Clock
        const diff = now - startTime;
        const secs = Math.floor(diff / 1000) % 60;
        const mins = Math.floor(diff / 60000) % 60;
        const hrs = Math.floor(diff / 3600000);
        uptimeCounter.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        // Diurnal wave pattern request rates
        const cycle = Math.sin(now / 15000) * 2.5 + 8;
        const legitReqRate = cycle;

        let attackReqRate = 0.0;
        let blockedRate = 0.0;
        
        if (isDdosActive) {
            attackReqRate = (botCount * (attackIntensity / 10.0));
        }

        // Apply mitigation filters
        let rateLimitMult = 1.0;
        let wafMult = 1.0;
        let ipBlockMult = 1.0;
        let scrubbingMult = 1.0;

        if (isDdosActive) {
            if (selectedDdosVector === "http_flood") {
                if (ddosMitigations.rateLimit) rateLimitMult = 0.15;
                if (ddosMitigations.waf) wafMult = 0.1;
                if (ddosMitigations.ipBlock) ipBlockMult = 0.3;
                if (ddosMitigations.scrubbing) scrubbingMult = 0.05;
            } 
            else if (selectedDdosVector === "syn_flood") {
                if (ddosMitigations.rateLimit) rateLimitMult = 0.55;
                if (ddosMitigations.waf) wafMult = 0.95;
                if (ddosMitigations.ipBlock) ipBlockMult = 0.15;
                if (ddosMitigations.scrubbing) scrubbingMult = 0.05;
            }
            else if (selectedDdosVector === "udp_flood") {
                if (ddosMitigations.rateLimit) rateLimitMult = 0.8;
                if (ddosMitigations.waf) wafMult = 1.0;
                if (ddosMitigations.ipBlock) ipBlockMult = 0.4;
                if (ddosMitigations.scrubbing) scrubbingMult = 0.02;
            }
            else if (selectedDdosVector === "slowloris") {
                if (ddosMitigations.rateLimit) rateLimitMult = 0.2;
                if (ddosMitigations.waf) wafMult = 0.1;
                if (ddosMitigations.ipBlock) ipBlockMult = 0.6;
                if (ddosMitigations.scrubbing) scrubbingMult = 0.3;
            }
            else if (selectedDdosVector === "dns_amp") {
                // DNS Amplification relies on open resolvers. IP Blacklist drops resolvers, Scrubbing absorbs volumetric bandwidth.
                if (ddosMitigations.rateLimit) rateLimitMult = 0.9; // hard to limit single IPs since it comes from many DNS servers
                if (ddosMitigations.waf) wafMult = 1.0; // L7 WAF is bypassed
                if (ddosMitigations.ipBlock) ipBlockMult = 0.15; // blocks dns resolver lists
                if (ddosMitigations.scrubbing) scrubbingMult = 0.03; // scrubs off-premise
            }
        }

        const attackFilter = rateLimitMult * wafMult * ipBlockMult * scrubbingMult;
        const mitigatedAttackRate = attackReqRate * attackFilter;
        blockedRate = attackReqRate - mitigatedAttackRate;

        // Update connection pool load
        let targetConnectionPool = 12 + Math.floor(legitReqRate * 1.5);
        if (isDdosActive) {
            if (selectedDdosVector === "syn_flood") {
                targetConnectionPool += Math.floor(mitigatedAttackRate * 1.2);
            } else if (selectedDdosVector === "slowloris") {
                targetConnectionPool += Math.floor(mitigatedAttackRate * 3.5);
            } else {
                targetConnectionPool += Math.floor(mitigatedAttackRate * 0.4);
            }
        }

        connectionPool = Math.floor(connectionPool + (targetConnectionPool - connectionPool) * 0.1);
        if (connectionPool > maxConnections) connectionPool = maxConnections;

        // Calculate CPU Load
        let baseCpu = 2.0 + (legitReqRate * 0.4);
        let attackCpuEffect = 0.0;
        
        if (isDdosActive) {
            if (selectedDdosVector === "http_flood") {
                attackCpuEffect = (mitigatedAttackRate * 0.25);
            } else if (selectedDdosVector === "syn_flood") {
                attackCpuEffect = (mitigatedAttackRate * 0.07);
            } else if (selectedDdosVector === "udp_flood") {
                attackCpuEffect = (mitigatedAttackRate * 0.04);
            } else if (selectedDdosVector === "slowloris") {
                attackCpuEffect = (mitigatedAttackRate * 0.03);
            } else if (selectedDdosVector === "dns_amp") {
                attackCpuEffect = (mitigatedAttackRate * 0.05);
            }
        }
        
        let mitigationCpuOverhead = 0.0;
        if (ddosMitigations.rateLimit) mitigationCpuOverhead += 2.0;
        if (ddosMitigations.waf) mitigationCpuOverhead += 6.0;
        if (ddosMitigations.ipBlock) mitigationCpuOverhead += 1.0;
        
        let targetCpu = baseCpu + attackCpuEffect + mitigationCpuOverhead;
        if (targetCpu > 100.0) targetCpu = 100.0;
        cpuLoad = cpuLoad + (targetCpu - cpuLoad) * 0.1;

        // Latency calculations
        let baseLatency = 25.0 + (legitReqRate * 0.5);
        let stressFactor = 1.0;
        
        if (cpuLoad > 80.0) {
            stressFactor += (cpuLoad - 80.0) * 0.15;
        }
        
        const poolPercentage = connectionPool / maxConnections;
        if (poolPercentage > 0.8) {
            stressFactor += (poolPercentage - 0.8) * 12.0;
        }

        let targetLatency = baseLatency * stressFactor;
        if (targetLatency > 2000.0) targetLatency = 2000.0;
        currentLatency = currentLatency + (targetLatency - currentLatency) * 0.08;

        // Success Rate percentage
        let currentSuccess = 100.0;
        if (cpuLoad > 95.0) {
            currentSuccess -= (cpuLoad - 95.0) * 8.0;
        }
        if (poolPercentage > 0.95) {
            currentSuccess -= (poolPercentage - 0.95) * 80.0;
        }
        if (currentSuccess < 0) currentSuccess = 0;
        successRate = successRate + (currentSuccess - successRate) * 0.15;

        // Update server health to reflect overall system condition
        serverHealth = successRate;

        // Bandwidth calculation (Gbps)
        let legitBandwidth = (legitReqRate * 0.01);
        let attackBandwidth = 0.0;
        
        if (isDdosActive) {
            if (selectedDdosVector === "udp_flood") {
                attackBandwidth = (attackReqRate * 0.06);
            } else if (selectedDdosVector === "dns_amp") {
                attackBandwidth = (attackReqRate * 0.08); // DNS Amplification is highly volumetric (amplified factor of ~70x)
            } else {
                attackBandwidth = (attackReqRate * 0.005);
            }
        }

        currentBandwidth = legitBandwidth + (attackBandwidth * attackFilter);
        
        // UI Updates
        if (activeTabId === "ddos-tab") {
            const totalRate = (legitReqRate + attackReqRate).toFixed(1);
            const rateStr = selectedDdosVector === "dns_amp" ? `${totalRate} (Amplified)` : totalRate;
            document.getElementById("total-req-rate").innerText = rateStr;
            
            hudClients.innerText = clientNodes.length.toString();
            hudBots.innerText = isDdosActive ? botCount.toString() : "0";
            hudConn.innerText = `${connectionPool} / ${maxConnections}`;
            
            statCpu.innerText = `${cpuLoad.toFixed(1)}%`;
            statCpu.className = cpuLoad > 85.0 ? "value text-danger" : (cpuLoad > 50.0 ? "value text-warning" : "value text-success");

            statLatency.innerText = `${Math.round(currentLatency)}ms`;
            statLatency.className = currentLatency > 300 ? "value text-danger" : (currentLatency > 100 ? "value text-warning" : "value text-success");

            statSuccessRate.innerText = `${Math.round(successRate)}%`;
            statSuccessRate.className = successRate < 80.0 ? "value text-danger" : (successRate < 95.0 ? "value text-warning" : "value text-success");
        }

        // Global status banner
        if (successRate < 25.0 || isPortalLocked || (localFiles.filter(f => f.state === "locked").length > 6)) {
            globalStatusDot.className = "status-dot red";
            globalStatusText.innerText = "SYSTEM HEALTH: DEGRADED (CRITICAL BREACH)";
        } else if (successRate < 90.0 || cpuLoad > 80.0 || currentLatency > 200.0 || isSysAttackActive) {
            globalStatusDot.className = "status-dot yellow";
            globalStatusText.innerText = "SYSTEM HEALTH: UNSTABLE (ATTACK STRESS)";
        } else {
            globalStatusDot.className = "status-dot green";
            globalStatusText.innerText = "SYSTEM HEALTH: SECURE (PROTECTED)";
        }

        // Spawn particles
        packetTimer += delta;
        const ratePerPacket = 1.0 / (legitReqRate + (isDdosActive ? Math.min(attackReqRate, 60.0) : 0.0));
        
        if (packetTimer > ratePerPacket) {
            packetTimer = 0;
            // Spawn legitimate packets
            const randomClient = clientNodes[Math.floor(Math.random() * clientNodes.length)];
            if (randomClient) createPacket(randomClient, serverNode, false);

            // Spawn bot packets
            if (isDdosActive && botNodes.length > 0) {
                const numSpawn = Math.min(Math.floor(attackReqRate / 10) + 1, 8);
                for(let k=0; k<numSpawn; k++) {
                    const randomBot = botNodes[Math.floor(Math.random() * botNodes.length)];
                    if (randomBot) createPacket(randomBot, serverNode, true);
                }
            }
        }

        // Spawns MitM Packets
        if (activeTabId === "sys-tab" && activeSysVector === "mitm") {
            mitmPacketFlowTimer += delta;
            if (mitmPacketFlowTimer > 0.4) {
                mitmPacketFlowTimer = 0;
                // Add normal client-to-router packet path
                const flowPath = isSysAttackActive ? "spoofed" : "direct";
                createMitmPacket(flowPath);
            }
        }

        // Update histories
        historyLegitBandwidth.push(legitBandwidth);
        historyLegitBandwidth.shift();
        historyAttackBandwidth.push(attackBandwidth * attackFilter);
        historyAttackBandwidth.shift();
        historyMitigatedBandwidth.push(attackBandwidth - (attackBandwidth * attackFilter));
        historyMitigatedBandwidth.shift();
        historyConnections.push(connectionPool);
        historyConnections.shift();
        historyLatency.push(currentLatency);
        historyLatency.shift();
    }

    function createPacket(sourceNode, targetNode, isAttack = false) {
        let speed = 2.5 + Math.random() * 2.5;
        if (isAttack) speed = 4 + Math.random() * 4;
        
        packets.push({
            x: sourceNode.x,
            y: sourceNode.y,
            targetX: targetNode.x,
            targetY: targetNode.y,
            speed: speed,
            isAttack: isAttack,
            size: isAttack ? 2.5 : 3.0
        });
    }

    function createMitmPacket(flowType) {
        const secure = defSysHttps.checked;
        if (flowType === "direct") {
            mitmPackets.push({
                x: mitmNodes.client.x,
                y: mitmNodes.client.y,
                path: [mitmNodes.router],
                progress: 0,
                secure: secure
            });
        } else {
            // Routing goes through hacker node first
            mitmPackets.push({
                x: mitmNodes.client.x,
                y: mitmNodes.client.y,
                path: [mitmNodes.hacker, mitmNodes.router],
                progress: 0,
                secure: secure
            });
        }
    }

    // Check DDoS mitigation block rules for rendering colors
    function checkDdosMitigation(p) {
        if (!p.isAttack) return false;
        if (selectedDdosVector === "http_flood") {
            return ddosMitigations.rateLimit || ddosMitigations.waf || ddosMitigations.ipBlock || ddosMitigations.scrubbing;
        } else if (selectedDdosVector === "syn_flood") {
            return ddosMitigations.ipBlock || ddosMitigations.scrubbing;
        } else if (selectedDdosVector === "udp_flood") {
            return ddosMitigations.scrubbing || ddosMitigations.ipBlock;
        } else if (selectedDdosVector === "slowloris") {
            return ddosMitigations.rateLimit || ddosMitigations.waf || ddosMitigations.scrubbing;
        } else if (selectedDdosVector === "dns_amp") {
            return ddosMitigations.ipBlock || ddosMitigations.scrubbing;
        }
        return false;
    }

    // ==================== RENDERS & CANVAS LOOPS ====================
    function drawMap() {
        ctxMap.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
        
        const cX = serverNode.x;
        const cY = serverNode.y;

        ctxMap.strokeStyle = "rgba(0, 204, 255, 0.05)";
        ctxMap.lineWidth = 1;
        
        clientNodes.forEach(c => {
            ctxMap.beginPath(); ctxMap.moveTo(cX, cY); ctxMap.lineTo(c.x, c.y); ctxMap.stroke();
        });

        if (isDdosActive) {
            ctxMap.strokeStyle = "rgba(255, 51, 102, 0.03)";
            botNodes.forEach(b => {
                ctxMap.beginPath(); ctxMap.moveTo(cX, cY); ctxMap.lineTo(b.x, b.y); ctxMap.stroke();
            });
        }

        if (ddosMitigations.scrubbing) {
            ctxMap.strokeStyle = "rgba(0, 204, 255, 0.4)";
            ctxMap.lineWidth = 2;
            ctxMap.beginPath();
            ctxMap.arc(cX, cY, serverNode.r + 15, 0, Math.PI * 2);
            ctxMap.stroke();
            
            ctxMap.strokeStyle = "rgba(0, 204, 255, 0.15)";
            ctxMap.lineWidth = 4;
            ctxMap.beginPath();
            ctxMap.arc(cX, cY, serverNode.r + 15, (Date.now() / 200) % (Math.PI * 2), ((Date.now() / 200) + Math.PI * 0.4) % (Math.PI * 2));
            ctxMap.stroke();
        }

        // Draw server node
        const healthColor = `rgba(${Math.floor(255 - (serverHealth * 2.55))}, ${Math.floor(serverHealth * 2.55)}, 102, 0.85)`;
        const serverPulse = Math.sin(Date.now() / 300) * 6 + 10;
        let glowGrad = ctxMap.createRadialGradient(cX, cY, serverNode.r - 5, cX, cY, serverNode.r + serverPulse);
        
        if (successRate > 90.0) {
            glowGrad.addColorStop(0, "rgba(0, 255, 102, 0.35)");
            glowGrad.addColorStop(1, "rgba(0, 255, 102, 0)");
        } else if (successRate > 30.0) {
            glowGrad.addColorStop(0, "rgba(255, 170, 0, 0.35)");
            glowGrad.addColorStop(1, "rgba(255, 170, 0, 0)");
        } else {
            glowGrad.addColorStop(0, "rgba(255, 51, 102, 0.45)");
            glowGrad.addColorStop(1, "rgba(255, 51, 102, 0)");
        }
        
        ctxMap.fillStyle = glowGrad;
        ctxMap.beginPath(); ctxMap.arc(cX, cY, serverNode.r + serverPulse, 0, Math.PI * 2); ctxMap.fill();

        ctxMap.fillStyle = "#1e293b";
        ctxMap.strokeStyle = successRate > 90.0 ? "#00ff66" : (successRate > 30.0 ? "#ffcc00" : "#ff3366");
        ctxMap.lineWidth = 3;
        ctxMap.beginPath(); ctxMap.arc(cX, cY, serverNode.r, 0, Math.PI * 2); ctxMap.fill(); ctxMap.stroke();
        
        ctxMap.fillStyle = "#fff";
        ctxMap.font = "bold 9px 'Fira Code'";
        ctxMap.textAlign = "center";
        ctxMap.textBaseline = "middle";
        ctxMap.fillText("SRV-01", cX, cY);

        // Render packets
        for (let i = packets.length - 1; i >= 0; i--) {
            let p = packets[i];
            let dx = p.targetX - p.x;
            let dy = p.targetY - p.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < serverNode.r + 5) {
                packets.splice(i, 1);
                continue;
            }

            p.x += (dx / dist) * p.speed;
            p.y += (dy / dist) * p.speed;

            let color = "#00ff66";
            if (p.isAttack) {
                const blocked = checkDdosMitigation(p);
                color = blocked ? "#475569" : "#ff3366";
            }
            
            ctxMap.fillStyle = color;
            ctxMap.beginPath(); ctxMap.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctxMap.fill();
        }

        // Draw clients
        clientNodes.forEach(c => {
            const pulseSize = Math.sin(Date.now() / 200 + c.pulse) * 3 + 8;
            ctxMap.fillStyle = "rgba(0, 255, 102, 0.15)";
            ctxMap.beginPath(); ctxMap.arc(c.x, c.y, pulseSize, 0, Math.PI * 2); ctxMap.fill();
            ctxMap.fillStyle = "#00ff66";
            ctxMap.beginPath(); ctxMap.arc(c.x, c.y, c.r, 0, Math.PI * 2); ctxMap.fill();
        });

        // Draw bots
        if (isDdosActive) {
            botNodes.forEach(b => {
                const pulseSize = Math.sin(Date.now() / 150 + b.pulse) * 2 + 6;
                ctxMap.fillStyle = "rgba(255, 51, 102, 0.12)";
                ctxMap.beginPath(); ctxMap.arc(b.x, b.y, pulseSize, 0, Math.PI * 2); ctxMap.fill();
                ctxMap.fillStyle = "#ff3366";
                ctxMap.beginPath(); ctxMap.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctxMap.fill();
            });
        }
    }

    function drawMitmCanvas() {
        ctxMitm.clearRect(0, 0, mitmCanvas.width, mitmCanvas.height);

        // Draw structural connecting lines
        ctxMitm.strokeStyle = "rgba(255,255,255,0.06)";
        ctxMitm.lineWidth = 2;
        
        ctxMitm.beginPath();
        if (isSysAttackActive) {
            // Route redirected through hacker
            ctxMitm.moveTo(mitmNodes.client.x, mitmNodes.client.y);
            ctxMitm.lineTo(mitmNodes.hacker.x, mitmNodes.hacker.y);
            ctxMitm.lineTo(mitmNodes.router.x, mitmNodes.router.y);
        } else {
            // Direct route
            ctxMitm.moveTo(mitmNodes.client.x, mitmNodes.client.y);
            ctxMitm.lineTo(mitmNodes.router.x, mitmNodes.router.y);
        }
        ctxMitm.stroke();

        // Draw Nodes
        const drawNode = (node, color, pulseColor) => {
            const pulse = Math.sin(Date.now() / 300) * 3 + 12;
            ctxMitm.fillStyle = pulseColor;
            ctxMitm.beginPath(); ctxMitm.arc(node.x, node.y, pulse + 5, 0, Math.PI * 2); ctxMitm.fill();

            ctxMitm.fillStyle = "#111522";
            ctxMitm.strokeStyle = color;
            ctxMitm.lineWidth = 3;
            ctxMitm.beginPath(); ctxMitm.arc(node.x, node.y, 16, 0, Math.PI * 2); ctxMitm.fill(); ctxMitm.stroke();

            ctxMitm.fillStyle = "white";
            ctxMitm.font = "bold 8px 'Helvetica'";
            ctxMitm.textAlign = "center";
            ctxMitm.textBaseline = "top";
            ctxMitm.fillText(node.name, node.x, node.y + 22);
        };

        drawNode(mitmNodes.client, "#00ff66", "rgba(0, 255, 102, 0.1)");
        drawNode(mitmNodes.router, "#00ccff", "rgba(0, 204, 255, 0.1)");
        
        const hackerGlow = isSysAttackActive ? "rgba(255, 51, 102, 0.15)" : "rgba(100,116,139,0.05)";
        drawNode(mitmNodes.hacker, isSysAttackActive ? "#ff3366" : "#475569", hackerGlow);

        // Draw network text metrics
        ctxMitm.fillStyle = "#64748b";
        ctxMitm.font = "9px 'Fira Code'";
        ctxMitm.textAlign = "left";
        ctxMitm.fillText("Subnet: 10.0.4.0/24", 20, 20);

        // Animate packets flowing
        for (let i = mitmPackets.length - 1; i >= 0; i--) {
            let p = mitmPackets[i];
            let currentTarget = p.path[p.progress];
            
            if (!currentTarget) {
                mitmPackets.splice(i, 1);
                continue;
            }

            let dx = currentTarget.x - p.x;
            let dy = currentTarget.y - p.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 10) {
                p.progress++;
                if (p.progress >= p.path.length) {
                    // Packet completed connection!
                    mitmPackets.splice(i, 1);
                }
                continue;
            }

            p.x += (dx / dist) * 3.5;
            p.y += (dy / dist) * 3.5;

            // Draw packet
            ctxMitm.fillStyle = p.secure ? "#00ff66" : "#ffcc00";
            ctxMitm.beginPath(); ctxMitm.arc(p.x, p.y, 4, 0, Math.PI * 2); ctxMitm.fill();

            // Sniff packet credentials
            if (isSysAttackActive && currentTarget === mitmNodes.hacker && dist < 12) {
                if (p.secure) {
                    emitSysConsole(`[MITM SNIFFER] Intercepted payload from 10.0.4.20 -> Data: Encrypted TLS handshake (Gibberish)`);
                } else {
                    emitSysConsole(`[MITM SNIFFER] Intercepted Plaintext packet! admin:password123 -> HTTP POST /login`, "alert");
                    emitLog(`[SECURITY ALERT] MitM attacker sniffed unencrypted admin password credentials!`, "alert");
                }
            }
        }
    }

    function drawBandwidthChart() {
        const w = chartBandwidthCanvas.width;
        const h = chartBandwidthCanvas.height;
        ctxBandwidth.clearRect(0, 0, w, h);

        let maxVal = 0.5;
        for(let i=0; i<historyLimit; i++) {
            const sum = historyLegitBandwidth[i] + historyAttackBandwidth[i] + historyMitigatedBandwidth[i];
            if (sum > maxVal) maxVal = sum;
        }
        
        ctxBandwidth.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctxBandwidth.lineWidth = 1;
        
        for(let x = 0; x < w; x += w / 8) {
            ctxBandwidth.beginPath(); ctxBandwidth.moveTo(x, 0); ctxBandwidth.lineTo(x, h); ctxBandwidth.stroke();
        }
        for(let y = 0; y < h; y += h / 4) {
            ctxBandwidth.beginPath(); ctxBandwidth.moveTo(0, y); ctxBandwidth.lineTo(w, y); ctxBandwidth.stroke();
        }

        // Area: legit bandwidth
        ctxBandwidth.fillStyle = "rgba(0, 255, 102, 0.1)";
        ctxBandwidth.beginPath(); ctxBandwidth.moveTo(0, h);
        for(let i = 0; i < historyLimit; i++) {
            const x = (i / (historyLimit - 1)) * w;
            const y = h - (historyLegitBandwidth[i] / maxVal) * (h - 10);
            ctxBandwidth.lineTo(x, y);
        }
        ctxBandwidth.lineTo(w, h); ctxBandwidth.closePath(); ctxBandwidth.fill();

        ctxBandwidth.strokeStyle = "#00ff66";
        ctxBandwidth.lineWidth = 1.5;
        ctxBandwidth.beginPath();
        for(let i = 0; i < historyLimit; i++) {
            const x = (i / (historyLimit - 1)) * w;
            const y = h - (historyLegitBandwidth[i] / maxVal) * (h - 10);
            if (i === 0) ctxBandwidth.moveTo(x, y); else ctxBandwidth.lineTo(x, y);
        }
        ctxBandwidth.stroke();

        // Area: attack bandwidth
        if (isDdosActive) {
            ctxBandwidth.fillStyle = "rgba(255, 51, 102, 0.15)";
            ctxBandwidth.beginPath(); ctxBandwidth.moveTo(0, h);
            for(let i = 0; i < historyLimit; i++) {
                const x = (i / (historyLimit - 1)) * w;
                const totalVal = historyLegitBandwidth[i] + historyAttackBandwidth[i];
                const y = h - (totalVal / maxVal) * (h - 10);
                ctxBandwidth.lineTo(x, y);
            }
            ctxBandwidth.lineTo(w, h); ctxBandwidth.closePath(); ctxBandwidth.fill();

            ctxBandwidth.strokeStyle = "#ff3366";
            ctxBandwidth.lineWidth = 1.5;
            ctxBandwidth.beginPath();
            for(let i = 0; i < historyLimit; i++) {
                const x = (i / (historyLimit - 1)) * w;
                const totalVal = historyLegitBandwidth[i] + historyAttackBandwidth[i];
                const y = h - (totalVal / maxVal) * (h - 10);
                if (i === 0) ctxBandwidth.moveTo(x, y); else ctxBandwidth.lineTo(x, y);
            }
            ctxBandwidth.stroke();
        }

        ctxBandwidth.fillStyle = "#64748b";
        ctxBandwidth.font = "8px 'Fira Code'";
        ctxBandwidth.textAlign = "left";
        ctxBandwidth.fillText(`MAX: ${maxVal.toFixed(2)} Gbps`, 5, 10);
    }

    function drawConnectionsChart() {
        const w = chartConnectionsCanvas.width;
        const h = chartConnectionsCanvas.height;
        ctxConnections.clearRect(0, 0, w, h);

        ctxConnections.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctxConnections.lineWidth = 1;
        for(let x = 0; x < w; x += w / 8) {
            ctxConnections.beginPath(); ctxConnections.moveTo(x, 0); ctxConnections.lineTo(x, h); ctxConnections.stroke();
        }
        for(let y = 0; y < h; y += h / 4) {
            ctxConnections.beginPath(); ctxConnections.moveTo(0, y); ctxConnections.lineTo(w, y); ctxConnections.stroke();
        }

        // Connection pool area
        ctxConnections.fillStyle = "rgba(0, 204, 255, 0.12)";
        ctxConnections.beginPath(); ctxConnections.moveTo(0, h);
        for(let i = 0; i < historyLimit; i++) {
            const x = (i / (historyLimit - 1)) * w;
            const y = h - (historyConnections[i] / maxConnections) * (h - 10);
            ctxConnections.lineTo(x, y);
        }
        ctxConnections.lineTo(w, h); ctxConnections.closePath(); ctxConnections.fill();

        ctxConnections.strokeStyle = "#00ccff";
        ctxConnections.lineWidth = 1.5;
        ctxConnections.beginPath();
        for(let i = 0; i < historyLimit; i++) {
            const x = (i / (historyLimit - 1)) * w;
            const y = h - (historyConnections[i] / maxConnections) * (h - 10);
            if (i === 0) ctxConnections.moveTo(x, y); else ctxConnections.lineTo(x, y);
        }
        ctxConnections.stroke();

        // Latency line overlay
        ctxConnections.strokeStyle = "rgba(255, 204, 0, 0.75)";
        ctxConnections.lineWidth = 1.5;
        ctxConnections.setLineDash([3, 3]);
        ctxConnections.beginPath();
        
        let maxLatency = 200.0;
        for(let i=0; i<historyLimit; i++) {
            if (historyLatency[i] > maxLatency) maxLatency = historyLatency[i];
        }

        for(let i = 0; i < historyLimit; i++) {
            const x = (i / (historyLimit - 1)) * w;
            const y = h - (historyLatency[i] / maxLatency) * (h - 10);
            if (i === 0) ctxConnections.moveTo(x, y); else ctxConnections.lineTo(x, y);
        }
        ctxConnections.stroke();
        ctxConnections.setLineDash([]);

        ctxConnections.fillStyle = "#64748b";
        ctxConnections.font = "8px 'Fira Code'";
        ctxConnections.textAlign = "left";
        ctxConnections.fillText(`CONNS: ${maxConnections} MAX`, 5, 10);
        ctxConnections.fillText(`LATENCY: ${Math.round(maxLatency)}ms MAX`, 5, 20);
    }

    function resizeCanvases() {
        const mapRect = mapCanvas.parentElement.getBoundingClientRect();
        mapCanvas.width = mapRect.width;
        mapCanvas.height = Math.max(mapRect.height, 280);
        serverNode.x = mapCanvas.width / 2;
        serverNode.y = mapCanvas.height / 2;

        const bwRect = chartBandwidthCanvas.parentElement.getBoundingClientRect();
        chartBandwidthCanvas.width = bwRect.width;
        chartBandwidthCanvas.height = 120;
        
        const connRect = chartConnectionsCanvas.parentElement.getBoundingClientRect();
        chartConnectionsCanvas.width = connRect.width;
        chartConnectionsCanvas.height = 120;

        const mitmRect = mitmCanvas.parentElement.getBoundingClientRect();
        mitmCanvas.width = mitmRect.width;
        mitmCanvas.height = Math.max(mitmRect.height, 280);
        
        mitmNodes.client.x = mitmCanvas.width * 0.15;
        mitmNodes.client.y = mitmCanvas.height * 0.35;
        mitmNodes.router.x = mitmCanvas.width * 0.85;
        mitmNodes.router.y = mitmCanvas.height * 0.35;
        mitmNodes.hacker.x = mitmCanvas.width * 0.5;
        mitmNodes.hacker.y = mitmCanvas.height * 0.75;

        recreateDdosNodes();
    }

    // ==================== THREAT KNOWLEDGE BASE ====================
    const eduContent = document.getElementById("edu-content");

    function updateEducationalContent() {
        let contentHtml = "";

        if (activeTabId === "ddos-tab") {
            if (!isDdosActive) {
                contentHtml = `
                    <h3 class="highlight-title">DDoS Lab Guide</h3>
                    <p>Observe network load metrics. Select a vector like <strong>HTTP Flood</strong> or <strong>TCP SYN Flood</strong> to launch a volumetric attack against the web server.</p>
                    <h4>⚡ Key Exercises:</h4>
                    <ul>
                        <li>Compare <strong>UDP Flood</strong> (large bandwidth spikes) against <strong>Slowloris</strong> (low bandwidth, connection pool bind).</li>
                        <li>Verify why <strong>WAF Filter</strong> fails to defend against SYN Floods while <strong>Cloud Scrubbing</strong> handles them easily.</li>
                    </ul>
                `;
            } else {
                contentHtml = `<h3 class="red-title">Active Threat: ${selectedDdosVector.replace("_", " ").toUpperCase()}</h3>`;
                switch(selectedDdosVector) {
                    case "http_flood":
                        contentHtml += `
                            <p>Bots request intensive dynamically-compiled database reports. This exhausts CPU scheduling threads on the host.</p>
                            <h4>🛡️ Best Counter:</h4>
                            <p>Enable <strong>Rate Limiting</strong> or <strong>WAF filters</strong> early in the pipeline.</p>
                        `;
                        break;
                    case "syn_flood":
                        contentHtml += `
                            <p>Bots flood targets with TCP SYN packets, omitting final handshakes. Backlog queues fill up immediately.</p>
                            <h4>🛡️ Best Counter:</h4>
                            <p><strong>Cloud Scrubbing</strong> offloads state verification using SYN Cookies.</p>
                        `;
                        break;
                    case "udp_flood":
                        contentHtml += `
                            <p>High-rate volumetric UDP packets choke interface cards, causing high Gbps bandwidth spikes.</p>
                            <h4>🛡️ Best Counter:</h4>
                            <p><strong>Cloud Scrubbing</strong> to absorb volumetric packets.</p>
                        `;
                        break;
                    case "slowloris":
                        contentHtml += `
                            <p>Low-and-slow HTTP thread exhaustion. CPU usage remains very low, but available HTTP threads drop to zero.</p>
                            <h4>🛡️ Best Counter:</h4>
                            <p><strong>WAF Filters</strong> or tight connection timeouts.</p>
                        `;
                        break;
                    case "dns_amp":
                        contentHtml += `
                            <p>Volumetric amplification. The attacker sends queries with forged victim IP headers to open DNS resolvers, reflecting massive payloads back to target.</p>
                            <h4>🛡️ Best Counter:</h4>
                            <p><strong>Cloud Scrubbing</strong> or <strong>IP reputation</strong> filters to drop resolver queries.</p>
                        `;
                        break;
                }
            }
        } 
        else if (activeTabId === "web-tab") {
            const vector = selectWebVector.value;
            if (vector === "sqli") {
                contentHtml = `
                    <h3 class="highlight-title">SQL Injection Lab</h3>
                    <p>Attacker inserts SQL syntax parameters inside inputs to manipulate dynamic query command interpretation.</p>
                    <h4>🛡️ Countermeasures:</h4>
                    <ul>
                        <li><strong>Prepared Statements (Parameterization):</strong> Isolates input values from instruction commands, rendering injections inert.</li>
                        <li><strong>Input Sanitization:</strong> Strips quotes.</li>
                    </ul>
                `;
            } else if (vector === "xss") {
                contentHtml = `
                    <h3 class="highlight-title">Stored XSS Lab</h3>
                    <p>Stored Cross-Site Scripting (XSS) deposits client-side scripts inside databases. When other users fetch the page, the script executes, stealing cookies or session credentials.</p>
                    <h4>🛡️ Countermeasures:</h4>
                    <ul>
                        <li><strong>HTML Entity Encoding:</strong> Converts characters like <code>&lt;</code> to safe text markers (<code>&amp;lt;</code>).</li>
                    </ul>
                `;
            } else if (vector === "csrf") {
                contentHtml = `
                    <h3 class="highlight-title">CSRF Vulnerability Lab</h3>
                    <p>Cross-Site Request Forgery (CSRF) tricks a user's browser into submitting state-changing requests to a site they are logged into.</p>
                    <h4>🛡️ Countermeasures:</h4>
                    <ul>
                        <li><strong>Anti-CSRF Tokens:</strong> Injects unique secret tokens inside forms that must match on server-side evaluation.</li>
                    </ul>
                `;
            }
        }
        else if (activeTabId === "auth-tab") {
            contentHtml = `
                <h3 class="highlight-title">Credential Stuffing Lab</h3>
                <p>Automated scanning engines attempt millions of common passwords against usernames to compromise platforms.</p>
                <h4>🛡️ Countermeasures:</h4>
                <ul>
                    <li><strong>Account Lockout:</strong> Halts attacks after 3 failures.</li>
                    <li><strong>CAPTCHA:</strong> Blocks automated browser threads entirely.</li>
                    <li><strong>MFA:</strong> Prevents bypass even if the password matches.</li>
                </ul>
            `;
        }
        else if (activeTabId === "sys-tab") {
            if (activeSysVector === "mitm") {
                contentHtml = `
                    <h3 class="highlight-title">Man-in-the-Middle (MitM)</h3>
                    <p>Simulates local ARP Poisoning. The attacker broadcasts spoofed MAC layouts, intercepting subnet packet flow.</p>
                    <h4>🛡️ Best Counter:</h4>
                    <p><strong>HTTPS / TLS Encryption:</strong> Even if packets flow through the attacker, they are encrypted and cannot be sniffed.</p>
                `;
            } else {
                contentHtml = `
                    <h3 class="highlight-title">Ransomware Simulator</h3>
                    <p>Simulates zero-day malware executing local shell loops, encrypting directories, and uploading files to remote exfiltration servers.</p>
                    <h4>🛡️ Best Counter:</h4>
                    <p><strong>Endpoint Anti-Malware</strong> blocks execution. <strong>Backup Restores</strong> restore snapshot databases.</p>
                `;
            }
        }

        eduContent.innerHTML = contentHtml;
    }

    // ==================== INIT ENGINE ====================
    window.addEventListener("resize", resizeCanvases);
    
    function mainLoop() {
        updateSimulation();
        if (activeTabId === "ddos-tab") {
            drawMap();
            drawBandwidthChart();
            drawConnectionsChart();
        } else if (activeTabId === "sys-tab" && activeSysVector === "mitm") {
            drawMitmCanvas();
        }
        requestAnimationFrame(mainLoop);
    }

    // Initial setups
    resizeCanvases();
    loadWebTemplates("sqli");
    updateBackendCodeView();
    renderCommentsList();
    updateEducationalContent();
    
    // Start loop
    requestAnimationFrame(mainLoop);

    // ==================== BRANDED TAB TITLE ROTATION ====================
    const brandTitles = [
        "ShieldCore Security Lab \u2014 staexl",
        "staexl // ShieldCore v1.1",
        "\u27D0 ShieldCore \u2014 Multi-Vector Lab",
        "staexl systems \u2014 Security Sandbox"
    ];
    let titleIndex = 0;
    setInterval(() => {
        document.title = brandTitles[titleIndex];
        titleIndex = (titleIndex + 1) % brandTitles.length;
    }, 5000);

    emitLog("ShieldCore Cybersecurity Sandbox initialized. Modules loaded. // staexl systems", "success");
});
