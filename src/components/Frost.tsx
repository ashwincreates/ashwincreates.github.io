function Frost() {
  return (
    <div className="fixed flex gap-[120px] top-[50%] left-[50%]" style={{transform: 'translateX(-50%) translateY(-50%) translate3d(0,0,0) rotate(-45deg)'}}>
      <div className="h-[240px] w-[240px] p-10 bg-blue-500 blur-[480px] rounded-full" />
      <div className="h-[240px] w-[240px] p-10 bg-green-500 blur-[480px] rounded-full" />
    </div>
  );
}

export default Frost;
