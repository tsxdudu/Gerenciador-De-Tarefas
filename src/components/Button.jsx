function Button(props) {
  return (
    <button 
      {...props} 
      className="bg-emerald-900 p-2 rounded-md text-white w-full sm:p-3 md:p-4"
    >
      {props.children}
    </button>
  );
}

export default Button;
