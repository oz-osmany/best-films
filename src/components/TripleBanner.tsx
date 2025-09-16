import { Result } from "@/types/type";
import { useEffect, useState } from "react";
 interface ImageProps {
    images:Result[];
    intervalMs: number;
 }

 const TripleBanner = ({ images, intervalMs = 5000 }:ImageProps)=> {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length <= 3) return; // nichts rotieren, wenn <=3
    const id = setInterval(() => setI(prev => (prev + 3) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  const visible = images.length
    ? [images[i % images.length], images[(i + 1) % images.length], images[(i + 2) % images.length]]
    : [];

  return (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, 1fr)" }}>
      {visible.map((src, idx) => (
        <div key={idx} style={{ aspectRatio: "16/9", overflow: "hidden", borderRadius: 12 }}>
          <img src={`https://media.themoviedb.org/t/p/w300_and_h450_multi_faces/${src.backdrop_path}`} alt={`banner-${idx}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}
export default TripleBanner