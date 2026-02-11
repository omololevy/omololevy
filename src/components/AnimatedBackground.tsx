"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  angle: number;
  angleSpeed: number;
  amplitude: number;
}

interface TechSymbol {
  x: number;
  y: number;
  dx: number;
  dy: number;
  text: string;
  color: string;
  size: number;
  glowPhase: number;
  glowSpeed: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let techSymbols: TechSymbol[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;
    let isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const lightColors = [
      '#0891b2', // cyan-600
      '#06b6d4', // cyan-500
      '#22d3ee', // cyan-400
      '#9333ea', // purple-600
      '#a855f7', // purple-500
      '#c084fc', // purple-400
    ];

    const darkColors = [
      '#22d3ee', // cyan-400
      '#67e8f9', // cyan-300
      '#c084fc', // purple-400
      '#d8b4fe', // purple-300
    ];

    const techTexts = ['</>', '{ }', '0', '1', '#', '=>', '()', '&&', '||', '//', '[]', '::'];

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const createParticles = () => {
      particles = [];
      const colors = isDark ? darkColors : lightColors;
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 25000);

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.02,
          amplitude: Math.random() * 50 + 20
        });
      }
    };

    const createTechSymbols = () => {
      techSymbols = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 40000);

      for (let i = 0; i < count; i++) {
        techSymbols.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
          text: techTexts[Math.floor(Math.random() * techTexts.length)],
          color: darkColors[Math.floor(Math.random() * darkColors.length)],
          size: Math.random() * 10 + 12,
          glowPhase: Math.random() * Math.PI * 2,
          glowSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const drawCurvedPath = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      color: string,
      alpha: number
    ) => {
      const controlX = (startX + endX) / 2 - (endY - startY) * 0.3;
      const controlY = (startY + endY) / 2 + (endX - startX) * 0.3;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      ctx.strokeStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawLightMode = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.angle += particle.angleSpeed;
        const waveFactor = Math.sin(particle.angle) * particle.amplitude;

        ctx.beginPath();
        ctx.arc(
          particle.x + waveFactor * 0.2,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `${particle.color}88`;
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          particle.dx += dx * 0.001;
          particle.dy += dy * 0.001;
        }

        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
      });

      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.5;
            drawCurvedPath(
              particle1.x,
              particle1.y,
              particle2.x,
              particle2.y,
              particle1.color,
              alpha
            );
          }
        });
      });
    };

    const drawDarkMode = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      techSymbols.forEach((symbol) => {
        symbol.glowPhase += symbol.glowSpeed;
        const glowIntensity = 0.4 + Math.sin(symbol.glowPhase) * 0.3;

        ctx.save();
        ctx.font = `${symbol.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Glow effect
        ctx.shadowColor = symbol.color;
        ctx.shadowBlur = 15 * glowIntensity;
        ctx.fillStyle = `${symbol.color}${Math.floor(glowIntensity * 200).toString(16).padStart(2, '0')}`;
        ctx.fillText(symbol.text, symbol.x, symbol.y);

        ctx.restore();

        // Update position
        symbol.x += symbol.dx;
        symbol.y += symbol.dy;

        // Mouse interaction
        const dx = mouseX - symbol.x;
        const dy = mouseY - symbol.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          symbol.dx += dx * 0.0005;
          symbol.dy += dy * 0.0005;
        }

        // Dampen velocity
        symbol.dx *= 0.999;
        symbol.dy *= 0.999;

        // Wrap around
        if (symbol.x < -20) symbol.x = window.innerWidth + 20;
        if (symbol.x > window.innerWidth + 20) symbol.x = -20;
        if (symbol.y < -20) symbol.y = window.innerHeight + 20;
        if (symbol.y > window.innerHeight + 20) symbol.y = -20;
      });

      // Draw circuit-like connections
      techSymbols.forEach((sym1, i) => {
        techSymbols.slice(i + 1).forEach(sym2 => {
          const dx = sym1.x - sym2.x;
          const dy = sym1.y - sym2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const alpha = (1 - distance / 180) * 0.3;
            ctx.save();
            ctx.beginPath();
            // Circuit-style: horizontal then vertical line
            const midX = sym1.x + (sym2.x - sym1.x) * 0.5;
            ctx.moveTo(sym1.x, sym1.y);
            ctx.lineTo(midX, sym1.y);
            ctx.lineTo(midX, sym2.y);
            ctx.lineTo(sym2.x, sym2.y);
            ctx.strokeStyle = `${sym1.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.shadowColor = sym1.color;
            ctx.shadowBlur = 5;
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    const animate = () => {
      if (isDark) {
        drawDarkMode();
      } else {
        drawLightMode();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleThemeChange = () => {
      isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        createTechSymbols();
      } else {
        createParticles();
      }
    };

    const handleResize = () => {
      resizeCanvas();
      if (isDark) {
        createTechSymbols();
      } else {
        createParticles();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('theme-change', handleThemeChange);

    resizeCanvas();
    if (isDark) {
      createTechSymbols();
    } else {
      createParticles();
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('theme-change', handleThemeChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
