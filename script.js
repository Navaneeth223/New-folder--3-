const form = document.getElementById('memoryForm');
const jarContent = document.querySelector('.jar .content');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Animate the jar filling
  gsap.to(jarContent, {
    height: '100%',
    duration: 2,
    ease: 'power2.inOut'
  });

  // TODO: Upload memory to backend or localStorage

  setTimeout(() => {
    alert('✅ Memory locked! Will open after your selected time.');
    form.reset();
    gsap.to(jarContent, { height: '0%', duration: 1 });
  }, 2500);
});

// Optionally: Implement voice recording functionality
