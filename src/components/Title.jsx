function Title({ children }) {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-slate-100 font-bold text-center my-4">
      {children}
    </h1>
  );
}

export default Title;
