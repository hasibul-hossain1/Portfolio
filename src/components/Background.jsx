const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Background animated diagonal lines */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] animate-[scroll-lines_30s_linear_infinite] z-0" />

      {/* Gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 rounded-full blur-[100px] opacity-20 animate-pulse" />

      {/* Optional: overlay soft grain */}
      {/* <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" /> */}
    </div>
  );
};

export default Background;
