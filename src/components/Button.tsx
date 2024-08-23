type ButtonProps = {
  variant: string;
  text: string;
}

export function Button({variant, text}: ButtonProps) {
  return (
    <button
      type="button"
      className={`bg-${variant}`}
    >
      {text}
    </button>
  )
}