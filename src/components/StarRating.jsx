import { Star } from "lucide-react";

export function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={14} className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"} />
      ))}
    </div>
  );
}
