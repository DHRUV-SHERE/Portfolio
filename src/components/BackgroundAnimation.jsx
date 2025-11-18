import { useEffect, useRef, useState } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      return window.innerWidth < 768; // 768px is typical md breakpoint
    };

    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);

    // If mobile, don't initialize the animation
    if (isMobile) {
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Reduced particle count for better performance
    const particleCount = 60;
    const colors = ['#00E5FF', '#7A00FF', '#00FFF0'];

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5, // Smaller particles
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationFrameId;

    const drawParticles = () => {
      // Check again if mobile during animation
      if (isMobile) {
        cancelAnimationFrame(animationFrameId);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check with bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.fill();

        // Draw connections (reduced for performance)
        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `${particle.color}22`; // More transparent
            ctx.lineWidth = 0.3;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Start animation only if not mobile
    if (!isMobile) {
      drawParticles();
    }

    const handleResizeComplete = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);
      
      if (!mobile) {
        setCanvasSize();
        // Restart animation if resized to desktop
        if (!animationFrameId) {
          drawParticles();
        }
      } else {
        // Stop animation if resized to mobile
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    };

    window.addEventListener('resize', handleResizeComplete);

    return () => {
      window.removeEventListener('resize', handleResizeComplete);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  // Don't render canvas on mobile at all
  if (isMobile) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.25 }} // Slightly reduced opacity
    />
  );
};

export default BackgroundAnimation;