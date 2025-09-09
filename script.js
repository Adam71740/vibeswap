
  function handleClick() {
  alert("Tack för ditt intresse! Mer information kommer snart.");
}

// dark mode, since my partners code didint have a dark mode.
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Animate hero thing(too lazy to tyope the exact type)
const hero = document.querySelector('.animated-hero');
const text = hero.textContent;
hero.textContent = '';
for(let i=0;i<text.length;i++){
  const span = document.createElement('span');
  span.textContent = text[i];
  span.style.display = 'inline-block';
  span.style.opacity = 0;
  span.style.transform = 'translateY(20px)';
  hero.appendChild(span);
  setTimeout(()=>{
      span.style.transition = 'all 0.6s ease';
      span.style.opacity = 1;
      span.style.transform = 'translateY(0)';
  }, i*50);
}
