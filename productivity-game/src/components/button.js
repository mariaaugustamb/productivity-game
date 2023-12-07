export default function Button({label}) {
    return (
      <div onClick={handleClick} class = "p-2 pl-8 pr-8 mt-8 rounded-lg font-medium text-sky-900 bg-sky-400 hover:bg-sky-600">
        {label}
      </div>
    )
  }

  function handleClick(){
    console.log("Button clicked");
  }