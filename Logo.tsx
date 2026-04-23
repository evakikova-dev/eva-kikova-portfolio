export default function Logo() {
  const evaLetters = ["E", "v", "a"];
  const kikovaLetters = ["K", "I", "K", "O", "V", "A"];

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const letters = Array.from(e.currentTarget.querySelectorAll('.logo-letter'));
    
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('animate-logo-lift');
        setTimeout(() => {
          letter.classList.remove('animate-logo-lift');
        }, 600);
      }, index * 50);
    });
  };

  return (
    <div 
      className="kinetic-logo group cursor-pointer" 
      data-testid="logo-kinetic"
      onMouseEnter={handleMouseEnter}
    >
      <span className="logo-eva" data-testid="logo-eva">
        {evaLetters.map((letter, index) => (
          <span
            key={`eva-${index}`}
            className="logo-letter"
            style={{ "--letter-index": index } as React.CSSProperties}
            data-testid={`logo-letter-eva-${index}`}
          >
            {letter}
          </span>
        ))}
      </span>
      <span className="logo-spacer"> </span>
      <span className="logo-kikova" data-testid="logo-kikova">
        {kikovaLetters.map((letter, index) => (
          <span
            key={`kikova-${index}`}
            className="logo-letter"
            style={{ "--letter-index": index + 3 } as React.CSSProperties}
            data-testid={`logo-letter-kikova-${index}`}
          >
            {letter}
          </span>
        ))}
      </span>
    </div>
  );
}
