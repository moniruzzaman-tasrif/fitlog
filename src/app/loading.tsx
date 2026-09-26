export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0b0e14] text-white">
      <div className="w-12 h-12 border-4 border-[#ccff00] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400 text-sm font-medium tracking-wide uppercase">
        Loading Workouts...
      </p>
    </div>
  );
}
