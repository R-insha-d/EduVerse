import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background-color: #000; margin: 0; overflow-x: hidden; }
  .auth-container { display: flex; min-height: 100vh; background-color: #000; color: #fff; font-family: 'Inter', sans-serif; padding: 12px; cursor: none; animation: authFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
  @keyframes authFadeIn {
    0% { opacity: 0; transform: translateY(15px) scale(0.98); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  .auth-left { flex: 1.1; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px; background: radial-gradient(circle at top, rgba(124, 58, 237, 0.6) 0%, rgba(30, 27, 75, 0.4) 40%, rgba(0, 0, 0, 1) 90%); background-color: #0a0a0a; border-radius: 40px; margin: 4px; box-shadow: 0 0 40px rgba(0,0,0,0.5); }
  .auth-left::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 60%; background: linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, transparent 100%); pointer-events: none; }
  .auth-logo { display: flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 700; opacity: 0.95; position: absolute; top: 40px; left: 50%; transform: translateX(-50%); z-index: 10; }
  .auth-left-content { text-align: center; max-width: 480px; z-index: 1; margin-top: 20px; position: relative; }
  .auth-left-content h1 { font-size: 42px; font-weight: 800; margin-bottom: 8px; letter-spacing: -1.5px; line-height: 1.1; }
  .auth-left-content p { color: #a1a1aa; font-size: 16px; line-height: 1.6; margin-bottom: 0px; font-weight: 400; }
  
  /* Cursor Character Styles */
  .stage { width: 100%; min-height: 480px; background: transparent; display: flex; align-items: center; justify-content: center; position: relative; overflow: visible; margin-top: -20px; pointer-events: none; }
  .cursor-char { position: fixed; width: 14px; height: 14px; border-radius: 50%; background: #ff6b35; pointer-events: none; transform: translate(-50%,-50%); z-index: 9999; box-shadow: 0 0 0 5px rgba(255,107,53,0.2); animation: cursorPulse 2s infinite ease-in-out; transition: width 0.2s, height 0.2s; }
  @keyframes cursorPulse {
    0% { transform: translate(-50%,-50%) scale(1); box-shadow: 0 0 0 0px rgba(255,107,53,0.4); }
    50% { transform: translate(-50%,-50%) scale(1.2); box-shadow: 0 0 0 10px rgba(255,107,53,0); }
    100% { transform: translate(-50%,-50%) scale(1); box-shadow: 0 0 0 0px rgba(255,107,53,0.4); }
  }
  .hint { position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.22); font: 12px/1 sans-serif; letter-spacing:.07em; white-space: nowrap; }
  canvas#pc-login { position: absolute; top: 0; left: 0; pointer-events: none; width: 100%; height: 100%; }
  svg#sv-login { position: relative; z-index: 10; overflow: visible; width: 300px; height: 480px; }

  .auth-right { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 40px 80px; background-color: #000; }
  .auth-right-header { text-align: center; margin-bottom: 24px; }
  .auth-right-header h2 { font-size: 30px; font-weight: 800; margin-bottom: 10px; letter-spacing: -0.5px; }
  .auth-right-header p { color: #71717a; font-size: 14px; font-weight: 400; }
  .social-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
  .social-btn { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px; background: transparent; border: 1px solid #27272a; border-radius: 12px; color: #fff; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; font-family: 'Inter', sans-serif; }
  .social-btn:hover { background: rgba(255, 255, 255, 0.05); border-color: #3f3f46; }
  .divider { display: flex; align-items: center; text-align: center; margin: 24px 0; color: #52525b; font-size: 12px; gap: 15px; font-weight: 500; }
  .divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid #18181b; }
  .auth-form { display: flex; flex-direction: column; gap: 18px; }
  .form-group { display: flex; flex-direction: column; gap: 8px; }
  .form-group label { font-size: 13px; font-weight: 600; color: #d4d4d8; }
  .form-label-row { display: flex; align-items: center; justify-content: space-between; }
  .forgot-link { font-size: 12px; color: #a78bfa; text-decoration: none; font-weight: 700; }
  .input-wrapper { position: relative; display: flex; align-items: center; }
  .input-wrapper input { width: 100%; background: #09090b; border: 1px solid #27272a; border-radius: 12px; padding: 12px 18px; color: #fff; font-size: 14px; outline: none; transition: all 0.3s ease; font-family: 'Inter', sans-serif; }
  .input-wrapper input:focus { border-color: #52525b; background-color: #0c0c0e; }
  .input-wrapper input::placeholder { color: #3f3f46; }
  .password-toggle { position: absolute; right: 16px; background: none; border: none; color: #52525b; cursor: pointer; display: flex; align-items: center; padding: 0; }
  .remember-row { display: flex; align-items: center; gap: 10px; margin-top: 4px; }
  .remember-row input[type="checkbox"] { width: 16px; height: 16px; accent-color: #7c3aed; cursor: pointer; }
  .remember-row label { font-size: 13px; color: #a1a1aa; cursor: pointer; font-weight: 500; }
  .submit-btn { margin-top: 10px; padding: 16px; background: #fff; color: #000; border: none; border-radius: 12px; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); font-family: 'Inter', sans-serif; width: 100%; text-decoration: none; text-align: center; display: block; }
  .submit-btn:hover { background: #f4f4f5; transform: translateY(-1px); box-shadow: 0 10px 20px rgba(255,255,255,0.05); }
  .auth-footer { text-align: center; margin-top: 24px; font-size: 14px; color: #71717a; }
  .auth-footer a { color: #fff; text-decoration: none; font-weight: 700; }
  @media (max-width: 1200px) { .auth-right { padding: 40px 60px; } }
  @media (max-width: 900px) { .auth-left { display: none; } .auth-right { padding: 40px 20px; flex: 1; } }
`;

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    </svg>
);

const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const EyeIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>);
const EyeOffIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>);

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        const stage = document.getElementById('stage-login');
        if (!stage) return;
        const cur = document.getElementById('cur-login');
        const pc = document.getElementById('pc-login');
        const pctx = pc.getContext('2d');
        const shd = document.getElementById('shadow-login');

        const g = {
            root: document.getElementById('gRoot-login'),
            back: document.getElementById('gBack-login'),
            torso: document.getElementById('gTorso-login'),
            head: document.getElementById('gHead-login'),
            lShoulder: document.getElementById('gLShoulder-login'),
            rShoulder: document.getElementById('gRShoulder-login'),
            lElbow: document.getElementById('gLElbow-login'),
            rElbow: document.getElementById('gRElbow-login'),
            lHip: document.getElementById('gLHip-login'),
            rHip: document.getElementById('gRHip-login'),
            lKnee: document.getElementById('gLKnee-login'),
            rKnee: document.getElementById('gRKnee-login'),
            el: document.getElementById('el-login'),
            er: document.getElementById('er-login'),
            smile: document.getElementById('smile-login'),
        };

        const P = {
            root: [155, 310], torso: [140, 205], head: [140, 203],
            lShoulder: [82, 208], rShoulder: [198, 208],
            lElbow: [72, 255], rElbow: [206, 255],
            lHip: [120, 304], rHip: [160, 304],
            lKnee: [116, 372], rKnee: [163, 372],
        };

        function setRot(el, px, py, rad) {
            if (!el) return;
            const deg = rad * 180 / Math.PI;
            el.setAttribute('transform', `rotate(${deg} ${px} ${py})`);
        }

        let rawX = 0, rawY = 0;
        let W = 0, H = 0;

        function resize() {
            W = stage.offsetWidth;
            H = stage.offsetHeight;
            pc.width = W;
            pc.height = H;
        }
        resize();
        window.addEventListener('resize', resize);

        const handleMove = (e) => {
            const r = stage.getBoundingClientRect();
            rawX = e.clientX - r.left;
            rawY = e.clientY - r.top;
            cur.style.left = e.clientX + 'px';
            cur.style.top = e.clientY + 'px';
        };

        window.addEventListener('mousemove', handleMove);

        function lerp(a, b, t) { return a + (b - a) * t; }
        function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

        let s = {
            rootR: 0, rootX: 0, rootY: 0, torsoR: 0, headR: 0, headY: 0,
            lShR: 0, rShR: 0, lElR: 0, rElR: 0, lHipR: 0, rHipR: 0, lKnR: 0, rKnR: 0
        };

        let tick = 0;
        const pts = Array.from({ length: 30 }, () => ({
            x: Math.random() * 900, y: Math.random() * 640,
            r: Math.random() * 1.5 + 0.4,
            vx: (Math.random() - .5) * .25,
            vy: -Math.random() * .35 - .1,
            a: Math.random() * .35 + .1,
            h: Math.random() * 40 + 240
        }));

        function drawPts() {
            pctx.clearRect(0, 0, W, H);
            pts.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
                pctx.beginPath();
                pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                pctx.fillStyle = `hsla(${p.h},70%,60%,${p.a})`;
                pctx.fill();
            });
        }

        let animFrame;
        function animate() {
            tick += 0.02;
            const sx = (rawX / W) - 0.5;
            const sy = (rawY / H) - 0.5;
            const svgEl = document.getElementById('sv-login');
            if (!svgEl) return;
            const sRect = svgEl.getBoundingClientRect();
            const stRect = stage.getBoundingClientRect();
            const charX = (sRect.left - stRect.left) + sRect.width * 0.47;
            const charY = (sRect.top - stRect.top) + sRect.height * 0.45;
            const dx = rawX - charX, dy = rawY - charY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const t = {
                rootR: clamp(sx * 0.30, -.22, .22),
                rootX: clamp(sx * 22, -18, 18),
                rootY: Math.sin(tick * 2) * 6 + (dist < 110 ? -12 : 0),
                torsoR: clamp(sx * 0.13, -.11, .11),
                headR: clamp(sx * 0.52, -.40, .40),
                headY: clamp(sy * 16, -14, 14),
                lShR: clamp(-sy * .60 - .06, -.90, .40),
                rShR: clamp(-sy * .50 + .10, -.80, .50),
                lElR: clamp(-sy * .35, -.55, .65),
                rElR: clamp(-sy * .28 + .08, -.45, .60),
                lHipR: clamp(sx * .20 + Math.sin(tick * 2.1) * .07, -.32, .32),
                rHipR: clamp(-sx * .20 + Math.cos(tick * 2.1) * .07, -.32, .32),
                lKnR: clamp(-s.lHipR * .5, -.28, .28),
                rKnR: clamp(-s.rHipR * .5, -.28, .28),
            };

            const sp = { rootR: .07, rootX: .07, rootY: .10, torsoR: .08, headR: .11, headY: .10, lShR: .09, rShR: .09, lElR: .09, rElR: .09, lHipR: .09, rHipR: .09, lKnR: .10, rKnR: .10 };
            for (const k in t) s[k] = lerp(s[k] || 0, t[k], sp[k] || .08);

            const deg = r => (r * 180 / Math.PI).toFixed(4);
            g.root.setAttribute('transform', `translate(${s.rootX.toFixed(2)} ${s.rootY.toFixed(2)}) rotate(${deg(s.rootR)} ${P.root[0]} ${P.root[1]})`);
            setRot(g.torso, P.torso[0], P.torso[1], s.torsoR);
            g.head.setAttribute('transform', `translate(0 ${s.headY.toFixed(2)}) rotate(${deg(s.headR)} ${P.head[0]} ${P.head[1]})`);
            setRot(g.lShoulder, P.lShoulder[0], P.lShoulder[1], s.lShR);
            setRot(g.rShoulder, P.rShoulder[0], P.rShoulder[1], s.rShR);
            setRot(g.lElbow, P.lElbow[0], P.lElbow[1], s.lElR);
            setRot(g.rElbow, P.rElbow[0], P.rElbow[1], s.rElR);
            setRot(g.lHip, P.lHip[0], P.lHip[1], s.lHipR);
            setRot(g.rHip, P.rHip[0], P.rHip[1], s.rHipR);
            setRot(g.lKnee, P.lKnee[0], P.lKnee[1], s.lKnR);
            setRot(g.rKnee, P.rKnee[0], P.rKnee[1], s.rKnR);
            setRot(g.back, 170, 200, -s.torsoR * .6);

            const angle = Math.atan2(rawY - (stRect.top + sRect.top - stRect.top + sRect.height * .31), rawX - (stRect.left + sRect.left - stRect.left + sRect.width * .44));
            const ep = 3.5;
            g.el.setAttribute('cx', 117 + Math.cos(angle) * ep);
            g.el.setAttribute('cy', 160 + Math.sin(angle) * ep);
            g.er.setAttribute('cx', 165 + Math.cos(angle) * ep);
            g.er.setAttribute('cy', 160 + Math.sin(angle) * ep);
            const sw = clamp(15 + dist * .04, 15, 25);
            g.smile.setAttribute('d', `M${140 - sw} 184 Q140 ${dist < 130 ? 200 : 193} ${140 + sw} 184`);
            shd.setAttribute('rx', 65 * (1 - Math.abs(s.rootY) * .007));

            drawPts();
            animFrame = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMove);
            cancelAnimationFrame(animFrame);
        };
    }, []);

    return (
        <><style>{styles}</style><div className="auth-container">
            <div className="auth-left">
                <div className="auth-logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
                    <span>EduVerse</span>
                </div>
                <div className="auth-left-content">
                    <h1>Welcome back</h1>
                    <p>Enter your session to continue managing your digital assets with ease.</p>
                    <div className="stage" id="stage-login">
                        <canvas id="pc-login"></canvas>
                        <svg id="sv-login" width="320" height="520" viewBox="0 0 320 520">
                            <defs>
                                <radialGradient id="skinG-login" cx="45%" cy="35%" r="65%">
                                    <stop offset="0%" stopColor="#5a3018" />
                                    <stop offset="100%" stopColor="#2a1508" />
                                </radialGradient>
                            </defs>
                            <ellipse id="shadow-login" cx="155" cy="498" rx="65" ry="11" fill="rgba(0,0,0,0.5)" />
                            <g id="gRoot-login">
                                <g id="gBack-login">
                                    <rect x="170" y="168" width="48" height="66" rx="12" fill="#7c3aed" />
                                    <rect x="172" y="170" width="44" height="62" rx="10" fill="#8b5cf6" />
                                    <rect x="176" y="183" width="36" height="24" rx="6" fill="#6d28d9" />
                                    <path d="M175 172 Q158 196 161 228" stroke="#5b21b6" strokeWidth="7" fill="none" strokeLinecap="round" />
                                    <path d="M185 172 Q175 196 173 228" stroke="#5b21b6" strokeWidth="5" fill="none" strokeLinecap="round" />
                                    <line x1="172" y1="224" x2="170" y2="242" stroke="#444" strokeWidth="2" />
                                    <circle cx="169" cy="249" r="8" fill="#fb7185" />
                                    <circle cx="169" cy="249" r="5" fill="#fda4af" />
                                </g>
                                <g id="gLShoulder-login">
                                    <rect x="58" y="206" width="28" height="50" rx="14" fill="#f5c400" />
                                    <g id="gLElbow-login">
                                        <rect x="60" y="253" width="24" height="44" rx="12" fill="#f5c400" />
                                        <ellipse cx="72" cy="303" rx="13" ry="11" fill="url(#skinG-login)" />
                                        <rect x="50" y="290" width="44" height="12" rx="3" fill="#dc2626" />
                                        <rect x="50" y="278" width="44" height="12" rx="3" fill="#2563eb" />
                                        <rect x="50" y="266" width="44" height="12" rx="3" fill="#16a34a" />
                                    </g>
                                </g>
                                <g id="gTorso-login">
                                    <rect x="92" y="203" width="96" height="102" rx="26" fill="#f9d100" />
                                    <line x1="140" y1="205" x2="140" y2="303" stroke="#e6b800" strokeWidth="2.5" />
                                    <rect x="110" y="258" width="60" height="30" rx="10" fill="#e6b800" />
                                    <rect x="112" y="260" width="56" height="26" rx="8" fill="#d4a800" />
                                    <rect x="92" y="278" width="22" height="15" rx="7" fill="#e6b800" />
                                    <rect x="166" y="278" width="22" height="15" rx="7" fill="#e6b800" />
                                    <g id="gRShoulder-login">
                                        <rect x="192" y="206" width="28" height="50" rx="14" fill="#f5c400" />
                                        <g id="gRElbow-login">
                                            <rect x="194" y="253" width="24" height="44" rx="12" fill="#f5c400" />
                                            <ellipse cx="206" cy="303" rx="13" ry="11" fill="url(#skinG-login)" />
                                            <g transform="translate(226,272) rotate(-10)">
                                                <rect x="-18" y="-28" width="36" height="52" rx="6" fill="#4c1d95" />
                                                <rect x="-16" y="-26" width="32" height="48" rx="5" fill="#6d28d9" />
                                                <rect x="-16" y="-26" width="5" height="48" rx="2" fill="#5b21b6" />
                                                <circle cx="0" cy="-12" r="4" fill="#fbbf24" />
                                                <circle cx="8" cy="-4" r="3" fill="#fbbf24" />
                                                <circle cx="-8" cy="-4" r="3" fill="#fbbf24" />
                                                <path d="M-5 12 Q0 19 5 12" stroke="#f472b6" strokeWidth="2" fill="none" strokeLinecap="round" />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="gLHip-login">
                                        <rect x="104" y="302" width="32" height="70" rx="12" fill="#1c1c2e" />
                                        <g id="gLKnee-login">
                                            <ellipse cx="116" cy="378" rx="30" ry="13" fill="#3b82f6" />
                                            <ellipse cx="113" cy="376" rx="22" ry="9" fill="#fb7185" />
                                            <rect x="87" y="380" width="58" height="9" rx="4" fill="#f0f0f0" />
                                            <rect x="91" y="371" width="16" height="9" rx="4" fill="#93c5fd" />
                                        </g>
                                    </g>
                                    <g id="gRHip-login">
                                        <rect x="144" y="302" width="32" height="68" rx="12" fill="#141420" />
                                        <g id="gRKnee-login">
                                            <ellipse cx="163" cy="376" rx="30" ry="13" fill="#fb7185" />
                                            <ellipse cx="166" cy="374" rx="22" ry="9" fill="#a78bfa" />
                                            <rect x="134" y="378" width="58" height="9" rx="4" fill="#f0f0f0" />
                                            <rect x="148" y="369" width="16" height="9" rx="4" fill="#c4b5fd" />
                                        </g>
                                    </g>
                                    <rect x="127" y="190" width="26" height="18" rx="8" fill="#2a1508" />
                                    <g id="gHead-login">
                                        <ellipse cx="140" cy="152" rx="52" ry="54" fill="url(#skinG-login)" />
                                        <ellipse cx="140" cy="108" rx="58" ry="15" fill="#111" />
                                        <rect x="84" y="99" width="112" height="26" rx="11" fill="#181818" />
                                        <rect x="84" y="99" width="112" height="13" rx="6" fill="#1f1f1f" />
                                        <rect x="122" y="100" width="36" height="10" rx="4" fill="#ff6b35" />
                                        <rect x="124" y="102" width="32" height="6" rx="3" fill="#ff8c57" />
                                        <path d="M180 118 Q206 120 208 129 Q205 133 180 131 Z" fill="#0d0d0d" />
                                        <path d="M92 146 Q88 106 105 94" stroke="#e0e0e0" strokeWidth="7" fill="none" strokeLinecap="round" />
                                        <path d="M188 146 Q192 106 175 94" stroke="#e0e0e0" strokeWidth="7" fill="none" strokeLinecap="round" />
                                        <ellipse cx="91" cy="148" rx="15" ry="17" fill="#d4d4d4" />
                                        <ellipse cx="91" cy="148" rx="11" ry="13" fill="#ff6b35" />
                                        <ellipse cx="91" cy="148" rx="6" ry="7" fill="#b83200" />
                                        <ellipse cx="189" cy="148" rx="15" ry="17" fill="#d4d4d4" />
                                        <ellipse cx="189" cy="148" rx="11" ry="13" fill="#ff6b35" />
                                        <ellipse cx="189" cy="148" rx="6" ry="7" fill="#b83200" />
                                        <rect x="97" y="150" width="37" height="22" rx="8" fill="#7c3aed" opacity=".9" />
                                        <rect x="99" y="152" width="33" height="18" rx="6" fill="#a78bfa" opacity=".5" />
                                        <rect x="146" y="150" width="37" height="22" rx="8" fill="#0891b2" opacity=".9" />
                                        <rect x="148" y="152" width="33" height="18" rx="6" fill="#67e8f9" opacity=".5" />
                                        <rect x="134" y="158" width="12" height="4" rx="2" fill="#888" />
                                        <line x1="97" y1="160" x2="80" y2="164" stroke="#777" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="183" y1="160" x2="200" y2="164" stroke="#777" strokeWidth="2.5" strokeLinecap="round" />
                                        <circle cx="116" cy="161" r="8" fill="#0a0604" />
                                        <circle cx="164" cy="161" r="8" fill="#0a0604" />
                                        <circle id="el-login" cx="117" cy="160" r="4" fill="#fff" />
                                        <circle id="er-login" cx="165" cy="160" r="4" fill="#fff" />
                                        <circle cx="119" cy="158" r="1.5" fill="#fff" opacity=".6" />
                                        <circle cx="167" cy="158" r="1.5" fill="#fff" opacity=".6" />
                                        <ellipse cx="140" cy="175" rx="5" ry="3" fill="#1a0a02" />
                                        <path id="smile-login" d="M125 184 Q140 198 155 184" stroke="#f5c400" strokeWidth="3" fill="none" strokeLinecap="round" />
                                        <ellipse cx="104" cy="177" rx="10" ry="6" fill="#e05050" opacity=".18" />
                                        <ellipse cx="176" cy="177" rx="10" ry="6" fill="#e05050" opacity=".18" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="auth-right">
                <div className="auth-right-header">
                    <h2>Welcome back</h2>
                    <p>Enter your session to continue managing your digital assets with ease.</p>
                </div>
                <div className="social-buttons">
                    <button className="social-btn">
                        <GoogleIcon />
                        Google
                    </button>
                    <button className="social-btn">
                        <GitHubIcon />
                        GitHub
                    </button>
                </div>

                <div className="divider">Or</div>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-wrapper">
                            <input type="email" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-label-row">
                            <label>Password</label>
                            <a href="/forgot" className="forgot-link">Forgot Password?</a>
                        </div>
                        <div className="input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </div>

                    <div className="remember-row">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                        />
                        <label htmlFor="remember">Keep me logged in</label>
                    </div>

                    <button type="submit" className="submit-btn" onClick={() => (window.location.href = '/admin')}>Sign In</button>
                </form>

                <p className="auth-footer">
                    Don't have an account? <Link to="/">Sign up</Link>
                </p>
            </div>
            <div className="cursor-char" id="cur-login"></div>
        </div></>
    );
}

export default Login;