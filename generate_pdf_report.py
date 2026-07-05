import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

OUTPUT_PDF = r'E:\Ai\DDoSSimulator\DDoS_Simulator_Report.pdf'

# ── Color Palette (Dark Cyber Theme) ──
BG_PRIMARY = colors.HexColor('#0b0c10')
BG_CARD    = colors.HexColor('#131722')
ACCENT     = colors.HexColor('#00ccff')   # Cyber Cyan
GREEN      = colors.HexColor('#00ff66')   # Safe Green
RED        = colors.HexColor('#ff3366')   # Alert Red
YELLOW     = colors.HexColor('#ffcc00')   # Warning Amber
TEXT_MAIN  = colors.HexColor('#e2e8f0')   # Cool White
TEXT_MUTED = colors.HexColor('#64748b')   # Slate Gray
SURFACE    = colors.HexColor('#1f2937')   # Border Dark

def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_PDF,
        pagesize=A4,
        leftMargin=1.8*cm, rightMargin=1.8*cm,
        topMargin=2.0*cm, bottomMargin=2.0*cm,
        title='ShieldCore Security Lab Manual',
        author='ShieldCore Development Team',
    )
    
    styles = getSampleStyleSheet()
    
    style_cover_title = ParagraphStyle(
        'CoverTitle',
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=30,
        textColor=ACCENT,
        alignment=TA_CENTER,
        spaceAfter=10
    )
    
    style_cover_sub = ParagraphStyle(
        'CoverSubtitle',
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=TEXT_MUTED,
        alignment=TA_CENTER,
        spaceAfter=25
    )
    
    style_h1 = ParagraphStyle(
        'Header1',
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=ACCENT,
        spaceBefore=14,
        spaceAfter=5,
        keepWithNext=True
    )
    
    style_h2 = ParagraphStyle(
        'Header2',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=YELLOW,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )
    
    style_body = ParagraphStyle(
        'BodyMain',
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=TEXT_MAIN,
        spaceAfter=4
    )
    
    style_bullet = ParagraphStyle(
        'BulletPoint',
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=TEXT_MAIN,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=3
    )
    
    style_th = ParagraphStyle(
        'TableHeader',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=ACCENT
    )
    
    style_td = ParagraphStyle(
        'TableCell',
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=TEXT_MAIN
    )

    def hr(color=SURFACE):
        return HRFlowable(width='100%', thickness=1.2, color=color, spaceAfter=8, spaceBefore=4)
    
    def sp(height=10):
        return Spacer(1, height)

    def p_body(text):
        return Paragraph(text, style_body)

    def p_bullet(text):
        return Paragraph(f'• {text}', style_bullet)

    def build_table(headers, rows, widths=None):
        data = [[Paragraph(f'<b>{h}</b>', style_th) for h in headers]]
        for row in rows:
            data.append([Paragraph(str(cell), style_td) for cell in row])
        t = Table(data, colWidths=widths, repeatRows=1)
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), BG_CARD),
            ('BOTTOMPADDING', (0,0), (-1,0), 5),
            ('TOPPADDING', (0,0), (-1,0), 5),
            ('GRID', (0,0), (-1,-1), 0.5, SURFACE),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('BACKGROUND', (0,1), (-1,-1), BG_PRIMARY),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [BG_PRIMARY, BG_CARD]),
            ('TOPPADDING', (0,1), (-1,-1), 4),
            ('BOTTOMPADDING', (0,1), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 7),
            ('RIGHTPADDING', (0,0), (-1,-1), 7),
        ]))
        return t

    story = []

    # ==================== COVER PAGE ====================
    story.append(sp(40))
    logo_data = [[
        Paragraph('<font size="28" color="#00ccff"><b>SHIELD</b></font><font size="28" color="#e2e8f0"><b>CORE</b></font>', ParagraphStyle('LogoText', fontName='Helvetica-Bold', alignment=TA_CENTER)),
    ]]
    logo_table = Table(logo_data, colWidths=[17*cm])
    logo_table.setStyle(TableStyle([
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LINEBELOW', (0,0), (-1,-1), 2, ACCENT),
        ('BOTTOMPADDING', (0,0), (-1,-1), 12),
    ]))
    story.append(logo_table)
    story.append(sp(20))
    
    story.append(Paragraph('MULTI-VECTOR SECURITY LAB MANUAL', style_cover_title))
    story.append(Paragraph('Technical Operation, Vulnerability Mechanics, and Mitigation Strategies<br/>Made by staexl', style_cover_sub))
    story.append(hr(ACCENT))
    story.append(sp(20))

    meta_info = [
        ['Classification', 'Technical Security Laboratory Training Manual'],
        ['Lab Interface', 'Multi-Tab Cybersecurity Security Sandbox v1.1'],
        ['Developer/Brand', 'staexl Security Solutions'],
        ['Vulnerabilities Covered', '10 Vectors: DDoS, SQLi, Stored XSS, CSRF, Brute Force, MitM, Ransomware'],
        ['System Target Host', 'www.securevault.local [IP: 10.0.4.88]'],
        ['Release Date', 'June 2026'],
    ]
    meta_table = Table(
        [[Paragraph(f'<b>{k}</b>', ParagraphStyle('MetaK', fontName='Helvetica-Bold', fontSize=9, textColor=TEXT_MUTED, leading=13)),
          Paragraph(v, ParagraphStyle('MetaV', fontName='Helvetica', fontSize=9, textColor=TEXT_MAIN, leading=13))]
         for k, v in meta_info],
        colWidths=[5*cm, 11*cm]
    )
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG_CARD),
        ('GRID', (0,0), (-1,-1), 0.5, SURFACE),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(meta_table)
    story.append(sp(30))

    abstract_text = (
        "<b>LABORATORY OBJECTIVE:</b> This reference manual details the technical implementation, "
        "vulnerability mechanics, and interactive execution guidelines for the ShieldCore Multi-Vector Security Lab. "
        "Students will explore hands-on threat vectors spanning from Network Infrastructures (Layer 3/4) to "
        "Web Application flaws (Layer 7) and Terminal Device compromises, verifying the mathematical and structural "
        "feedback of mitigation configurations."
    )
    abstract_table = Table([[Paragraph(abstract_text, ParagraphStyle('Abs', fontName='Helvetica', fontSize=9, leading=13, textColor=YELLOW))]], colWidths=[16*cm])
    abstract_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#1b1e15')),
        ('BOX', (0,0), (-1,-1), 1, YELLOW),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(abstract_table)
    story.append(PageBreak())

    # ==================== SECTION 1 ====================
    story.append(Paragraph('1. Laboratory Layout & Interactive Architecture', style_h1))
    story.append(hr())
    story.append(p_body(
        "The ShieldCore Security Sandbox compiles 4 distinct training tabs into a single responsive web panel. "
        "Each tab features specialized inputs, dynamic backend code viewers, visual sandboxes, and dedicated log consoles."
    ))
    story.append(sp(4))
    
    story.append(Paragraph('1.1 DDoS & Volumetric Lab (Tab 1)', style_h2))
    story.append(p_body(
        "Focuses on infrastructure and application layer traffic floods. Telemetry variables (CPU, socket count, latency, success rates) "
        "are evaluated at 60Hz. Packets blocked at the firewall level are colored gray on the Canvas to show scrubbing effectiveness."
    ))
    
    story.append(Paragraph('1.2 Web Vulnerabilities Lab (Tab 2)', style_h2))
    story.append(p_body(
        "Models server-side and client-side logic flaws. Incorporates an interactive administrative directory database search (SQLi), "
        "guestbook comment board (XSS), and a split frame comparing bank transaction forms to a cross-site malicious giveaway website (CSRF)."
    ))

    story.append(Paragraph('1.3 Authentication Security Lab (Tab 3)', style_h2))
    story.append(p_body(
        "Simulates automated credential stuffing and dictionary attacks. Models account lockouts, CAPTCHAs, IP throttling, and "
        "multi-factor token validations."
    ))

    story.append(Paragraph('1.4 Network & System Lab (Tab 4)', style_h2))
    story.append(p_body(
        "Models localized ARP Poisoning to capture plaintext passwords, alongside terminal ransomware worms that encrypt mock directories "
        "and exfiltrate files to remote command servers."
    ))
    
    story.append(PageBreak())

    # ==================== SECTION 2 ====================
    story.append(Paragraph('2. Analysis of the 10 Simulated Attack Vectors', style_h1))
    story.append(hr())
    
    story.append(Paragraph('2.1 HTTP Flood (L7)', style_h2))
    story.append(p_body("Spams dynamic database queries to consume 100% server CPU resources, queuing legitimate connections."))
    
    story.append(Paragraph('2.2 TCP SYN Flood (L4)', style_h2))
    story.append(p_body("Sends streams of SYN packets from spoofed IPs. Leaves connection backlog sockets (SYN_RECV) half-open, refusing new users."))

    story.append(Paragraph('2.3 UDP Flood (L3/4)', style_h2))
    story.append(p_body("Overwhelms firewall network bandwidth (Gbps) by flooding random ports, forcing ICMP checks."))

    story.append(Paragraph('2.4 Slowloris (L7)', style_h2))
    story.append(p_body("Holds connection threads open by sending HTTP headers extremely slowly, starving web servers without consuming CPU."))

    story.append(Paragraph('2.5 DNS Amplification (L3/4 Reflected)', style_h2))
    story.append(p_body("Forwards queries with forged victim IP headers to open DNS resolvers, reflecting massive amplified packet payloads to the target."))

    story.append(Paragraph('2.6 SQL Injection (SQLi)', style_h2))
    story.append(p_body("Injects database escape parameters (e.g. <code>' OR '1'='1</code>) to alter query logic, bypassing logins or dumping tables."))

    story.append(Paragraph('2.7 Stored Cross-Site Scripting (XSS)', style_h2))
    story.append(p_body("Stores malicious script payloads (e.g. <code>&lt;script&gt;</code>) inside databases, executing in the browsers of subsequent visitors to harvest session cookies."))

    story.append(Paragraph('2.8 Cross-Site Request Forgery (CSRF)', style_h2))
    story.append(p_body("Tricks a user browser into executing unauthorized transfers on a logged-in bank portal from a malicious external site."))

    story.append(Paragraph('2.9 Credential Stuffing & Dictionary Attacks', style_h2))
    story.append(p_body("Automates dictionary checks against login forms to compromise accounts using compromised database wordlists."))

    story.append(Paragraph('2.10 Man-in-the-Middle (MitM) & Ransomware', style_h2))
    story.append(p_body("MitM uses ARP Poisoning to intercept LAN traffic, capturing unencrypted passwords. Ransomware executes local directory locks, renaming files to .locked and exfiltrating data."))

    story.append(PageBreak())

    # ==================== SECTION 3 ====================
    story.append(Paragraph('3. Defense Mechanisms & OSI Mapping', style_h1))
    story.append(hr())
    story.append(p_body(
        "A proper defensive configuration requires a defense-in-depth posture. The table below maps simulated defenses to their targets:"
    ))
    story.append(sp(8))

    def_headers = ['Defense Control', 'OSI Layer', 'Mitigated Attacks', 'Limitation']
    def_rows = [
        ['Rate Limiting', 'Layer 4/7', 'HTTP Flood, Slowloris, Brute Force', 'Can be bypassed by highly distributed botnets'],
        ['L7 WAF Rules', 'Layer 7', 'HTTP Flood, SQLi, XSS, Slowloris', 'Adds server CPU overhead; bypassed by L3/4 packets'],
        ['Prepared Statements', 'Database', 'SQL Injection (All types)', 'Does not prevent directory guessing or XSS storage'],
        ['Anti-CSRF Tokens', 'Layer 7', 'Cross-Site Request Forgery', 'Requires active state management and cookie audits'],
        ['Cloud Scrubbing', 'Network', 'UDP Flood, DNS Amplification, SYN Flood', 'Higher cost; adds small latency to standard packets'],
        ['TLS/HTTPS Encryption', 'Session/7', 'Man-in-the-Middle sniffing', 'Does not prevent ransomware execution on terminals'],
    ]
    story.append(build_table(def_headers, def_rows, widths=[3.2*cm, 2.2*cm, 5.2*cm, 5.4*cm]))
    story.append(sp(12))

    # ==================== SECTION 4 ====================
    story.append(Paragraph('4. Step-by-Step Training Scenarios', style_h1))
    story.append(hr())
    
    story.append(Paragraph('Scenario A: SQL Injection & Parameterization', style_h2))
    story.append(p_bullet("Navigate to <b>Web Vulnerabilities</b> tab and select <b>SQL Injection</b>."))
    story.append(p_bullet("Observe the backend code. Click <b>Auth Bypass</b> template. Click Search. Notice that all database codes are leaked."))
    story.append(p_bullet("Toggle <b>Parameterized Queries</b>. Look at the backend code. Run search again. Notice that zero records are returned (safe)."))

    story.append(Paragraph('Scenario B: CSRF Bank Transfers & Tokens', style_h2))
    story.append(p_bullet("In <b>Web Vulnerabilities</b> tab, select <b>Cross-Site Request Forgery</b>."))
    story.append(p_bullet("Observe your current bank balance of $10,000 on the left mock browser. Now, click the red <b>Claim free prize</b> button on the right promotional browser."))
    story.append(p_bullet("The balance immediately drops to $7,000. Look at the console logs showing the session cookie blind authentication hijack."))
    story.append(p_bullet("Toggle <b>Anti-CSRF Tokens</b>. Click claim prize again. The transfer fails with a 403 Forbidden code."))

    story.append(Paragraph('Scenario C: Credential Stuffing & Lockouts', style_h2))
    story.append(p_bullet("Go to <b>Authentication</b> tab. Select <b>Dictionary Attack</b>. Press <b>Start Attack</b>."))
    story.append(p_bullet("Watch the scan monitor rapidly try leaked passwords. The database matches 'password123' and access is compromised."))
    story.append(p_bullet("Toggle <b>Account Lockout</b>. Reset and start attack. Notice that the portal logs a lock warning and blocks scanning after 3 failures."))

    story.append(Paragraph('Scenario D: ARP Spoofing & HTTPS', style_h2))
    story.append(p_bullet("Go to <b>Network & System</b> tab. Select <b>Man-in-the-Middle</b>. Press <b>Engage Attack</b>."))
    story.append(p_bullet("Watch the animation route packet flows through the attacker. Look at the sniffer logs dumping client credentials in plaintext."))
    story.append(p_bullet("Toggle <b>HTTPS Encryption</b>. Packets turn green. Sniffer logs readouts show encrypted strings. Credentials remain secure."))

    story.append(sp(20))
    story.append(Paragraph('5. Conclusion', style_h1))
    story.append(hr())
    story.append(p_body(
        "The ShieldCore sandbox demonstrates that modern security requires target-specific controls. "
        "Applying parameterized database statements is the only standard protection against SQL injections, "
        "just as cloud scrubbing centers are required to handle volumetric UDP or reflected DNS amplification attacks. "
        "This laboratory provides developers and engineers a safe, zero-risk interface to test, visualize, and "
        "understand these critical cyber threats."
    ))

    # ==================== Background Draw Functions ====================
    def draw_dark_background(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(BG_PRIMARY)
        canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
        canvas.setStrokeColor(ACCENT)
        canvas.setLineWidth(1)
        canvas.line(1.8*cm, A4[1] - 1.2*cm, A4[0] - 1.8*cm, A4[1] - 1.2*cm)
        canvas.setFillColor(TEXT_MUTED)
        canvas.setFont('Helvetica', 8)
        canvas.drawString(1.8*cm, 1*cm, "ShieldCore Cyber Security Laboratory — Made by staexl")
        canvas.drawRightString(A4[0] - 1.8*cm, 1*cm, f"Page {canvas._pageNumber}")
        canvas.restoreState()

    def draw_cover_background(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(BG_PRIMARY)
        canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
        canvas.setFillColor(ACCENT)
        canvas.rect(0, 0, 0.4*cm, A4[1], fill=1, stroke=0)
        canvas.setFillColor(RED)
        canvas.rect(0.4*cm, 0, 0.1*cm, A4[1], fill=1, stroke=0)
        canvas.setFillColor(TEXT_MUTED)
        canvas.setFont('Helvetica', 8)
        canvas.drawString(1.8*cm, 1*cm, "ShieldCore Cyber Security Laboratory — Made by staexl")
        canvas.drawRightString(A4[0] - 1.8*cm, 1*cm, "System Manual v1.1.0")
        canvas.restoreState()

    doc.build(story, onFirstPage=draw_cover_background, onLaterPages=draw_dark_background)
    print(f"PDF successfully compiled at: {OUTPUT_PDF}")

if __name__ == '__main__':
    build_pdf()
