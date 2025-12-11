
import React, { useRef, useEffect } from 'react';
import { Content, ServiceItem } from '../types';

interface HeroProps {
  content: Content['hero'];
  categories: ServiceItem[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  content, 
  categories, 
  activeCategory, 
  onSelectCategory 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;
    
    // Mouse tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = width / 2;
    let targetY = height / 2;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Blob configuration
    const numPoints = 12;
    const baseRadius = Math.min(width, height) * 0.25; // Size relative to screen
    const points: { angle: number; r: number; noiseOffset: number }[] = [];

    // Initialize points circle
    for (let i = 0; i < numPoints; i++) {
      points.push({
        angle: (i / numPoints) * Math.PI * 2,
        r: baseRadius,
        noiseOffset: Math.random() * 1000
      });
    }

    // Simple spline function for smooth curves
    const spline = (points: {x: number, y: number}[], ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      const len = points.length;
      // Move to average of first and last
      const xc1 = (points[0].x + points[len - 1].x) / 2;
      const yc1 = (points[0].y + points[len - 1].y) / 2;
      ctx.moveTo(xc1, yc1);

      for (let i = 0; i < len - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      // Close loop
      ctx.quadraticCurveTo(points[len - 1].x, points[len - 1].y, xc1, yc1);
      ctx.closePath();
    };

    const animate = () => {
      time += 0.005; // speed

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Calculate blob points
      const blobPoints: {x: number, y: number}[] = [];
      
      // Center of blob floats slightly
      const cx = width / 2 + Math.sin(time * 0.5) * 50 + (mouseX - width/2) * 0.1;
      const cy = height / 2 + Math.cos(time * 0.6) * 50 + (mouseY - height/2) * 0.1;

      for (let i = 0; i < numPoints; i++) {
        const p = points[i];
        // Radius noise using simple sin/cos superposition for "irregularity"
        const noise = Math.sin(p.noiseOffset + time * 2) * 20 + 
                      Math.cos(p.noiseOffset * 0.5 + time * 1.5) * 15;
        
        // Interactive deformation: bulge towards mouse
        // (optional simple effect, keeping it subtle for now)
        
        const r = baseRadius + noise;
        const x = cx + Math.cos(p.angle + time * 0.1) * r;
        const y = cy + Math.sin(p.angle + time * 0.1) * r;
        blobPoints.push({ x, y });
      }

      // Draw the blob
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 1.2);
      // Vibrant Blue-Purple Gradient
      gradient.addColorStop(0, 'rgba(124, 58, 237, 0.2)');   // Violet center
      gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.15)'); // Blue mid
      gradient.addColorStop(0.8, 'rgba(139, 92, 246, 0.05)'); // Light violet edge
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');     // Transparent outer

      ctx.fillStyle = gradient;
      
      // Add a blur filter for that "diffuse" look
      // Note: filter can be expensive, but okay for single blob
      ctx.filter = 'blur(40px)'; 
      
      spline(blobPoints, ctx);
      ctx.fill();
      
      ctx.filter = 'none';

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full">
      {/* 
        Global Fixed Background Canvas 
        - inset-0 covers viewport
        - -z-10 puts it behind content
        - pointer-events-none lets clicks pass through
      */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-white">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      {/* Spacer to push content down, maintaining the layout balance since text was removed */}
      <div className="w-full h-[60vh] flex items-end px-6 md:px-12 pb-12">
        
        {/* Filter Tags - Positioned at bottom right of the spacer area */}
        <div className="w-full flex flex-wrap gap-x-6 gap-y-3 md:gap-8 justify-start md:justify-end">
           <button 
             onClick={() => onSelectCategory(null)}
             className={`text-sm tracking-wide transition-colors duration-300 ${activeCategory === null ? 'text-black font-medium' : 'text-gray-400 hover:text-black'}`}
           >
             {content.allLabel}
           </button>
           {categories.map((item) => (
             <button
               key={item.id}
               onClick={() => onSelectCategory(item.title)}
               className={`text-sm tracking-wide transition-colors duration-300 ${activeCategory === item.title ? 'text-black font-medium' : 'text-gray-400 hover:text-black'}`}
             >
               {item.title}
             </button>
           ))}
        </div>
      </div>
    </section>
  );
};
